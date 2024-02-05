import React from 'react'
import LeftSideBar from '../components/admin/left-side-bar/LeftSideBar'

const dashboard = () => {
  return (
    <div className="text-green-50">
      dashboard
      <div className="" style={{ display: 'flex' }}>
        <LeftSideBar />
        <div className=""></div>
      </div>
    </div>
  )
}

export default dashboard
