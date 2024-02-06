import React from 'react'
import Styles from './DashBoard.module.css'
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
            <button>Add Purchase</button>
            <span>...</span>
          </nav>
        </div>
      </div>
    </>
  )
}

export default DashBoard
