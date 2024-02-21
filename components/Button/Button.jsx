import React from 'react'
import Styles from './Button.module.css'

const Button = ({ disabled }) => {
  return (
    <>
      <div className={Styles.cart_left_butttons}>
        <button className={Styles.button}>Back</button>
        <button
          className={Styles.button}
          disabled={disabled ? disabled : false}
        >
          Continue
        </button>
      </div>
    </>
  )
}

export default Button
