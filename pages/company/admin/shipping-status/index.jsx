import React from 'react'
import Styles from './ShippingStatus.module.css'
import SideBar from '../../../../components/admin/SideBar/SideBar'
import Navbar from '../../../../components/admin/Navbar/Navbar'
import { FaArrowLeftLong } from 'react-icons/fa6'
import StepForm from '../../../../components/admin/step-form/StepForm'
import images from '../../../../constants/images'
import Image from 'next/image'

const ShippingStatus = () => {
  return (
    <>
      <section className={Styles.ShippingStatus_section}>
        <div className={Styles.ShippingStatus_section_container}>
          <div className={Styles.ShippingStatus_content}>
            <div className={Styles.ShippingStatus_left_content}>
              <SideBar data={images.Louis_Lara} />
            </div>
            <div className={Styles.ShippingStatus_right_content}>
              <Navbar data="Shipping Status" thumbnail={images.User_icon} />
              <div className={Styles.middle_section}>
                <div className={Styles.right_icon}>
                  <FaArrowLeftLong color="#fff" fontSize={14} />
                </div>
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

                {/* address section */}
                <div className={Styles.address_section}>
                  <div className={Styles.address_container}>
                    <Image
                      src={images.Ethical_swag_small_logo}
                      width={60}
                      height={60}
                    />
                    <p>Delivery by UPS</p>
                    <span>Tracking ID : #3547789</span>
                  </div>
                  <div className={Styles.address_container}>
                    <p>
                      Invoice: <span>#3547789</span>
                    </p>
                    <p>
                      Email: <span>info@ethicalswag.com</span>
                    </p>
                    <p>
                      Phone: <span>+1 (254) 453-5936</span>
                    </p>
                    <p>
                      Web: <span>www.ethicalswag.com</span>
                    </p>
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

export default ShippingStatus
