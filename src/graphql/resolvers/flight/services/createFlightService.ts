import Flight from "../../../models/flightModel";
import City from "../../../models/cityModel";
import errorHandler from "../../../../utils/errorHandler";
import { FlightInput, FlightType, CityType } from "../../../../types";
import { haversineFormula, co2EmissionFormula } from "../../../../utils/";
/**
 * Creates a new flight record in the database.
 *
 * @param input - An object of type `FlightType` containing the details of the flight to be created.
 * @returns A promise that resolves to the created flight object of type `FlightType`.
 * @throws Will throw an error if the flight creation fails, with the error being processed by the `errorHandler`.
 */

async function createFlightService(input: FlightInput): Promise<FlightType> {
  try {
    const [departureCity, arrivalCity]: [CityType | null, CityType | null] =
      await Promise.all([
        City.findById(input.departureCity),
        City.findById(input.arrivalCity),
      ]);

    if (!departureCity || !arrivalCity) {
      throw new Error("One or both cities could not be found.");
    }

    const distance: number = haversineFormula(
      departureCity.coordinates.coordinates,
      arrivalCity.coordinates.coordinates
    );
    const co2Emission = co2EmissionFormula(distance);

    const newFlight = new Flight({
      ...input,
      distance,
      co2Emission,
    });

    const savedFlight = await newFlight.save();
    return await savedFlight;
  } catch (error) {
    throw new Error(errorHandler(error));
  }
}

export default createFlightService;
