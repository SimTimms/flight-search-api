import mongoose, { Schema } from "mongoose";

const flightSchema = new Schema({
  flightNumber: {
    type: String,
    required: true,
  },
  departureDateTime: {
    type: String,
    required: true,
  },
  arrivalDateTime: {
    type: String,
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
});

const Flight = mongoose.model("Flight", flightSchema);
export default Flight;
