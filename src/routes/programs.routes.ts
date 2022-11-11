import { Router } from "express";
import Container from "typedi";

import { ListProgramsController } from "../modules/programs/useCases/Program/ListProgramsController";

const programsRoutes = Router();

programsRoutes.get('/', (request, response) => {
    const listProgramsController = Container.get(ListProgramsController);

    return listProgramsController.handle(response);
});

export { programsRoutes };