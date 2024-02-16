import React from 'react'
import Styles from './Payment.module.css'
import SideBar from '../../../../components/admin/SideBar/SideBar'
import Image from 'next/image'
import Navbar from '../../../../components/admin/Navbar/Navbar'
import { FaArrowLeftLong } from 'react-icons/fa6'
import StepForm from '../../../../components/admin/step-form/StepForm'
import images from '../../../../constants/images'

const Payment = () => {
  return (
    <>
      <section className={Styles.Payment_section}>
        <div className={Styles.Payment_section_container}>
          <div className={Styles.Payment_content}>
            <div className={Styles.Payment_left_content}>
              <SideBar data={images.Louis_Lara} />
            </div>
            <div className={Styles.Payment_right_content}>
              <Navbar data="Payment Detail" thumbnail={images.User_icon} />
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

                {/* Wire Transfer section */}
                <div className={Styles.wire_transfer_section}>
                  <div className={Styles.container}>
                    <div className={Styles.left_content}>
                      <div className={Styles.payment_option}>
                        <input type="radio" />
                        <span>Wire Transfer</span>
                      </div>
                      <div className={Styles.wire_transfer}>
                        <div className={Styles.wire_transfer_wrapper}>
                          <div className={Styles.imgContent}>
                            <Image
                              src={images.Wire_transfer_icon}
                              width={30}
                              height={30}
                              alt="wire-transfer-icon"
                            />
                          </div>
                          <div className={Styles.textContent}>
                            <h4>Wire Transfer (USD)</h4>
                            <p>
                              <span></span>
                              Send funds via wire to any bank in USD
                            </p>
                            <button>Setup</button>
                          </div>
                        </div>
                        <div className={Styles.horizontal_line}></div>
                        <div className={Styles.wire_transfer_wrapper}>
                          <div className={Styles.imgContent}>
                            <Image
                              src={images.Wire_transfer_icon}
                              width={30}
                              height={30}
                              alt="wire-transfer-icon"
                            />
                          </div>
                          <div className={Styles.textContent}>
                            <h4>Wire Transfer (CAD)</h4>
                            <p>
                              <span></span>
                              Send funds via wire to any bank in CAD
                            </p>
                            <button>Setup</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={Styles.separator}>OR</div>
                    <div className={Styles.right_content}>
                      <div className={Styles.payment_option}>
                        <input type="radio" />
                        <span>Stripe</span>
                      </div>
                      <div className={Styles.payment_form}>
                        <div className={Styles.inputs}>
                          <label htmlFor="">Email</label>
                          <input type="email" />
                        </div>
                        <div className={Styles.inputs}>
                          <label htmlFor="">Card Information</label>
                          <input
                            type="text"
                            placeholder="1234 1234 1234 1234"
                          />
                          <input
                            type="text"
                            className={Styles.card_cvv}
                            placeholder="MM/YY"
                          />
                          <input
                            type="text"
                            className={Styles.card_cvv}
                            placeholder="CVC"
                          />
                        </div>
                        <div className={Styles.inputs}>
                          <label htmlFor="">Name on card</label>
                          <input type="text" />
                        </div>
                        <div className={Styles.inputs}>
                          <label htmlFor="">Country or region</label>
                          <input type="email" />
                        </div>
                        <div className={Styles.inputs}>
                          <button>Pay</button>
                        </div>
                      </div>
                    </div>
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

export default Payment
