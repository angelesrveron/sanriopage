'use client';
import { useAppContext } from '@/app/contexts/AppContext';
import Link from 'next/link';
import Image from 'next/image';
import { FaCartShopping } from 'react-icons/fa6';
import styles from './Navbar.module.css'

export default function Navbar() {
  const { cartLength } = useAppContext();
  return (
    <div className={styles.contenedorNav}>
      <div className={styles.logoContenedor}>
        <Link href={`/`}>
          <Image
            src={"/imgs/logo.png"}
            alt="history"
            width={200}
            height={400}
            className={styles.logo}
          />
        </Link>
      </div>
      <div className={styles.iconosContenedor}>
        <Link href={`/cart`}>
          <div className='relative'>
            <FaCartShopping size={30} style={{ color: '#1C63B7' }}  />
            {cartLength > 0 && (
              <span className='absolute top-3.5 left-5 flex items-center justify-center bg-white text-pink-400 rounded-full w-2 h-2 p-3 text-sm'>
                {' '}
                {cartLength}
              </span>
            )}
          </div>
        </Link>
       
      </div>
    </div>
  );
}
