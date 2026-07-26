import app from './app.js';
import { env } from './config/env.js';
import { prisma } from './config/prisma.js';

const PORT = env.PORT;

const server = app.listen(PORT, () => {
  console.log(`🚀 MOHFASA Backend API running on http://localhost:${PORT}`);
  console.log(`📡 Environment: ${env.NODE_ENV}`);
});

// Graceful Shutdown
const handleShutdown = async (signal: string) => {
  console.log(`\n⚠️ Received ${signal}. Shutting down gracefully...`);
  server.close(async () => {
    console.log('🔒 HTTP Server closed.');
    await prisma.$disconnect();
    console.log('💾 Database connection closed.');
    process.exit(0);
  });
};

process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));
