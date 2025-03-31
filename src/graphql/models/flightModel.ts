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
    ref: "Airline",
  },
  price: {
    type: Number,
    required: true,
  },
});

const Flight = mongoose.model("Flight", flightSchema);
export default Flight;
