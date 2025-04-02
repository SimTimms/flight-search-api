import { FlightType, FlightFilter } from "../../../../types";
import Flight from "../../../models/flightModel";
import errorHandler from "../../../../utils/errorHandler";
import buildConditionalQuery from "../../../../utils/buildConditionalQuery";
import throttledLimit from "../../../utils/throttledLimit";
import {
  validateFlightFilter,
  validateTotalCo2Emission,
} from "../../../validators";
import { getCachedData, setCachedData } from "../../../../redis/helpers";

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

const DEFAULT_LIMIT = 40; // Default limit for the number of airlines to fetch
const CACHE_EXPIRATION = 3600; // Cache expiration time in seconds (1 hour)

async function filterFlightsService(
  filter: FlightFilter,
  limit?: number
): Promise<FlightType[] | null> {
  try {
    // Validate filter input
    validateFlightFilter(filter);
    //Construct a conditional query based on the filter object
    // Exclude fields that require non-standard handling
    const excludeFields = [
      "numberOfPassengers",
      "departureDateTime",
      "arrivalDateTime",
    ];
    const conditionalQuery: { [key: string]: any } = buildConditionalQuery(
      filter,
      excludeFields
    );
    const filteredQueryByDateTime = {
      ...conditionalQuery,
      departureDateTime: {
        $gte: new Date(filter.departureDateTime),
        $lte: new Date(filter.arrivalDateTime),
      },
    };

    const cacheKey = `filterFlightsService:${JSON.stringify(filteredQueryByDateTime)}`;
    console.log("Filter:", cacheKey);

    const cachedData = await getCachedData(cacheKey);
    if (cachedData) {
      console.log("Filter:", JSON.parse(cachedData));

      return JSON.parse(cachedData);
    }

    const flights = await Flight.find(filteredQueryByDateTime)
      .limit(throttledLimit(limit, DEFAULT_LIMIT))
      .populate("airline")
      .populate("departureCity")
      .populate("arrivalCity");
    console.log("Filter:", flights);

    //Calculate the total CO2 emission for each flight based on the number of passengers
    const enrichedFlights = flights.map((flight) => {
      return {
        ...flight.toObject(),
        totalCo2Emission: validateTotalCo2Emission(
          flight.co2Emission,
          filter.numberOfPassengers
        ),
        numberOfPassengers: filter.numberOfPassengers,
      };
    });

    await setCachedData(
      cacheKey,
      JSON.stringify(enrichedFlights),
      CACHE_EXPIRATION
    );

    return enrichedFlights;
  } catch (error) {
    throw new Error(errorHandler(error));
  }
}

export default filterFlightsService;
