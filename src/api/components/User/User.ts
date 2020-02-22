import { Response, Request } from "express";
import {getUsers, addUser} from './User.Services';

export const GET = (req: Request,res: Response): void => {
    getUsers(req.query.name).then(r => 
        res.status(200).json(r.rows)
    )
    .catch(e =>
        res.status(500).json(e)
    )
}

export const POST = (req: Request,res: Response): void => {
    const { name, email } = req.body;
    console.log(req.body)

    addUser(name,email).then(r => 
        res.status(200).json(r.rows)
    )
    .catch(e =>
        res.status(500).json(e)
    )
}

export const PUT = (req: Request,res: Response): void => {
    res.status(405).send('Method not allowed.');
}

export const DELETE = (req: Request,res: Response): void => {
    res.status(405).send('Method not allowed.');
}