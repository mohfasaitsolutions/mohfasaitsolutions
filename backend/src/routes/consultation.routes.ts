import { Router } from 'express';
import { ConsultationController } from '../controllers/consultation.controller.js';
import { validateRequest } from '../middlewares/validate.middleware.js';
import {
  createConsultationSchema,
  updateConsultationSchema,
  consultationIdParamSchema,
  queryConsultationSchema,
} from '../validators/consultation.validator.js';

const router = Router();
const controller = new ConsultationController();

router
  .route('/')
  .post(
    validateRequest({ body: createConsultationSchema }),
    controller.createConsultation
  )
  .get(
    validateRequest({ query: queryConsultationSchema }),
    controller.getConsultations
  );

router
  .route('/:id')
  .get(
    validateRequest({ params: consultationIdParamSchema }),
    controller.getConsultationById
  )
  .patch(
    validateRequest({
      params: consultationIdParamSchema,
      body: updateConsultationSchema,
    }),
    controller.updateConsultation
  );

export default router;
