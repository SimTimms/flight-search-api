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
  flightNumber: string;
  departureDateTime: Date;
  arrivalDateTime: Date;
  airline: ObjectId;
  price: number;
  distance: number;
  departureCity: ObjectId;
  arrivalCity: ObjectId;
};
