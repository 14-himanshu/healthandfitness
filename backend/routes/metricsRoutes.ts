import express from 'express';
import { getMetrics, logMetrics, exportCSV, forecastWeight } from '../controllers/metricsController';
import { requireAuth } from '../middleware/authMiddleware';

const router = express.Router();

// All metrics routes require authentication
router.use(requireAuth);

router.get('/export', exportCSV);
router.get('/forecast', forecastWeight);
router.get('/', getMetrics);
router.post('/', logMetrics);

export default router;
