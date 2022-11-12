import Container from "typedi";
import { v4 } from "uuid";

import { FindProvincesByNameUseCase } from "../../../provinces/useCases/FindProvincesByNameUseCase";
import { Program } from "../../models/Program";
// import provincesData from "./Provinces.json";

const programs = async (): Promise<Program[]> => {

    const findProvincesByNameUseCase = Container.get(FindProvincesByNameUseCase);
    const federalProvince = await findProvincesByNameUseCase.execute("Federal");
    const quebecProvince = await findProvincesByNameUseCase.execute("Quebec");

    const programs = [
        {
            id: "5aad7350-661f-42c3-b681-4386dd4f10df",
            name: "Federal Skilled Worker",
            initials: "FSW",
            province: federalProvince,
        },
        {
            id: "d6400cf6-bc55-49d0-b0ed-0135a4aaa5af",
            name: "Canadian Experience Class",
            initials: "CEC",
            province: federalProvince,
        },
        {
            id: "df3e645e-453e-4af1-a571-3159dcb81059",
            name: "Arrima",
            initials: "ARR",
            province: quebecProvince,
        }
    ]

    return programs;
};

export { programs };