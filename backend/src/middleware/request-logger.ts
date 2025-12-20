import { Request, Response, NextFunction } from 'express';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  const ip = req.ip || 'unknown';

  console.log(`[${timestamp}] ${method} ${url} - IP: ${ip}`);

  res.on('finish', () => {
    const statusCode = res.statusCode;
    const statusMessage = res.statusMessage;
    console.log(`[${timestamp}] Response: ${statusCode} ${statusMessage}`);
  });

  next();
};