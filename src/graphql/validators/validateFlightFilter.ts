/**
 * Validates the flight filter object to ensure all required fields are present
 * and have valid values. Throws an error if any validation fails.
 *
 * @param filter - The flight filter object to validate. Expected to contain:
 *   - departureDateTime: A valid datetime string for the departure.
 *   - arrivalDateTime: A valid datetime string for the arrival.
 *   - numberOfPassengers: A positive number representing the number of passengers.
 *
 * @throws Will throw an error if:
 *   - departureDateTime or arrivalDateTime is missing.
 *   - departureDateTime or arrivalDateTime is not a valid datetime.
 *   - numberOfPassengers is not a number or is not a positive number.
 */
const validateFlightFilter = (filter: any): void => {
  // Check if both departureDateTime and arrivalDateTime are provided
  if (!filter.departureDateTime || !filter.arrivalDateTime) {
    throw new Error(
      "Both departureDateTime and arrivalDateTime must be provided"
    );
  }

  // Parse the datetime strings into Date objects
  const departureDate = new Date(filter.departureDateTime);
  const arrivalDate = new Date(filter.arrivalDateTime);

  // Validate the departureDateTime format
  if (isNaN(departureDate.getTime())) {
    throw new Error("Invalid datetime format for departureDateTime ");
  }

  // Validate the arrivalDateTime format
  if (isNaN(arrivalDate.getTime())) {
    throw new Error("Invalid datetime format for arrivalDateTime");
  }

  // Validate that numberOfPassengers is a number
  if (isNaN(filter.numberOfPassengers)) {
    throw new Error("numberOfPassengers must be a number");
  }

  // Validate that numberOfPassengers is a positive number
  if (!filter.numberOfPassengers || filter.numberOfPassengers <= 0) {
    throw new Error("numberOfPassengers must be a positive number");
  }
};

export default validateFlightFilter;
