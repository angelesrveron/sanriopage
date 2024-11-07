import Link from 'next/link';
import Image from 'next/image';
import styles from './BusquedaCategorias.module.css'
import React from 'react'

const BusquedaCategorias = () => {
  return (
    <div>
    <h1 className={'text-3xl font-bold flex justify-center  mb-10 tracking-tight'}>Búsqueda por categorías</h1>

    <div className={`${styles["contenedor-categ"]} `}>
       <div className={`${styles["categorias"]} `}>
       <div style={{borderRadius: '10px 10px 0 0', overflow: 'hidden'}}>    
       <Image
    src={`/imgs/food.jpg`}
    width={2000}
    height={2000}
    style={{ width: '200px', height: '120px'}} 
    alt='hero'
  />
  </div>
  <p>Comida</p>
  <button>VER PRODUCTOS</button>
 
       </div>
       <div className={`${styles["categorias"]} `}>
       <div style={{borderRadius: '10px 10px 0 0', overflow: 'hidden'}}>    
       <Image
    src={`/imgs/toys.jpg`}
    width={2000}
    height={2000}
    style={{ width: '200px', height: '120px'}} 
    alt='hero'
  />
  </div>
  <p>Juguetes</p>
  <button>VER PRODUCTOS</button>
 
       </div> 
       <div className={`${styles["categorias"]} `}>
       <div style={{borderRadius: '10px 10px 0 0', overflow: 'hidden'}}>    
       <Image
    src={`/imgs/hygiene.jpg`}
    width={2000}
    height={2000}
    style={{ width: '200px', height: '120px'}} 
    alt='hero'
  />
  </div>
  <p>Higiene</p>
  <button>VER PRODUCTOS</button>
 
       </div>
    </div>
    </div>
  )
}

export default BusquedaCategorias