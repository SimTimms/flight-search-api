import { FlightType } from "../../../types";
import {
  createFlightService,
  getFlightService,
  getFlightsService,
} from "./services";
const flightResolvers = {
  getFlight: async ({ flightNumber }: { flightNumber: string }) => {
    getFlightService(flightNumber);
  },

  getFlights: async () => {
    getFlightsService(20);
  },

  createFlight: async ({ input }: { input: FlightType }) => {
    createFlightService(input);
  },
};

export default flightResolvers;
