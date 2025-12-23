import { Request, Response } from 'express';
import { contentService } from '../services/content.service';
import { logger } from '../logger/index';

export class ContentController {
  async generate(req: Request, res: Response) {
    try {
      const { topic, platform, tone, length } = req.body;
      const content = await contentService.generateContent({
        topic,
        platform,
        tone,
        length,
        userId: (req as any).userId,
      });
      return res.status(201).json(content);
    } catch (error) {
      logger.error('Content generation failed', error);
      return res.status(500).json({ error: 'Generation failed' });
    }
  }

  async publish(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { platforms } = req.body;
      const content = await contentService.publishContent(id, platforms);
      return res.json(content);
    } catch (error) {
      logger.error('Publishing failed', error);
      return res.status(500).json({ error: 'Publishing failed' });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const content = await contentService.getContent(id);
      if (!content) return res.status(404).json({ error: 'Not found' });
      return res.json(content);
    } catch (error) {
      return res.status(500).json({ error: 'Fetch failed' });
    }
  }

  async list(req: Request, res: Response) {
    try {
      const contents = await contentService.listContents((req as any).userId);
      return res.json(contents);
    } catch (error) {
      return res.status(500).json({ error: 'List failed' });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await contentService.deleteContent(id);
      return res.json({ message: 'Deleted' });
    } catch (error) {
      return res.status(500).json({ error: 'Delete failed' });
    }
  }
}

export const contentController = new ContentController();
