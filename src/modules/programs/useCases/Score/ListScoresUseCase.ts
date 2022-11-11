import { Inject, Service } from "typedi";

import { MemoryScoreRepository } from "../../repositories/implementations/MemoryScoreRepository";
import { IScoresRepository } from "../../repositories/IScoresRepository";

@Service()
class ListScoresUseCase {
    constructor(
        @Inject(() => MemoryScoreRepository)
        private scoresRepository: IScoresRepository
    ) { };

    async execute() {
        const scores = await this.scoresRepository.list();

        return scores;
    }
}

export { ListScoresUseCase };