import { v4 as uuid } from "uuid"
import { Province } from "../../provinces/models/Province";
import { Criteria } from "./Criteria";

class Program {

    id?: string;
    name: string;
    initials: string;
    province: Province;
    // criteria: Criteria[];
    // created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Program };