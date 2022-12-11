import { v4 } from "uuid";

import { Exam, TExamLanguage } from "../../../clbs/models/Exam";
import { getExamsByLanguage } from "../../../clbs/repositories/fixtures/Exams";
import { Criteria } from "../../models/Criteria";
import { Factor } from "../../models/Factor";
import { getFactorByAlias } from "./Factors";

const criteria = async (): Promise<Criteria[]> => {

    const englishExams: Exam[] | undefined = getExamsByLanguage('en');
    const frenchExams: Exam[] | undefined = getExamsByLanguage('fr');

    const ageFactor: Factor | undefined = getFactorByAlias('age');
    const foreignEducationFactor: Factor | undefined = getFactorByAlias('foreignEducation');
    const canadianEducationFactor: Factor | undefined = getFactorByAlias('canadianEducation');
    const firstOfficialLanguageFactor: Factor | undefined = getFactorByAlias('firstOfficialLanguage');
    const secondOfficialLanguageFactor: Factor | undefined = getFactorByAlias('secondOfficialLanguage');
    const foreignWorkExperienceFactor: Factor | undefined = getFactorByAlias('foreignWorkExperience');
    const canadianWorkExperienceFactor: Factor | undefined = getFactorByAlias('canadianWorkExperience');

    const criteria = [
        {
            id: "4c92990e-2e7f-46b5-9b85-2d23de5a88f0",
            label: "17 years or less",
            allPrograms: true,
            alias: "17yearsLess",
            factor: ageFactor,
            combined: false
        },
        {
            id: "4c92990e-2e7f-46b5-9b85-2d23de5a88f9",
            label: "33 years",
            allPrograms: true,
            alias: "33years",
            factor: ageFactor,
            combined: false
        },
        {
            id: "5a806861-5ab4-4064-a126-f30bf2f28299",
            label: "Less than secondary school (high school)",
            allPrograms: true,
            alias: "lessThanHighSchool",
            factor: foreignEducationFactor,
            combined: true
        },
        {
            id: "a788073a-18d1-4fa2-9cf6-3bc32bc10e5a",
            label: "Secondary school (high school graduation)",
            allPrograms: true,
            alias: "highSchool",
            factor: foreignEducationFactor,
            combined: true
        },
        {
            id: "5a806861-5ab4-4064-a126-f30bf2f28290",
            label: "Less than secondary school (high school) Canada",
            allPrograms: true,
            alias: "lessThanHighSchool",
            factor: canadianEducationFactor,
            combined: true
        },
        {
            id: "a788073a-18d1-4fa2-9cf6-3bc32bc10e5b",
            label: "Secondary school (high school graduation) Canada",
            allPrograms: true,
            alias: "highSchool",
            factor: canadianEducationFactor,
            combined: true
        },
        {
            id: "4c92990e-2e7f-46b5-9b85-2d23de5a88f8",
            label: "One-year program at a university, college, trade or technical school, or other institute",
            allPrograms: true,
            alias: "oneYearProgram",
            factor: foreignEducationFactor,
            combined: true
        },
        {
            id: "4e74f6e3-1350-4f90-8e0d-dd79c1a7d145",
            label: "CLB 4",
            allPrograms: true,
            languageExamApplicable: englishExams,
            combined: true,
            factor: firstOfficialLanguageFactor,
            alias: "clb4First"
        },
        {
            id: "4e74f6e3-1350-4f90-8e0d-dd79c1a7d146",
            label: "CLB 4",
            allPrograms: true,
            languageExamApplicable: englishExams,
            combined: true,
            factor: secondOfficialLanguageFactor,
            alias: "clb4Second"
        },
        {
            id: "0046b8e1-080c-4656-8082-c8107b1d3458",
            label: "NCLC 4 (CLB 4)",
            allPrograms: true,
            combined: true,
            languageExamApplicable: frenchExams,
            factor: firstOfficialLanguageFactor,
            alias: "clb4FrFirst"
        },
        {
            id: "0046b8e1-080c-4656-8082-c8107b1d3459",
            label: "NCLC 4 (CLB 4)",
            allPrograms: true,
            combined: true,
            languageExamApplicable: frenchExams,
            factor: secondOfficialLanguageFactor,
            alias: "clb4FrSecond"
        },
        {
            id: "fa21487f-1a5f-4f5d-8719-da4effa52a08",
            label: "CLB 7",
            allPrograms: true,
            combined: true,
            languageExamApplicable: englishExams,
            factor: firstOfficialLanguageFactor,
            alias: "clb7First"
        },
        {
            id: "fa21487f-1a5f-4f5d-8719-da4effa52a09",
            label: "CLB 7",
            allPrograms: true,
            combined: true,
            languageExamApplicable: englishExams,
            factor: secondOfficialLanguageFactor,
            alias: "clb7Second"
        },
        {
            id: "269d9788-6ab1-4a75-8984-a79ec4c2abf8",
            label: "NCLC 7 (CLB 7)",
            allPrograms: true,
            combined: true,
            languageExamApplicable: frenchExams,
            factor: firstOfficialLanguageFactor,
            alias: "clb7Fr"
        },
        {
            id: "269d9788-6ab1-4a75-8984-a79ec4c2abf9",
            label: "NCLC 7 (CLB 7)",
            allPrograms: true,
            combined: true,
            languageExamApplicable: frenchExams,
            factor: secondOfficialLanguageFactor,
            alias: "clb7FrSecond"
        },
        {
            id: "6e70f4f1-957b-4448-9027-91c2b20c0c1e",
            label: "CLB 8",
            allPrograms: true,
            combined: true,
            languageExamApplicable: englishExams,
            factor: firstOfficialLanguageFactor,
            alias: "clb8First"
        },
        {
            id: "6e70f4f1-957b-4448-9027-91c2b20c0c19",
            label: "CLB 8",
            allPrograms: true,
            combined: true,
            languageExamApplicable: englishExams,
            factor: secondOfficialLanguageFactor,
            alias: "clb8Second"
        },
        {
            id: "5dcbfa39-56b7-4a87-a1bc-43b1f2ca87bd",
            label: "NCLC 8 (CLB 8)",
            allPrograms: true,
            combined: true,
            languageExamApplicable: frenchExams,
            factor: firstOfficialLanguageFactor,
            alias: "clb8FrFirst"
        },
        {
            id: "5dcbfa39-56b7-4a87-a1bc-43b1f2ca87bd",
            label: "NCLC 8 (CLB 8)",
            allPrograms: true,
            combined: true,
            languageExamApplicable: frenchExams,
            factor: secondOfficialLanguageFactor,
            alias: "clb8FrSecond"
        },
        {
            id: "e94d2dc1-13e4-4dde-ae84-99a345929808",
            label: "CLB 9",
            allPrograms: true,
            combined: true,
            languageExamApplicable: englishExams,
            factor: firstOfficialLanguageFactor,
            alias: "clb9"
        },
        {
            id: "e94d2dc1-13e4-4dde-ae84-99a345929809",
            label: "CLB 9",
            allPrograms: true,
            combined: true,
            languageExamApplicable: englishExams,
            factor: secondOfficialLanguageFactor,
            alias: "clb9"
        },
        {
            id: "1f47dddc-48c1-4fa1-86de-3e1a07cf78f1",
            label: "NCLC 9 (CLB 9)",
            allPrograms: true,
            combined: true,
            languageExamApplicable: frenchExams,
            factor: firstOfficialLanguageFactor,
            alias: "clb9FrFirst"
        },
        {
            id: "1f47dddc-48c1-4fa1-86de-3e1a07cf78f1",
            label: "NCLC 9 (CLB 9)",
            allPrograms: true,
            combined: true,
            languageExamApplicable: frenchExams,
            factor: secondOfficialLanguageFactor,
            alias: "clb9FrSecond"
        },
        {
            id: "a417a5c6-7a4a-4780-a36a-eb984a00fcbe",
            label: "1 year",
            allPrograms: true,
            alias: "1year",
            factor: foreignWorkExperienceFactor,
            combined: true
        },
        {
            id: "0b17e41d-8a24-4286-a140-cbc264918df8",
            label: "2 years",
            allPrograms: true,
            alias: "2years",
            factor: canadianWorkExperienceFactor,
            combined: true
        },
        {
            id: "10b6bea7-7fc4-46eb-ba0e-22d02af2c2c6",
            label: "5 years or more",
            allPrograms: true,
            alias: "5yearsOrMore",
            factor: canadianWorkExperienceFactor,
            combined: true
        }
    ]

    return criteria;
}

export { criteria };