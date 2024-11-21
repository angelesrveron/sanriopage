import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
//model representacion de los campos que va a haber en un producto es el modelo que llamamos, la representacion logica de un producto en nuestra base de datos