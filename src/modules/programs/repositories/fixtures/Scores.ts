import Container from "typedi";

import { Score } from "../../models/Score";
import { FindCriteriaByAlias } from "../../useCases/Criteria/FindCriteriaByAliasUseCase";
import { FindProgramsByInitialsUseCase } from "../../useCases/Program/FindProgramsByInitialsUseCase";

const scores = async (): Promise<Score[]> => {

    const findCriteriaByAliasUseCase = Container.get(FindCriteriaByAlias);
    const highSchoolCriteria = await findCriteriaByAliasUseCase.execute("highSchool");
    const lessThanHighSchool = await findCriteriaByAliasUseCase.execute("lessThanHighSchool");

    const findProgramsByInitialsUseCase = Container.get(FindProgramsByInitialsUseCase);
    const federalSkilledWorkerProgram = await findProgramsByInitialsUseCase.execute("FSW");
    const ArrimaProgram = await findProgramsByInitialsUseCase.execute("ARR");


    const scores = [
        {
            "id": "1475687f-4c74-43db-95fc-89b182450fd2",
            "value": 0,
            "marital": false,
            "criteria": lessThanHighSchool,
            "program": federalSkilledWorkerProgram
        },
        {
            "id": "1475687f-4c74-43db-95fc-89b182450fd2",
            "value": 0,
            "marital": false,
            "criteria": lessThanHighSchool,
            "program": ArrimaProgram
        },
        {
            "id": "cc48470a-29e6-446f-99e7-793f3ad7a316",
            "value": 28,
            "marital": true,
            "criteria": highSchoolCriteria,
            "program": federalSkilledWorkerProgram
        },
        {
            "id": "90194b5c-8b53-40d1-97a8-de0aa3deaa42",
            "value": 30,
            "marital": false,
            "criteria": highSchoolCriteria,
            "program": federalSkilledWorkerProgram
        }
    ]

    return scores;
}

export { scores };