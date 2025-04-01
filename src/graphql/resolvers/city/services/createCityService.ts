import City from "../../../models/cityModel";
import { CityType, GeoJSONInput } from "../../../../types";
import errorHandler from "../../../../utils/errorHandler";
import getCityCoordinates from "../../../../services/getCityCoordinates";
import checkCityExists from "../../../../services/checkCityExists";

async function createCityService(input: CityType): Promise<CityType> {
  try {
    const cityCoordinates: GeoJSONInput = await getCityCoordinates(
      input.cityName
    );

    const newCity = new City({
      cityName: input.cityName,
      coordinates: cityCoordinates,
    });

    const existingCity = await checkCityExists(input.cityName);
    if (existingCity) {
      throw new Error("City already exists.");
    }
    const saveCity = await newCity.save();
    return saveCity;
  } catch (error) {
    throw new Error(errorHandler(error));
  }
}

export default createCityService;
