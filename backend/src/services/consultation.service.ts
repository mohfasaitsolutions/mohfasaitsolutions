import { ConsultationRepository } from '../repositories/consultation.repository.js';
import {
  CreateConsultationInput,
  UpdateConsultationInput,
  ConsultationQueryOptions,
} from '../types/consultation.types.js';
import { ApiError } from '../utils/apiError.js';

export class ConsultationService {
  private repository: ConsultationRepository;

  constructor() {
    this.repository = new ConsultationRepository();
  }

  async createConsultation(input: CreateConsultationInput) {
    // Process business defaults
    const payload: CreateConsultationInput = {
      ...input,
      meetingRequired: input.meetingRequired ?? true,
      ndaRequired: input.ndaRequired ?? false,
    };

    return this.repository.create(payload);
  }

  async getConsultations(options: ConsultationQueryOptions) {
    return this.repository.findMany(options);
  }

  async getConsultationById(id: string) {
    const consultation = await this.repository.findById(id);
    if (!consultation) {
      throw ApiError.notFound(`Consultation request with ID '${id}' not found`);
    }
    return consultation;
  }

  async updateConsultation(id: string, input: UpdateConsultationInput) {
    // Check existence first
    await this.getConsultationById(id);
    return this.repository.update(id, input);
  }
}
