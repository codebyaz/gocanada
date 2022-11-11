import { Inject, Service } from "typedi";

import { Program } from "../../models/Program";
import { MemoryProgramRepository } from "../../repositories/implementations/MemoryProgramRepository";
import { IProgramsRepository } from "../../repositories/IProgramsRepository";

@Service()
class ListProgramsUseCase {

    constructor(
        @Inject(() => MemoryProgramRepository)
        private programsRepository: IProgramsRepository
    ) { };

    async execute(): Promise<Program[]> {
        const programs = await this.programsRepository.list();

        return programs;
    }
}

export { ListProgramsUseCase };