"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFoundHandler = void 0;
const client_1 = require("@prisma/client");
const apiError_js_1 = require("../utils/apiError.js");
const env_js_1 = require("../config/env.js");
const notFoundHandler = (req, res, next) => {
    next(apiError_js_1.ApiError.notFound(`Route not found: ${req.method} ${req.originalUrl}`));
};
exports.notFoundHandler = notFoundHandler;
const errorHandler = (err, req, res, next) => {
    let error = err;
    // Handle Prisma Known Request Errors
    if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            const target = err.meta?.target?.join(', ') || 'field';
            error = apiError_js_1.ApiError.badRequest(`Duplicate value for ${target}`);
        }
        else if (err.code === 'P2025') {
            error = apiError_js_1.ApiError.notFound('Record not found in database');
        }
        else {
            error = apiError_js_1.ApiError.badRequest(`Database error: ${err.message}`);
        }
    }
    else if (err instanceof client_1.Prisma.PrismaClientValidationError) {
        error = apiError_js_1.ApiError.badRequest('Invalid database query parameters');
    }
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    const errors = error.errors || undefined;
    res.status(statusCode).json({
        success: false,
        message,
        ...(errors && { errors }),
        ...(env_js_1.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
};
exports.errorHandler = errorHandler;
