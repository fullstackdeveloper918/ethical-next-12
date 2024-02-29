import React, { useState } from 'react'
import Styles from './SwagOrderForm.module.css'
import { swagFormData } from '../../redux-setup/formSlice'
import { useDispatch, useSelector } from 'react-redux'

const SwagOrderForm = () => {
  const [formData, setFormData] = useState({
    selectedDate: '',
    textareaText: '',
    selectedCheckboxes: [],
  })
  const dispatch = useDispatch()

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]:
        type === 'checkbox'
          ? checked
            ? [...prevFormData[name], value]
            : prevFormData[name].filter((item) => item !== value)
          : value,
    }))
    dispatch(swagFormData(formData))
  }

  console.log(formData)

  return (
    <>
      <div className={Styles.SwagOrder_FAQ}>
        <h3>1. Tell us about your Swag Project</h3>
        <div className={Styles.SwagOrder_faqInput}>
          <p>When do you need this order? *</p>
          <input
            type="date"
            name="selectedDate"
            value={formData.selectedDate}
            onChange={handleChange}
          />
        </div>

        <div className={Styles.SwagOrder_need}>
          <p>Notes about your order:</p>
          <textarea
            placeholder="notes about your order"
            name="content"
            className={Styles.SwagOrder_need_textarea}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={Styles.SwagOrder_interested_section}>
          <p>Are you interested in additional services?</p>
          <div className={Styles.SwagOrder_interested_section_fields}>
            <div className={Styles.inputs}>
              <div className={Styles.custom_checkbox}>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  id="swapPack"
                  value="swapPack"
                  checked={formData.selectedCheckboxes.includes('swapPack')}
                  onChange={handleChange}
                />
                <label for="swapPack">Swag Pack Kitting</label>
              </div>
            </div>
            <div className={Styles.inputs}>
              <div className={Styles.custom_checkbox}>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  id="Warehousing"
                  value="Warehousing"
                  checked={formData.selectedCheckboxes.includes('Warehousing')}
                  onChange={handleChange}
                />
                <label for="Warehousing">Warehousing</label>
              </div>
            </div>
            <div className={Styles.inputs}>
              <div className={Styles.custom_checkbox}>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  id="graphicDesign"
                  value="graphicDesign"
                  checked={formData.selectedCheckboxes.includes(
                    'graphicDesign'
                  )}
                  onChange={handleChange}
                />
                <label for="graphicDesign">Graphic Design</label>
              </div>
            </div>
            <div className={Styles.inputs}>
              <div className={Styles.custom_checkbox}>
                <input
                  type="checkbox"
                  name="selectedCheckboxes"
                  id="pick and pack"
                  value={'pick&pack'}
                  checked={formData.selectedCheckboxes.includes('pick&pack')}
                  onChange={handleChange}
                />
                <label for="pick and pack">Pick and Pack</label>
              </div>
            </div>
            <div className={Styles.inputs}>
              <div className={Styles.custom_checkbox}>
                <input
                  type="checkbox"
                  id="not sure"
                  name="selectedCheckboxes"
                  value="notsure"
                  checked={formData.selectedCheckboxes.includes('notsure')}
                  onChange={handleChange}
                />
                <label for="not sure">Not Sure</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SwagOrderForm
