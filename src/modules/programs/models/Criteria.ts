import { Exam } from "../../clbs/models/Exam";
import { Factor } from "./Factor";

class Criteria {
    id?: string;
    label: string;
    allPrograms: boolean;
    combined: boolean;
    languageExamApplicable?: Exam[] | undefined;
    alias: string;
    factor: Factor | undefined
}

export { Criteria };