import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
    
     



    <div className={styles.footer}>

Sanrio Copyright © 2024 - All rights reserved
<Image
         src={"/imgs/footer.png"} 
         alt="history"
         width={500}
         height={400}
         className={`${styles.logo} `}
       />
</div>



</footer>
  )
}

export default Footer