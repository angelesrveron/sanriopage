'use client';

import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [imagenCargada, setImagenCargada] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);

    const { innerHeight } = window;

    const imgRef = document.getElementById('image');
    const textRef = document.getElementById('text');

    if (imagenCargada) {
      gsap.fromTo(
        imgRef,
        { 
          scale: 1, 
          opacity: 2, 
          transformOrigin: '50% 20%' 
        },
        {
          scale: 2, 
          opacity: 0,
          scrollTrigger: {
            trigger: '#image',
            start: 'top top',
            end: `+=${innerHeight * 0.5}`,
            scrub: 1,
            onEnter: () => {
              gsap.to(textRef, { scale: 2, opacity: 1, duration: 1 });
            },
            onEnterBack: () => {
              gsap.to(textRef, { opacity: 0, duration: 1 });
              gsap.to(imgRef, { scale: 1, opacity: 1, duration: 0 });
            },
          },
        }
      );
    }
  }, [imagenCargada]);

  return (
    <div style={{ overflowX: 'hidden' }}>
      <div >
        <Image
          id="image"
          src="/desk.jpg"
          alt="Next.js logo"
          width={2000}
          height={0}
          style={{ width: "100%", objectFit: "cover" }}
          onLoad={() => setImagenCargada(true)}
        />
      </div>
      <div id="text-container" style={{ height: '100vh', background: '#e0e0e0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', opacity: 0 }}>
        <p id="text">Hello world...</p>
      </div>
    </div>
  );
};

export default Home;