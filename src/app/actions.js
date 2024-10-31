import Product from "@/app/models/Product";
import dbConnect from "@/app/database/dbConnect";

export async function getAllProductsDB() {
  await dbConnect();
  try {
    const products = await Product.find().sort({ name: "asc" });
    console.log("products", products);
    return { products: JSON.parse(JSON.stringify(products)) };
  } catch (error) {
    console.log("Error: ", error.message);
    return { products: [], category: null };
  }
}
