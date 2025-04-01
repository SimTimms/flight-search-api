import City from "../../../models/cityModel";
import errorHandler from "../../../../utils/errorHandler";
import { CityType } from "../../../../types";

async function getAirlineService(limit?: number): Promise<CityType[]> {
  try {
    const cities = await City.find().limit(limit || 10);
    return cities;
  } catch (error) {
    throw new Error(errorHandler(error));
  }
}

export default getAirlineService;
