//Importa la biblioteca Mongoose y su clase Schema.
import mongoose, { Schema } from "mongoose";

//Crea un nuevo esquema para el modelo de datos de productos.
const productSchema = new Schema({
  name: { type: String, required: true },
});

//Verifica si el modelo Product ya está definido en mongoose.models. 
//Si no existe, crea un nuevo modelo con el nombre Product y el esquema productSchema. 
//Si ya existe, utiliza el modelo existente.
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
//model representacion de los campos que va a haber en un producto es el modelo que llamamos, la representacion logica de un producto en nuestra base de datos