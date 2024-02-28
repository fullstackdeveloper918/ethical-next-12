import React from 'react'
import images from '../../../constants/images'
import SideBar from '../../../components/admin/SideBar/SideBar'
import Navbar from '../../../components/admin/Navbar/Navbar'
import { MdArrowBackIos } from 'react-icons/md'
import { IoChevronForwardSharp } from 'react-icons/io5'
import { FaEye, FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Styles from './pages.module.css'

const BlogPost = () => {
  return (
    <>
      <section className={Styles.Pages_section}>
        <div className={Styles.Pages_container}>
          <div className={Styles.Pages_content}>
            <div className={Styles.Pages_left_content}>
              <SideBar data={images.ethical_swag} />
            </div>
            <div className={Styles.Pages_right_content}>
              <Navbar data="Pages" thumbnail={images.User_icon} />
              {/* Customer data table */}
              <div className={Styles.Pages_data_table}>
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                  {Array.from({ length: 13 }).map((data) => (
                    <>
                      <tr>
                        <td>
                          <div className={Styles.name_cell}>
                            <input type="checkbox" name="" id="" />
                            <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor.
                            </span>
                          </div>
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

export default BlogPost
