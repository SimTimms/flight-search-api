import mongoose, { Schema } from "mongoose";

const airlineSchema = new Schema({
  airlineName: {
    type: String,
    required: true,
  },
});

const Airline = mongoose.model("Airline", airlineSchema);
export default Airline;
