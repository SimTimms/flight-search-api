import Airline from "../../../models/airlineModel";
import { AirlineType } from "../../../../types";
import { getCachedData, setCachedData } from "../../../../redis/helpers";

/**
 * Service function to fetch a list of airlines from the database.
 *
 * @param {number} [limit] - Optional limit for the number of airlines to fetch. Defaults to 10 if not provided.
 * @returns {Promise<AirlineType[]>} - A promise that resolves to an array of airline objects.
 * @throws {Error} - Throws an error if the database query fails.
 */

const DEFAULT_LIMIT = 10; // Default limit for the number of airlines to fetch
const CACHE_EXPIRATION = 3600; // Cache expiration time in seconds (1 hour)

async function getAirlineService(limit?: number): Promise<AirlineType[]> {
  try {
    const cacheKey = `getAirlineService:${JSON.stringify(limit)}`;

    const cachedData = await getCachedData(cacheKey);
    if (cachedData) {
      return JSON.parse(cachedData);
    }
    const airlines = await Airline.find().limit(limit || DEFAULT_LIMIT);

    await setCachedData(cacheKey, JSON.stringify(airlines), CACHE_EXPIRATION);

    return airlines;
  } catch (error) {
    console.error("Error getting airline:", error);
    throw error;
  }
}

export default getAirlineService;
