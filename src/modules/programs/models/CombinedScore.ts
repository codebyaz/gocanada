import { Criteria } from "./Criteria";
import { Program } from "./Program";

class CombinedScore {
    id?: string;
    value: number;
    criteria: Criteria[] | undefined;
}

export { CombinedScore };