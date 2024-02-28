import React from 'react'
import SideBar from '../../../components/admin/SideBar/SideBar'
import Navbar from '../../../components/admin/Navbar/Navbar'
import Styles from './AddUsers.module.css'
import images from '../../../constants/images'

const AddUsers = () => {
  return (
    <>
      <section className={Styles.AddUsers_section}>
        <div className={Styles.AddUsers_container}>
          <div className={Styles.AddUsers_content}>
            <div className={Styles.AddUsers_left_content}>
              <SideBar data={images.ethical_swag} />
            </div>
            <div className={Styles.AddUsers_right_content}>
              <Navbar data="Add New Users" thumbnail={images.User_icon} />
              {/* Customer data table */}
              <div className={Styles.AddUsers_data_table}>
                <form className={Styles.form}>
                  <div className={Styles.inputs}>
                    <input type="text" placeholder="Enter Username" />
                  </div>
                  <div className={Styles.inputs}>
                    <input type="email" placeholder="Enter email address" />
                  </div>
                  <div className={Styles.inputs}>
                    <input type="password" placeholder="Enter Password" />
                  </div>
                  <div className={Styles.inputs}>
                    <input type="password" placeholder="Retype Password" />
                  </div>
                  <div className={Styles.inputs}>
                    <select name="" id="">
                      <option value="Select Role">Select Role</option>
                    </select>
                  </div>
                  <div className={Styles.inputs}>
                    <div>
                      <button>Back</button>
                      <button>Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddUsers
