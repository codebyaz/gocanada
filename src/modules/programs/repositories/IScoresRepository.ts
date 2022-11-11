import { Score } from "../models/Score";

interface IScoresRepository {
    list(): Promise<Score[]>;
}

export { IScoresRepository };