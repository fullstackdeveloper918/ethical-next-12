import React, { useEffect, useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { IoChevronForwardSharp } from 'react-icons/io5'
import { FaEye, FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Styles from './orders.module.css'
import Layout from '../../../components/super-adminLayout/Layout'
import Pagination from '../../../components/pagination/Pagination'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import {
  setSelectedEditId,
  setSelectedViewId,
} from '../../../redux-setup/ordersSlice'
import { Orders_Data } from '../../../constants/data'

const Orders = () => {
  const router = useRouter()
  const [orders, setOrders] = useState([])
  const dispatch = useDispatch()
  const orderPlaced = useSelector((state) => state.cart.orderPlaced)

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders'))

    if (storedOrders && storedOrders.length > 0) {
      setOrders(storedOrders)
    } else {
      // Initialize local storage with the data if it doesn't exist
      localStorage.setItem('orders', JSON.stringify(Orders_Data))
      setOrders(Orders_Data)
    }
  }, [])

  const handleViewClicked = (id) => {
    dispatch(setSelectedViewId(id))
    router.push(`/super-admin/orders/view`)
  }

  const handleEdit = (id) => {
    dispatch(setSelectedEditId(id))

    router.push(`/super-admin/orders/edit`)
  }

  const handleDelete = (id) => {
    console.log(id)
    // Remove the order with the given id from local storage
    const updatedOrders = orders.filter((order) => order.id !== id)
    console.log(updatedOrders, 'updatedOredrs')
    localStorage.setItem('orders', JSON.stringify(updatedOrders))
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id))
  }

  return (
    <>
      <Layout>
        {/* Customer data table */}
        <div className={Styles.Orders_data_table}>
          <table>
            <tr>
              <th>ORDER ID</th>
              <th>Customer Email</th>
              <th>Customer Company</th>
              <th>Customer First Name</th>
              <th>Customer Last Name</th>
              <th>Customer Phone</th>
              <th>Shipping Address</th>
              <th>Billing Address</th>
              <th>Order Number</th>
              <th>Action</th>
            </tr>
            {orders.map((data, index) => (
              <>
                <tr>
                  <td>{data.ORDER_ID}</td>
                  <td>{data.Customer_Email}</td>
                  <td>{data.Customer_Company}</td>

                  <td>{data.Customer_First_Name}</td>
                  <td>{data.Customer_Last_Name}</td>
                  <td>{data.Customer_Phone}</td>
                  <td>{data.Shipping_Address}</td>
                  <td>{data.Billing_Address}</td>
                  <td>{data.Order_Number}</td>
                  <td>
                    <div className={Styles.action_icons}>
                      <span>
                        <FaEye
                          fontSize={18}
                          cursor="pointer"
                          onClick={() => handleViewClicked(data.id)}
                        />
                      </span>
                      <span>
                        <FaRegEdit
                          fontSize={18}
                          cursor="pointer"
                          onClick={() => handleEdit(data.id)}
                        />
                      </span>
                      <span>
                        <RiDeleteBin6Line
                          cursor="pointer"
                          fontSize={18}
                          onClick={() => handleDelete(data.id)}
                        />
                      </span>
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </table>
          {/* Pagination section */}
          <div className={Styles.pagination_container}>
            <div className={Styles.pagination_content}>
              <Pagination />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Orders
