import { prisma } from '../config/prisma.js';
import {
  CreateConsultationInput,
  UpdateConsultationInput,
  ConsultationQueryOptions,
} from '../types/consultation.types.js';
import { LeadStatus, Priority, Prisma } from '@prisma/client';

export class ConsultationRepository {
  private formatConsultation(item: any) {
    if (!item) return null;
    let services = item.services;
    if (typeof item.services === 'string') {
      try {
        services = JSON.parse(item.services);
      } catch {
        services = [item.services];
      }
    }
    return {
      ...item,
      services,
    };
  }

  async create(data: CreateConsultationInput) {
    const { files, services, ...consultationData } = data;

    const created = await prisma.consultationRequest.create({
      data: {
        ...consultationData,
        services: JSON.stringify(services || []),
        status: LeadStatus.NEW,
        priority: Priority.MEDIUM,
        meetingRequired: consultationData.meetingRequired ?? true,
        ndaRequired: consultationData.ndaRequired ?? false,
        // Automatically create initial activity log
        activities: {
          create: {
            activity: 'Lead Created',
            createdBy: 'SYSTEM',
          },
        },
        // Optionally attach uploaded files
        ...(files && files.length > 0 && {
          files: {
            createMany: {
              data: files,
            },
          },
        }),
      },
      include: {
        files: true,
        activities: true,
      },
    });

    return this.formatConsultation(created);
  }

  async findMany(options: ConsultationQueryOptions) {
    const page = options.page || 1;
    const limit = options.limit || 10;
    const skip = (page - 1) * limit;

    const where: Prisma.ConsultationRequestWhereInput = {};

    if (options.status) {
      where.status = options.status;
    }
    if (options.priority) {
      where.priority = options.priority;
    }
    if (options.industry) {
      where.industry = options.industry;
    }
    if (options.search) {
      const search = options.search.trim();
      where.OR = [
        { fullName: { contains: search } },
        { email: { contains: search } },
        { companyName: { contains: search } },
        { projectDescription: { contains: search } },
      ];
    }

    const [items, total] = await Promise.all([
      prisma.consultationRequest.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          [options.sortBy || 'createdAt']: options.sortOrder || 'desc',
        },
        include: {
          files: true,
          activities: {
            orderBy: { createdAt: 'desc' },
            take: 3,
          },
        },
      }),
      prisma.consultationRequest.count({ where }),
    ]);

    return {
      items: items.map((item) => this.formatConsultation(item)),
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findById(id: string) {
    const consultation = await prisma.consultationRequest.findUnique({
      where: { id },
      include: {
        files: {
          orderBy: { createdAt: 'desc' },
        },
        activities: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    return this.formatConsultation(consultation);
  }

  async update(id: string, data: UpdateConsultationInput) {
    const activitiesToCreate: Prisma.ConsultationActivityCreateWithoutConsultationInput[] = [];

    if (data.status) {
      activitiesToCreate.push({
        activity: `Status updated to ${data.status}`,
        createdBy: 'ADMIN',
      });
    }

    if (data.priority) {
      activitiesToCreate.push({
        activity: `Priority updated to ${data.priority}`,
        createdBy: 'ADMIN',
      });
    }

    const updated = await prisma.consultationRequest.update({
      where: { id },
      data: {
        ...data,
        ...(activitiesToCreate.length > 0 && {
          activities: {
            create: activitiesToCreate,
          },
        }),
      },
      include: {
        files: true,
        activities: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    return this.formatConsultation(updated);
  }
}
