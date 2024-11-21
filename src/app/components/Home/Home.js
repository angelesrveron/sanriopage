'use client'
import Image from "next/image";
import styles from "./Home.module.css";
import Link from "next/link";
import { gsap } from 'gsap';
import { useEffect } from 'react';

const Home = () => {
  
  useEffect(() => {
    gsap.from('.animate', {
      y: '0',
      opacity: 0,
      duration: 1.25,
      ease: 'circ.in',
      stagger: 0.3,
    })
    gsap.to('.animate', {
      y: '0',
      opacity: 1,
      duration: 1.25,
      ease: 'circ.in',
      stagger: 0.3,
    })
    const nube1 = document.querySelector('.nube1');
  const nube2 = document.querySelector('.nube2');

  gsap.to(nube1, {
    y: -90,
    duration: 1.2,
    ease: 'power1.inOut',
    repeat: -1,
    yoyo: true,
    delay: 0.5 // agregar un retraso para la primera nube
  });

  gsap.to(nube2, {
    y: -120, // cambiar la altura de la segunda nube
    duration: 1.2, // cambiar la duración de la segunda nube
    ease: 'power1.inOut', // cambiar la función de suavización de la segunda nube
    repeat: -1,
    yoyo: true,
    delay: 0.8 // agregar un retraso para la segunda nube
  });
}, [])

  return (
    <div className={`${styles.bg}  `}>
   
      
      <div className='flex justify-center items-center pt-10 animate'>
      <Image
            src={"/imgs/nube1.png"} 
            alt="history"
            width={70}
            height={400}
            className={`nube1 mr-4`}
          />
      <Link href={`/history`}>
        <div className={`${styles["categoria-history"]} `} >
          
        </div>
        </Link>
        <Link href={`/characters`}>
        <div className={`${styles["categoria-characters"]} `} >
        
          </div>
        </Link>
        <Link href={`/shop`}>

       <div className={`${styles.categoriashop} `} >
         
          </div>
        </Link>
        <Link href={`/own`}>

        <div className={`${styles["categoria-own"]} `} >
          
          </div>
        </Link>
        <Image
            src={"/imgs/nube2.png"} 
            alt="history"
            width={90}
            height={400}
            className={`nube2 ml-3`}
          />
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default Home;
