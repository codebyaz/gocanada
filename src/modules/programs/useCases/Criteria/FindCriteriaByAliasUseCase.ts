import { Inject, Service } from "typedi";

import { ICriteriaRepository } from "../../repositories/ICriteriaRepository";
import { MemoryCriteriaRepository } from "../../repositories/implementations/MemoryCriteriaRepository";

@Service()
class FindCriteriaByAlias {
    constructor(
        @Inject(() => MemoryCriteriaRepository)
        private criteriaRepository: ICriteriaRepository
    ) { }

    async execute(alias: string) {
        const criteria = await this.criteriaRepository.findByAlias(alias);

        return criteria;
    }
}

export { FindCriteriaByAlias };