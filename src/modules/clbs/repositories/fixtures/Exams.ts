import { v4 } from "uuid";

import { Exam, TExamLanguage } from "../../models/Exam";

const exams = (): Exam[] => {

    const english: TExamLanguage = "en";
    const french: TExamLanguage = "fr";

    const exams = [
        {
            id: "5c306d83-b806-4bb5-9c76-c421a43861cb",
            name: "CELPIP",
            language: english,
            grades: []
        },
        {
            id: "b0a52e90-2ca8-42b2-a4ca-ead4546c5ae1",
            name: "IELTS",
            language: english,
            grades: []
        },
        {
            id: v4(),
            name: "TEF Canada",
            language: french,
            grades: []
        },
        {
            id: v4(),
            name: "TCF Canada",
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