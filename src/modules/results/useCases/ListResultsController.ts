
import { Request, Response } from "express";
import { Service } from "typedi";
import { Criteria } from "../../programs/models/Criteria";
import { TScoreType } from "../../programs/models/Score";

import { ListResultsUseCase } from "./ListResultsUseCase";

@Service()
class ListResultsController {
    constructor(private listResultsUseCase: ListResultsUseCase) { }

    async handle(request: Request, response: Response) {
        const { status, criteria } = request.query;
        console.log(status, criteria);
        const result = await this.listResultsUseCase.execute(status as TScoreType, criteria as typeof Criteria.prototype.id[])

        return response.json(result);
    };

}

export { ListResultsController };