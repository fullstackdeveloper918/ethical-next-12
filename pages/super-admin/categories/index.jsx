import React from 'react'
import SideBar from '../../../components/admin/SideBar/SideBar'
import Navbar from '../../../components/admin/Navbar/Navbar'
import images from '../../../constants/images'
import { MdArrowBackIos } from 'react-icons/md'
import { IoChevronForwardSharp } from 'react-icons/io5'
import Styles from './categories.module.css'
import { FaEye, FaRegEdit } from 'react-icons/fa'
import { PiImageThin } from 'react-icons/pi'
import { RiDeleteBin6Line } from 'react-icons/ri'

const Categories = () => {
  return (
    <>
      <section className={Styles.Categories_section}>
        <div className={Styles.Categories_container}>
          <div className={Styles.Categories_content}>
            <div className={Styles.Categories_left_content}>
              <SideBar data={images.ethical_swag} />
            </div>
            <div className={Styles.Categories_right_content}>
              <Navbar data="Categories" thumbnail={images.User_icon} />
              {/* Customer data table */}
              <div className={Styles.Categories_data_table}>
                <table>
                  <tr>
                    <th>Name</th>
                    <th></th>
                    <th>Action</th>
                  </tr>
                  {Array.from({ length: 13 }).map((data) => (
                    <>
                      <tr>
                        <td>
                          <div className={Styles.name_cell}>
                            {/* <input type="checkbox" name="" id="" /> */}
                            <PiImageThin fontSize={40} />
                            <span>
                              <b>Computer</b> Electronics
                            </span>
                          </div>
                        </td>
                        <td>Total 75 items</td>

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

export default Categories
