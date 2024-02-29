import React from 'react'
import Styles from './Button.module.css'

const Button = ({ onClick, disabled }) => {
  return (
    <>
      <div className={Styles.cart_left_butttons}>
        <button className={Styles.button} type="button">
          Back
        </button>
        <button
          type="submit"
          disabled={disabled ? disabled : false}
          className={Styles.button}
          style={{ opacity: disabled ? '0.7' : '1' }}
          onClick={onClick}
        >
          Continue
        </button>
      </div>
    </>
  )
}

export default Button
