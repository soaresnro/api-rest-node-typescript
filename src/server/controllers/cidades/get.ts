import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';


export const getByFilters = (req: Request, res: Response) => {
    res.status(StatusCodes.OK).json('{"id": 2, "nome": "Jaguariúna" }');
};

export const getById = (req: string, res: Response) => {
    res.status(StatusCodes.OK).json(`{"id": ${req}, "nome": "Jaguariúna" }`);
};