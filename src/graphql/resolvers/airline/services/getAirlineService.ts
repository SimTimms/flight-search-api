import Airline from "../../../models/airlineModel";
import errorHandler from "../../../../utils/errorHandler";
import { AirlineType } from "../../../../types";

/**
 * Service function to fetch a list of airlines from the database.
 *
 * @param {number} [limit] - Optional limit for the number of airlines to fetch. Defaults to 10 if not provided.
 * @returns {Promise<AirlineType[]>} - A promise that resolves to an array of airline objects.
 * @throws {Error} - Throws an error if the database query fails.
 */
async function getAirlineService(limit?: number): Promise<AirlineType[]> {
  try {
    const airlines = await Airline.find().limit(limit || 10);
    return airlines;
  } catch (error) {
    throw new Error(errorHandler(error));
  }
}

export default getAirlineService;
