import { Response } from "express";
import { Service } from "typedi";

import { ListProgramsUseCase } from "./ListProgramsUseCase";

@Service()
class ListProgramsController {
    constructor(private listProgramsUseCase: ListProgramsUseCase) { };

    async handle(response: Response): Promise<Response> {
        const programs = await this.listProgramsUseCase.execute();

        return response.json(programs);
    }

}

export { ListProgramsController };