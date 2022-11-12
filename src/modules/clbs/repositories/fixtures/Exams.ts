import { v4 } from "uuid";

import { Criteria } from "../../models/Criteria";

const exams = async (): Promise<Criteria[]> => {

    const exams = [
        {
            "id": v4(),
            "label": "CLB 4",
            "grades": [3.5, 4.0, 4.5, 4.0],
            "exams": []
        },
        {
            "id": v4(),
            "label": "CLB 8",
            "grades": [],
            "exams": 
        },
        {
            "id": v4(),
            "label": "CLB 8",
            "grades": [],
            "exams": 
        },
        {
            "id": v4(),
            "label": "CLB 8",
            "grades": [],
            "exams": 
        },
        {
            "id": v4(),
            "label": "CLB 8",
            "grades": [],
            "exams": 
        }
    ]

    return exams;
}

export { exams };