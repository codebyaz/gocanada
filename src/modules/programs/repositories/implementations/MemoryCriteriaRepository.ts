import { Service } from "typedi";
import { Criteria } from "../../models/Criteria";
import { criteria as data } from "../fixtures/Criteria";
import { ICriteriaRepository } from "../ICriteriaRepository";

@Service()
class MemoryCriteriaRepository implements ICriteriaRepository {

    async list(): Promise<Criteria[]> {
        const criteria = await data();

        return criteria;
    }

    async findByAlias(alias: string): Promise<Criteria | undefined> {
        const criteria = await data();

        const foundCriteria = criteria.find((criteria) => criteria.alias === alias)

        return foundCriteria;
    }
}

export { MemoryCriteriaRepository };