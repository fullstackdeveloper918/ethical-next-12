import React, { useState } from 'react'
import Layout from '../../../components/super-adminLayout/Layout'
import Styles from './orders.module.css'
import { useRouter } from 'next/router'
import { FaEye, FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'

const orders = () => {
  const router = useRouter()
  const [orders, setOrders] = useState([])
  const dispatch = useDispatch()

  const orderPlaced = useSelector((state) => state.cart.orderPlaced)

  return (
    <>
      <Layout>
        <div className={Styles.Orders_data_table}>
          <table>
            <tr>
              <th>Issue Date</th>
              <th>Swag Pack</th>
              <th>Quantity</th>
              <th>Shipping Address</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Company Name</th>

              <th>Action</th>
            </tr>
            {orderPlaced &&
              orderPlaced.map((item, index) => (
                <>
                  <tr key={index}>
                    <td>{item[0]?.selectedDate}</td>
                    <td>{item[0]?.swagPack.toString()}</td>
                    <td>{item[2]?.quantity}</td>
                    <td>{item[1]?.address}</td>
                    <td>{item[1]?.firstName}</td>
                    <td>{item[1]?.email}</td>
                    <td>{item[1]?.companyName}</td>
                    <td>
                      <div className={Styles.action_icons}>
                        <span>
                          <FaEye fontSize={18} cursor="pointer" />
                        </span>
                        <span>
                          <FaRegEdit fontSize={18} cursor="pointer" />
                        </span>
                        <span>
                          <RiDeleteBin6Line cursor="pointer" fontSize={18} />
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
              {/* <Pagination /> */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default orders
