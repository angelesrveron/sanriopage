'use client'

import { Formik, Field, Form } from "formik";
import axios from 'axios';
import styles from "./CartForm.module.css"


const CartForm = () => {

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {//chequea que sea un mail correcto
      error = 'Invalido';
    }
    return error;
  };

  const firstName = (value) => {
    let error;
    if (value === '') {
      error = 'Requerido';
    }
    return error;
  };

  const lastName = (value) => {
    let error;
    if (value === '') {
      error = 'Requerido';
    }
    return error;
  };

  const validatePhone = (value) => {
    let error;
    if (!value) {
      error = 'Requerido';
    } else if (!/^\+?[0-9\s-]+$/.test(value)) {  // Solo permite números, espacios, signos + y -
      error = 'Número inválido';
    }
    return error;
  };

  const addContact = async (values) => {
    //console.log(JSON.stringify(values, 2, null))
    const data = {contactData: values}
    const response = await axios.post('/api/add-contact', values)
    console.log(response.data)
  }

  return (
    <div className={styles.container}>
      <h1 className="text-4xl font-modak mb-6" >Formulario</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone:"",
        }}
        onSubmit={async (values) => {
          addContact(values)
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className={' ml-8'} noValidate>
          <div className="flex  flex-col">
            <div className="mb-6">
              <label className="text-xl font-bold mr-1" htmlFor="firstName">Nombre: </label>
              <Field className={`${styles["formulario-texto"]} `} name="firstName" placeholder="Tu nombre" validate={firstName} />
              {errors.firstName && touched.firstName && <p className=" text-xs text-pink-700">*Completar</p>}
            </div>
            <div className="mb-6">
              <label className="text-xl font-bold mr-1" htmlFor="lastName">Apellido:</label>
              <Field className={`${styles["formulario-texto"]} `} name="lastName" placeholder="Tu apellido" validate={lastName} />
              {errors.lastName && touched.lastName && <p className=" text-xs text-pink-700">*Completar</p>}
            </div>
          </div>

          <div className="mb-6">
            <label className="text-xl font-bold mr-8" htmlFor="email">Email:</label>
            <Field  className={`${styles["formulario-texto"]} `} name="email" placeholder="tumail@mail.com" type="email" validate={validateEmail} />
            {errors.email && touched.email && <p className=" text-xs text-pink-700">*E-mail inexistente</p>}
          </div>

          <div className="mb-6">
            <label className="text-xl font-bold" htmlFor="phone">Teléfono:</label>
            <Field className={`${styles["formulario-texto"]} `} name="phone" placeholder="+54 9 11 1234-5678" type="tel" validate={validatePhone}  />
            {errors.phone && touched.phone && <p className=" text-xs text-pink-700">Número inválido</p>}
          </div>

          <button  className={`${styles["button"]} `} type="submit" disabled={isSubmitting}>
            ENVIAR
          </button>
        </Form>
        )}
      </Formik>
    </div>
  );
};

export default CartForm;