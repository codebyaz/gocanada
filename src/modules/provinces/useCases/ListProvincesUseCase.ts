import { Inject, Service } from "typedi";

import { Province } from "../models/Province";
import { MemoryProvinceRepository } from "../repositories/implementations/MemoryProvinceRepository";
import { IProvincesRepository } from "../repositories/IProvincesRepository";

@Service()
class ListProvincesUseCase {
    constructor(
        @Inject(() => MemoryProvinceRepository)
        private provincesRepository: IProvincesRepository
    ) { }

    async execute(): Promise<Province[]> {

        const provinces = await this.provincesRepository.list();

        return provinces;
    }
}

export { ListProvincesUseCase };