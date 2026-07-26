"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultationController = void 0;
const consultation_service_js_1 = require("../services/consultation.service.js");
const apiResponse_js_1 = require("../utils/apiResponse.js");
const asyncHandler_js_1 = require("../utils/asyncHandler.js");
class ConsultationController {
    service;
    constructor() {
        this.service = new consultation_service_js_1.ConsultationService();
    }
    createConsultation = (0, asyncHandler_js_1.asyncHandler)(async (req, res) => {
        const consultation = await this.service.createConsultation(req.body);
        return apiResponse_js_1.ApiResponse.created(res, 'Consultation request submitted successfully', consultation);
    });
    getConsultations = (0, asyncHandler_js_1.asyncHandler)(async (req, res) => {
        const result = await this.service.getConsultations(req.query);
        return apiResponse_js_1.ApiResponse.success(res, 200, 'Consultation requests retrieved successfully', result.items, result.meta);
    });
    getConsultationById = (0, asyncHandler_js_1.asyncHandler)(async (req, res) => {
        const id = req.params.id;
        const consultation = await this.service.getConsultationById(id);
        return apiResponse_js_1.ApiResponse.success(res, 200, 'Consultation request details retrieved successfully', consultation);
    });
    updateConsultation = (0, asyncHandler_js_1.asyncHandler)(async (req, res) => {
        const id = req.params.id;
        const consultation = await this.service.updateConsultation(id, req.body);
        return apiResponse_js_1.ApiResponse.success(res, 200, 'Consultation request updated successfully', consultation);
    });
}
exports.ConsultationController = ConsultationController;
