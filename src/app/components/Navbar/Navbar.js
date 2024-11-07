'use client';
import { useAppContext } from '@/app/contexts/AppContext';
import Link from 'next/link';
import Image from 'next/image';
import { FaCartShopping, FaUser} from 'react-icons/fa6';
import styles from './Navbar.module.css'

export default function Navbar() {
  const { cartLength } = useAppContext();
  return (
    <div className={`${styles["contenedor-nav"]} h-20`}>
      <Link href={`/`}>
        <Image src={`/imgs/products/logo.png`} width={100} height={100} alt='Logo' style={{margin: 20}}/>
      </Link>
      <nav className={`${styles["contenedor-op"]}`}>
        <ul className='flex gap-8 pr-7 --roboto-mono'>
          <li>
            <Link href={`/shop`}>Shop</Link>
          </li>
          <li>
            <Link href={`/about`}>Nosotros</Link>
          </li>
         
        </ul>
        <Link href={`/cart`}>
        <div className='relative flex gap-7'>
          <FaCartShopping size={30} />
          <FaUser size={30} />
          
          {cartLength > 0 && (
            <span className=' absolute top-3.5 left-5 flex items-center justify-center bg-red-600 text-white rounded-full w-2 h-2 p-3 text-sm'>
              {' '}
              {cartLength}
            </span>
          )}
        </div>
      </Link>
      </nav>

    
    </div>
  );
}
