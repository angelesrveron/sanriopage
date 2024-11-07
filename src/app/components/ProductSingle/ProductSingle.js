import React from 'react'
import Image from 'next/image';
import AddToCart from '@/app/components/AddToCart/AddToCart.js';
import styles from './ProductSingle.module.css'

const ProductSingle = ({product}) => {
    const { image, name, price, _id } = product;
  return (
    <div className={'flex justify-center items-start'}>
        <div className={`${styles["contenedor-img"]}  `}>
       
    <Image
        src={`/imgs/products/${product.image}`}
        alt={product.name}
        width={600}
        height={0}
         layout="responsive"
         objectFit="cover"
        className={styles["imagen"]}
      />
</div>
     <div className={`${styles["contenedor-info"]}  `}>
     <h3 >{product.category}</h3>
      <h1>{product.name}</h1>
      <h2>Descripcion</h2>
      <p>{product.description}</p>
      <button
    className={`${styles["button-share"]} `}
    
  >
    <Image
      src={`/imgs/share.png`}
      width={0}
      height={0}
      sizes='100vw'
      style={{ width: "15px", height: "auto", marginRight: "7px" }} // optional
      alt='hero'
    />
    Compartir
  </button>
      <AddToCart className={'flex justify-center'} name={name} price={price} image={image} id={_id}  />
      <div className='flex  mt-3'>
      <div className={`${styles["pago"]} `}>
      <p>Métodos de pago</p>
      <Image
      src={'/imgs/formas-pago.png'}
      width={0}
      height={0}
      sizes='100vw'
      style={{ width: "230px", height: "auto", marginBottom:"20px", marginRight:"10px"}} // optional
      alt='hero'
    />
    </div>
       
  
      </div>
      
      </div>
    </div>
  )
}

export default ProductSingle
