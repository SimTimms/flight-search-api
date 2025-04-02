import mongoose, { Schema } from "mongoose";

const flightSchema = new Schema({
  flightNumber: {
    type: String,
  },
  departureDateTime: {
    type: Date,
  },
  arrivalDateTime: {
    type: Date,
  },
  price: {
    type: Number,
  },
  distance: {
    type: Number,
  },
  co2Emission: {
    type: Number,
  },
  totalCo2Emission: {
    type: Number,
  },
  numberOfPassengers: {
    type: Number,
  },
  airline: {
    type: Schema.Types.ObjectId,
    ref: "Airline",
  },
  departureCity: {
    type: Schema.Types.ObjectId,
    ref: "City",
  },
  arrivalCity: {
    type: Schema.Types.ObjectId,
    ref: "City",
  },
});

const Flight = mongoose.model("Flight", flightSchema);
export default Flight;
