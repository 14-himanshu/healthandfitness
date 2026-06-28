import express from 'express';
import { processCommand } from '../controllers/agentController';
import { requireAuth } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/command', requireAuth, processCommand);

export default router;
