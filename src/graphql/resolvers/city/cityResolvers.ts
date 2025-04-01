import { CityType } from "../../../types";
import { getCityService, createCityService } from "./services";

const cityResolvers = {
  getCities: () => {
    getCityService();
  },

  createCity: ({ input }: { input: CityType }) => {
    createCityService(input);
  },
};

export default cityResolvers;
