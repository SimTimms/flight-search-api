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

export type FlightFilter = {
  flightNumber: string;
  departureDateTime: Date; // ISO 8601 format
  arrivalDateTime: Date; // ISO 8601 format
  departureCity: ObjectId;
  arrivalCity: ObjectId;
  airline: ObjectId;
  price: number;
  numberOfPassengers: number;
};

export type FlightInput = {
  flightNumber: string;
  departureDateTime: Date; // ISO 8601 format
  arrivalDateTime: Date; // ISO 8601 format
  departureCity: ObjectId;
  arrivalCity: ObjectId;
  airline: ObjectId;
  price: number;
  numberOfPassengers: number;
};

export type FlightType = {
  _id: ObjectId;
  flightNumber?: string | null | undefined;
  departureDateTime?: Date | null | undefined;
  arrivalDateTime?: Date | null | undefined;
  airline?: ObjectId | null | undefined;
  price?: number | null | undefined;
  distance?: number | null | undefined;
  departureCity?: ObjectId | null | undefined;
  arrivalCity?: ObjectId | null | undefined;
  co2Emission?: number | null | undefined;
  totalCo2Emission?: number | null | undefined;
};
