"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultationRepository = void 0;
const prisma_js_1 = require("../config/prisma.js");
const client_1 = require("@prisma/client");
class ConsultationRepository {
    async create(data) {
        const { files, ...consultationData } = data;
        return prisma_js_1.prisma.consultationRequest.create({
            data: {
                ...consultationData,
                status: client_1.LeadStatus.NEW,
                priority: client_1.Priority.MEDIUM,
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
    }
    async findMany(options) {
        const page = options.page || 1;
        const limit = options.limit || 10;
        const skip = (page - 1) * limit;
        const where = {};
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
                { fullName: { contains: search, mode: 'insensitive' } },
                { email: { contains: search, mode: 'insensitive' } },
                { companyName: { contains: search, mode: 'insensitive' } },
                { projectDescription: { contains: search, mode: 'insensitive' } },
            ];
        }
        const [items, total] = await Promise.all([
            prisma_js_1.prisma.consultationRequest.findMany({
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
            prisma_js_1.prisma.consultationRequest.count({ where }),
        ]);
        return {
            items,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findById(id) {
        return prisma_js_1.prisma.consultationRequest.findUnique({
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
    }
    async update(id, data) {
        // If status changed, create an activity record automatically
        const activitiesToCreate = [];
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
        return prisma_js_1.prisma.consultationRequest.update({
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
    }
}
exports.ConsultationRepository = ConsultationRepository;
