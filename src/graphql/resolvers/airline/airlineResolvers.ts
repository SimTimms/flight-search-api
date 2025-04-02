import { AirlineType } from "../../../types";
import hasMutationPermission from "../../utils/hasMutationPermission";
import { createAirlineService, getAirlineService } from "./services";

const airlineResolversQuery = {
  getAirlines: async (): Promise<AirlineType[]> => {
    return await getAirlineService(20);
  },
};

const airlineResolversMutation = {
  createAirline: async (
    _: unknown,
    {
      input,
    }: {
      input: AirlineType;
    }
  ): Promise<AirlineType> => {
    // Check if the user has permission to perform the mutation
    if (!hasMutationPermission()) {
      throw new Error("You do not have permission to perform this action.");
    }

    return await createAirlineService(input);
  },
};

export { airlineResolversQuery, airlineResolversMutation };
