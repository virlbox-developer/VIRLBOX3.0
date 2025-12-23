import { Request, Response } from 'express';
import { analyticsService } from '../services/analytics.service';
import { logger } from '../logger/index';

export class AnalyticsController {
  async getAnalytics(req: Request, res: Response) {
    try {
      const { timeRange = '7d' } = req.query;
      const report = await analyticsService.generateReport(
        (req as any).userId,
        timeRange as string
      );
      return res.json(report);
    } catch (error) {
      logger.error('Analytics fetch failed', error);
      return res.status(500).json({ error: 'Fetch failed' });
    }
  }

  async getMetrics(req: Request, res: Response) {
    try {
      const { platform } = req.params;
      const { days = 30 } = req.query;
      const metrics = analyticsService.getMetrics((req as any).userId, parseInt(days as string));
      return res.json(metrics);
    } catch (error) {
      return res.status(500).json({ error: 'Fetch failed' });
    }
  }

  async recordMetrics(req: Request, res: Response) {
    try {
      const { platform, followers, engagement } = req.body;
      analyticsService.recordMetrics({
        userId: (req as any).userId,
        platform,
        followers,
        engagement,
        reach: followers * (engagement / 100),
        impressions: followers * 2,
        timestamp: new Date(),
      });
      return res.status(201).json({ message: 'Recorded' });
    } catch (error) {
      return res.status(500).json({ error: 'Record failed' });
    }
  }
}

export const analyticsController = new AnalyticsController();
