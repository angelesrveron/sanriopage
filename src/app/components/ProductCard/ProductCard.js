import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css'

const ProductCard = ({ item }) => {
  return (
    <div >
      <div className={`${styles["contenedor-product"]} `}>
    
      <Image
        src={`/imgs/products/${item.image}`}
        alt={item.name}
        width={150}
        height={300}
        style={{height: 170, width: 190, margin:"0 auto" }}
      />
      
      <div className='flex flex-col justify-start'>
      <h3 className='mb-2'>{item.name}</h3>
      <div className='flex ml-5 items-center'>
      <p className='font-semibold text-sm'>{item.price}</p>

      <Link href={`/product/${item._id}`}><button>Comprar</button></Link>
      </div>
      </div>
      
    </div>
    </div>
  );
};

export default ProductCard;
