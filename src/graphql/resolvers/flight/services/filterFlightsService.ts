import { FlightType, FlightFilterInput } from "../../../../types";
import Flight from "../../../models/flightModel";
import errorHandler from "../../../../utils/errorHandler";

/**
 * Retrieves a list of flights based on the provided filter criteria.
 *
 * @param filter - An object containing the filter criteria for querying flights.
 *                 Only properties with non-null and non-undefined values will be included in the query.
 * @param limit - An optional parameter to limit the number of flights returned.
 *                Defaults to 10 if not provided.
 * @returns A promise that resolves to an array of `FlightType` objects matching the filter criteria,
 *          or `null` if no flights are found.
 * @throws An error if the query fails, with the error handled by the `errorHandler` function.
 */

async function flightService(
  filter: FlightFilterInput,
  limit?: number
): Promise<FlightType[] | null> {
  try {
    //Construct a conditional query based on the filter object
    const conditionalQuery: { [key: string]: any } = Object.fromEntries(
      Object.entries(filter).filter(
        ([_, value]) => value !== undefined && value != null
      )
    );

    const flights = await Flight.find(conditionalQuery)
      .limit(limit || 10)
      .populate("airline")
      .populate("departureCity")
      .populate("arrivalCity");

    return flights;
  } catch (error) {
    throw new Error(errorHandler(error));
  }
}

export default flightService;
