import styles from './Secciones.module.css'
import Image from 'next/image';
const Secciones = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold flex justify-center mt-10 mb-10 tracking-tight'>Búsqueda por mascota</h1>

    <div className={`${styles["contenedor-secciones"]} flex justify-center items-center gap-10 m-10`}>
    <div className={`${styles["imagen"]} flex flex-col justify-around items-center`}>  
            
 <Image
      src={`/imgs/gato.png`}
      width={0}
      height={0}
      sizes='100vw'
      style={{ width: "150px", height: "auto"}} // optional
      alt='gato'
    />
    <h2 className='font-semibold'>Adultos</h2>
    </div>
    <div className={`${styles["imagen"]} flex flex-col justify-around items-center`}>
     <Image
      src={`/imgs/gato-bb.png`}
      width={0}
      height={0}
      sizes='100vw'
      style={{ width: "150px", height: "auto"}} // optional
      alt='gato-bb'
    />
    <h2 className='font-semibold'>Cachorros</h2>
    </div>
    <div className={`${styles["imagen"]} flex flex-col justify-around items-center`}>
     <Image
      src={`/imgs/perro.png`}
      width={0}
      height={0}
      sizes='100vw'
      style={{ width: "150px", height: "auto"}} // optional
      alt='perro'

    />
    <h2 className='font-semibold'>Adultos</h2>
    </div>
    <div className={`${styles["imagen"]} flex flex-col justify-around items-center`}>
     <Image
      src={`/imgs/perro-bb.png`}
      width={0}
      height={0}
      sizes='100vw'
      style={{ width: "150px", height: "auto"}} // optional
      alt='perro-bb'

    />
    <h2 className='font-semibold'> Cachorros</h2>
    </div>




    </div>
    </div>
    );
  };
  
  export default Secciones;
  