import Inner from '@/app/components/Inner';
import ProductCard from '@/app/components/ProductCard/ProductCard.js';
import { getAllProductsDB } from '@/app/actions';
import styles from './ProductosDestacados.module.css'

export default async function ProductosDestacados() {
  const response = await getAllProductsDB()
  return (
    <section className='flex flex-wrap'>
      <Inner>
      
      <div className={`${styles["contenedor-p"]} `}>
        <h1 className='text-3xl font-bold flex justify-center mt-10 mb-10 tracking-tight'>Productos Destacados</h1>
        <div className={`${styles["contenedor-grid"]} `}>
        {response.products && response.products.slice(0, 4).map((item, index) =>(
            <ProductCard key={index} item={item} />
          ))}
        </div>
        </div>
        
       
      </Inner>
    </section>
  );
}