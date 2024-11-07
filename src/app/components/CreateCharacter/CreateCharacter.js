"use client";
import React from "react";
import { useState } from "react";
import styles from "./CreateCharacter.module.css";

const CreateCharacter = () => {
  const [personajeState, setpersonajeState] = useState({
    orejas: { num_actual: 0, total: 2 },
    ropa: { num_actual: 0, total: 2 },
  });

  function next(item) {
    let sig_numero = personajeState[item].num_actual + 1;
    let nuevo_num_actual = sig_numero < personajeState[item].total ? sig_numero : 0;
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

      {Object.keys(personajeState).map((item) => (
        <input
          type='button'
          value={`Next ${item}`}
          key={item}
          className={styles[`next-${item}`]}
          onClick={() => next(item)}
        />
      ))}

      <input
        type='button'
        value='random'
        className={styles.randomize}
        onClick={() => randomize()}
      />
    </div>
  );
};

export default CreateCharacter;
