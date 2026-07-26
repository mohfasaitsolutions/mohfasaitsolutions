"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryConsultationSchema = exports.consultationIdParamSchema = exports.updateConsultationSchema = exports.createConsultationSchema = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
exports.createConsultationSchema = zod_1.z.object({
    fullName: zod_1.z.string().trim().min(2, 'Full name must be at least 2 characters'),
    companyName: zod_1.z.string().trim().optional(),
    email: zod_1.z.string().trim().email('Invalid email address format'),
    phone: zod_1.z
        .string()
        .trim()
        .regex(/^[\+\d\s\-\(\)]{7,20}$/, 'Invalid phone number format')
        .optional()
        .or(zod_1.z.literal('')),
    country: zod_1.z.string().trim().optional(),
    industry: zod_1.z.nativeEnum(client_1.Industry, {
        errorMap: () => ({ message: 'Invalid industry enum value' }),
    }),
    companySize: zod_1.z.nativeEnum(client_1.CompanySize).optional(),
    services: zod_1.z
        .array(zod_1.z.string().trim().min(1, 'Service item cannot be empty'))
        .min(1, 'At least one service must be selected'),
    projectTitle: zod_1.z.string().trim().optional(),
    projectDescription: zod_1.z
        .string()
        .trim()
        .min(10, 'Project description must be at least 10 characters long'),
    budget: zod_1.z.nativeEnum(client_1.Budget).optional(),
    expectedStart: zod_1.z.nativeEnum(client_1.ExpectedStart).optional(),
    preferredContact: zod_1.z.nativeEnum(client_1.PreferredContact).optional(),
    referralSource: zod_1.z.nativeEnum(client_1.ReferralSource).optional(),
    meetingRequired: zod_1.z.boolean().optional().default(true),
    ndaRequired: zod_1.z.boolean().optional().default(false),
    notes: zod_1.z.string().trim().optional(),
    files: zod_1.z
        .array(zod_1.z.object({
        fileName: zod_1.z.string().min(1, 'File name is required'),
        fileUrl: zod_1.z.string().url('Invalid file URL'),
        mimeType: zod_1.z.string().min(1, 'MIME type is required'),
    }))
        .optional(),
});
exports.updateConsultationSchema = zod_1.z.object({
    status: zod_1.z.nativeEnum(client_1.LeadStatus).optional(),
    priority: zod_1.z.nativeEnum(client_1.Priority).optional(),
    notes: zod_1.z.string().trim().optional(),
});
exports.consultationIdParamSchema = zod_1.z.object({
    id: zod_1.z.string().uuid('Invalid consultation UUID format'),
});
exports.queryConsultationSchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().positive().default(1),
    limit: zod_1.z.coerce.number().int().positive().max(100).default(10),
    search: zod_1.z.string().trim().optional(),
    status: zod_1.z.nativeEnum(client_1.LeadStatus).optional(),
    priority: zod_1.z.nativeEnum(client_1.Priority).optional(),
    industry: zod_1.z.nativeEnum(client_1.Industry).optional(),
    sortBy: zod_1.z.enum(['createdAt', 'updatedAt', 'fullName']).default('createdAt'),
    sortOrder: zod_1.z.enum(['asc', 'desc']).default('desc'),
});
