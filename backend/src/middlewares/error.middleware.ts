import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import { ApiError } from '../utils/apiError.js';
import { env } from '../config/env.js';

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  next(ApiError.notFound(`Route not found: ${req.method} ${req.originalUrl}`));
};

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = err;

  // Handle Prisma Known Request Errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      const target = (err.meta?.target as string[])?.join(', ') || 'field';
      error = ApiError.badRequest(`Duplicate value for ${target}`);
    } else if (err.code === 'P2025') {
      error = ApiError.notFound('Record not found in database');
    } else {
      error = ApiError.badRequest(`Database error: ${err.message}`);
    }
  } else if (err instanceof Prisma.PrismaClientValidationError) {
    error = ApiError.badRequest('Invalid database query parameters');
  }

  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';
  const errors = error.errors || undefined;

  res.status(statusCode).json({
    success: false,
    message,
    ...(errors && { errors }),
    ...(env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
