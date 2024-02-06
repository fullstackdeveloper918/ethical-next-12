'use client'
import React, { useState } from 'react'
import Styles from './Cart.module.css'

const Cart = ({ token }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    selectedDate: new Date().toISOString().split('T')[0],
    content: '',
  })
  const [selectedValue, setSelectedValue] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({
      ...prev,
      [name]:
        name === 'selectselectedDate'
          ? new Date(value).toISOString().split('T')[0]
          : value,
    }))
  }

  const handleRadioChangeFromChild = (value) => {
    console.log('value', value)
    setSelectedValue(value)
  }

  const totalValues = Boolean(values.email) && Boolean(values.password)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <>
      <section className={Styles.cart_section}>
        {/* Left Section  */}
        <div className={Styles.cart_left}>
          {/* <QuotationSubmissionHeader /> */}
          {!token && (
            <form className={Styles.form}>
              <div className={Styles.form_inputs}>
                <input
                  type="text"
                  placeholder="Email Address"
                  required
                  autoComplete="off"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  autoComplete="off"
                  name="password"
                  value={values.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className={Styles.form_inputs}>
                <button
                  className={Styles.form_button}
                  style={{ cursor: totalValues ? 'pointer' : 'default' }}
                  disabled={!totalValues}
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
              <div className={`${Styles.horizontal_line} ${Styles.last}`}></div>
            </form>
          )}
          <div className={Styles.cart_left_FAQ}>
            <h3>1. Tell us about your Swag Project</h3>
            <div className={Styles.cart_left_faqInput}>
              <p>When do you need this order? *</p>
              <input
                type="date"
                name="selectedDate"
                value={values.selectedDate}
                onChange={handleInputChange}
              />
            </div>
            <div className={Styles.cart_left_need}>
              <p>Notes about your order:</p>
              <textarea
                placeholder="notes about your order"
                name="content"
                value={values.content}
                onChange={handleInputChange}
                className={Styles.cart_left_need_textarea}
              ></textarea>
            </div>
            <div className={Styles.cart_left_interested_section}>
              <p>Are you interested in additional services?</p>
              <div className={Styles.cart_left_interested_section_fields}>
                <div className={Styles.inputs}>
                  <input type="checkbox" name="services" id="" />
                  <h6>Swag Pack Kitting</h6>
                </div>
                <div className={Styles.inputs}>
                  <input type="checkbox" name="services" id="" />
                  <h6>Warehousing</h6>
                </div>
                <div className={Styles.inputs}>
                  <input type="checkbox" name="services" id="" />
                  <h6>Graphic Design</h6>
                </div>
                <div className={Styles.inputs}>
                  <input type="checkbox" name="services" id="" />
                  <h6>Pick and Pack</h6>
                </div>
                <div className={Styles.inputs}>
                  <input type="checkbox" name="services" id="" />
                  <h6>Not Sure</h6>
                </div>
              </div>
            </div>

            {/* <Button /> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
