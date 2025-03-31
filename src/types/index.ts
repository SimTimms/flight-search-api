export type AirlineType = {
  _id: string;
  airlineName: string;
};

export type FlightType = {
  _id: string;
  flightNumber: string;
  departureDateTime: string;
  arrivalDateTime: string;
  airline: AirlineType;
  price: number;
};
