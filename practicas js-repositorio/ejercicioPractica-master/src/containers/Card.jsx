import React from 'react'
import Img from '../components/Img'
import image1 from '../assets/naturaleza.jpg'
import image2 from '../assets/cafe.jpeg'
import image3 from '../assets/tecnologia.jpg'
import styles from '../styles/Card.module.css'
import Title from '../components/Title'
import Description from '../components/Description'
import Link from '../components/Link'

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
          <Img src={image1} width="100%"/>
          <Title title="Naturaleza"/>
          <Description/>
          <Link/>
      </div>

      <div className={styles.container}>
          <Img src={image2} width="100%"/>
          <Title title="Comida"/>
          <Description/>
          <Link/>
      </div>

      <div className={styles.container}>
          <Img src={image3} width="100%"/>
          <Title title="Tecnologia"/>
          <Description/>
          <Link/>
      </div>

    </div>
  )
}

export default Card