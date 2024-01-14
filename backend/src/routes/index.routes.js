import { Router } from 'express';
import routerNotes from './notes.routes.js';

const router = Router();

router.use('/notes', routerNotes);
router.use('/tags', routerTags);

export default router;
