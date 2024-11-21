import ProductsCheckout from "@/app/components/Cart/ProductsCheckout";
import CartForm from "@/app/components/CartForm/CartForm";
import Footer from "@/app/components/Footer/Footer";
const Cart = () => {
    return(
          <div>
          <div className="flex justify-center  ">

          <CartForm />
          <ProductsCheckout />
          </div>

          <Footer />

          </div>
        
    )
}

export default Cart

//pagina que no es use client corre del lado del servidor