
import { Request, Response } from "express";
import { Service } from "typedi";
import { Criteria } from "../../programs/models/Criteria";
import { Score } from "../../programs/models/Score";

import { scores as data } from "../../programs/repositories/fixtures/Scores";

@Service()
class ListResultsController {
    constructor() { }

    async handle(request: Request, response: Response) {
        const criteria = request.body;

        const scores = await data();
        const result: Score[] | any = [];

        criteria.map(
            (criteria: Criteria) => {
                const foundScores: Score[] | undefined = scores.filter(
                    (score) => score.criteria?.id === criteria.id
                );

                result.push(foundScores);
            }
        );

        return response.json(result);
    };

}

export { ListResultsController };