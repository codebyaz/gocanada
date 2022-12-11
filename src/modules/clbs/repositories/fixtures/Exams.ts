import { v4 } from "uuid";

import { Exam, TExamLanguage } from "../../models/Exam";

const exams = (): Exam[] => {

    const english: TExamLanguage = "en";
    const french: TExamLanguage = "fr";

    const exams = [
        {
            id: "5c306d83-b806-4bb5-9c76-c421a43861cb",
            name: "CELPIP (English exam)",
            language: english,
            grades: []
        },
        {
            id: "b0a52e90-2ca8-42b2-a4ca-ead4546c5ae1",
            name: "IELTS (English exam)",
            language: english,
            grades: []
        },
        {
            id: "3f6a6482-d0a3-49a9-9a08-10072ecc46e8",
            name: "TEF Canada (French exam)",
            language: french,
            grades: []
        },
        {
            id: "eb494af5-872b-48dd-b8e2-349c17eeaecc",
            name: "TCF Canada (French exam)",
            language: french,
            grades: []
        }
    ]

    return exams;
}

const getExamsByLanguage = (language: TExamLanguage): Exam[] | undefined => {
    const foundExams: Exam[] | undefined = exams().filter((exam) => exam.language === language);

    return foundExams;
}

export { exams, getExamsByLanguage };