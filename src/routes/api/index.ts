import { Router } from 'express';
import userRoutes from './users.js';
import thoughtRoutes from './thoughts.js';

const router = Router();

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

export default router;
