"use client";
import Image from "next/image";
import styles from "./Historia.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const Historia = () => {
  const ref = useRef([]);
  ref.current = [];

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      ref.current.forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            left: 0,
            duration: 2,
            scrollTrigger: {
              trigger: el,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, []);

  const addtoRefs = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  return (
    <div className='overflow-x-hidden	'>
      <div className={styles.divSpace}>¿COMO COMIEZA TODO?</div>
      <div className={`${styles["box-container"]} `}>
        <div ref={addtoRefs} className={`${styles["box"]} flex ml-20`}>
          <Image
            src={"/imgs/creador.png"}
            alt='history'
            width={500}
            height={0}
          />
          <div className='flex-col'>
            <h1 className='text-5xl font-extrabold mb-5'>Shintaro Tsuji</h1>
            <h3 className='text-xl mb-3 font-semibold'>
              {" "}
              La creación de Sanrio
            </h3>
            <p className='mb-5'>
              En 1960, Tsuji fundó Sanrio, que originalmente se llamaba
              Yamanashi Silk Co. y se centraba en la producción de seda. Sin
              embargo, Tsuji pronto cambió el enfoque de la empresa hacia la
              creación de productos de consumo, como tarjetas de felicitación y
              regalos.
            </p>
          </div>
        </div>
        <div ref={addtoRefs} className={`${styles["box"]} flex  mt-16 mr-20`}>
          <div className='flex-col '>
            <h1 className='text-5xl font-extrabold mb-5'>El éxito de Sanrio</h1>

            <p>
              Bajo la dirección de Tsuji, Sanrio se convirtió en una de las
              empresas más exitosas de Japón. En 1974, Sanrio creó a Hello
              Kitty, que se convirtió en un personaje globalmente reconocido y
              ayudó a establecer a Sanrio como una líder en la industria de los
              personajes y los productos de licencia.
            </p>
          </div>
          <Image src={"/imgs/kitty.png"} alt='history' width={400} height={0} />
        </div>
        <div ref={addtoRefs} className={`${styles["box"]} flex ml-20`}>
          <Image
            src={"/imgs/kittyglobo.png"}
            alt='history'
            width={500}
            height={0}
          />
          <div className='flex-col'>
            <h1 className='text-5xl font-extrabold mb-5'>
              Legado de Shintaro Tsuji
            </h1>

            <p className='mb-5'>
              Shintaro Tsuji se retiró como presidente de Sanrio en 2008, pero
              sigue siendo presidente honorario de la empresa. Su legado como
              fundador de Sanrio y creador de Hello Kitty es innegable, y su
              impacto en la cultura popular sigue siendo significativo hoy en
              día.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historia;
