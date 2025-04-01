import { ObjectId } from "mongodb";

export type GeoJSONInput = {
  type: string;
  coordinates: number[];
};

export type CityInput = {
  cityName: string;
  coordinates: GeoJSONInput;
};

export type AirlineType = {
  _id: ObjectId;
  airlineName: string;
};

export type CityType = {
  _id: ObjectId;
  cityName: string;
  coordinates: GeoJSONInput;
};

export type FlightType = {
  _id: ObjectId;
  flightNumber: string;
  departureDateTime: string;
  arrivalDateTime: string;
  airline: ObjectId;
  price: number;
};
