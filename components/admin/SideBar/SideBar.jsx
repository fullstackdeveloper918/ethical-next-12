import React, { useState } from 'react'
import Image from 'next/image'
import Styles from './Sidebar.module.css'
import images from '../../../constants/images'
import { Sidebar_Data } from '../../../constants/data'
import { useRouter } from 'next/router'

const SideBar = ({ data, imageData }) => {
  const router = useRouter()

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
                style={{ cursor: 'pointer' }}
                className={Styles.logo}
                onClick={() => router.push('/')}
              />
            )}

            {imageData === 'image' && (
              <>
                <div className={Styles.User_info}>
                  <p>Louis Lara</p>
                  <span>Member since 2014</span>
                </div>
              </>
            )}

            <div className={Styles.horizontal_line}></div>
            <div className={Styles.Sidebar_data}>
              <>
                <div
                  className={Styles.sidebar_data_content}
                  onClick={() => setIsActive(index)}
                >
                  <span className={Styles.sidebar_img}>
                    <Image
                      className={Styles.sidebar_icon}
                      src={images.Livello_1}
                      alt="icons"
                      width={40}
                      height={40}
                    />
                  </span>

                  <span
                    className={Styles.Sidebar_links}
                    onClick={() => handleClick(item)}
                  >
                    Dashboard
                  </span>
                </div>

                <div
                  className={Styles.sidebar_data_content}
                  onClick={() => setIsActive(index)}
                >
                  <span className={Styles.sidebar_img}>
                    <Image
                      className={Styles.sidebar_icon}
                      src={images.Livello_1}
                      alt="icons"
                      width={40}
                      height={40}
                    />
                  </span>

                  <span
                    className={Styles.Sidebar_links}
                    onClick={() => handleClick(item)}
                  >
                    Orders
                  </span>
                </div>
                <div
                  className={Styles.sidebar_data_content}
                  onClick={() => setIsActive(index)}
                >
                  <span className={Styles.sidebar_img}>
                    <Image
                      className={Styles.sidebar_icon}
                      src={images.Livello_1}
                      alt="icons"
                      width={40}
                      height={40}
                    />
                  </span>

                  <span
                    className={Styles.Sidebar_links}
                    onClick={() => handleClick(item)}
                  >
                    History
                  </span>
                </div>
                <div
                  className={Styles.sidebar_data_content}
                  onClick={() => setIsActive(index)}
                >
                  <span className={Styles.sidebar_img}>
                    <Image
                      className={Styles.sidebar_icon}
                      src={images.Livello_1}
                      alt="icons"
                      width={40}
                      height={40}
                    />
                  </span>

                  <span
                    className={Styles.Sidebar_links}
                    onClick={() => handleClick(item)}
                  >
                    Customers
                  </span>
                </div>
                <div
                  className={Styles.sidebar_data_content}
                  onClick={() => setIsActive(index)}
                >
                  <span className={Styles.sidebar_img}>
                    <Image
                      className={Styles.sidebar_icon}
                      src={images.Livello_1}
                      alt="icons"
                      width={40}
                      height={40}
                    />
                  </span>

                  <span
                    className={Styles.Sidebar_links}
                    onClick={() => handleClick(item)}
                  >
                    Pages
                  </span>
                </div>
                <div
                  className={Styles.sidebar_data_content}
                  onClick={() => setIsActive(index)}
                >
                  <span className={Styles.sidebar_img}>
                    <Image
                      className={Styles.sidebar_icon}
                      src={images.Livello_1}
                      alt="icons"
                      width={40}
                      height={40}
                    />
                  </span>

                  <span
                    className={Styles.Sidebar_links}
                    onClick={() => handleClick(item)}
                  >
                    Blogs
                  </span>
                </div>
                <div
                  className={Styles.sidebar_data_content}
                  onClick={() => setIsActive(index)}
                >
                  <span className={Styles.sidebar_img}>
                    <Image
                      className={Styles.sidebar_icon}
                      src={images.Livello_1}
                      alt="icons"
                      width={40}
                      height={40}
                    />
                  </span>

                  <span
                    className={Styles.Sidebar_links}
                    onClick={() => handleClick(item)}
                  >
                    Invoices
                  </span>
                </div>
              </>
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
