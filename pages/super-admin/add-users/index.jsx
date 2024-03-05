import React from 'react'
import Styles from './AddUsers.module.css'
import Layout from '../../../components/super-adminLayout/Layout'

const AddUsers = () => {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  )
}

export default AddUsers
