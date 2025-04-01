const formulaConfig = {
  standardEmissionFactor: 0.2548, // kg CO2 per km per person
  internationalFactor: 2, // International travel emissions are higher than domestic flights
  internationalThreshold: 300, // km greater than this is considered international
};

/**
 * Calculates the CO2 emissions based on the given distance.
 *
 * The formula applies an adjustment factor depending on whether the distance
 * exceeds a specified international threshold. If the distance is greater than
 * the threshold, an international adjustment factor is used; otherwise, a standard
 * emission factor is applied.
 *
 * @param distance - The distance traveled in kilometers. Must be a positive value.
 * @returns The calculated CO2 emissions in kilograms.
 * @throws {Error} If the distance is not a positive value.
 */

const co2EmissionFormula = (distance: number): number => {
  if (distance <= 0) {
    throw new Error("Distance must be a positive value");
  }

  const internationalAdjustment =
    distance > formulaConfig.internationalThreshold
      ? formulaConfig.internationalFactor
      : formulaConfig.standardEmissionFactor;

  const co2Emission = distance * internationalAdjustment;
  return co2Emission;
};

export default co2EmissionFormula;
