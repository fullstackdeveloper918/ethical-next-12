import React from 'react'
import Styles from './invoice.module.css'
import SideBar from '../../components/admin/SideBar/SideBar'
import Navbar from '../../components/admin/Navbar/Navbar'
import { MdArrowBackIos } from 'react-icons/md'
import { IoChevronForwardSharp } from 'react-icons/io5'
import images from '../../constants/images'
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Invoice_Data } from '../../constants/data'
import { FaEye } from 'react-icons/fa'
const Invoice = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Draft':
        return '#11CDEF'
      case 'Paid':
        return '#a2d061'
      case 'Declined':
        return '#FB6340'
      default:
        return 'white'
    }
  }

  return (
    <>
      <section className={Styles.invoice_section}>
        <div className={Styles.invoice_container}>
          <div className={Styles.invoice_content}>
            <div className={Styles.invoice_left_content}>
              <SideBar data={images.ethical_swag} />
            </div>
            <div className={Styles.invoice_right_content}>
              <Navbar data="Invoice" thumbnail={images.User_icon} />
              {/* Customer data table */}
              <div className={Styles.invoice_data_table}>
                <table>
                  <tr>
                    <th>Invoice No.</th>
                    <th>Customer</th>
                    <th>Category</th>
                    <th>Issue Date</th>
                    <th>Due Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  {Invoice_Data.map((data) => (
                    <>
                      {console.log(getStatusColor(data.status))}
                      <tr>
                        <td>
                          <input type="checkbox" name="" id="" />
                          {data.invoice}
                        </td>
                        <td>{data.customer}</td>
                        <td>{data.category}</td>
                        <td>{data.issue_Date}</td>
                        <td>{data.due_Date}</td>
                        <td>{data.amount}</td>
                        <td>
                          <button
                            style={{
                              backgroundColor: getStatusColor(data.status),
                              color: '#fff',
                              padding: '3px 15px',
                              borderRadius: '10px',
                            }}
                          >
                            {data.status}
                          </button>
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
                    </>
                  ))}
                </table>
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
        </div>
      </section>
    </>
  )
}

export default Invoice
