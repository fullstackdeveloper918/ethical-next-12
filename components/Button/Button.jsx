import React from 'react'
import Styles from './Button.module.css'
import { useRouter } from 'next/router'

const Button = ({ onClick, disabled }) => {
  const router = useRouter()

  return (
    <>
      <div className={Styles.cart_left_butttons}>
        <button
          className={Styles.button}
          type="button"
          onClick={() => router.back()}
        >
          Back
        </button>
        <button
          type="submit"
          disabled={disabled ? disabled : false}
          className={Styles.button}
          style={{ opacity: disabled ? '0.7' : '1' }}
          onClick={onClick} //  router.back();
        >
          Continue
        </button>
      </div>
    </>
  )
}

export default Button
