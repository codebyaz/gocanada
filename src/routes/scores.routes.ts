import Container from "typedi";
import { Router } from "express";

import { ListScoresController } from "../modules/programs/useCases/Score/ListScoresController";


const scoresRoutes = Router();

scoresRoutes.get("/", (request, response) => {
    const listScoresController = Container.get(ListScoresController);

    return listScoresController.handle(response);
});

export { scoresRoutes };