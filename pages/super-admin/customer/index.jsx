import React from 'react'
import Styles from './customer.module.css'
import Pagination from '../../../components/pagination/Pagination'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCustomer } from '../../../redux-setup/adminSlice'
import { Customer_Data } from '../../../constants/data'
import Layout from '../../../components/super-adminLayout/Layout'
const Customer = () => {
  const dispatch = useDispatch()
  const recentCustomers = useSelector((state) => state.admin.recentCustomers)

  const handleDelete = (customerId) => {
    dispatch(deleteCustomer(customerId))
  }

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
            {recentCustomers.map((customer, index) => (
              <>
                <tr key={index}>
                  <td>{customer.name}</td>
                  <td>ApiPending</td>
                  <td>{customer.email}</td>
                  <td>ApiPending</td>
                  <td>ApiPending</td>
                  <td>
                    <div className={Styles.action_icons}>
                      <span>
                        <FaRegEdit fontSize={18} cursor="pointer" />
                      </span>
                      <span>
                        <RiDeleteBin6Line
                          fontSize={18}
                          cursor="pointer"
                          onClick={() => handleDelete(customer?.id)}
                        />
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
