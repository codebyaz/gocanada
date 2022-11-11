import { Program } from "../models/Program";

interface IProgramsRepository {
    list(): Promise<Program[]>;
    findByInitials(initials: string): Promise<Program | undefined>;
}

export { IProgramsRepository };