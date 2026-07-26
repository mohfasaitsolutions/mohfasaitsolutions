"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consultation_controller_js_1 = require("../controllers/consultation.controller.js");
const validate_middleware_js_1 = require("../middlewares/validate.middleware.js");
const consultation_validator_js_1 = require("../validators/consultation.validator.js");
const router = (0, express_1.Router)();
const controller = new consultation_controller_js_1.ConsultationController();
router
    .route('/')
    .post((0, validate_middleware_js_1.validateRequest)({ body: consultation_validator_js_1.createConsultationSchema }), controller.createConsultation)
    .get((0, validate_middleware_js_1.validateRequest)({ query: consultation_validator_js_1.queryConsultationSchema }), controller.getConsultations);
router
    .route('/:id')
    .get((0, validate_middleware_js_1.validateRequest)({ params: consultation_validator_js_1.consultationIdParamSchema }), controller.getConsultationById)
    .patch((0, validate_middleware_js_1.validateRequest)({
    params: consultation_validator_js_1.consultationIdParamSchema,
    body: consultation_validator_js_1.updateConsultationSchema,
}), controller.updateConsultation);
exports.default = router;
