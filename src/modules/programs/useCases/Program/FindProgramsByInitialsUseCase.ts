import { Inject, Service } from "typedi";

import { MemoryProgramRepository } from "../../repositories/implementations/MemoryProgramRepository";
import { IProgramsRepository } from "../../repositories/IProgramsRepository";

@Service()
class FindProgramsByInitialsUseCase {
    constructor(
        @Inject(() => MemoryProgramRepository)
        private programsRepository: IProgramsRepository
    ) { }

    async execute(initials: string) {
        const Programs = await this.programsRepository.findByInitials(initials);

        return Programs;
    }
}

export { FindProgramsByInitialsUseCase };