import React from 'react'
import Styles from './Icons.module.css'
import Image from 'next/image'
import images from '../../../constants/images'

const Icons = () => {
  return (
    <>
      <div className={Styles.icons_container}>
        <div className={Styles.icon}>
          <Image
            src={images.Bell_Icon}
            width={20}
            height={20}
            alt="bell_icon"
          />
        </div>
        <div className={Styles.icon}>
          <Image
            src={images.User_icon}
            width={20}
            height={20}
            alt="user_icon"
          />
        </div>
      </div>
    </>
  )
}

export default Icons
