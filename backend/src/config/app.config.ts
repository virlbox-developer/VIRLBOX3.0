export const appConfig = {
  port: parseInt(process.env.PORT || '3000'),
  env: process.env.NODE_ENV || 'development',
  apiUrl: process.env.API_URL || 'http://localhost:3000',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
  corsOrigin: (process.env.CORS_ORIGIN || 'http://localhost:5173').split(','),
  rateLimitWindow: 15 * 60 * 1000,
  rateLimitMax: 100,
};
