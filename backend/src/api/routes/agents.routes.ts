import express, { Router } from 'express';
import { AgentRegistry } from '../../agents/AgentRegistry';
import { AuthRequest } from '../middleware/auth.middleware';

const router = Router();
const registry = new AgentRegistry();

// GET /api/agents
router.get('/', async (req: AuthRequest, res) => {
  try {
    const agents = registry.getAllAgents();
    res.json(agents);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/agents/:id
router.get('/:id', async (req: AuthRequest, res) => {
  try {
    const agent = registry.getAgent(req.params.id);

    if (!agent) {
      return res.status(404).json({ error: 'Agent not found' });
    }

    res.json(agent);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/agents/category/:category
router.get('/category/:category', async (req: AuthRequest, res) => {
  try {
    const agents = registry.getAgentsByCategory(req.params.category);
    res.json(agents);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;