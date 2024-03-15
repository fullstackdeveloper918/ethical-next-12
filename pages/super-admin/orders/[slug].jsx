import React, { useEffect, useState } from 'react'
import Styles from './orders.module.css'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const slug = () => {
  const inventory = useSelector((state) => state.submit.inventory)

  console.log(inventory, 'inventory bro')

  return (
    <>
      <div className="container">
        <div className="content">
          <form className={Styles.form}>
            <h3>Order Details</h3>
            <div className={Styles.input_field}>
              <label htmlFor="">Issue Date</label>
              <input
                type="text"
                name="ORDER_ID"
                placeholder="Issue Date"
                value={inventory[0][0]?.selectedDate}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Swag Pack</label>
              <input
                type="text"
                name="Client_Linked"
                placeholder="Owner"
                value={(inventory[0][0]?.swagPack).toString()}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Warehousing</label>
              <input
                type="text"
                name="Order_Line_Items"
                placeholder="Activity Type"
                value={(inventory[0][0]?.Warehousing).toString()}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Pick & Pack</label>
              <input
                type="text"
                name="Customer_Email"
                placeholder="Status"
                value={(inventory[0][0]?.pickAndPack).toString()}
              />
            </div>

            <h3>Shipping Details</h3>
            <div className={Styles.input_field}>
              <label htmlFor="">Single Address</label>
              <input
                type="text"
                name="Shipping_First_Name"
                placeholder="Shipping First Name"
                value={inventory[1][1]?.singleAddress}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">First Name</label>
              <input
                type="text"
                name="Shipping_Last_Name"
                placeholder="Shipping Last Name"
                value={inventory[1][1]?.firstName}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                name="Shipping_Company"
                placeholder="Shipping Company"
                value={inventory[1][1]?.lastName}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Shipping Address</label>
              <input
                type="text"
                name="Shipping_Address"
                placeholder="Shipping Address"
                value={inventory[1][1]?.address}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Number</label>
              <input
                type="text"
                name="Shipping_Address_2"
                placeholder="Shipping Address 2"
                value={inventory[1][1]?.number}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="Shipping_City"
                placeholder="Shipping City"
                value={inventory[1][1]?.email}
              />
            </div>

            <h3>Estimate Details</h3>

            <div className={Styles.input_field}>
              <label htmlFor="">Quantity</label>
              <input
                type="text"
                name="Billing_First_Name"
                placeholder="Billing First Name"
                value={inventory[1][2]?.quantity}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Title</label>
              <input
                type="text"
                name="Billing_Last_Name"
                placeholder="Billing Last Name"
                value={inventory[1][2]?.heading}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Price Per Unit</label>
              <input
                type="text"
                name="Billing_Phone"
                placeholder="Billing Phone"
                value={inventory[1][2]?.pricePerUnit}
              />
            </div>

            <h3>Order Outstanding Requirement</h3>
            <div className={Styles.input_field}>
              <label htmlFor="">Vector Art</label>
              <input type="text" name="vector_art" placeholder="vector art" />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">PMS colours</label>
              <input type="text" name="PMS_colours" placeholder="PMS Colours" />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Sizing</label>
              <input type="text" name="Sizing" placeholder="Sizing" />
            </div>

            <h3>Estimate Outstanding Requirement</h3>
            <div className={Styles.input_field}>
              <label htmlFor="">IHD</label>
              <input type="text" name="IHD" placeholder="IHD" />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Dec Loc Details</label>
              <input
                type="text"
                name="Dec_Loc_Details"
                placeholder="Dec Loc Details"
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
