import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema({
  typeProperty: {
    require: true,
    type: String,
    enum: ["casa", "departamento", "terreno", "local"],
  },
  typeTransaction: {
    require: true,
    type: String,
    enum: ["venta", "alquiler"],
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
    type: String,
  },
});

const Property = mongoose.model('Property', propertySchema);

export default Property;
