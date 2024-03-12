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
            <div className={Styles.input_field}>
              <label htmlFor="">Subject</label>
              <input
                type="text"
                name="Subject"
                disabled={IsEditable}
                placeholder="Subject"
                value={formData?.Subject}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Owner</label>
              <input
                type="text"
                name="Owner"
                disabled={IsEditable}
                placeholder="Owner"
                value={formData?.Owner}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Activity Type</label>
              <input
                type="text"
                name="Activity"
                disabled={IsEditable}
                placeholder="Activity Type"
                value={formData?.Activity}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Status</label>
              <input
                type="text"
                name="Status"
                disabled={IsEditable}
                placeholder="Status"
                value={formData?.Status}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Priority</label>
              <input
                type="text"
                name="Priority"
                disabled={IsEditable}
                placeholder="Priority"
                value={formData?.Priority}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Issue Date</label>
              <input
                type="text"
                disabled={IsEditable}
                name="Issue_Date"
                placeholder="Issue Date"
                value={formData.Issue_Date}
                onChange={handleChange}
              />
            </div>
            <div className={Styles.input_field}>
              <label htmlFor="">Due Date</label>
              <input
                type="text"
                name="Due_date"
                disabled={IsEditable}
                placeholder="Due Date"
                value={formData.Due_date}
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
                  <button onClick={handleSubmit}>Save Changes</button>
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
