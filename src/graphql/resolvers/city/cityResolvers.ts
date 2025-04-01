import { CityType } from "../../../types";
import { getCityService, createCityService } from "./services";
import hasMutationPermission from "../../utils/hasMutationPermission";
const cityResolvers = {
  Query: {
    getCities: async (): Promise<CityType[] | null> => {
      return await getCityService();
    },
  },
  Mutation: {
    createCity: async ({
      input,
    }: {
      input: CityType;
    }): Promise<CityType | null> => {
      if (!hasMutationPermission()) {
        throw new Error("You do not have permission to perform this action.");
      }
      return await createCityService(input);
    },
  },
};

export default cityResolvers;
