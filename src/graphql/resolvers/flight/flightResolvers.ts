import { FlightType, FlightFilter } from "../../../types";
import {
  createFlightService,
  getFlightService,
  getFlightsService,
  filterFlightsService,
} from "./services";
import hasMutationPermission from "../../utils/hasMutationPermission";
import DateTimeScalar from "../../scalars/dateTimeScalar";

const flightResolvers = {
  DateTime: DateTimeScalar,
  getFlight: async ({
    flightNumber,
  }: {
    flightNumber: string;
  }): Promise<FlightType | null> => {
    return await getFlightService(flightNumber);
  },

  getFlights: async (): Promise<FlightType[] | null> => {
    return await getFlightsService(40);
  },

  filterFlights: async ({
    filter,
  }: {
    filter: FlightFilter;
  }): Promise<FlightType[] | null> => {
    return await filterFlightsService(filter, 60);
  },

  createFlight: async ({
    input,
  }: {
    input: FlightFilter;
  }): Promise<FlightType> => {
    if (!hasMutationPermission()) {
      throw new Error("You do not have permission to perform this action.");
    }
    return await createFlightService(input);
  },
};

export default flightResolvers;
