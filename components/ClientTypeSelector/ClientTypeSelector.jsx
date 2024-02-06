import React, { useState } from 'react'
import Styles from './ClientTypeSelector.module.css'

const ClientTypeSelector = ({
  setSelectedOption,
  selectedOption,
  handleOptionChange,
}) => {
  console.log(selectedOption, 'selectedOptionselectedOption after')

  return (
    <>
      <p className={Styles.cart_left_desc}>Are you a...</p>
      <div className={Styles.cart_left_radio_buttons}>
        <div className={Styles.cart_left_btn}>
          <input
            type="radio"
            className={Styles.cart_left_radio_btn}
            name="Existing_client"
            value="Existing_client"
            checked={selectedOption === 'Existing_client'}
            onChange={handleOptionChange}
          />
          <span className={Styles.cart_left_text}>Existing Client</span>
        </div>
        <div className={Styles.cart_left_btn}>
          <input
            type="radio"
            className={Styles.cart_left_radio_btn}
            name="New_client"
            value="New_client"
            checked={selectedOption === 'New_client'}
            onChange={handleOptionChange}
          />
          <span className={Styles.cart_left_text}>New Client</span>
        </div>
      </div>
    </>
  )
}

export default ClientTypeSelector
