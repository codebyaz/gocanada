import Container from "typedi";
import { CombinedScore } from "../../models/CombinedScore";
import { Criteria } from "../../models/Criteria";

import { FindCriteriaByAlias } from "../../useCases/Criteria/FindCriteriaByAliasUseCase";

const combinedScores = async (): Promise<CombinedScore[]> => {

    const findCriteriaByAliasUseCase = Container.get(FindCriteriaByAlias);
    const highSchoolCriteria = await findCriteriaByAliasUseCase.execute("highSchool");
    const lessThanHighSchool = await findCriteriaByAliasUseCase.execute("lessThanHighSchool");
    const clb7 = await findCriteriaByAliasUseCase.execute("clb7");
    const clb8 = await findCriteriaByAliasUseCase.execute("clb8");

    const combinedScores = [
        {
            "id": "1475687f-4c74-43db-95fc-89b182450fd2",
            "value": 25,
            "criteria": [highSchoolCriteria, clb7] as Criteria[]
        },
        {
            "id": "1475687f-4c74-43db-95fc-89b182450fd2",
            "value": 25,
            "criteria": [highSchoolCriteria, clb8] as Criteria[]
        }
    ]

    return combinedScores;
}

export { combinedScores };