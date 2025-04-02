import City from "../graphql/models/cityModel";

// ====================
// ERROR HANDLER
// ====================
enum ErrorMessages {
  CITY_NAME_REQUIRED = "City name is required.",
}

// ====================
// GET CITY COORDINATES
// ====================
async function checkCityExists(cityName: string): Promise<boolean> {
  if (!cityName) {
    throw new Error(ErrorMessages.CITY_NAME_REQUIRED);
  }

  const city = await City.findOne({ cityName });

  return city ? true : false;
}

export default checkCityExists;
