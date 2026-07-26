import { Router } from 'express';
import consultationRouter from './consultation.routes.js';

const router = Router();

router.use('/consultations', consultationRouter);

export default router;
