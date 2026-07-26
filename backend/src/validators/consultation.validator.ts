import { z } from 'zod';
import {
  Industry,
  CompanySize,
  Budget,
  ExpectedStart,
  PreferredContact,
  ReferralSource,
  LeadStatus,
  Priority,
} from '@prisma/client';

export const createConsultationSchema = z.object({
  fullName: z.string().trim().min(2, 'Full name must be at least 2 characters'),
  companyName: z.string().trim().optional(),
  email: z.string().trim().email('Invalid email address format'),
  phone: z
    .string()
    .trim()
    .regex(/^[\+\d\s\-\(\)]{7,20}$/, 'Invalid phone number format')
    .optional()
    .or(z.literal('')),
  country: z.string().trim().optional(),
  industry: z.nativeEnum(Industry, {
    errorMap: () => ({ message: 'Invalid industry enum value' }),
  }),
  companySize: z.nativeEnum(CompanySize).optional(),
  services: z
    .array(z.string().trim().min(1, 'Service item cannot be empty'))
    .min(1, 'At least one service must be selected'),
  projectTitle: z.string().trim().optional(),
  projectDescription: z
    .string()
    .trim()
    .min(10, 'Project description must be at least 10 characters long'),
  budget: z.nativeEnum(Budget).optional(),
  expectedStart: z.nativeEnum(ExpectedStart).optional(),
  preferredContact: z.nativeEnum(PreferredContact).optional(),
  referralSource: z.nativeEnum(ReferralSource).optional(),
  meetingRequired: z.boolean().optional().default(true),
  ndaRequired: z.boolean().optional().default(false),
  notes: z.string().trim().optional(),
  files: z
    .array(
      z.object({
        fileName: z.string().min(1, 'File name is required'),
        fileUrl: z.string().url('Invalid file URL'),
        mimeType: z.string().min(1, 'MIME type is required'),
      })
    )
    .optional(),
});

export const updateConsultationSchema = z.object({
  status: z.nativeEnum(LeadStatus).optional(),
  priority: z.nativeEnum(Priority).optional(),
  notes: z.string().trim().optional(),
});

export const consultationIdParamSchema = z.object({
  id: z.string().uuid('Invalid consultation UUID format'),
});

export const queryConsultationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
  search: z.string().trim().optional(),
  status: z.nativeEnum(LeadStatus).optional(),
  priority: z.nativeEnum(Priority).optional(),
  industry: z.nativeEnum(Industry).optional(),
  sortBy: z.enum(['createdAt', 'updatedAt', 'fullName']).default('createdAt'),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
});
