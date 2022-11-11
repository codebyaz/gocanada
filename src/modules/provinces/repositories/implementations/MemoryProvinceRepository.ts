import { Service } from "typedi";

import { provinces as data } from "../fixtures/Provinces";
import { Province } from "../../models/Province";
import { IProvincesRepository } from "../IProvincesRepository";

@Service()
class MemoryProvinceRepository implements IProvincesRepository {

    async list(): Promise<Province[]> {

        const provinces = data;

        return provinces;
    }

    async findByName(keyName: string): Promise<Province> {
        const province = data.find((province: Province) => province.name === keyName);

        return province;
    }
}

export { MemoryProvinceRepository };