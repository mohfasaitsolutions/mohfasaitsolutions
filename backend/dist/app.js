"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const index_js_1 = __importDefault(require("./routes/index.js"));
const error_middleware_js_1 = require("./middlewares/error.middleware.js");
const env_js_1 = require("./config/env.js");
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)({
    origin: env_js_1.env.CLIENT_ORIGIN,
    credentials: true,
}));
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10mb' }));
if (env_js_1.env.NODE_ENV === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
// Health Check Endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
    });
});
// API Routes
app.use('/api', index_js_1.default);
// 404 & Global Error Handling
app.use(error_middleware_js_1.notFoundHandler);
app.use(error_middleware_js_1.errorHandler);
exports.default = app;
