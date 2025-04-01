import City from "../graphql/models/cityModel";
import { CityType, GeoJSONInput } from "../types";
// ================
// ERROR HANDLER
// ================
enum ErrorMessages {
  CITY_NAME_REQUIRED = "City name is required.",
}

const errorHandler = (error: ErrorMessages) => {
  throw new Error(error);
};

// ================
// GET CITY COORDINATES
// ================

async function checkCityExists(cityName: string): Promise<boolean> {
  if (!cityName) {
    errorHandler(ErrorMessages.CITY_NAME_REQUIRED);
  }
  const existingCity = await City.findOne({
    cityName: cityName,
  });

  console.log("existingCity", existingCity);
  return existingCity ? true : false;
}

export default checkCityExists;
