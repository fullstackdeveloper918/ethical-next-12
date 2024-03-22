import React from 'react'
import Pagination from '../../../components/pagination/Pagination'
import { FaEye, FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Styles from './users.module.css'
import Layout from '../../../components/super-adminLayout/Layout'

const Users = () => {
  return (
    <>
      <Layout>
        {/* Customer data table */}
        <div className={Styles.Users_data_table}>
          <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Permissions</th>
              <th>Action</th>
            </tr>
            {Array.from({ length: 13 }).map((data, index) => (
              <tr key={index}>
                <td>
                  <div className={Styles.name_cell}>
                    <input type="checkbox" name="" id="" />
                    <span>T-Shirt Print</span>
                  </div>
                </td>
                <td>
                  {index >= 2 && index <= 5
                    ? 'deneme@gmail.com'
                    : index === 6
                    ? 'shamon@gmail.com'
                    : 'admin@gmail.com'}
                </td>
                <td>
                  {index === 0
                    ? 'Super-Admin'
                    : index === 5
                    ? 'Accountant'
                    : index === 11
                    ? 'Mananger'
                    : index > 5 && index < 10
                    ? 'Designer'
                    : 'Editor'}
                </td>
                <td>
                  {index === 0
                    ? 'Full Access'
                    : index === 12
                    ? 'Feb 12 2024'
                    : 'Edit Pages Only'}
                </td>
                <td>
                  <div className={Styles.action_icons}>
                    <span>
                      <FaEye fontSize={18} />
                    </span>
                    <span>
                      <FaRegEdit fontSize={18} />
                    </span>
                    <span>
                      <RiDeleteBin6Line fontSize={18} />
                    </span>
                  </div>
                </td>
              </tr>
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

export default Users
