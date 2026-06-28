import express from 'express';
import { register, login } from '../controllers/authController';
import { requireAuth, AuthRequest } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/signup', register);
router.post('/login', login);
router.get('/me', requireAuth, (req: AuthRequest, res) => {
  res.json({ user: req.user });
});

export default router;
