import React from 'react'
import SideBar from '../../../components/admin/SideBar/SideBar'
import Navbar from '../../../components/admin/Navbar/Navbar'
import { MdArrowBackIos } from 'react-icons/md'
import { IoChevronForwardSharp } from 'react-icons/io5'
import Styles from './users.module.css'
import { FaEye, FaRegEdit } from 'react-icons/fa'
import { PiImageThin } from 'react-icons/pi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import images from '../../../constants/images'

const Users = () => {
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
      <section className={Styles.Users_section}>
        <div className={Styles.Users_container}>
          <div className={Styles.Users_content}>
            <div className={Styles.Users_left_content}>
              <SideBar data={images.ethical_swag} />
            </div>
            <div className={Styles.Users_right_content}>
              <Navbar data="Users" thumbnail={images.User_icon} />
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
                    <>
                      {console.log(
                        index === 2 || index === 4 || index === 6
                          ? 'Low'
                          : 'Normal'
                      )}
                      <tr>
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

export default Users
