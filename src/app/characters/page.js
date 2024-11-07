import Image from 'next/image';
const Characters =  () => {
  return (
   
  <div className='flex justify-around p-10 border-solid border-b-2  mb-8'  >
    <h3>¡Conoce a la familia Sanrio! Descubre a los personajes más adorables y divertidos que han conquistado los corazones de millones de personas en todo el mundo.</h3>
  <Image
      src={`/imgs/products/whiskas.png`}
      width={150}
      height={0}
      alt='hero'
    />
    <Image
      src={`/imgs/products/purina.png`}
      width={150}
      height={0}
      alt='hero'
    />
    <Image
      src={`/imgs/products/royal.png`}
      width={150}
      height={0}
      alt='hero'
    />
    <Image
      src={`/imgs/products/pedigree.png`}
      width={150}
      height={0}
      alt='hero'
    />
  </div>
 
  );
};

export default Characters;
