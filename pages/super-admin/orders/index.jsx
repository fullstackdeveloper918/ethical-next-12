import React, { useEffect, useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { IoChevronForwardSharp } from 'react-icons/io5'
import { FaEye, FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Styles from './orders.module.css'
import Layout from '../../../components/super-adminLayout/Layout'
import Pagination from '../../../components/pagination/Pagination'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import {
  setSelectedEditId,
  setSelectedViewId,
} from '../../../redux-setup/ordersSlice'
import { Orders_Data } from '../../../constants/data'

const Orders = () => {
  const router = useRouter()
  const [orders, setOrders] = useState([])
  const dispatch = useDispatch()

  const getStatusColor = (index) => {
    if (index < 6) {
      return '#11CDEF'
    } else if (index < 11) {
      return '#A2D061'
    } else {
      return '#FB6340'
    }
  }

  useEffect(() => {
    // Retrieve orders data from local storage on component mount
    const storedOrders = JSON.parse(localStorage.getItem('orders'))
    // console.log(storedOrders.length)
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
              <th>Subject</th>
              <th>Owner</th>
              <th>Activity Type</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Issue Date</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
            {orders.map((data, index) => (
              <>
                <tr>
                  <td>
                    <div className={Styles.name_cell}>
                      <input type="checkbox" name="" id="" />
                      <span>{data.Subject}</span>
                    </div>
                  </td>
                  <td>{data.Owner}</td>
                  <td>{data.Activity}</td>
                  <td>
                    <button
                      style={{
                        backgroundColor: getStatusColor(index),
                        color: '#fff',
                        padding: '5px 15px',
                        cursor: 'pointer',
                        borderRadius: '10px',
                      }}
                    >
                      {data.Status}
                    </button>
                  </td>
                  <td>{data.Priority}</td>
                  <td>Feb 12, 2024</td>
                  <td>April 12, 2024</td>

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
