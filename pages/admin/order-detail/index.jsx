import React from 'react'
import Layout from '../../../components/super-adminLayout/Layout'
import Image from 'next/image'
import Styles from './orderDetail.module.css'
import StepForm from '../../../components/admin/step-form/StepForm'
import images from '../../../constants/images'
import { GrEdit } from 'react-icons/gr'

const orderDetail = () => {
  return (
    <>
      <Layout>
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

          <div className={Styles.ordered_products}>
            <p>Ordered Products</p>
            <div className={Styles.content}>
              <div className={Styles.imgContent}>
                <Image src={images.shirt_small} width={100} height={100} />
              </div>
              <div className={Styles.text_container}>
                <div className={Styles.text_content}>
                  <p>Tentree Men's Kangaroo Organic Cotton Hoodie</p>
                  <span>Product Color : Black</span>
                  <span>Number of Units do you need? : 50</span>
                  <span>Customization Type : No Decoration</span>
                  <div>
                    <span>Material: </span>
                    <span>
                      Made from a 9.8oz Cotton and Polyester lightweight fleece
                      blended fabric
                    </span>
                  </div>
                </div>
                <div className={Styles.button_section}>
                  <span>Upload Logo / Artwork</span>
                  <div className={Styles.buttons}>
                    <button>
                      <GrEdit /> Edit
                    </button>
                    <button>Remove logo</button>
                  </div>
                </div>
                <div className={Styles.logo_section}>
                  <div className={Styles.logo}>
                    <div className={Styles.cross_icon}>+</div>
                    <Image
                      src={images.Ethical_swag_small_logo}
                      width={30}
                      height={30}
                      alt="logo"
                    />
                  </div>
                </div>
                <div className={Styles.price_section}>
                  <p>$4000</p>
                  <button>See Details</button>
                </div>
              </div>
            </div>
          </div>

          <div className={Styles.shipping_address_section}>
            <p>Shipping Address</p>
            <div className={Styles.content}>
              <div className={Styles.address_content}>
                <p>Address Book</p>
                <span>
                  94 Stanley Drive, Mount Marlow, Queensland (07) 4963 4369,Zip
                  4800, Australia
                </span>
              </div>
              <div className={Styles.button_content}>
                <button>
                  <GrEdit /> Edit
                </button>
              </div>
            </div>
          </div>

          <div className={Styles.tax_exemption_detail}>
            <p>Tax exemption number</p>
            <div className={Styles.tax_exemption_input}>
              <input type="text" placeholder="Tax exemption number" />
              <div className={Styles.radio_button}>
                <input type="radio" name="" id="" />
                <span>I qualify for tax exemption</span>
              </div>
            </div>
          </div>

          <div className={Styles.other_info_container}>
            <p>Other Info</p>
            <div className={Styles.content}>
              <p>Accepted Order Date</p>
              <span>12-03-2023</span>
              <p>Ship order to </p>
              <span>Single Address</span>
              <p>Important note about your order</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, cons ectetur adipiscing elit. Lorem ipsum
                dolor sit ame.
              </span>
            </div>
          </div>

          <div className={Styles.cancelation_request_container}>
            <p>Cancelation Request</p>
            <div className={Styles.content}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consn ectetur adipiscing elit. Lorem ipsum
                dolor sit ame.
              </p>
              <button>Cancel Request</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default orderDetail
