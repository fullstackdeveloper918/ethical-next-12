'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import images from '../../../constants/images'
import { New_Customers, SuperAdmin_data } from '../../../constants/data'
import SideBar from '../../../components/admin/SideBar/SideBar'
import Navbar from '../../../components/admin/Navbar/Navbar'
import Styles from './dashboard.module.css'
import { GoDotFill } from 'react-icons/go'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'
import useFetch from '../../../lib/useFetch'
import { BsFillBoxFill } from 'react-icons/bs'
import { IoKeyOutline } from 'react-icons/io5'
import { CiUser } from 'react-icons/ci'
import { IoMdCart } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import {
  getRecentCustomers,
  getRecentProducts,
  getTotalCount,
} from '../../../redux-setup/adminSlice'
import Loaders from '../../../components/loaders/Loaders'
import { timeAgo } from '@lib/utils'

const Dashboard = () => {
  const dispatch = useDispatch()
  const [singleImage, setSingleImage] = useState('')
  const totalCount = useSelector((state) => state.admin.totalCount)
  const recentProductsAll = useSelector((state) => state.admin.recentProducts)
  const recentCustomersAll = useSelector((state) => state.admin.recentCustomers)

  const [
    count,
    { response: countResponse, loading: countLoading, error: countError },
  ] = useFetch(`/sadm/count`, {
    method: 'get',
  })
  const [
    recentProducts,
    {
      response: productsResponse,
      loading: productsLoading,
      error: productsError,
    },
  ] = useFetch(`/sadm/products`, {
    method: 'get',
  })
  //column_1_retail_price_cad product_title image
  const [recentCustomers, { response: customerResponse }] = useFetch(
    `/sadm/customer/recent`,
    {
      method: 'get',
    }
  )

  console.log(productsResponse, 'productsResponse')

  useEffect(() => {
    count()
    recentProducts()
    recentCustomers()
  }, [])

  useEffect(() => {
    if (countResponse) {
      dispatch(getTotalCount(countResponse.data))
    }
  }, [countResponse])

  useEffect(() => {
    if (productsResponse) {
      dispatch(getRecentProducts(productsResponse.data))
      console.log(productsResponse, 'kjckbcdbs')
      setSingleImage(productsResponse.images)
    }
  }, [productsResponse])

  useEffect(() => {
    if (customerResponse) {
      dispatch(getRecentCustomers(customerResponse.data))
    }
  }, [customerResponse])

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
              {countResponse && Object.keys(totalCount).length > 1 && (
                <div className={Styles.middle_content}>
                  <div className={Styles.container}>
                    <div className={Styles.content}>
                      <div>
                        <span>
                          {' '}
                          <BsFillBoxFill color="#a2d061" fontSize={30} />
                        </span>
                      </div>
                      <div>
                        <p className={Styles.number}>
                          {totalCount.allProductCount}
                        </p>
                        <p className={Styles.text}>{'Products'}</p>
                      </div>
                    </div>
                  </div>
                  <div className={Styles.container}>
                    <div className={Styles.content}>
                      <div>
                        <span>
                          {' '}
                          <IoMdCart color="#a2d061" fontSize={30} />
                        </span>
                      </div>
                      <div>
                        <p className={Styles.number}>
                          {' '}
                          {totalCount.allOrderCount}
                        </p>
                        <p className={Styles.text}>{'Orders'}</p>
                      </div>
                    </div>
                  </div>
                  <div className={Styles.container}>
                    <div className={Styles.content}>
                      <div>
                        <span>
                          {' '}
                          <CiUser color="#a2d061" fontSize={30} />
                        </span>
                      </div>
                      <div>
                        <p className={Styles.number}>
                          {' '}
                          {totalCount.allCustomerCount}
                        </p>
                        <p className={Styles.text}>{'Customers'}</p>
                      </div>
                    </div>
                  </div>
                  <div className={Styles.container}>
                    <div className={Styles.content}>
                      <div>
                        <span>
                          {' '}
                          <IoKeyOutline color="#a2d061" fontSize={30} />
                        </span>
                      </div>
                      <div>
                        <p className={Styles.number}>
                          {' '}
                          {totalCount.allSaleCount}
                        </p>
                        <p className={Styles.text}>{'Sales'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Content */}
              <div className={Styles.bottom_content}>
                <div className={Styles.bottom_left_content}>
                  <h2>New Product</h2>
                  {productsLoading ? (
                    <div className="">
                      <Loaders />
                    </div>
                  ) : (
                    recentProductsAll && (
                      <div className={Styles.new_product_table}>
                        <table>
                          <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>Action</th>
                          </tr>
                          {recentProductsAll.map((item) => (
                            <>
                              <tr>
                                <td>{item.product_title}</td>
                                <td>
                                  <span>
                                    <Image
                                      src={item?.image}
                                      width={25}
                                      height={25}
                                      icon="product"
                                      // onError={}
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
                                      <span>In Stock</span>
                                    </div>
                                  </div>
                                </td>
                                <td>${item.column_1_retail_price_cad}</td>
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
                    )
                  )}
                </div>
                {recentCustomersAll && (
                  <div className={Styles.bottom_right_content}>
                    <h2>New Customers</h2>
                    <div className={Styles.newCustomers_data}>
                      {recentCustomersAll.map((data) => (
                        <>
                          <div key={data.id} className={Styles.Customer}>
                            <p className={Styles.name}>{data.name}</p>
                            <p className={Styles.time}>
                              {timeAgo(data.created_at)}
                            </p>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard
