import { Request, Response, Router } from "express";
import Container from "typedi";

import { ListCriteriaController } from "../modules/programs/useCases/Criteria/ListCriteriaController";

const criteriaRouter = Router();

criteriaRouter.get("/", (request: Request, response: Response) => {
    const listCriteriaController = Container.get(ListCriteriaController);

    return listCriteriaController.handle(response);
})

export { criteriaRouter };