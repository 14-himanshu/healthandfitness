import express from 'express';
import { getGoals, updateGoals } from '../controllers/goalsController';
import { requireAuth } from '../middleware/authMiddleware';

const router = express.Router();

router.use(requireAuth);

router.get('/', getGoals);
router.post('/', updateGoals);

export default router;
