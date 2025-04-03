/** AI GENERATED CODE - REVIEWED BY TIM SIMMS
 * Calculates the great-circle distance between two points on the Earth's surface
 * using the Haversine formula. The distance is returned in kilometers.
 *
 * @param destinationCoordinates - An array containing the latitude and longitude
 * of the destination point in decimal degrees. Example: [latitude, longitude].
 * If null, an error will be thrown.
 * @param originCoordinates - An array containing the latitude and longitude
 * of the origin point in decimal degrees. Example: [latitude, longitude].
 * If null, an error will be thrown.
 * @returns The distance between the two points in kilometers.
 * @throws Will throw an error if either `destinationCoordinates` or `originCoordinates` is null.
 */

const haversineFormula = (
  destinationCoordinates: number[] | null,
  originCoordinates: number[] | null
): number => {
  if (!destinationCoordinates || !originCoordinates) {
    throw new Error("Invalid coordinates provided.");
  }
  const earthRadius = 6371; // Radius of the Earth in kilometers
  const [lat1, lon1] = originCoordinates;
  const [lat2, lon2] = destinationCoordinates;
  const deltaLat = lat2 - lat1;
  const deltaLon = lon2 - lon1;

  //This is an AI generate snippet, triple checked to ensure it is correct
  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadius * c;
};

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export default haversineFormula;
