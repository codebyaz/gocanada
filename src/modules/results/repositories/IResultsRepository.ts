import { Result } from "../models/Result";

interface IResultsRepository {
    list(): Promise<Result[]>;
}

export { IResultsRepository };