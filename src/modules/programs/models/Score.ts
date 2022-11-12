import { Criteria } from "./Criteria";
import { Program } from "./Program";

type TScoreType = "single" | "married" | "spouse";

class Score {
    id?: string;
    value: number;
    type: TScoreType;
    criteria: Criteria | undefined;
    program: Program | undefined;
}

export { Score, TScoreType };