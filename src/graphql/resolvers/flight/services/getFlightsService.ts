import Flight from "../../../models/flightModel";
import errorHandler from "../../../../utils/errorHandler";
import { FlightType } from "../../../../types";
import throttledLimit from "../../../utils/throttledLimit";
/**
 * Service to fetch flights from the database.
 *
 * @param {number} [limit] - Optional limit for the number of flights to fetch. Defaults to 10.
 * @returns {Promise<FlightType[] | null>} - A promise that resolves to an array of flights or null.
 */
async function getFlightsService(limit?: number): Promise<FlightType[] | null> {
  try {
    // Fetch flights from the database with optional limit and populate related fields
    const flights = await Flight.find()
      .limit(throttledLimit(limit, 40)) // Apply limit or default to 10
      .populate("airline") // Populate airline details
      .populate("departureCity") // Populate departure city details
      .populate("arrivalCity"); // Populate arrival city details

    return flights; // Return the fetched flights
  } catch (error) {
    // Handle and throw an error using the errorHandler utility
    throw new Error(errorHandler(error));
  }
}

export default getFlightsService;
