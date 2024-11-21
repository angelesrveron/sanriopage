// 1. Directiva de Next.js para ejecutar código en el cliente
"use client";
//Context se usa principalmente cuando algunos datos tienen que ser accesibles por muchos componentes en diferentes niveles de anidamiento. 
// 2. Importar funciones de React
import { createContext, useState, useContext } from "react";

// 3. Crear contexto para compartir estado entre componentes
const AppContext = createContext(undefined);

// 4. Componente que proporciona el contexto a otros componentes
export const AppContextProvider = ({ children }) => {
  // 5. Estado local para almacenar carrito de compras
  const [cart, setCart] = useState([]);

  // 6. Calcular longitud del carrito
  const cartLength = cart.length;

  // 7. Función para agregar producto al carrito
  const handleAddToCart = (name, price, image, id, quantity) => {
    // 8. Buscar producto existente en carrito
    const existingProduct = cart.find((item) => item.id === id);

    // 9. Actualizar cantidad si producto existe, de lo contrario agregar producto
    if (existingProduct) {
      existingProduct.quantity += quantity;
      return setCart([...cart]);
    } else {
      const product = {
        name,
        price,
        image,
        id,
        quantity,
      };
      setCart([...cart, product]);
    }
  };

  // 10. Función para eliminar producto del carrito
  const handleRemoveProduct = (id) => {
    const restProducts = cart.filter((product) => product.id !== id);
    setCart(restProducts);
  };

  // 11. Calcular total del carrito
  const cartTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  // 12. Devolver contexto con funciones y valores definidos
  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        cartLength,
        handleAddToCart,
        cartTotal,
        handleRemoveProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// 13. Hook para acceder al contexto
export const useAppContext = () => {
  // 14. Acceder al contexto utilizando useContext
  const context = useContext(AppContext);

  // 15. Verificar si contexto está definido
  if (!context) {
    throw new Error(`useAppContext debe ser utilizado dentro del provider`);
  }

  // 16. Devolver contexto
  return context;
};

// 17. Exportar contexto como valor predeterminado
export default AppContext;