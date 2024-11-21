"use client";
import styles from "./Characters.module.css";
import Image from "next/image";
import React from "react";

const Characters = () => {
  return (
    <div className={`${styles.contenedor}`}>
      <div className={styles.kitty}>
        <Image
          src={`/imgs/PNG/kitty.png`}
          alt='Hello Kitty'
          width={200}
          height={100}
          style={{ marginTop: "20px" }}
        />
        <h2 className='font-bold mr-2 mt-3 '>Nombre:</h2>
        <h3 className='font-modak text-pink-600 text-2xl'>Hello Kitty</h3>
        <h2 className='font-bold mr-2 mt-3 '>Fecha de nacimiento:</h2>
        <h3>1974 (creada por Yuko Shimizu)</h3>
        <h2 className='font-bold mr-2 mt-3 '>Pasatiempos:</h2>
        <h3> Jugar con sus amigos, ir de compras y cocinar</h3>
        <h2 className='font-bold mr-2 mt-3  '>Personalidad:</h2>
        <h3>Amable, gentil, curiosa y juguetona</h3>
      </div>
      <div className={styles.badz}>
        <Image
          src={`/imgs/PNG/badz.png`}
          alt='Badtz-Maru'
          width={200}
          height={100}
          style={{ marginTop: "20px" }}
        />
        <h2 className='font-bold mr-2 mt-3 '>Nombre:</h2>
        <h3 className='font-modak text-blue-900 text-2xl'>Badtz-Maru</h3>
        <h2 className='font-bold mr-2 mt-3 '>Fecha de nacimiento:</h2>
        <h3>1993 </h3>
        <h2 className='font-bold mr-2 mt-3 '>Pasatiempos:</h2>
        <h3>Hacer bromas a sus amigos, practicar karate y comer pescado</h3>
        <h2 className='font-bold mr-2 mt-3  '>Personalidad:</h2>
        <h3> Travieso, independiente, valiente y leal</h3>
      </div>

      <div className={styles.keroppi}>
        <Image
          src={`/imgs/PNG/keroppi.png`}
          alt='Keroppi'
          width={200}
          height={100}
          style={{ marginTop: "20px" }}
        />
        <h2 className='font-bold mr-2 mt-3 '>Nombre:</h2>
        <h3 className='font-modak text-green-600 text-2xl'>Keroppi</h3>
        <h2 className='font-bold mr-2 mt-3 '>Fecha de nacimiento:</h2>
        <h3>1987 </h3>
        <h2 className='font-bold mr-2 mt-3 '>Pasatiempos:</h2>
        <h3>
          Jugar con su amigo Ganta, practicar deportes acuáticos y disfrutar de
          la naturaleza
        </h3>
        <h2 className='font-bold mr-2 mt-3  '>Personalidad:</h2>
        <h3>Amable, aventurero, curioso y deportivo</h3>
      </div>
      <div className={styles.melody}>
        <Image
          src={`/imgs/PNG/melody.png`}
          alt='My Melody'
          width={200}
          height={100}
          style={{ marginTop: "20px" }}
        />

        <h2 className='font-bold mr-2 mt-3 '>Nombre:</h2>
        <h3 className='font-modak text-pink-400 text-2xl'>My Melody</h3>
        <h2 className='font-bold mr-2 mt-3 '>Fecha de nacimiento:</h2>
        <h3>1975 </h3>
        <h2 className='font-bold mr-2 mt-3 '>Pasatiempos:</h2>
        <h3>Jugar con sus amigos, ir de compras y disfrutar de la música</h3>
        <h2 className='font-bold mr-2 mt-3  '>Personalidad:</h2>
        <h3> Dulce, gentil, juguetona y romántica</h3>
      </div>
      <div className={styles.cinamon}>
        <Image
          src={`/imgs/PNG/cinamon.png`}
          alt='Cinnamoroll'
          width={200}
          height={100}
          style={{ marginTop: "20px" }}
        />
        <h2 className='font-bold mr-2 mt-3 '>Nombre:</h2>
        <h3 className='font-modak text-cyan-500 text-2xl'>Cinnamoroll</h3>
        <h2 className='font-bold mr-2 mt-3 '>Fecha de nacimiento:</h2>
        <h3>2001</h3>
        <h2 className='font-bold mr-2 mt-3 '>Pasatiempos:</h2>
        <h3>
          Volar con su cola de conejo, jugar con la niebla y disfrutar de los
          dulces
        </h3>
        <h2 className='font-bold mr-2 mt-3  '>Personalidad:</h2>
        <h3>Dulce, juguetón, curioso y aventurero</h3>
      </div>
      <div className={styles.kuromi}>
        <Image
          src={`/imgs/PNG/kuromi.png`}
          alt='Kuromi'
          width={200}
          height={100}
          style={{ marginTop: "20px" }}
        />
        <h2 className='font-bold mr-2 mt-3 '>Nombre:</h2>
        <h3 className='font-modak text-gray-700 text-2xl'>Kuromi</h3>
        <h2 className='font-bold mr-2 mt-3 '>Fecha de nacimiento:</h2>
        <h3>1975 </h3>
        <h2 className='font-bold mr-2 mt-3 '>Pasatiempos:</h2>
        <h3>
          Hacerle bromas a Hello Kitty, practicar magia y disfrutar de la
          oscuridad
        </h3>
        <h2 className='font-bold mr-2 mt-3  '>Personalidad:</h2>
        <h3>Astuta, traviesa, independiente y misteriosa</h3>
      </div>
    </div>
  );
};

export default Characters;
