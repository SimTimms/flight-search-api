import Airline from "../../models/airlineModel";
import { AirlineType } from "../../../types";

const errorHandler = (error: unknown) => {
  return `Error fetching flight:${error instanceof Error ? error.message : "Unknown error"}`;
};

const airlineResolvers = {
  getAirlines: async () => {
    try {
      const airlines = await Airline.find().limit(10);

      return airlines;
    } catch (error) {
      throw new Error(errorHandler(error));
    }
  },

  createAirline: async ({ input }: { input: AirlineType }) => {
    try {
      const newAirline = new Airline(input);
      const savedAirline = await newAirline.save();
      return savedAirline;
    } catch (error) {
      throw new Error(errorHandler(error));
    }
  },
};

export default airlineResolvers;
