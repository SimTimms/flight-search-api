import mongoose, { Schema } from "mongoose";

const flightSchema = new Schema({
  flightNumber: {
    type: String,
    required: true,
  },
  departureDateTime: {
    type: Date,
    required: true,
  },
  arrivalDateTime: {
    type: Date,
    required: true,
  },
  airline: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Airline",
  },
  price: {
    type: Number,
    required: true,
  },
  departureCity: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "City",
  },
  arrivalCity: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "City",
  },
  distance: {
    type: Number,
    required: true,
  },
  co2Emission: {
    type: Number,
    required: true,
  },
  totalCo2Emission: {
    type: Number,
  },
  numberOfPassengers: {
    type: Number,
  },
});

const Flight = mongoose.model("Flight", flightSchema);
export default Flight;
