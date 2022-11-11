import { Request, Response, Router } from "express";
import Container from "typedi";

import { ListResultsController } from "../modules/results/useCases/ListResultsController";

const resultsRoutes = Router();

resultsRoutes.get("/", (request: Request, response: Response) => {

    const listResultsController = Container.get(ListResultsController);

    return listResultsController.handle(request, response);
});

export { resultsRoutes };