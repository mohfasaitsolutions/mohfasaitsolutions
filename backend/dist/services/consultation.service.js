"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultationService = void 0;
const consultation_repository_js_1 = require("../repositories/consultation.repository.js");
const apiError_js_1 = require("../utils/apiError.js");
class ConsultationService {
    repository;
    constructor() {
        this.repository = new consultation_repository_js_1.ConsultationRepository();
    }
    async createConsultation(input) {
        // Process business defaults
        const payload = {
            ...input,
            meetingRequired: input.meetingRequired ?? true,
            ndaRequired: input.ndaRequired ?? false,
        };
        return this.repository.create(payload);
    }
    async getConsultations(options) {
        return this.repository.findMany(options);
    }
    async getConsultationById(id) {
        const consultation = await this.repository.findById(id);
        if (!consultation) {
            throw apiError_js_1.ApiError.notFound(`Consultation request with ID '${id}' not found`);
        }
        return consultation;
    }
    async updateConsultation(id, input) {
        // Check existence first
        await this.getConsultationById(id);
        return this.repository.update(id, input);
    }
}
exports.ConsultationService = ConsultationService;
