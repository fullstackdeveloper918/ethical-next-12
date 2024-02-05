import React from 'react'
import SideBar from '../components/admin/SideBar/SideBar'
import DashBoard from '../components/admin/DashBoard/DashBoard'
import Styles from '../styles/AdminDashboard.module.css'

const dashboard = () => {
  return (
    <>
      <section className={Styles.admin_dashboard_container}>
        <SideBar />
        <DashBoard />
      </section>
    </>
  )
}

export default dashboard
