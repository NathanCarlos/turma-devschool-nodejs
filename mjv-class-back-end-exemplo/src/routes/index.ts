import { Router } from 'express';
import studentRoutes from './students.routes';
import statusRoutes from './status.routes';

const router = Router();

router.use('/students', studentRoutes);
router.use('/status', statusRoutes);

export default router;