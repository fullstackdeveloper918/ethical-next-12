import React, { useState } from 'react'
import Image from 'next/image'
import Styles from './Sidebar.module.css'
import images from '../../../constants/images'
import { Sidebar_Data } from '../../../constants/data'
import { useRouter } from 'next/router'

const SideBar = ({ data, imageData }) => {
  const [isActive, setIsActive] = useState(0)
  const router = useRouter()

  const sidebarContentMap = {
    '/super-admin/admin': [0, 1, 2, 3, 4, 5, 6],
    '/super-admin/dashboard': [0, 1, 2, 3, 4, 5, 6],
    '/super-admin/customer': [0, 1, 2, 3, 4, 5, 6],
    '/super-admin/invoice': [0, 1, 2, 3, 4, 5, 6],
    '/super-admin/pages': [0, 1, 2, 3, 4, 5, 6],
    '/super-admin/blog': [0, 1, 2, 3, 4, 5, 6],
    '/super-admin/categories': [0, 1, 2, 3, 4, 5, 8, 6],
    '/super-admin/orders': [0, 1, 2, 3, 4, 5, 6],
    '/super-admin/users': [0, 1, 3, 4, 5, 6, 7, 9],
    '/super-admin/add-users': [0, 1, 2, 3, 4, 5, 6, 9],
    '/super-admin/add-roles': [0, 1, 2, 3, 4, 5, 6, 9],
    '/company': [0, 7, 1, 2],
    '/company/admin': [0, 1, 2, 10, 11],
    '/company/admin/store-detail': [0, 1, 2, 10, 11],
    '/company/admin/approval': [0, 7, 1, 2, 10, 11],
    '/company/admin/delivered': [0, 7, 1, 2, 10, 11],
    '/company/admin/edit-information': [0, 7, 1, 2, 10, 11],
    '/company/admin/all-products': [0, 7, 1, 2, 10, 11],
    '/company/admin/edit-product': [0, 7, 1, 2, 10, 11],
    '/company/admin/invoice': [0, 7, 1, 2, 10, 11],
    '/company/admin/order-detail': [0, 1, 2, 10, 11],
    '/company/admin/order-status': [0, 7, 1, 2, 10, 11],
    '/company/admin/payment': [0, 7, 1, 2, 10, 11],
    '/company/admin/shipping-status': [0, 7, 1, 2, 10, 11],
    '/company/admin/store-detail': [0, 1, 2, 10, 11],
  }

  const currentPage = router?.pathname

  const sidebarIndices = sidebarContentMap[currentPage] || []

  return (
    <>
      <div className={Styles.Sidebar_container}>
        <div className={Styles.sidebar_content}>
          <div className={Styles.top_container}>
            {data && (
              <Image
                src={data}
                width={255}
                height={53}
                alt="logo"
                className={Styles.logo}
              />
            )}
            {/*  */}
            {imageData === 'image' && (
              <>
                <div className={Styles.User_info}>
                  <p>Louis Lara</p>
                  <span>Member since 2014</span>
                </div>
              </>
            )}
            {/*  */}
            <div className={Styles.horizontal_line}></div>
            <div className={Styles.Sidebar_data}>
              {sidebarIndices.map((item, index) => (
                <>
                  <div
                    className={`${Styles.sidebar_data_content} ${
                      isActive === index ? Styles.active : ''
                    }`}
                    key={index}
                    onClick={() => setIsActive(index)}
                  >
                    <Image
                      className={Styles.sidebar_icon}
                      src={images.Livello_1}
                      alt="icons"
                      width={40}
                      height={40}
                    />

                    <span
                      className={Styles.Sidebar_links}
                      onClick={() => router.push(Sidebar_Data[item].pageRoute)}
                    >
                      {Sidebar_Data[item].text}
                    </span>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className={Styles.bottom_container}>
            <div className={Styles.content}>
              <div className={Styles.top_content}>
                <p>Need Help ?</p>
                <p>Please chat with our support</p>
              </div>
              <div className={Styles.bottom_content}>
                <button>Support</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar
