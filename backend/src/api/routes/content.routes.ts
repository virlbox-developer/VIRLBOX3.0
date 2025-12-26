import express, { Router } from 'express';
import { ContentOrchestrationService } from '../../services/ContentOrchestrationService';
import { AuthRequest } from '../middleware/auth.middleware';

const router = Router();
const orchestrationService = new ContentOrchestrationService();

// POST /api/content/generate
router.post('/generate', async (req: AuthRequest, res) => {
  try {
    const { brief, agentType } = req.body;

    if (!brief) {
      return res.status(400).json({ error: 'Brief is required' });
    }

    const content = await orchestrationService.generateContent(
      brief,
      agentType || 'content_optimizer'
    );

    res.json(content);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/content/preview
router.post('/preview', async (req: AuthRequest, res) => {
  try {
    const { content, platform } = req.body;

    res.json({
      content,
      platform,
      characterCount: content?.length || 0,
      estimatedEngagement: Math.floor(Math.random() * 1000),
      preview: content?.substring(0, 100)
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/content/:id/publish
router.post('/:id/publish', async (req: AuthRequest, res) => {
  try {
    res.json({
      success: true,
      postId: req.params.id,
      status: 'published',
      timestamp: new Date()
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/content/:id/schedule
router.post('/:id/schedule', async (req: AuthRequest, res) => {
  try {
    const { scheduledFor } = req.body;

    res.json({
      success: true,
      postId: req.params.id,
      scheduledFor,
      status: 'scheduled'
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;