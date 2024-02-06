import React from 'react'
import Styles from './Button.module.css'

const Button = () => {
  return (
    <>
      <div className={Styles.cart_left_butttons}>
        <button className={Styles.button}>Back</button>
        <button className={Styles.button}>Continue</button>
      </div>
    </>
  )
}

export default Button
