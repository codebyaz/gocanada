import { Request } from "express";
import { Inject, Service } from "typedi";

import { Province } from "../models/Province";
import { MemoryProvinceRepository } from "../repositories/implementations/MemoryProvinceRepository";
import { IProvincesRepository } from "../repositories/IProvincesRepository";

@Service()
class FindProvincesByNameUseCase {
    constructor(
        @Inject(() => MemoryProvinceRepository)
        private provincesRepository: IProvincesRepository
    ) { }

    async execute(name: string): Promise<Province> {
        const province = await this.provincesRepository.findByName(name)

        return province;
    }
}

export { FindProvincesByNameUseCase };