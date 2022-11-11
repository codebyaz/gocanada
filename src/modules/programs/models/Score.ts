import { Criteria } from "./Criteria";
import { Program } from "./Program";

class Score {
    id?: string;
    value: number;
    marital: boolean;
    criteria: Criteria | undefined;
    program: Program | undefined;
}

export { Score };