import Flight from "../../../models/flightModel";
import errorHandler from "../../../../utils/errorHandler";
import { FlightType } from "../../../../types";

/**
 * Service to fetch a flight by its flight number.
 *
 * @param flightNumber - The flight number to search for.
 * @returns A promise that resolves to the flight details or null if not found.
 */
async function getFlightService(
  flightNumber: string
): Promise<FlightType | null> {
  try {
    // Find a flight by its flight number and populate related fields
    const flight = await Flight.findOne({ flightNumber })
      .populate("airline") // Populate airline details
      .populate("departureCity") // Populate departure city details
      .populate("arrivalCity"); // Populate arrival city details

    return flight;
  } catch (error) {
    // Handle and throw an error using a custom error handler
    throw new Error(errorHandler(error));
  }
}

export default getFlightService;
