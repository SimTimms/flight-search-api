export const validateFlightFilter = (filter: any): void => {
  if (!filter.departureDateTime || !filter.arrivalDateTime) {
    throw new Error(
      "Both departureDateTime and arrivalDateTime must be provided"
    );
  }
  const departureDate = new Date(filter.departureDateTime);
  const arrivalDate = new Date(filter.arrivalDateTime);

  if (isNaN(departureDate.getTime())) {
    throw new Error("Invalid datetime format for departureDateTime ");
  }

  if (isNaN(arrivalDate.getTime())) {
    throw new Error("Invalid datetime format for arrivalDateTime");
  }

  if (isNaN(filter.numberOfPassengers)) {
    throw new Error("numberOfPassengers must be a number");
  }
  if (!filter.numberOfPassengers || filter.numberOfPassengers <= 0) {
    throw new Error("numberOfPassengers must be a positive number");
  }
};

export const validateTotalCo2Emission = (totalCo2Emission: number): number => {
  if (isNaN(totalCo2Emission) || totalCo2Emission < 0) {
    return 0; // Default to 0 if NaN
  }
  return totalCo2Emission;
};
