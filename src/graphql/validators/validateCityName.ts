const validateCityName = (
  cityName: string | null | undefined // CO2 emission per passenger
): void => {
  // Check if either co2Emission or numberOfPassengers is null, undefined, or invalid
  if (!cityName || cityName.trim() === "" || cityName.length < 3) {
    throw new Error("City name is invalid"); // Default to 0 if any input is invalid
  }
};

export default validateCityName;
