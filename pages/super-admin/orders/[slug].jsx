import React, { useEffect, useState } from 'react'
import Styles from './orders.module.css'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const slug = () => {
  const orderPlaced = useSelector((state) => state.cart.orderPlaced)

  return (
    <>
      <div className="container">
        <div className="content">
          <form className={Styles.form}>
            <h3>Order Details</h3>
            <div className={Styles.input_field}>
              <label htmlFor="">Issue Date</label>
              <input type="text" name="ORDER_ID" placeholder="Issue Date" />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Swag Pack</label>
              <input type="text" name="Client_Linked" placeholder="Owner" />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Warehousing</label>
              <input
                type="text"
                name="Order_Line_Items"
                placeholder="Activity Type"
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Pick & Pack</label>
              <input type="text" name="Customer_Email" placeholder="Status" />
            </div>

            <h3>Shipping Details</h3>
            <div className={Styles.input_field}>
              <label htmlFor="">Single Address</label>
              <input
                type="text"
                name="Shipping_First_Name"
                placeholder="Shipping First Name"
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">First Name</label>
              <input
                type="text"
                name="Shipping_Last_Name"
                placeholder="Shipping Last Name"
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                name="Shipping_Company"
                placeholder="Shipping Company"
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Shipping Address</label>
              <input
                type="text"
                name="Shipping_Address"
                placeholder="Shipping Address"
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Number</label>
              <input
                type="text"
                name="Shipping_Address_2"
                placeholder="Shipping Address 2"
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="Shipping_City"
                placeholder="Shipping City"
              />
            </div>

            <h3>Estimate Details</h3>

            <div className={Styles.input_field}>
              <label htmlFor="">Quantity</label>
              <input
                type="text"
                name="Billing_First_Name"
                placeholder="Billing First Name"
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Title</label>
              <input
                type="text"
                name="Billing_Last_Name"
                placeholder="Billing Last Name"
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Price Per Unit</label>
              <input
                type="text"
                name="Billing_Phone"
                placeholder="Billing Phone"
              />
            </div>

            <div className={Styles.input_field}>
              <label htmlFor="">Leave a Remark</label>

              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write a Message..."
              ></textarea>
            </div>

            <div className={Styles.input_field_button}>
              <button type="button">Add Comment</button>

              <>
                <button
                  type="button"
                  onClick={() => router.push('/super-admin/orders')}
                >
                  Go Back
                </button>
              </>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default slug
