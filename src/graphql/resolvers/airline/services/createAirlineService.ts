import Airline from "../../../models/airlineModel";
import { AirlineType } from "../../../../types";
/**
 * Service function to create a new airline.
 * @param input - The airline data to be created.
 * @returns The created airline object.
 * @throws An error if the creation process fails.
 */

async function createAirlineService(input: AirlineType): Promise<AirlineType> {
  try {
    const newAirline = new Airline(input);
    const savedAirline = await newAirline.save();
    return savedAirline;
  } catch (error: unknown) {
    console.error("Error creating airline:", error);
    throw error;
  }
}

export default createAirlineService;
