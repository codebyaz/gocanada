import { Inject, Service } from "typedi";

import { ICriteriaRepository } from "../../repositories/ICriteriaRepository";
import { MemoryCriteriaRepository } from "../../repositories/implementations/MemoryCriteriaRepository";

@Service()
class ListCriteriaUseCase {
    constructor(
        @Inject(() => MemoryCriteriaRepository)
        private criteriaRepository: ICriteriaRepository
    ) { };

    async execute() {
        const criteria = await this.criteriaRepository.list();

        return criteria;
    }
}

export { ListCriteriaUseCase };