import React from 'react'
import Styles from '../../admin/Navbar/Navbar.module.css'
import images from '../../../constants/images'
import Image from 'next/image'

const Navbar = ({ data, thumbnail }) => {
  return (
    <>
      <div className={Styles.navbar_container}>
        <h2>{data}</h2>
        <div className={Styles.icons}>
          <span className={Styles.icon}>
            <Image
              src={images.Bell_Icon}
              width={20}
              height={20}
              alt="bell_icon"
            />
          </span>
          {thumbnail && (
            <>
              <span className={Styles.icon}>
                <Image src={thumbnail} width={20} height={20} alt="user_icon" />
              </span>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
