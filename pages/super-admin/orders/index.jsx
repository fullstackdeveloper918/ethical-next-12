import React, { useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { IoChevronForwardSharp } from 'react-icons/io5'
import { FaEye, FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Styles from './orders.module.css'
import Layout from '../../../components/super-adminLayout/Layout'
import Pagination from '../../../components/pagination/Pagination'

const Orders = () => {
  const getStatusColor = (index) => {
    if (index < 6) {
      return '#11CDEF'
    } else if (index < 11) {
      return '#A2D061'
    } else {
      return '#FB6340'
    }
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
            {Array.from({ length: 13 }).map((data, index) => (
              <>
                <tr>
                  <td>
                    <div className={Styles.name_cell}>
                      <input type="checkbox" name="" id="" />
                      <span>T-Shirt Print</span>
                    </div>
                  </td>
                  <td>John Doe</td>
                  <td>{index === 1 ? 'Print & Deliver' : 'Print'}</td>
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
                      {index < 6 ? 'New' : index <= 10 ? 'Close' : 'Open'}
                    </button>
                  </td>
                  <td>
                    {' '}
                    {index === 2 || index === 4 || index === 6
                      ? 'Low'
                      : index >= 9
                      ? 'High'
                      : 'Normal'}
                  </td>
                  <td>Feb 12, 2024</td>
                  <td>April 12, 2024</td>

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
              <Pagination />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Orders
