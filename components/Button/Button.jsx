import React from 'react'
import Styles from './Button.module.css'
import { isConstructorDeclaration } from 'typescript'

const Button = () => {
  console.log('button component is called')
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
