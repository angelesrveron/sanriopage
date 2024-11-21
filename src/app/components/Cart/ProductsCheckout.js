'use client'

import { useAppContext } from "@/app/contexts/AppContext"
import Image from "next/image"
import styles from "./ProductsCheckout.module.css"
const ProductsCheckout = () => {
    const {cart, cartTotal, handleRemoveProduct} = useAppContext()
  return (
    <div className={styles["contenedor"]}>
        <div>
        <h1 className="text-4xl font-modak mb-6">Tu carrito </h1>

            {cart.map(product =>(
                <div key={product.id} className="mb-2 pt-4 flex  items-center border-t-2  border-pink-400 ">

                    <div className="flex flex-col ">
                        <Image src={`/imgs/shop/${product.image}`} alt={product.name} width={100} height={100}/>
                        
                    </div>
                    <div>
                    <h3 className="  text-xl font-bold">{`${product.quantity} x ${product.name}`}</h3>
                    <p>{`$ ${product.price * product.quantity}`}</p>
                        <button className={styles["button"]} onClick={() => handleRemoveProduct(product.id)}>Remove</button>
                    </div>
             

                </div>
            ))}
        </div>
        <div className="border-t-2  border-pink-400 mt-5 flex justify-between ">
        <p className="w-2/4 ml-4 mt-2 text-2xl font-semibold">Total: </p>
        <p className="w-2/4 ml-4 mt-2 text-2xl font-semibold"> {`$ ${cartTotal()}`}</p>
        </div>
    </div>
  )
}

export default ProductsCheckout