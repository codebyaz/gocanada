import { v4 } from "uuid";

import { Factor } from "../../models/Factor";

const factors = (): Factor[] => {

    const factors = [
        {
            id: "6bef203f-8771-428f-ae6d-d69efcd40beb",
            label: "Age",
            alias: "age",
            isSpouseFactor: false,
        },
        {
            id: "9aa35838-af39-4816-8401-d544e278ba4d",
            label: "Level of Education",
            alias: "foreignEducation",
            isSpouseFactor: false,
        },
        {
            id: "e814ee95-8f09-4d0b-bba5-f65f0f9d9066",
            label: "Canadian Level of Education",
            alias: "canadianEducation",
            isSpouseFactor: false,
        },
        {
            id: "b7342e2b-e857-49a4-8491-82b93904bf51",
            label: "Official languages proficiency - FIRST official language",
            alias: "firstOfficialLanguage",
            isSpouseFactor: false,
        },
        {
            id: "729e1965-2cb3-4c20-ba54-d6219d309551",
            label: "Official languages proficiency - SECOND official language",
            alias: "secondOfficialLanguage",
            isSpouseFactor: false,
        },
        {
            id: "939d601d-ce9f-45a1-970d-aa120b505de0",
            label: "Work experience",
            alias: "foreignWorkExperience",
            isSpouseFactor: false,
        },
        {
            id: "939d601d-ce9f-45a1-970d-aa120b505de0",
            label: "Canadian work experience",
            alias: "canadianWorkExperience",
            isSpouseFactor: false,
        },
        {
            id: "50fc6c26-f0bb-4d8f-8847-b36d09d43ca5",
            label: "Spouse's or common-law partner's level of education",
            alias: "spouseEducation",
            isSpouseFactor: true,
        },
        {
            id: "b12bbe6d-fc36-479d-bb11-f7b5cf198edb",
            label: "Spouse's or common-law partner's Canadian work experience",
            alias: "spouseCanadianWorkExperience",
            isSpouseFactor: true,
        }
    ];

    return factors;
}

const getFactorByAlias = (alias: string): Factor | undefined => {
    return factors().find((factor) => factor.alias == alias);
}

export { factors, getFactorByAlias };