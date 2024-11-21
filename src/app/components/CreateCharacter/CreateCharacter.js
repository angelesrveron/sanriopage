"use client";
import React from "react";
import { useState } from "react";
import styles from "./CreateCharacter.module.css";

const CreateCharacter = () => {
  const [personajeState, setpersonajeState] = useState({
    orejas: { num_actual: 0, total: 4 },
    ojos: { num_actual: 0, total: 4 },
    nariz: { num_actual: 0, total: 4 },
    boca: { num_actual: 0, total: 4 },
    ropa: { num_actual: 0, total: 4 },
    zapatos: { num_actual: 0, total: 4 },
  });

  function next(item) {
    let sig_numero = personajeState[item].num_actual + 1;
    let nuevo_num_actual =
      sig_numero < personajeState[item].total ? sig_numero : 0;
    updateDressUp(item, nuevo_num_actual);
  }

  function updateDressUp(item, nuevo_num_actual) {
    setpersonajeState({
      ...personajeState,
      [item]: {
        num_actual: (personajeState[item].num_actual = nuevo_num_actual),
        total: personajeState[item].total,
      },
    });
  }

  function randomize() {
    Object.keys(personajeState).map((item) =>
      updateDressUp(
        item,
        Math.floor(Math.random() * Math.floor(personajeState[item].total))
      )
    );
  }

  return (
    <div className={styles.container}>
      <div className=' flex justify-center flex-col items-center'>
        <div className='w-4/5 text-white'>
          <h1 className='text-6xl text-black w-11/12 font-modak'>
            Crea tu personaje único
          </h1>
          <p className='text-white font-semibold'>
            ¿Qué te hace único? ¡Crea un personaje de Sanrio que refleje tu
            personalidad y estilo
          </p>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.background}>
          <div className={styles.body}></div>
          {Object.keys(personajeState).map((item) => (
            <div
              key={item}
              className={`${styles[item]} ${
                styles[item + (personajeState[item].num_actual + 1)]
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center '>
        {Object.keys(personajeState).map((item) => (
          <input
            type='button'
            value={`${item}`}
            key={item}
            className={styles[`button`]}
            onClick={() => next(item)}
          />
        ))}

        <input
          type='button'
          value='random'
          className={styles.button}
          onClick={() => randomize()}
        />
      </div>
    </div>
  );
};

export default CreateCharacter;
