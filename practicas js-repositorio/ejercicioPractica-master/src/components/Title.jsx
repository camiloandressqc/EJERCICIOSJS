import React from 'react'
import styles from '../styles/Title.module.css'

function Title({title}) {
  return (
    <>
        <h2 className={styles.title}>{title}</h2>
    </>
  )
}

export default Title