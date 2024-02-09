import React from 'react'
import Styles from '../../admin/Navbar/Navbar.module.css'
import images from '../../../constants/images'
import Image from 'next/image'
import { BsFiletypeCsv } from 'react-icons/bs'

const Navbar = ({ data, thumbnail }) => {
  return (
    <>
      <div className={Styles.navbar_container}>
        <h2>{data}</h2>
        <div className={Styles.icons}>
          {data === 'Customers' && (
            <>
              <button className={Styles.button}>
                Add New by CSV <BsFiletypeCsv />
              </button>
              <button className={Styles.button}>Add New</button>
            </>
          )}
          {data === 'Invoice' && (
            <>
              <button className={Styles.button}>Add Invoice</button>
            </>
          )}
          {data === 'BlogPost' && (
            <>
              <button className={Styles.button}>Add Post</button>
            </>
          )}
          {data === 'Orders' && (
            <>
              <button className={Styles.button}>Add New</button>
            </>
          )}
          {data === 'Pages' && (
            <>
              <button className={Styles.button}>Add Page</button>
            </>
          )}
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
