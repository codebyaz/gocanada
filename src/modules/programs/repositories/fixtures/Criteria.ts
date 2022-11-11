import { v4 } from "uuid";
import { Criteria } from "../../models/Criteria";

const criteria = async (): Promise<Criteria[]> => {

    const criteria = [
        {
            "id": v4(),
            "label": "Less than secondary school (high school)",
            "common": true,
            "alias": "lessThanHighSchool",
            "combined": true
        },
        {
            "id": v4(),
            "label": "Secondary school (high school graduation)",
            "common": true,
            "alias": "highSchool",
            "combined": true
        },
        {
            "id": v4(),
            "label": "One-year program at a university, college, trade or technical school, or other institute",
            "common": true,
            "alias": "oneYearProgram",
            "combined": true
        },
        {
            "id": v4(),
            "label": "CLB 7",
            "common": true,
            "combined": true,
            "alias": "clb7"
        },
        {
            "id": v4(),
            "label": "CLB 8",
            "common": true,
            "combined": true,
            "alias": "clb8"
        }
    ]

    return criteria;
}

export { criteria };