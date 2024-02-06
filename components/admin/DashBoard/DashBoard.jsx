import React from 'react'
import Styles from './DashBoard.module.css'
import { IoSearchOutline } from 'react-icons/io5'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import Icons from '../Icons/Icons'

const DashBoard = () => {
  return (
    <>
      <div className={Styles.DashBoard_container}>
        <div className={Styles.top_content}>
          <h2>Dashboard</h2>
          <Icons />
        </div>
        <div className={Styles.purchase_button}>
          <button>Add Purchase</button>
        </div>
        <div className={Styles.purchase_card}>
          <nav className={Styles.nav_content}>
            <div className={Styles.left_section}>
              <button className={Styles.Add_Purchase_btn}>Add Purchase</button>
              <span className={Styles.message}>...</span>
            </div>
            <div className={Styles.middle_section}>
              <input type="text" placeholder="Search..." />
              <button>
                <span>
                  <IoSearchOutline />
                </span>
              </button>
            </div>
            <div className={Styles.right_section}>
              <p>1-50 of 2,500</p>
              <IoIosArrowBack />
              <IoIosArrowForward />
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default DashBoard
