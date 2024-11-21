import React from 'react'
import Image from 'next/image';
import AddToCart from '@/app/components/AddToCart/AddToCart.js';
import Footer from '@/app/components/Footer/Footer';
import Link from 'next/link';
import { GoChevronLeft } from "react-icons/go";

import styles from './ProductSingle.module.css';

const ProductSingle = ({product}) => {
    const { image, name, price, _id } = product;
  return (
    <div className={styles.productbg}>
    <div className={styles.contenedorp}>
    <Link href={`/shop`}><GoChevronLeft  size={60} style={{ color: '#1C63B7', marginLeft: '10px', paddingTop: '10px' }}  /></Link>

    <div className={'flex justify-center  items-start pb-28 pt-5'}>

        <div className={`${styles["contenedor-img"]}  `}>
       
    <Image
        src={`/imgs/shop/${product.image}`}
        alt={product.name}
        width={600}
        height={0}
         layout="responsive"
         objectFit="cover"
        className={styles["imagen"]}
      />
</div>
     <div className={`${styles["contenedor-info"]}  `}>
     <h3>{product.category}</h3>
      <h1>{product.name}</h1>
      <h2 className='text-2xl mb-5'>{product.price + "$"}</h2>
      <h2 className='mb-2'>Descripción</h2>
      <p>{product.description}</p>
   
    
      <AddToCart className={'flex justify-center'} name={name} price={price} image={image} id={_id}  />
      
      
      </div>
    </div>
    </div>
    <Footer />

    </div>
  )
}

export default ProductSingle
