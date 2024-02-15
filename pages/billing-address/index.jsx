import React from 'react'
import PrimaryHeader from '../../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../../components/secondary-header/SecondaryHeader'
import QuotationSubmissionHeader from '../../components/QuotationSubmissionHeader/QuotationSubmissionHeader'
import Button from '../../components/Button/Button'
import EstimateCard from '../../components/EstimateCard/EstimateCard'
import Footer from '../../components/footer/Footer'
import Styles from '../../components/cart/Cart.module.css'
import ReviewEstimate from '../../components/ReviewEstimate/ReviewEstimate'
import { GrEdit } from 'react-icons/gr'

const BillingAddress = () => {
  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <section className={Styles.cart_section}>
        <div className={Styles.widthFull}>
          <QuotationSubmissionHeader />
          <ReviewEstimate />
          <div className={Styles.cart_left_FAQ}>
            <h3>1. Tell us about your Swag Project</h3>
            <div className={Styles.cart_left_faqInput}>
              <p>When do you need this order? *</p>
              <input type="date" name="selectedDate" />
            </div>
            <div className={Styles.cart_left_faqInput}>
              <p>Swift swag?</p>
              <div className={Styles.cart_left_swift_content}>
                {/* <input type="checkbox" name="" id="" />
                <label>
                  Checking this box will override the date selected above to
                  within 10 business days if you have gone through the Swift
                  Swag process. Please note additional charges will apply.
                </label> */}
                <div className={Styles.custom_checkbox}>
                  <input type="checkbox" name="services" id="swift_swag" />
                  <label for="swift_swag">
                    {' '}
                    Checking this box will override the date selected above to
                    within 10 business days if you have gone through the Swift
                    Swag process. Please note additional charges will apply.
                  </label>
                </div>
              </div>
            </div>
            <div className={Styles.cart_left_need}>
              <p>Notes about your order:</p>
              <textarea
                placeholder="notes about your order"
                name="content"
                className={Styles.cart_left_need_textarea}
              ></textarea>
            </div>
            <div className={Styles.cart_left_interested_section}>
              <p>Are you interested in additional services?</p>
              <div className={Styles.cart_left_interested_section_fields}>
                <div className={Styles.inputs}>
                  {/* <input type="checkbox" name="services" id="" />
                  <h6>Swag Pack Kitting</h6> */}
                  <div className={Styles.custom_checkbox}>
                    <input type="checkbox" name="services" id="swapPack" />
                    <label for="swapPack">Swag Pack Kitting</label>
                  </div>
                </div>
                <div className={Styles.inputs}>
                  {/* <input type="checkbox" name="services" id="" />
                  <h6>Warehousing</h6> */}
                  <div className={Styles.custom_checkbox}>
                    <input type="checkbox" name="services" id="Warehousing" />
                    <label for="Warehousing">Warehousing</label>
                  </div>
                </div>
                <div className={Styles.inputs}>
                  {/* <input type="checkbox" name="services" id="" />
                  <h6>Graphic Design</h6> */}
                  <div className={Styles.custom_checkbox}>
                    <input type="checkbox" name="services" id="graphicDesign" />
                    <label for="graphicDesign">Graphic Design</label>
                  </div>
                </div>
                <div className={Styles.inputs}>
                  {/* <input type="checkbox" name="services" id="" />
                  <h6>Pick and Pack</h6> */}
                  <div className={Styles.custom_checkbox}>
                    <input type="checkbox" name="services" id="services" />
                    <label for="services">Pick and Pack</label>
                  </div>
                </div>
                <div className={Styles.inputs}>
                  <div className={Styles.custom_checkbox}>
                    <input type="checkbox" id="myCheckbox" />
                    <label for="myCheckbox">Not Sure</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping address  css writen in cart module*/}
          <div className={Styles.shipping_address_container}>
            <p>Shipping Address</p>
            <div className={Styles.content}>
              <div>
                <p>Address Book</p>
                <p>
                  94 Stanley Drive, Mount Marlow, Queensland (07) 4963 4369,
                  Zip:4800, Australia
                </p>
              </div>
              <div className={Styles.buttonContent}>
                <button>
                  <GrEdit />
                  Edit
                </button>
              </div>
            </div>
            <div className={Styles.bottom_content}>
              <p>
                If everything looks good, go ahead and click submit mockup
                request!{' '}
              </p>
            </div>
          </div>
          <Button />
        </div>
        <EstimateCard />
      </section>
      <Footer />
    </>
  )
}

export default BillingAddress
