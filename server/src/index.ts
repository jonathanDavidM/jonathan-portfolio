import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import contactRoutes from './routes/contact.routes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { logger } from './utils/logger.js';
import { validateEnv } from './utils/envValidator.js';

// ES module path resolution
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Determine .env file path
const envPath = join(__dirname, '../.env');
logger.info('Loading environment variables', { envPath });

// Load environment variables
const result = dotenv.config({ path: envPath });

if (result.error) {
  logger.error('Failed to load .env file', {
    error: result.error.message,
    path: envPath,
  });
} else {
  logger.info('Environment file loaded successfully', {
    path: envPath,
  });
}

// Log environment status (without showing passwords)
logger.info('Environment variables status', {
  PORT: process.env.PORT || 'not set (using default: 3001)',
  FRONTEND_URL: process.env.FRONTEND_URL || 'not set (using default)',
  EMAIL_USER: process.env.EMAIL_USER ? '✅ Set' : '❌ Not set',
  EMAIL_PASS: process.env.EMAIL_PASS ? '✅ Set (hidden)' : '❌ Not set',
  NODE_ENV: process.env.NODE_ENV || 'not set',
});

// Validate environment variables
validateEnv();

const app: Express = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
  })
);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.path}`, {
    ip: req.ip,
    userAgent: req.get('user-agent'),
  });
  next();
});

// API routes
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    emailConfigured: !!(process.env.EMAIL_USER && process.env.EMAIL_PASS),
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.path} not found`,
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

// Start server
const server = app.listen(PORT, () => {
  logger.info(`Server started`, {
    port: PORT,
    environment: process.env.NODE_ENV || 'development',
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully');
  server.close(() => {
    logger.info('Process terminated');
    process.exit(0);
  });
});
