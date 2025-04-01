import Flight from "../../../models/flightModel";
import errorHandler from "../../../../utils/errorHandler";
import { FlightType } from "../../../../types";

async function getFlightsService(limit?: number): Promise<FlightType[] | null> {
  try {
    const flights = await Flight.find()
      .limit(limit || 10)
      .populate("airline");
    return flights;
  } catch (error) {
    throw new Error(errorHandler(error));
  }
}

export default getFlightsService;
