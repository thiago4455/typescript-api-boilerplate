import jwt from 'jsonwebtoken';
import {SECRET_KEY} from '../../utils/global-config.json';
import { AuthRequest } from './authenticateDefinition.js';
import { Response, NextFunction } from 'express';

export default (req: AuthRequest,res: Response,next: NextFunction): void => {
    const token = req.header('Authorization');
    if(!token) {
        res.status(401).send('Acess Denied');
        return;
    }

    try{
        const user = jwt.verify(token, SECRET_KEY);
        req.user = user as AuthRequest['user'];
        next();
    }catch{
        res.status(400).send('Invalid token.');
    }
}