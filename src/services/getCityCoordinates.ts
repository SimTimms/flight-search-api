import { GeoJSONInput } from "../types/index";
import axios from "axios";

// ================
// ERROR HANDLER
// ================
enum ErrorMessages {
  CITY_NAME_REQUIRED = "City name is required.",
  GOOGLE_API_KEY_NOT_DEFINED = "GOOGLE_API_KEY is not defined in environment variables.",
}

const errorHandler = (error: ErrorMessages) => {
  throw new Error(error);
};

// ================
// GET CITY COORDINATES
// ================

async function getCityCoordinates(cityName: string): Promise<GeoJSONInput> {
  if (!cityName) {
    errorHandler(ErrorMessages.CITY_NAME_REQUIRED);
  }
  if (!process.env.GOOGLE_API_KEY) {
    errorHandler(ErrorMessages.GOOGLE_API_KEY_NOT_DEFINED);
  }

  const cityCoordinates = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=${process.env.GOOGLE_API_KEY}`
  );

  const structuredCoordinates: GeoJSONInput = {
    type: "Point",
    coordinates: [
      cityCoordinates.data.results[0].geometry.location.lng,
      cityCoordinates.data.results[0].geometry.location.lat,
    ],
  };
  return structuredCoordinates;
}

export default getCityCoordinates;
