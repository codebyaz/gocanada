
type TExamLanguage = "en" | "fr";

class Exam {
    id?: string;
    name: string;
    language: TExamLanguage;
    grades: number[];
}

export { Exam, TExamLanguage };