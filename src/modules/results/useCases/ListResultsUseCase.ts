import { Inject, Service } from "typedi";
import { Criteria } from "../../programs/models/Criteria";

import { TScoreType } from "../../programs/models/Score";
import { IScoresRepository } from "../../programs/repositories/IScoresRepository";
import { MemoryScoreRepository } from "../../programs/repositories/implementations/MemoryScoreRepository";
import { combinedScores } from "../../programs/repositories/fixtures/CombinedScores";
import { CombinedScore } from "../../programs/models/CombinedScore";

@Service()
class ListResultsUseCase {
    constructor(
        @Inject(() => MemoryScoreRepository)
        private scoresRepository: IScoresRepository
    ) { };

    async execute(status: TScoreType, selectedCriteriaIds: typeof Criteria.prototype.id[]): Promise<any> {
        const scores = await this.scoresRepository.list();
        const combinedScoresData = await combinedScores();

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

        const resultRegularScores = selectedCriteriaIds.map(
            (criteriaId) => (
                scores.find(
                    (score) => score.criteria?.id === criteriaId && score.type === status
                )
            )
        );

        const resultCombinedScores: CombinedScore[] = [];

        selectedCriteriaIds.map(
            (criteriaId) => {

                combinedScoresData.forEach(
                    (combinedScore) => {
                        let foundCriteria;
                        let alreadyStore;

                        if (combinedScore.criteria?.at(0)?.id === criteriaId) {
                            foundCriteria = selectedCriteriaIds.find((criteriaId) => criteriaId === combinedScore.criteria?.at(1)?.id);
                            alreadyStore = resultCombinedScores.find((cs) => cs.id === combinedScore.id);

                        }

                        if (combinedScore.criteria?.at(1)?.id === criteriaId) {
                            foundCriteria = selectedCriteriaIds.find((criteriaId) => criteriaId === combinedScore.criteria?.at(0)?.id);
                            alreadyStore = resultCombinedScores.find((cs) => cs.id === combinedScore.id);
                        }

                        if (foundCriteria && !alreadyStore) {
                            resultCombinedScores.push(combinedScore);
                        }
                    }
                )
            }
        );

        return { resultRegularScores, resultCombinedScores };
    }
}

export { ListResultsUseCase };