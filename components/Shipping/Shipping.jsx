import React from 'react'
import Styles from './Shipping.module.css'

const Shipping = () => {
  return (
    <>
      <div className={Styles.shipping_container}>
        <h2 className={Styles.title}>2. Shipping Address</h2>
        <form action="" className={Styles.form}>
          <h3 className={Styles.form_title}>Ship order to *</h3>
        </form>
      </div>
    </>
  )
}

export default Shipping
