import Container from "typedi";
import { v4 } from "uuid";

import { CombinedScore } from "../../models/CombinedScore";
import { Criteria } from "../../models/Criteria";

import { FindCriteriaByAlias } from "../../useCases/Criteria/FindCriteriaByAliasUseCase";

const combinedScores = async (): Promise<CombinedScore[]> => {

    const findCriteriaByAliasUseCase = Container.get(FindCriteriaByAlias);
    const highSchoolCriteria = await findCriteriaByAliasUseCase.execute("highSchool");

    const clb4 = await findCriteriaByAliasUseCase.execute("clb4");
    const clb5 = await findCriteriaByAliasUseCase.execute("clb5");
    const clb7 = await findCriteriaByAliasUseCase.execute("clb7");
    const clb7Fr = await findCriteriaByAliasUseCase.execute("clb7Fr");
    const clb8 = await findCriteriaByAliasUseCase.execute("clb8");

    const combinedScores = [
        {
            id: v4(),
            value: 25,
            criteria: [highSchoolCriteria, clb7] as Criteria[]
        },
        {
            id: v4(),
            value: 25,
            criteria: [highSchoolCriteria, clb7Fr] as Criteria[]
        },
        {
            id: "a13709cd-1d52-41b0-8914-ac895e23c15e",
            value: 25,
            criteria: [highSchoolCriteria, clb8] as Criteria[]
        },
        {
            id: v4(),
            value: 25,
            criteria: [clb4, clb7Fr] as Criteria[]
        },
        {
            id: v4(),
            value: 50,
            criteria: [clb5, clb7Fr] as Criteria[]
        }
    ]

    return combinedScores;
}

export { combinedScores };