import React from 'react'
import Styles from './Address.module.css'

const Address = () => {
  return (
    <>
      <div className={Styles.address}>
        <h3>2. Shipping Address</h3>
        <p>Ship order to *</p>
        <input type="text" placeholder="single addresses" />
        <input type="text" placeholder="Country/region" />
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="single addresses" />
      </div>
    </>
  )
}

export default Address
