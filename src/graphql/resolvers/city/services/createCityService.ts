import City from "../../../models/cityModel";
import { CityType, GeoJSONInput } from "../../../../types";
import errorHandler from "../../../../utils/errorHandler";
import getCityCoordinates from "../../../../services/getCityCoordinates";
import checkCityExists from "../../../../services/checkCityExists";
import { validateCityName } from "../../../validators";

async function createCityService(input: CityType): Promise<CityType | null> {
  try {
    validateCityName(input.cityName);
    const cityExists = await checkCityExists(input.cityName);
    if (cityExists) {
      throw new Error("City already exists");
    }
    if (!cityExists) {
      const cityCoordinates: GeoJSONInput = await getCityCoordinates(
        input.cityName,
        process.env.GOOGLE_MAPS_API_KEY as string
      );
      const newCity = new City({
        cityName: input.cityName,
        coordinates: cityCoordinates,
      });
      const saveCity = await newCity.save();
      return saveCity;
    }
  } catch (error) {
    throw new Error(errorHandler(error));
  }
  return null;
}

export default createCityService;
