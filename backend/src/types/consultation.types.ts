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

export interface CreateConsultationInput {
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  country?: string;
  industry: Industry;
  companySize?: CompanySize;
  services: string[];
  projectTitle?: string;
  projectDescription: string;
  budget?: Budget;
  expectedStart?: ExpectedStart;
  preferredContact?: PreferredContact;
  referralSource?: ReferralSource;
  meetingRequired?: boolean;
  ndaRequired?: boolean;
  notes?: string;
  files?: Array<{
    fileName: string;
    fileUrl: string;
    mimeType: string;
  }>;
}

export interface UpdateConsultationInput {
  status?: LeadStatus;
  priority?: Priority;
  notes?: string;
}

export interface ConsultationQueryOptions {
  page?: number;
  limit?: number;
  search?: string;
  status?: LeadStatus;
  priority?: Priority;
  industry?: Industry;
  sortBy?: 'createdAt' | 'updatedAt' | 'fullName';
  sortOrder?: 'asc' | 'desc';
}
