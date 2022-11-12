import { v4 } from "uuid";

import { Criteria } from "../../models/Criteria";
import { Factor } from "../../models/Factor";
import { getFactorByAlias } from "./Factors";

const criteria = async (): Promise<Criteria[]> => {

    const ageFactor = getFactorByAlias('age');
    const educationFactor = getFactorByAlias('education');
    const firstOfficialLanguageFactor = getFactorByAlias('firstOfficialLanguage');
    const secondOfficialLanguageFactor = getFactorByAlias('secondOfficialLanguage');

    const criteria = [
        {
            id: "5a806861-5ab4-4064-a126-f30bf2f28299",
            label: "Less than secondary school (high school)",
            allPrograms: true,
            alias: "lessThanHighSchool",
            factors: [educationFactor] as Factor[],
            combined: true
        },
        {
            id: "a788073a-18d1-4fa2-9cf6-3bc32bc10e5a",
            label: "Secondary school (high school graduation)",
            allPrograms: true,
            alias: "highSchool",
            factors: [educationFactor] as Factor[],
            combined: true
        },
        {
            id: "4c92990e-2e7f-46b5-9b85-2d23de5a88f8",
            label: "One-year program at a university, college, trade or technical school, or other institute",
            allPrograms: true,
            alias: "oneYearProgram",
            factors: [educationFactor] as Factor[],
            combined: true
        },
        {
            id: "4e74f6e3-1350-4f90-8e0d-dd79c1a7d145",
            label: "CLB 4",
            allPrograms: true,
            combined: true,
            factors: [
                firstOfficialLanguageFactor,
                secondOfficialLanguageFactor
            ] as Factor[],
            alias: "clb4"
        },
        {
            id: "0046b8e1-080c-4656-8082-c8107b1d3456",
            label: "NCLC 4 (CLB 4)",
            allPrograms: true,
            combined: true,
            factors: [
                firstOfficialLanguageFactor,
                secondOfficialLanguageFactor
            ] as Factor[],
            alias: "clb4Fr"
        },
        {
            id: "fa21487f-1a5f-4f5d-8719-da4effa52a02",
            label: "CLB 7",
            allPrograms: true,
            combined: true,
            factors: [
                firstOfficialLanguageFactor,
                secondOfficialLanguageFactor
            ] as Factor[],
            alias: "clb7"
        },
        {
            id: "269d9788-6ab1-4a75-8984-a79ec4c2abf9",
            label: "NCLC 7 (CLB 7)",
            allPrograms: true,
            combined: true,
            factors: [
                firstOfficialLanguageFactor,
                secondOfficialLanguageFactor
            ] as Factor[],
            alias: "clb7Fr"
        },
        {
            id: "6e70f4f1-957b-4448-9027-91c2b20c0c1e",
            label: "CLB 8",
            allPrograms: true,
            combined: true,
            factors: [
                firstOfficialLanguageFactor,
                secondOfficialLanguageFactor
            ] as Factor[],
            alias: "clb8"
        },
        {
            id: "5dcbfa39-56b7-4a87-a1bc-43b1f2ca87bd",
            label: "NCLC 8 (CLB 8)",
            allPrograms: true,
            combined: true,
            factors: [
                firstOfficialLanguageFactor,
                secondOfficialLanguageFactor
            ] as Factor[],
            alias: "clb8Fr"
        },
        {
            id: "e94d2dc1-13e4-4dde-ae84-99a345929806",
            label: "CLB 9",
            allPrograms: true,
            combined: true,
            factors: [
                firstOfficialLanguageFactor,
                secondOfficialLanguageFactor
            ] as Factor[],
            alias: "clb9"
        },
        {
            id: "1f47dddc-48c1-4fa1-86de-3e1a07cf78f1",
            label: "NCLC 9 (CLB 9)",
            allPrograms: true,
            combined: true,
            factors: [
                firstOfficialLanguageFactor,
                secondOfficialLanguageFactor
            ] as Factor[],
            alias: "clb9Fr"
        }
    ]

    return criteria;
}

export { criteria };