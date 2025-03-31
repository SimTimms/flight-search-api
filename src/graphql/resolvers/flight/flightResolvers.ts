import Flight from "../../models/flightModel";
import { FlightType } from "../../../types";

const errorHandler = (error: unknown) => {
  return `Error fetching flight:${error instanceof Error ? error.message : "Unknown error"}`;
};

const flightResolvers = {
  getFlight: async ({ flightNumber }: { flightNumber: string }) => {
    try {
      const flight = await Flight.findOne({ flightNumber: flightNumber });
      return flight;
    } catch (error) {
      throw new Error(errorHandler(error));
    }
  },

  getFlights: async () => {
    try {
      const flights = await Flight.find().limit(30).populate("airline");
      return flights;
    } catch (error) {
      throw new Error(errorHandler(error));
    }
  },

  createFlight: async ({ input }: { input: FlightType }) => {
    try {
      const newFlight = new Flight(input);
      const savedFlight = await newFlight.save();
      return await savedFlight;
    } catch (error) {
      throw new Error(errorHandler(error));
    }
  },
};

export default flightResolvers;
