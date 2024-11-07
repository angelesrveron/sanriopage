'use client'
import Inner from '@/app/components/Inner';
import ProductCard from '@/app/components/ProductCard/ProductCard.js';
import { getAllProductsDB } from '@/app/actions';
import styles from './ProductsGrid.module.css';
import { useState, useEffect } from 'react';

export default function ProductsGrid({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getAllProductsDB(category);
      setProducts(response.products);
    };
    fetchProducts();
  }, [category]);

  return (
    <section className='flex flex-wrap'>
      <Inner>
        <div className={`${styles["contenedor-p"]} `}>
          <h2 className='text-3xl font-bold flex justify-center mt-10 mb-10 tracking-tight'>Shop</h2>
          <div className={`${styles["contenedor-grid"]} `}>
            {products && products.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
        </div>
      </Inner>
    </section>
  );
}