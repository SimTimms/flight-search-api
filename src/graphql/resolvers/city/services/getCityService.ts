import City from "../../../models/cityModel";
import errorHandler from "../../../../utils/errorHandler";
import { CityType } from "../../../../types";
import throttledLimit from "../../../utils/throttledLimit";
import { getCachedData, setCachedData } from "../../../../redis/helpers";

const DEFAULT_LIMIT = 40; // Default limit for the number of airlines to fetch
const CACHE_EXPIRATION = 3600; // Cache expiration time in seconds (1 hour)

async function getCityService(limit?: number): Promise<CityType[]> {
  try {
    const cacheKey = `getCityService:${JSON.stringify(limit)}`;

    const cachedData = await getCachedData(cacheKey);
    if (cachedData) {
      return JSON.parse(cachedData);
    }
    const cities = await City.find().limit(
      throttledLimit(limit, DEFAULT_LIMIT)
    );
    await setCachedData(cacheKey, JSON.stringify(cities), CACHE_EXPIRATION);
    return cities;
  } catch (error) {
    throw new Error(errorHandler(error));
  }
}

export default getCityService;
