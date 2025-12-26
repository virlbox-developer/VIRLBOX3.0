import express, { Router } from 'express';
import { CampaignService } from '../../services/CampaignService';
import { AuthRequest } from '../middleware/auth.middleware';

const router = Router();
const campaignService = new CampaignService();

// GET /api/campaigns
router.get('/', async (req: AuthRequest, res) => {
  try {
    const campaigns = await campaignService.getCampaigns(req.user!.id);
    res.json(campaigns);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/campaigns/:id
router.get('/:id', async (req: AuthRequest, res) => {
  try {
    const campaign = await campaignService.getCampaign(
      req.params.id,
      req.user!.id
    );
    res.json(campaign);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
});

// POST /api/campaigns
router.post('/', async (req: AuthRequest, res) => {
  try {
    const campaign = await campaignService.createCampaign(
      req.user!.id,
      req.body
    );
    res.status(201).json(campaign);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// PUT /api/campaigns/:id
router.put('/:id', async (req: AuthRequest, res) => {
  try {
    const campaign = await campaignService.updateCampaign(
      req.params.id,
      req.user!.id,
      req.body
    );
    res.json(campaign);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /api/campaigns/:id
router.delete('/:id', async (req: AuthRequest, res) => {
  try {
    await campaignService.deleteCampaign(req.params.id, req.user!.id);
    res.json({ success: true });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// POST /api/campaigns/:id/publish
router.post('/:id/publish', async (req: AuthRequest, res) => {
  try {
    const result = await campaignService.generateAndPublishContent(
      req.params.id,
      req.user!.id,
      req.body.brief
    );
    res.json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// GET /api/campaigns/:id/analytics
router.get('/:id/analytics', async (req: AuthRequest, res) => {
  try {
    const analytics = await campaignService.getCampaignAnalytics(
      req.params.id,
      req.user!.id
    );
    res.json(analytics);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;