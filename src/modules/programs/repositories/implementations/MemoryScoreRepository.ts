import { Service } from "typedi";

import { Score } from "../../models/Score";
import { IScoresRepository } from "../IScoresRepository";
import { scores as data } from "../../repositories/fixtures/Scores";

@Service()
class MemoryScoreRepository implements IScoresRepository {

    async list(): Promise<Score[]> {
        const scores = await data();

        return scores;
    }

}

export { MemoryScoreRepository };