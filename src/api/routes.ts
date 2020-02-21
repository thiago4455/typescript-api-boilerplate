import {Router} from 'express';

import Default from './components/default';

const router = Router();

// ROOT
router.get('/', Default);

export default router;