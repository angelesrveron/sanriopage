import ProductCard from '@/app/components/ProductCard/ProductCard.js';
import { getAllProductsDB } from '@/app/actions';
import styles from './ProductsGrid.module.css'
import Image from 'next/image';

export default async function ProductsGrid() {
  const response = await getAllProductsDB()
  return (
    <div className={`${styles["all"]}  flex flex-col justify-center items-center`}>
      
    <div className={`${styles["section"]}  `}>
      
        <Image
        src={`/imgs/kittyshop.png`}
        alt='kittyshop'
        width={150}
        height={300}
        style={{height: 180, width: 200, margin:"0 auto"}}
      />
      <div className={`${styles["contenedor"]} `}>
    
      <div className={`${styles["contenedor-p"]} `}>
     
        <h2 className='text-blue-800  flex justify-center mt-5 mb-10 tracking-tight font-modak'>Tienda</h2>
        <div className={`${styles["contenedor-grid"]} `}>
          {response.products && response.products.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
        </div>
        </div>
       
    </div>
    </div>
  );
}
