import Container from "typedi";
import { Province } from "../../../provinces/models/Province";

import { FindProvincesByNameUseCase } from "../../../provinces/useCases/FindProvincesByNameUseCase";
import { Program } from "../../models/Program";
// import provincesData from "./Provinces.json";

const programs = async (): Promise<Program[]> => {

    const findProvincesByNameUseCase = Container.get(FindProvincesByNameUseCase);
    const federalProvince = await findProvincesByNameUseCase.execute("Federal");
    const quebecProvince = await findProvincesByNameUseCase.execute("Quebec");

    const programs = [
        {
            "id": "563569f0-65ac-4a57-bf0a-3d8f49873f06",
            "name": "Federal Skilled Worker",
            "initials": "FSW",
            "province": federalProvince,
        },
        {
            "id": "2bb315f9-30f7-4a94-83a9-0f508ef57e2d",
            "name": "Canadian Experience Class",
            "initials": "CEC",
            "province": federalProvince,
        },
        {
            "id": "64802f3e-f5f1-47c5-bf80-548d656de4c5",
            "name": "Arrima",
            "initials": "ARR",
            "province": quebecProvince,
        }
    ]

    return programs;
};

export { programs };