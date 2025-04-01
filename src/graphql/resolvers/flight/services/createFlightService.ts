import Flight from "../../../models/flightModel";
import errorHandler from "../../../../utils/errorHandler";
import { FlightType } from "../../../../types";

async function createFlightService(input: FlightType): Promise<FlightType> {
  try {
    const newFlight = new Flight(input);
    const savedFlight = await newFlight.save();
    return await savedFlight;
  } catch (error) {
    throw new Error(errorHandler(error));
  }
}

export default createFlightService;
