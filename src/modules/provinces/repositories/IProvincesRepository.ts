import { Province } from '../models/Province'

interface IProvincesRepository {
    list(): Promise<Province[]>;
    findByName(name: string): Promise<Province>;
}

export { IProvincesRepository };