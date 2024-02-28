import React from 'react'
import Styles from './customer.module.css'
import SideBar from '../../../components/admin/SideBar/SideBar'
import Navbar from '../../../components/admin/Navbar/Navbar'
import images from '../../../constants/images'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'
import { Customer_Data } from '../../../constants/data'
import { MdArrowBackIos } from 'react-icons/md'
import { IoChevronForwardSharp } from 'react-icons/io5'

const Customer = () => {
  return (
    <>
      <section className={Styles.customer_section}>
        <div className={Styles.customer_container}>
          <div className={Styles.customer_content}>
            <div className={Styles.customer_left_content}>
              <SideBar data={images.ethical_swag} />
            </div>
            <div className={Styles.customer_right_content}>
              <Navbar data="Customers" thumbnail={images.User_icon} />
              {/* Customer data table */}
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
                  <span>1-10 of 100</span>
                  <MdArrowBackIos cursor="pointer" />
                  <IoChevronForwardSharp cursor="pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Customer
