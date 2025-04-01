import mongoose from "mongoose";

const GeoJSONSchema = new mongoose.Schema({
  type: { type: String, required: true },
  coordinates: { type: [Number], required: true },
});

const citySchema = new mongoose.Schema({
  cityName: {
    type: String,
    required: true,
  },
  coordinates: { type: GeoJSONSchema, required: true },
});

export default mongoose.model("City", citySchema);
