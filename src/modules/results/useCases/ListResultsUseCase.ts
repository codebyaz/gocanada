import { Inject, Service } from "typedi";
import { Criteria } from "../../programs/models/Criteria";

import { TScoreType } from "../../programs/models/Score";
import { IScoresRepository } from "../../programs/repositories/IScoresRepository";
import { MemoryScoreRepository } from "../../programs/repositories/implementations/MemoryScoreRepository";

@Service()
class ListResultsUseCase {
    constructor(
        @Inject(() => MemoryScoreRepository)
        private scoresRepository: IScoresRepository
    ) { };

    async execute(status: TScoreType, selectedCriteriaIds: typeof Criteria.prototype.id[]): Promise<any> {
        const scores = await this.scoresRepository.list();
        const married: TScoreType = "married";
        const single: TScoreType = "single";

        if (!selectedCriteriaIds)
            return { message: 'Invalid request.' };

        if (!Array.isArray(selectedCriteriaIds))
            return { message: 'Invalid request.' };

        if (!status)
            return { message: 'Invalid request.' };

        if (status != married && status != single)
            return { message: 'Invalid request.' };

        const result = selectedCriteriaIds.map(
            (criteriaId) =>
                scores.filter(
                    (score) => score.criteria?.id === criteriaId && score.type === status
                )
        );

        return result;
    }
}

export { ListResultsUseCase };