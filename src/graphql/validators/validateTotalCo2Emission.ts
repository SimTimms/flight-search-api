// Function to validate and calculate the total CO2 emission
/**
 * Validates and calculates the total CO2 emission based on the CO2 emission per passenger
 * and the number of passengers. If any input is invalid, it defaults to returning 0.
 *
 * @param co2Emission - The CO2 emission per passenger. Can be a number, null, or undefined.
 * @param numberOfPassengers - The number of passengers. Can be a number, null, or undefined.
 * @returns The total CO2 emission as a number. Returns 0 if any input is invalid.
 */
const validateTotalCo2Emission = (
  co2Emission: number | null | undefined, // CO2 emission per passenger
  numberOfPassengers: number | null | undefined // Number of passengers
): number => {
  // Check if either co2Emission or numberOfPassengers is null, undefined, or invalid
  if (
    !co2Emission || // CO2 emission is null or undefined
    !numberOfPassengers || // Number of passengers is null or undefined
    isNaN(co2Emission) || // CO2 emission is not a valid number
    isNaN(numberOfPassengers) || // Number of passengers is not a valid number
    numberOfPassengers < 0 // Number of passengers is negative
  ) {
    return 0; // Default to 0 if any input is invalid
  }
  // Calculate and return the total CO2 emission
  return numberOfPassengers * co2Emission;
};

export default validateTotalCo2Emission;
