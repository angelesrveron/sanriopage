
import { getOneProductDB } from '@/app/actions';
import ProductSingle from '@/app/components/ProductSingle/ProductSingle.js'

//El componente es asíncrono,
//lo que significa que puede realizar operaciones asíncronas como llamadas a APIs o bases de datos.
//Recibe un objeto params como prop, que contiene el ID del producto a mostrar.
const Product = async ({ params }) => {
  //Extrae el ID del producto del objeto params.
  const { id } = params;

  //Llama a la función getOneProductDB con el ID del producto como argumento.
//Espera la respuesta de la base de datos y la almacena en la variable response.
  const response = await getOneProductDB(id);

  //Retorna el componente ProductSingle, pasándole el objeto product obtenido de la base de datos como prop.
  return <ProductSingle product={response.product} />
  
 
  
};

export default Product;
