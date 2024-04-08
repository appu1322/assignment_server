import { Router } from 'express';
import { contactController } from '../controllers'

const router = Router();

router.use('/contacts', contactController);

export { router };
