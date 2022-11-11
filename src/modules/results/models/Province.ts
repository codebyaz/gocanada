import { v4 as uuid } from 'uuid';

class Province {

    id?: string;
    name: string;
    initials: string;
    // created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Province };