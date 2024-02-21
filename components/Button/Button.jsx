import React from 'react'
import Styles from './Button.module.css'

const Button = ({ disabled }) => {
  return (
    <>
      <div className={Styles.cart_left_butttons}>
        <button className={Styles.button}>Back</button>
        <button
          className={Styles.button}
          disabled={disabled}
          style={{ opacity: disabled ? '0.7' : '1' }}
          onClick={() => console.log('hello i am here')}
        >
          Continue
        </button>
      </div>
    </>
  )
}

export default Button
