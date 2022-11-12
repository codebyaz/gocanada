import { Exam } from "../../clbs/models/Exam";
import { Factor } from "./Factor";

class Criteria {
    id?: string;
    label: string;
    allPrograms: boolean;
    languageExamApplicable?: Exam[] | undefined;
    alias: string;
    factors: Factor[] | undefined[]
}

export { Criteria };