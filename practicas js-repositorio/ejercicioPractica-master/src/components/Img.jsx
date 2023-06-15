import React from 'react'
import styles from '../styles/Img.module.css'

function Img({src, width}) {
  return (
    <>
        <img className={styles.img} src={src} alt="" width={width}/>
    </>
  )
}

export default Img