import React from 'react'
import Styles from './SwagOrderForm.module.css'

const SwagOrderForm = () => {
  return (
    <>
      <div className={Styles.SwagOrder_FAQ}>
        <h3>1. Tell us about your Swag Project</h3>
        <div className={Styles.SwagOrder_faqInput}>
          <p>When do you need this order? *</p>
          <input type="date" name="selectedDate" />
        </div>

        <div className={Styles.SwagOrder_need}>
          <p>Notes about your order:</p>
          <textarea
            placeholder="notes about your order"
            name="content"
            className={Styles.SwagOrder_need_textarea}
          ></textarea>
        </div>
        <div className={Styles.SwagOrder_interested_section}>
          <p>Are you interested in additional services?</p>
          <div className={Styles.SwagOrder_interested_section_fields}>
            <div className={Styles.inputs}>
              <div className={Styles.custom_checkbox}>
                <input type="checkbox" name="services" id="swapPack" />
                <label for="swapPack">Swag Pack Kitting</label>
              </div>
            </div>
            <div className={Styles.inputs}>
              <div className={Styles.custom_checkbox}>
                <input type="checkbox" name="services" id="Warehousing" />
                <label for="Warehousing">Warehousing</label>
              </div>
            </div>
            <div className={Styles.inputs}>
              <div className={Styles.custom_checkbox}>
                <input type="checkbox" name="services" id="graphicDesign" />
                <label for="graphicDesign">Graphic Design</label>
              </div>
            </div>
            <div className={Styles.inputs}>
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
    </>
  )
}

export default SwagOrderForm
