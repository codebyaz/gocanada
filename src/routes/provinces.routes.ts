import { Router } from 'express';
import Container from 'typedi';

// import { ListProvincesController } from '@modules/provinces/useCases/ListProvincesController';
import { ListProvincesController } from '../modules/provinces/useCases/ListProvincesController'

const provincesRoutes = Router();

provincesRoutes.get("/", (request, response) => {

    const listProvincesController = Container.get(ListProvincesController);

    return listProvincesController.handle(response);
});

export { provincesRoutes };