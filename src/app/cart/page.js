import ProductsCheckout from "@/app/components/Cart/ProductsCheckout";
import Checkout from "@/app/components/Checkout/Checkout";
const Cart = () => {
    return(
        <section>
          <div className="flex">
          <Checkout />
          <ProductsCheckout />
          </div>
            </section>
        
    )
}

export default Cart

//pagina que no es use client corre del lado del servidor