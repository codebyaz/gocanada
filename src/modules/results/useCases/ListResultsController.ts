
import { Request, Response } from "express";
import { Service } from "typedi";

import { Score, TScoreType } from "../../programs/models/Score";
import { scores as data } from "../../programs/repositories/fixtures/Scores";

@Service()
class ListResultsController {
    constructor() { }

    async handle(request: Request, response: Response) {
        const { status, criteria } = request.query;
        const scores = await data();
        const married: TScoreType = "married";
        const single: TScoreType = "single";

        if (!criteria)
            return response.status(400).json({ message: 'Invalid request.' });

        if (!Array.isArray(criteria))
            return response.status(400).json({ message: 'Invalid request.' })

        if (!status)
            return response.status(400).json({ message: 'Invalid request' });

        if (status != married && status != single)
            return response.status(400).json({ message: 'Invalid request.' });

        const result = criteria.map(
            (criteriaId) =>
                scores.filter(
                    (score) => score.criteria?.id === criteriaId && score.type === status
                )
        );

        return response.json(result);
    };

}

export { ListResultsController };