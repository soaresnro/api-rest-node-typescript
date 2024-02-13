import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface ICidade {
    nome: string;
}

export const create = (req: Request<{}, {}, ICidade>, res: Response) => {

    const data = req.body;

    return res.status(StatusCodes.CREATED).json(data);
};