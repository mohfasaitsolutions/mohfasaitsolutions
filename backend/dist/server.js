"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("./app.js"));
const env_js_1 = require("./config/env.js");
const prisma_js_1 = require("./config/prisma.js");
const PORT = env_js_1.env.PORT;
const server = app_js_1.default.listen(PORT, () => {
    console.log(`🚀 MOHFASA Backend API running on http://localhost:${PORT}`);
    console.log(`📡 Environment: ${env_js_1.env.NODE_ENV}`);
});
// Graceful Shutdown
const handleShutdown = async (signal) => {
    console.log(`\n⚠️ Received ${signal}. Shutting down gracefully...`);
    server.close(async () => {
        console.log('🔒 HTTP Server closed.');
        await prisma_js_1.prisma.$disconnect();
        console.log('💾 Database connection closed.');
        process.exit(0);
    });
};
process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));
