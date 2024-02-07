import React from 'react'
import Styles from '../../admin/Navbar/Navbar.module.css'
import images from '../../../constants/images'
import Image from 'next/image'

const Navbar = ({ data, thumbnail }) => {
  return (
    <>
      <h2>{data}</h2>
      <div className={Styles.navbar_container}>
        <div className={Styles.icon}>
          <Image
            src={images.Bell_Icon}
            width={20}
            height={20}
            alt="bell_icon"
          />
        </div>
        <div className={Styles.icon}>
          {thumbnail && (
            <Image src={thumbnail} width={40} height={40} alt="user_icon" />
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
