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
import { deleteOrder, findOrder } from '../../../redux-setup/cartSlice'

const Orders = () => {
  const router = useRouter()
  const [orders, setOrders] = useState([])
  const dispatch = useDispatch()

  const orderPlaced = useSelector((state) => state.cart.orderPlaced)

  // const handleViewClicked = (id) => {
  //   // dispatch(setSelectedViewId(id))
  //   router.push(`/super-admin/orders/view`)
  // }

  const handleEdit = (id) => {
    console.log(id, 'id bro')
    dispatch(findOrder(id))
    router.push(`/super-admin/orders/edit`)
  }

  const handleDelete = (id) => {
    console.log(id)
    dispatch(deleteOrder(id))
  }

  return (
    <>
      <Layout>
        {/* Customer data table */}
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
                  <tr>
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
                          <FaRegEdit
                            fontSize={18}
                            cursor="pointer"
                            onClick={() => handleEdit(item[2].id)}
                          />
                        </span>
                        <span>
                          <RiDeleteBin6Line
                            cursor="pointer"
                            fontSize={18}
                            onClick={() => handleDelete(index)}
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
