import React from 'react'
import Styles from './Shipping.module.css'

const Shipping = () => {
  return (
    <>
      <div className={Styles.shipping_container}>
        <h2 className={Styles.title}>2. Shipping Address</h2>
        <form action="" className={Styles.form}>
          <h3 className={Styles.form_title}>Ship order to *</h3>
          <div className={Styles.form_inputs}>
            <input type="text" placeholder="Single Addresses" />
          </div>
          <div className={Styles.form_inputs}>
            <input type="text" placeholder="Country/region" />
          </div>
          <div className={`${Styles.form_inputs} ${Styles.flexInputs}`}>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <div className={Styles.form_inputs}>
            <input type="text" placeholder="Phone number" />
          </div>
          <div className={Styles.form_inputs}>
            <input type="email" placeholder="Email address" />
          </div>
          <div className={Styles.form_inputs}>
            <input type="text" placeholder="Company name" />
          </div>
          <div className={Styles.form_inputs}>
            <input type="text" placeholder="Address" />
          </div>
          <div className={Styles.form_inputs}>
            <input
              type="text"
              placeholder="Appartment, suite, etc. (optional)"
            />
          </div>
          <div className={`${Styles.form_inputs} ${Styles.flexInputs}`}>
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="PIN Code" />
          </div>
          <div className={`${Styles.form_inputs} ${Styles.flexInputs}`}>
            <input type="radio" />
            <p>I agree to the terms & conditions | privacy policy</p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Shipping
