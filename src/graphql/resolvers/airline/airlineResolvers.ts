import { AirlineType } from "../../../types";
import hasMutationPermission from "../../utils/hasMutationPermission";
import { createAirlineService, getAirlineService } from "./services";

const airlineResolvers = {
  getAirlines: async (): Promise<AirlineType[]> => {
    return getAirlineService(20);
  },

  createAirline: async ({
    input,
  }: {
    input: AirlineType;
  }): Promise<AirlineType> => {
    // Check if the user has permission to perform the mutation
    if (!hasMutationPermission) {
      throw new Error("You do not have permission to perform this action.");
    }

    return createAirlineService(input);
  },
};

export default airlineResolvers;
