import React from 'react'
import Styles from './EditInfo.module.css'
import images from '../../../../constants/images'
import SideBar from '../../../../components/admin/SideBar/SideBar'
import Navbar from '../../../../components/admin/Navbar/Navbar'
import StepForm from '../../../../components/admin/step-form/StepForm'

const EditInformation = () => {
  return (
    <>
      <section className={Styles.EditInfo_section}>
        <div className={Styles.EditInfo_section_container}>
          <div className={Styles.EditInfo_content}>
            <div className={Styles.EditInfo_left_content}>
              <SideBar data={images.Louis_Lara} />
            </div>
            <div className={Styles.EditInfo_right_content}>
              <Navbar data="Order Detail" thumbnail={images.User_icon} />
              <div className={Styles.middle_section}>
                <div className={Styles.order_completion}>
                  <p>Order 1</p>
                  <p>Expected Completion</p>
                </div>
                <div className={Styles.order_detail_content}>
                  <span>order id - OD233873648734687289</span>
                  <span>Dec 12, 2023</span>
                </div>
                <div className={Styles.step_form_container}>
                  <StepForm />
                </div>

                {/* Edit Product */}
                <div className={Styles.edit_product_container}>
                  <p>Edit your product</p>
                  <div className={Styles.file_container}>
                    <p>Change logo</p>
                    <label htmlFor="edit_file">
                      <input type="file" name="" id="edit_file" />
                    </label>
                  </div>
                  <div className={Styles.add_more_section}>
                    <p>Add more about your changes</p>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="6"
                      placeholder="Lorem ipsum dolor sit amet"
                    ></textarea>
                  </div>
                  <div className={Styles.buttons}>
                    <button>Cancel</button>
                    <button>Save Changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EditInformation
