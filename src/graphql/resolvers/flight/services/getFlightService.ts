import Flight from "../../../models/flightModel";
import errorHandler from "../../../../utils/errorHandler";
import { FlightType } from "../../../../types";

async function getFlightService(
  flightNumber: string
): Promise<FlightType | null> {
  try {
    const flight = await Flight.findOne({ flightNumber });
    return flight;
  } catch (error) {
    throw new Error(errorHandler(error));
  }
}

export default getFlightService;
