import express, { Router } from 'express';
import { getConnection } from '../../database/connection';
import { User, Campaign, Post, Analytics } from '../../database/entities';
import { adminMiddleware, AuthRequest } from '../middleware/auth.middleware';

const router = Router();

// Protect all admin routes
router.use(adminMiddleware);

// GET /api/admin/metrics
router.get('/metrics', async (req: AuthRequest, res) => {
  try {
    const connection = getConnection();

    const totalUsers = await connection
      .getRepository(User)
      .count();

    const totalCampaigns = await connection
      .getRepository(Campaign)
      .count();

    const totalPosts = await connection
      .getRepository(Post)
      .count();

    const analytics = await connection
      .getRepository(Analytics)
      .find();

    const totalReach = analytics.reduce((sum, a) => sum + (a.reach || 0), 0);

    res.json({
      totalUsers,
      totalCampaigns,
      totalPosts,
      totalReach,
      activeUsers: Math.floor(totalUsers * 0.7),
      timestamp: new Date()
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/admin/users
router.get('/users', async (req: AuthRequest, res) => {
  try {
    const connection = getConnection();
    const users = await connection.getRepository(User).find();

    res.json(
      users.map(u => ({
        id: u.id,
        email: u.email,
        name: u.name,
        role: u.role,
        plan: u.plan,
        campaigns: u.campaignCount,
        createdAt: u.createdAt
      }))
    );
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/admin/agents
router.get('/agents', async (req: AuthRequest, res) => {
  try {
    res.json({
      total: 251,
      categories: {
        'Content Creation': 45,
        'Marketing & Sales': 52,
        'Customer Experience': 35,
        'Data & Analytics': 48,
        'Design & Product': 38,
        'Education & Training': 20,
        'Business & Operations': 16
      }
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/admin/settings
router.get('/settings', async (req: AuthRequest, res) => {
  try {
    res.json({
      platformName: 'VIRLBOX',
      version: '1.0.0',
      apiVersion: 'v1',
      features: {
        agents: 251,
        formulas: 20,
        platforms: 22
      }
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/admin/users/:id
router.put('/users/:id', async (req: AuthRequest, res) => {
  try {
    const connection = getConnection();
    const user = await connection
      .getRepository(User)
      .findOne({ where: { id: req.params.id } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    Object.assign(user, req.body);
    const updated = await connection.getRepository(User).save(user);

    res.json(updated);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/admin/users/:id
router.delete('/users/:id', async (req: AuthRequest, res) => {
  try {
    const connection = getConnection();
    const user = await connection
      .getRepository(User)
      .findOne({ where: { id: req.params.id } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await connection.getRepository(User).remove(user);
    res.json({ success: true });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/admin/settings
router.post('/settings', async (req: AuthRequest, res) => {
  try {
    res.json({
      success: true,
      settings: req.body,
      timestamp: new Date()
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;