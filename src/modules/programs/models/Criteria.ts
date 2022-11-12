import { Factor } from "./Factor";

class Criteria {
    id?: string;
    label: string;
    allPrograms: boolean;
    alias: string;
    factors: Factor[] | undefined[]
}

export { Criteria };