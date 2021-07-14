
import { Router } from 'express';
import { controlRoutes } from './control.routes';
const router = Router();


router.use('/control', controlRoutes);

export { router };