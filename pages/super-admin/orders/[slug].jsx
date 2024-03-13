import React, { useEffect, useState } from 'react'
import Styles from './orders.module.css'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const slug = () => {
  const router = useRouter()
  const [order, setOrder] = useState([])
  const [formData, setFormData] = useState({})

  const ordersId = useSelector((state) => state.orders.selectedId)
  const IsEditable = useSelector((state) => state.orders.isEditable)
  console.log(IsEditable, 'IsEditable false')

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders'))
    const foundOrder = storedOrders.find(
      (order) => order.id === parseInt(ordersId)
    )
    setOrder(foundOrder)
    setFormData(foundOrder)
  }, [ordersId])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateLocalStorage(formData) // Call the function to update local storage
  }

  const updateLocalStorage = (updatedData) => {
    const storedOrders = JSON.parse(localStorage.getItem('orders'))
    const updatedOrders = storedOrders.map((order) => {
      if (order.id === parseInt(ordersId)) {
        return { ...order, ...updatedData }
      }
      return order
    })
    localStorage.setItem('orders', JSON.stringify(updatedOrders))
    setOrder(updatedData)
    router.push('/super-admin/orders')
  }

  return (
    <>
      <div className="container">
        <div className="content">
          <form className={Styles.form}>
            <h3>Order Details</h3>
            <div className={Styles.input_field}>
              <label htmlFor="">ORDER ID</label>
              <input
                type="text"
                name="ORDER_ID"
                disabled={IsEditable}
                placeholder="Subject"
                value={formData?.ORDER_ID}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Client Linked</label>
              <input
                type="text"
                name="Client_Linked"
                disabled={IsEditable}
                placeholder="Owner"
                value={formData?.Client_Linked}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Order Line Items</label>
              <input
                type="text"
                name="Order_Line_Items"
                disabled={IsEditable}
                placeholder="Activity Type"
                value={formData?.Order_Line_Items}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Customer Email</label>
              <input
                type="text"
                name="Customer_Email"
                disabled={IsEditable}
                placeholder="Status"
                value={formData?.Customer_Email}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Customer Company</label>
              <input
                type="text"
                name="Customer_Company"
                disabled={IsEditable}
                placeholder="Customer Company"
                value={formData?.Customer_Company}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Customer First Name</label>
              <input
                type="text"
                disabled={IsEditable}
                name="Customer_First_Name"
                placeholder="First Name"
                value={formData.Customer_First_Name}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Customer Last Name</label>
              <input
                type="text"
                name="Customer_Last_Name"
                disabled={IsEditable}
                placeholder="Last Name"
                value={formData.Customer_Last_Name}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Customer Phone</label>
              <input
                type="text"
                name="Customer_Phone"
                disabled={IsEditable}
                placeholder="Phone"
                value={formData.Customer_Phone}
                onChange={handleChange}
              />
            </div>
            <h3>Shipping Details</h3>

            <div className={Styles.input_field}>
              <label htmlFor="">Shipping First Name</label>
              <input
                type="text"
                name="Shipping_First_Name"
                disabled={IsEditable}
                placeholder="Shipping First Name"
                value={formData.Shipping_First_Name}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Shipping Last Name</label>
              <input
                type="text"
                name="Shipping_Last_Name"
                disabled={IsEditable}
                placeholder="Shipping Last Name"
                value={formData.Shipping_Last_Name}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Shipping Company</label>
              <input
                type="text"
                name="Shipping_Company"
                disabled={IsEditable}
                placeholder="Shipping Company"
                value={formData.Shipping_Company}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Shipping Address</label>
              <input
                type="text"
                name="Shipping_Address"
                disabled={IsEditable}
                placeholder="Shipping Address"
                value={formData.Shipping_Address}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Shipping Address 2</label>
              <input
                type="text"
                name="Shipping_Address_2"
                disabled={IsEditable}
                placeholder="Shipping Address 2"
                value={formData.Shipping_Address_2}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Shipping City</label>
              <input
                type="text"
                name="Shipping_City"
                disabled={IsEditable}
                placeholder="Shipping City"
                value={formData.Shipping_City}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Shipping Province</label>
              <input
                type="text"
                name="Shipping_Province"
                disabled={IsEditable}
                placeholder="Shipping Province"
                value={formData.Shipping_Province}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Shipping Province Code</label>
              <input
                type="text"
                name="Shipping_Province_Code"
                disabled={IsEditable}
                placeholder="Shipping Province Code"
                value={formData.Shipping_Province_Code}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Shipping Country</label>
              <input
                type="text"
                name="Shipping_Country"
                disabled={IsEditable}
                placeholder="Shipping Country"
                value={formData.Shipping_Country}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Shipping Country Code</label>
              <input
                type="text"
                name="Shipping_Country_Code"
                disabled={IsEditable}
                placeholder="Shipping Country Code"
                value={formData.Shipping_Country_Code}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Shipping Postal Code</label>
              <input
                type="text"
                name="Shipping_Postal_Code"
                disabled={IsEditable}
                placeholder="Shipping Postal Code"
                value={formData.Shipping_Postal_Code}
                onChange={handleChange}
              />
            </div>
            <h3>Billing Details</h3>

            <div className={Styles.input_field}>
              <label htmlFor="">Billing First Name</label>
              <input
                type="text"
                name="Billing_First_Name"
                disabled={IsEditable}
                placeholder="Billing First Name"
                value={formData.Billing_First_Name}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Billing Last Name</label>
              <input
                type="text"
                name="Billing_Last_Name"
                disabled={IsEditable}
                placeholder="Billing Last Name"
                value={formData.Billing_Last_Name}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Billing Phone</label>
              <input
                type="text"
                name="Billing_Phone"
                disabled={IsEditable}
                placeholder="Billing Phone"
                value={formData.Billing_Phone}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Billing Address</label>
              <input
                type="text"
                name="Billing_Address"
                disabled={IsEditable}
                placeholder="Billing Address"
                value={formData.Billing_Address}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Billing Address 2</label>
              <input
                type="text"
                name="Billing_Address_2"
                disabled={IsEditable}
                placeholder="Billing Address 2"
                value={formData.Billing_Address_2}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Billing City</label>
              <input
                type="text"
                name="Billing_City"
                disabled={IsEditable}
                placeholder="Billing City"
                value={formData.Billing_City}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Billing Province</label>
              <input
                type="text"
                name="Billing_Province"
                disabled={IsEditable}
                placeholder="Billing Province"
                value={formData.Billing_Province}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Billing Country Code</label>
              <input
                type="text"
                name="Billing_Country_Code"
                disabled={IsEditable}
                placeholder="Billing Country Code"
                value={formData.Billing_Country_Code}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Order Number</label>
              <input
                type="text"
                name="Order_Number"
                disabled={IsEditable}
                placeholder="Order Number"
                value={formData.Order_Number}
                onChange={handleChange}
              />
            </div>

            <div className={Styles.input_field}>
              {IsEditable ? (
                <>
                  <button>Go Back</button>
                </>
              ) : (
                <>
                  <button type="button" onClick={handleSubmit}>
                    Save Changes
                  </button>
                  <button
                    onClick={() => router.push('/super-admin/orders')}
                    type="button"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default slug
