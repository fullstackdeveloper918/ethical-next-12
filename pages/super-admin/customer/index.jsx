import React from 'react'
import Styles from './customer.module.css'
import Pagination from '../../../components/pagination/Pagination'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'
import { Customer_Data } from '../../../constants/data'
import Layout from '../../../components/super-adminLayout/Layout'
const Customer = () => {
  return (
    <>
      <Layout>
        <div className={Styles.customers_data_table}>
          <table>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Country</th>
              <th>City</th>
              <th>Action</th>
            </tr>
            {Customer_Data.map((data) => (
              <>
                <tr>
                  <td>{data.name}</td>
                  <td>{data.phone}</td>
                  <td>{data.email}</td>
                  <td>{data.country}</td>
                  <td>{data.city}</td>
                  <td>
                    <div className={Styles.action_icons}>
                      <span>
                        <FaRegEdit fontSize={18} />
                      </span>
                      <span>
                        <RiDeleteBin6Line fontSize={18} />
                      </span>
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </table>
        </div>
        {/* Pagination section */}
        <div className={Styles.pagination_container}>
          <div className={Styles.pagination_content}>
            <Pagination />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Customer
