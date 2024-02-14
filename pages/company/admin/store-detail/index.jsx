import React from 'react'
import Styles from './store.module.css'
import SideBar from '../../../../components/admin/SideBar/SideBar'
import Navbar from '../../../../components/admin/Navbar/Navbar'
import images from '../../../../constants/images'
import { Store_Detail_Data } from '../../../../constants/data'

const Store = () => {
  return (
    <>
      <section className={Styles.Store_section}>
        <div className={Styles.Store_section_container}>
          <div className={Styles.Store_content}>
            <div className={Styles.Store_left_content}>
              <SideBar data={images.Louis_Lara} />
            </div>
            <div className={Styles.Store_right_content}>
              <Navbar data="Store Detail" thumbnail={images.User_icon} />
              <div className={Styles.planning_section}>
                <p>What do you plan to do first ?</p>
                <div className={Styles.planning_section_content}>
                  {Store_Detail_Data.map((data) => (
                    <>
                      <div className={Styles.detail_content} key={data.id}>
                        <input type="radio" name="questions" id="" />
                        <p>{data.text}</p>
                      </div>
                    </>
                  ))}
                </div>
                <div className={Styles.bottom_buttons}>
                  <button>Back</button>
                  <button>Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Store
