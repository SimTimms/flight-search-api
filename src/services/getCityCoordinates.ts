import { GeoJSONInput } from "../types/index";
import axios from "axios";

enum ErrorMessages {
  CITY_NAME_REQUIRED = "City name is required.",
  GOOGLE_API_KEY_NOT_DEFINED = "GOOGLE_API_KEY is not defined in environment variables.",
}

// ================
// GET CITY COORDINATES
// ================

async function getCityCoordinates(
  cityName: string,
  apiKey: string
): Promise<GeoJSONInput> {
  if (!cityName) {
    throw new Error(ErrorMessages.CITY_NAME_REQUIRED);
  }
  if (!process.env.GOOGLE_MAPS_API_KEY) {
    throw new Error(ErrorMessages.GOOGLE_API_KEY_NOT_DEFINED);
  }

  try {
    const cityCoordinates = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=${apiKey}`
    );

    console.log("City Coordinates:", cityCoordinates.data);

    const structuredCoordinates: GeoJSONInput = {
      type: "Point",
      coordinates: [
        cityCoordinates.data.results[0].geometry.location.lng,
        cityCoordinates.data.results[0].geometry.location.lat,
      ],
    };
    return structuredCoordinates;
  } catch (error) {
    throw new Error("Failed to fetch city coordinates.");
  }
}

export default getCityCoordinates;
