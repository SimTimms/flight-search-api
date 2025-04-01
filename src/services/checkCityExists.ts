import City from "../graphql/models/cityModel";

// ====================
// ERROR HANDLER
// ====================
enum ErrorMessages {
  CITY_NAME_REQUIRED = "City name is required.",
}

const throwError = (message: ErrorMessages): never => {
  throw new Error(message);
};

// ====================
// GET CITY COORDINATES
// ====================
async function checkCityExists(cityName: string): Promise<boolean> {
  if (!cityName) {
    throwError(ErrorMessages.CITY_NAME_REQUIRED);
  }

  const city = await City.findOne({ cityName });

  return city ? true : false;
}

export default checkCityExists;
