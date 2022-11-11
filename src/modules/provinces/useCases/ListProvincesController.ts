import { Response } from "express";
import { Service } from "typedi";

import { ListProvincesUseCase } from "./ListProvincesUseCase";

@Service()
class ListProvincesController {
    constructor(private listCategoriesUseCase: ListProvincesUseCase) { }

    async handle(response: Response): Promise<Response> {
        const categories = await this.listCategoriesUseCase.execute();

        return response.json(categories);
    }
}

export { ListProvincesController };