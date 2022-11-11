import { Criteria } from "../models/Criteria";

interface ICriteriaRepository {
    list(): Promise<Criteria[]>;
    findByAlias(alias: string): Promise<Criteria | undefined>;
}

export { ICriteriaRepository };