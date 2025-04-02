import { FlightType, FlightFilter } from "../../../types";
import {
  createFlightService,
  getFlightService,
  getFlightsService,
  filterFlightsService,
} from "./services";
import hasMutationPermission from "../../utils/hasMutationPermission";
import DateTimeScalar from "../../scalars/dateTimeScalar";

const DEFAULT_LIMIT = 50;
const flightResolversQuery = {
  getFlight: async (flightNumber: string): Promise<FlightType | null> => {
    return await getFlightService(flightNumber);
  },

  getFlights: async (): Promise<FlightType[] | null> => {
    return await getFlightsService(DEFAULT_LIMIT);
  },

  filterFlights: async (
    _: unknown,
    {
      filter,
    }: {
      filter: FlightFilter;
    }
  ): Promise<FlightType[] | null> => {
    return await filterFlightsService(filter, DEFAULT_LIMIT);
  },
};

const flightResolversMutation = {
  createFlight: async (
    _: unknown,
    {
      input,
    }: {
      input: FlightFilter;
    }
  ): Promise<FlightType> => {
    if (!hasMutationPermission()) {
      throw new Error("You do not have permission to perform this action.");
    }
    return await createFlightService(input);
  },
};

export { DateTimeScalar, flightResolversQuery, flightResolversMutation };
