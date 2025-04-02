import { CityType } from "../../../types";
import { getCityService, createCityService } from "./services";
import hasMutationPermission from "../../utils/hasMutationPermission";
const cityResolversQuery = {
  getCities: async (): Promise<CityType[] | null> => {
    return await getCityService();
  },
};

const cityResolversMutation = {
  createCity: async (
    _: unknown,
    {
      input,
    }: {
      input: CityType;
    }
  ): Promise<CityType | null> => {
    if (!hasMutationPermission()) {
      throw new Error("You do not have permission to perform this action.");
    }
    return await createCityService(input);
  },
};

export { cityResolversQuery, cityResolversMutation };
