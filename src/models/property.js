import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema({
  typeProperty: {
    require: true,
    type: String,
    enum: ["Casa", "Departamento", "Terreno", "Local"],
  },
  typeTransaction: {
    require: true,
    type: String,
    enum: ["Venta", "Alquiler"],
  },
  bathroom: {
    type: Number,
  },
  bedroom: {
    type: Number,
  },

  location: {
    require: true,
    type: String,
    maxlenght: 100,
  },
  description: {
    require: true,
    type: String,
  },
  map: {
    type: String,
  },
  images: {
    type: [String], 
  },
});

const Property = mongoose.model("Property", propertySchema);

export default Property;
