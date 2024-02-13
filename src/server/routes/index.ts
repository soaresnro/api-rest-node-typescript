import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from './../controllers';

const router = Router();

router.get('/', (_, res) => {
    return res.status(StatusCodes.OK).send('Olá, DEV!');    
});

//#region CidadesController

router.get('/cidades/:id', (req, res) => CidadesController.getById(req.params.id, res));

router.get('/cidades', (req, res) => CidadesController.getByFilters(req, res));

router.post('/cidades', (req, res) => CidadesController.create(req, res));

//#endregion CidadesController



export { router };