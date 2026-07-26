"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    static success(res, statusCode, message, data, meta) {
        return res.status(statusCode).json({
            success: true,
            message,
            ...(data !== undefined && { data }),
            ...(meta !== undefined && { meta }),
        });
    }
    static created(res, message, data) {
        return ApiResponse.success(res, 201, message, data);
    }
}
exports.ApiResponse = ApiResponse;
