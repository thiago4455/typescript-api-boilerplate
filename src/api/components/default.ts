import { Response, Request } from "express";

export default (req: Request,res: Response): void => {
    res.send('/');
}