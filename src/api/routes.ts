import {Router} from 'express';

import Default from './components/default';
import User from './components/User';
import authenticate from './middlewares/authenticate';

const router = Router();

// ROOT
router.get('/', Default);

//USER
router.get('/user',authenticate,User.GET);
router.post('/user',User.POST);
router.put('/user',User.PUT);
router.delete('/user',User.DELETE);
router.post('/user/login',User.LOGIN);

export default router;