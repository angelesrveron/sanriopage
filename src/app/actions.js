import Product from '@/app/models/Product'
import dbConnect from '@/app/database/dbConnect'


//La función obtiene todos los productos de la base de datos.
export async function getAllProductsDB() {
  //Llama a la función dbConnect para establecer la conexión con la base de datos.
//El await asegura que la conexión se establezca antes de continuar.
  await dbConnect();
  //Inicia un bloque try-catch para manejar errores.
  try {
    //Utiliza el modelo Product para buscar todos los productos en la base de datos con find().
    const products = await Product.find().sort({ name: "asc" });
   //Convierte los objetos de Mongoose en objetos JSON con JSON.parse(JSON.stringify(products))
    return { products: JSON.parse(JSON.stringify(products)) };
  } catch (error) {
    console.log("Error: ", error.message);
    return { products: [], category: null };
  }
}


export async function getOneProductDB(id) {
//siempre que usemos la base de datos llamar a dbconnect 
await dbConnect();
try {
  const product = await Product.findById(id)
  return {product: JSON.parse(JSON.stringify(product))}
} catch (error) {
  console.log(error);
  return null;
}

}


