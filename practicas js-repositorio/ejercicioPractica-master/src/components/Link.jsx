import React from 'react'
import styles from '../styles/Link.module.css'

function Link({a}) {
  return (
    <>
        <a className={styles.a} href={a}>Leer más</a>
    </>
  )
}

export default Link