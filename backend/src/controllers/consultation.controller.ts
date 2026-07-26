import { Request, Response } from 'express';
import { ConsultationService } from '../services/consultation.service.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export class ConsultationController {
  private service: ConsultationService;

  constructor() {
    this.service = new ConsultationService();
  }

  createConsultation = asyncHandler(async (req: Request, res: Response) => {
    const consultation = await this.service.createConsultation(req.body);
    return ApiResponse.created(
      res,
      'Consultation request submitted successfully',
      consultation
    );
  });

  getConsultations = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.service.getConsultations(req.query as any);
    return ApiResponse.success(
      res,
      200,
      'Consultation requests retrieved successfully',
      result.items,
      result.meta
    );
  });

  getConsultationById = asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const consultation = await this.service.getConsultationById(id);
    return ApiResponse.success(
      res,
      200,
      'Consultation request details retrieved successfully',
      consultation
    );
  });

  updateConsultation = asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const consultation = await this.service.updateConsultation(id, req.body);
    return ApiResponse.success(
      res,
      200,
      'Consultation request updated successfully',
      consultation
    );
  });
}
