import React from 'react'
import SideBar from '../../../components/admin/SideBar/SideBar'
import Navbar from '../../../components/admin/Navbar/Navbar'
import Styles from './dashboard.module.css'
import Image from 'next/image'
import { GoDotFill } from 'react-icons/go'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'
import { New_Customers, SuperAdmin_data } from '../../../constants/data'
import images from '../../../constants/images'

const Dashboard = () => {
  return (
    <>
      <section className={Styles.dashboard_section}>
        <div className={Styles.dashboard_section_container}>
          <div className={Styles.dashboard_content}>
            <div className={Styles.dashboard_left_content}>
              <SideBar
                data={images.ethical_swag}
                pageRouteProps="/super-admin/dashboard"
              />
            </div>
            <div className={Styles.dashboard_right_content}>
              <Navbar data="Super Admin" thumbnail={images.User_icon} />
              {/* Middle Content */}
              <div className={Styles.middle_content}>
                {SuperAdmin_data.map((data) => (
                  <>
                    <div className={Styles.container}>
                      <div className={Styles.content}>
                        <div>
                          <span>{data.icon}</span>
                        </div>
                        <div>
                          <p className={Styles.number}>{data.number}</p>
                          <p className={Styles.text}>{data.text}</p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>

              {/* Bottom Content */}
              <div className={Styles.bottom_content}>
                <div className={Styles.bottom_left_content}>
                  <h2>New Product</h2>
                  <div className={Styles.new_product_table}>
                    <table>
                      <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                      {Array.from({ length: 8 }).map((item) => (
                        <>
                          <tr>
                            <td>Kangaroo Cotton Shirt</td>
                            <td>
                              <span>
                                <Image
                                  src={images.shirt_small}
                                  width={25}
                                  height={25}
                                  icon="product"
                                />
                              </span>
                            </td>
                            <td>
                              <div className={Styles.status}>
                                <div>
                                  <span>
                                    <GoDotFill color="#a2d061" />
                                  </span>
                                </div>
                                <div>
                                  <span>In Stcok</span>
                                </div>
                              </div>
                            </td>
                            <td>$80</td>
                            <td>
                              <div className={Styles.status}>
                                <div className={Styles.action}>
                                  <span>
                                    <FaRegEdit fontSize={18} />
                                  </span>
                                </div>
                                <div>
                                  <span>
                                    <RiDeleteBin6Line fontSize={18} />
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      ))}
                    </table>
                  </div>
                </div>
                <div className={Styles.bottom_right_content}>
                  <h2>New Customers</h2>
                  <div className={Styles.newCustomers_data}>
                    {New_Customers.map((data) => (
                      <>
                        <div key={data.id} className={Styles.Customer}>
                          <p className={Styles.name}>{data.name}</p>
                          <p className={Styles.time}>{data.time}</p>
                        </div>
                      </>
                    ))}
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

export default Dashboard
