import React, { useState } from 'react'
import Image from 'next/image'
import Styles from './Sidebar.module.css'
import images from '../../../constants/images'
import { Sidebar_Data } from '../../../constants/data'

const SideBar = ({ data, imageData }) => {
  const [isActive, setIsActive] = useState(0)

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
              {Sidebar_Data.map((item, index) => (
                <>
                  <div
                    className={`${Styles.sidebar_data_content} ${
                      isActive === index ? Styles.active : ''
                    }`}
                    key={item.id}
                    onClick={() => setIsActive(index)}
                  >
                    <Image
                      className={Styles.sidebar_icon}
                      src={item.icon}
                      alt="icons"
                      width={40}
                      height={40}
                    />
                    <span className={Styles.Sidebar_links}>{item.text}</span>
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
