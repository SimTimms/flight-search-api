import City from "../../../models/cityModel";
import errorHandler from "../../../../utils/errorHandler";
import { CityType } from "../../../../types";
import throttledLimit from "../../../utils/throttledLimit";

async function getAirlineService(limit?: number): Promise<CityType[]> {
  try {
    const cities = await City.find().limit(throttledLimit(limit, 40)); // Apply limit or default to 10
    return cities;
  } catch (error) {
    throw new Error(errorHandler(error));
  }
}

export default getAirlineService;
