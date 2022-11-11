import { Service } from "typedi";

import { Program } from "../../models/Program";
import { IProgramsRepository } from "../IProgramsRepository";
import { programs as data } from "../fixtures/Programs";

@Service()
class MemoryProgramRepository implements IProgramsRepository {

    async list(): Promise<Program[]> {
        const programs = await data();

        return programs;
    }

    async findByInitials(initials: string): Promise<Program | undefined> {
        const programs = await data();

        const foundProgram = programs.find((program) => program.initials === initials)

        return foundProgram;
    }
}

export { MemoryProgramRepository };