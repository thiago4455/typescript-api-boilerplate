import {Router} from 'express';

import Default from './components/default';
import User from './components/User';

const router = Router();

// ROOT
router.get('/', Default);

//USER
router.get('/user',User.GET);
router.post('/user',User.POST);
router.put('/user',User.PUT);
router.delete('/user',User.DELETE);

export default router;