import React from 'react'
import Styles from './ClientTypeSelector.module.css'

const ClientTypeSelector = ({ selectedValue, onRadioChange }) => {
  console.log('ClientTypeSelector is called')

  const handleRadioChange = (event) => {
    const { value } = event.target
    onRadioChange(value)
  }

  return (
    <>
      <p className={Styles.cart_left_desc}>Are you a...</p>
      <div className={Styles.cart_left_radio_buttons}>
        <div className={Styles.cart_left_btn}>
          <input
            type="radio"
            className={Styles.cart_left_radio_btn}
            name="client"
            value="Existing_client"
            checked={selectedValue === 'Existing_client'}
            onChange={handleRadioChange}
          />
          <span className={Styles.cart_left_text}>Existing Client</span>
        </div>
        <div className={Styles.cart_left_btn}>
          <input
            type="radio"
            className={Styles.cart_left_radio_btn}
            name="client"
            value="New_client"
            checked={selectedValue === 'New_client'}
            onChange={handleRadioChange}
          />
          <span className={Styles.cart_left_text}>New Client</span>
        </div>
      </div>
    </>
  )
}

export default ClientTypeSelector
