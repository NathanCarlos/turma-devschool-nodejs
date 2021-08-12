import { Router } from 'express';
import statusRoutes from './status.routes';
import studentsRoutes from './students.routes';

const routes = Router();

routes.use('/status', statusRoutes);
routes.use('/students', studentsRoutes);

export default routes;