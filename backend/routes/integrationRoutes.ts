import express from 'express';
import { getIntegrations, toggleIntegration } from '../controllers/integrationsController';
import { requireAuth } from '../middleware/authMiddleware';

const router = express.Router();

// Protect all routes
router.use(requireAuth);

router.get('/', getIntegrations);
router.post('/toggle', toggleIntegration);

export default router;
