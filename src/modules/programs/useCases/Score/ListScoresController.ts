import { Response } from "express";
import { Service } from "typedi";

import { ListScoresUseCase } from "./ListScoresUseCase";

@Service()
class ListScoresController {
    constructor(private listScoresUseCase: ListScoresUseCase) { };

    async handle(response: Response): Promise<Response> {
        const scores = await this.listScoresUseCase.execute()

        return response.json(scores);
    }
}

export { ListScoresController };