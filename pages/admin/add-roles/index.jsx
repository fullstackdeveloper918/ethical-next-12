import React from 'react'
import SideBar from '../../../components/admin/SideBar/SideBar'
import Navbar from '../../../components/admin/Navbar/Navbar'
import { MdArrowBackIos } from 'react-icons/md'
import { IoChevronForwardSharp } from 'react-icons/io5'
import Styles from './AddRoles.module.css'
import { FaEye, FaRegEdit } from 'react-icons/fa'
import { PiImageThin } from 'react-icons/pi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import images from '../../../constants/images'

const AddRoles = () => {
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
      <section className={Styles.AddRoles_section}>
        <div className={Styles.AddRoles_container}>
          <div className={Styles.AddRoles_content}>
            <div className={Styles.AddRoles_left_content}>
              <SideBar data={images.ethical_swag} />
            </div>
            <div className={Styles.AddRoles_right_content}>
              <Navbar data="Add roles" thumbnail={images.User_icon} />
              {/* Customer data table */}
              <div className={Styles.middle_section}>
                <input type="text" placeholder="Role Name" />
                <p>Assign Permissons</p>
                <div className={Styles.assign_permissions}>
                  <div className={Styles.assign_permissions_inputs}>
                    <input type="checkbox" name="" id="" />
                    <span>Full Access</span>
                  </div>
                  <div className={Styles.assign_permissions_inputs}>
                    <input type="checkbox" name="" id="" />
                    <span>User</span>
                  </div>
                  <div className={Styles.assign_permissions_inputs}>
                    <input type="checkbox" name="" id="" />
                    <span>Editor</span>
                  </div>
                  <div className={Styles.assign_permissions_inputs}>
                    <input type="checkbox" name="" id="" />
                    <span>Designer</span>
                  </div>
                  <div className={Styles.assign_permissions_inputs}>
                    <input type="checkbox" name="" id="" />
                    <span>Supplier</span>
                  </div>
                </div>
                <div className={Styles.buttons}>
                  <button>Back</button>
                  <button>Save</button>
                </div>
              </div>
              <div className={Styles.AddRoles_data_table}>
                <table>
                  <tr>
                    <th>Role</th>
                    <th>Permissions</th>
                    <th>Action</th>
                  </tr>
                  {Array.from({ length: 8 }).map((data, index) => (
                    <>
                      <tr>
                        <td>
                          <input type="checkbox" name="" id="" />
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddRoles
