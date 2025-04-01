import Flight from "../../../models/flightModel";
import errorHandler from "../../../../utils/errorHandler";
import { FlightType } from "../../../../types";

/**
 * Creates a new flight record in the database.
 *
 * @param input - An object of type `FlightType` containing the details of the flight to be created.
 * @returns A promise that resolves to the created flight object of type `FlightType`.
 * @throws Will throw an error if the flight creation fails, with the error being processed by the `errorHandler`.
 */

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
