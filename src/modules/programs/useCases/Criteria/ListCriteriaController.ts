import { Response } from "express";
import { Service } from "typedi";

import { ListCriteriaUseCase } from "./ListCriteriaUseCase";

@Service()
class ListCriteriaController {
    constructor(private listCriteriaUseCase: ListCriteriaUseCase) { }

    async handle(response: Response): Promise<Response> {
        const criteria = await this.listCriteriaUseCase.execute();

        return response.json(criteria);
    }
}

export { ListCriteriaController };