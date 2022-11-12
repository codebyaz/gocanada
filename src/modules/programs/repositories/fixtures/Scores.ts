import Container from "typedi";
import { v4 } from "uuid";

import { Score, TScoreType } from "../../models/Score";
import { FindCriteriaByAlias } from "../../useCases/Criteria/FindCriteriaByAliasUseCase";
import { FindProgramsByInitialsUseCase } from "../../useCases/Program/FindProgramsByInitialsUseCase";
import { getFactorByAlias } from "./Factors";

const scores = async (): Promise<Score[]> => {

    const married: TScoreType = "married";
    const single: TScoreType = "single";
    const spouse: TScoreType = "spouse";

    const findCriteriaByAliasUseCase = Container.get(FindCriteriaByAlias);
    const highSchoolCriteria = await findCriteriaByAliasUseCase.execute("highSchool");
    const lessThanHighSchool = await findCriteriaByAliasUseCase.execute("lessThanHighSchool");
    const clb9 = await findCriteriaByAliasUseCase.execute("clb9");

    const findProgramsByInitialsUseCase = Container.get(FindProgramsByInitialsUseCase);
    const federalSkilledWorkerProgram = await findProgramsByInitialsUseCase.execute("FSW");
    const ArrimaProgram = await findProgramsByInitialsUseCase.execute("ARR");

    const educationFactor = getFactorByAlias('education');

    const scores = [
        {
            id: "07d318c5-17aa-4ca3-acff-3dc06d54e42d",
            value: 0,
            type: married,
            criteria: lessThanHighSchool,
            program: federalSkilledWorkerProgram,
        },
        {
            id: "07d318c5-17aa-4ca3-acff-3dc06d54e42d",
            value: 0,
            type: single,
            criteria: lessThanHighSchool,
            program: federalSkilledWorkerProgram,
        },
        {
            id: "7b6567ec-bc9c-48c3-8606-fe9f499ea082",
            value: 0,
            type: spouse,
            criteria: lessThanHighSchool,
            program: ArrimaProgram,
        },
        {
            id: "209c3a86-20a8-4cfb-a10f-41bdc0bad1dc",
            value: 28,
            type: married,
            criteria: highSchoolCriteria,
            program: federalSkilledWorkerProgram
        },
        {
            id: "df8646e9-9140-43e9-a45c-ec1b26ae00c9",
            value: 30,
            type: single,
            criteria: highSchoolCriteria,
            program: federalSkilledWorkerProgram
        },
        {
            id: "5aad7350-661f-42c3-b681-4386dd4f10df",
            value: 128,
            type: married,
            criteria: clb9,
            program: federalSkilledWorkerProgram
        }
    ]

    return scores;
}

export { scores };