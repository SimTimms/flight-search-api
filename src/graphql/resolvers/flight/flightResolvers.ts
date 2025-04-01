import { FlightType, FlightFilterInput } from "../../../types";
import {
  createFlightService,
  getFlightService,
  getFlightsService,
  filterFlightsService,
} from "./services";
import hasMutationPermission from "../../utils/hasMutationPermission";

const flightResolvers = {
  getFlight: async ({
    flightNumber,
  }: {
    flightNumber: string;
  }): Promise<FlightType | null> => {
    return await getFlightService(flightNumber);
  },

  getFlights: async (): Promise<FlightType[] | null> => {
    return await getFlightsService(20);
  },

  filterFlights: async ({
    filter,
  }: {
    filter: FlightFilterInput;
  }): Promise<FlightType[] | null> => {
    return await filterFlightsService(filter, 20);
  },
  createFlight: async ({
    input,
  }: {
    input: FlightType;
  }): Promise<FlightType> => {
    if (!hasMutationPermission()) {
      throw new Error("You do not have permission to perform this action.");
    }
    return await createFlightService(input);
  },
};

export default flightResolvers;
