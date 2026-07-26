import { Response } from 'express';

export interface ApiResponsePayload<T> {
  success: boolean;
  message: string;
  data?: T;
  meta?: any;
}

export class ApiResponse {
  static success<T>(
    res: Response,
    statusCode: number,
    message: string,
    data?: T,
    meta?: any
  ) {
    return res.status(statusCode).json({
      success: true,
      message,
      ...(data !== undefined && { data }),
      ...(meta !== undefined && { meta }),
    });
  }

  static created<T>(res: Response, message: string, data?: T) {
    return ApiResponse.success(res, 201, message, data);
  }
}
