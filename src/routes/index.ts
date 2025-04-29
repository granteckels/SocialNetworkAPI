import { Router } from 'express';
import apiRoutes from './apiRoutes.js';

const router = Router();

router.use('/api', apiRoutes)

export default router;