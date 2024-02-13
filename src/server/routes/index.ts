import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/cidades', (req, res) => {
    console.log(req.query);
    return res.status(StatusCodes.OK).send('Querstring Parameters: ' + `${req.query}`);
});


router.get('/cidades/:id', (req, res) => {
    console.log(req.params.id);
    return res.status(StatusCodes.OK).json('{Id: ' + `${req.params.id}` + '}');
});


router.post('/cidades', (req, res) => {
    return res.status(StatusCodes.CREATED).json(req.body);
});




export { router };