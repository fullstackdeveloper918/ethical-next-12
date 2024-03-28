import React, { useState } from 'react'
import Styles from './SwagOrderForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { initialValuesSwagOrderForm1stStep } from '../../lib/validationSchemas'
import Button from '../Button/Button'
import { useRouter } from 'next/router'
import { setStep1State, setreached2ndStep } from '../../redux-setup/cartSlice'
import { setDate } from 'redux-setup/FiltersSlice'
import { GrEdit } from 'react-icons/gr'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
const SwagOrderForm = ({ isBilling }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [value, onChange] = useState(
    date ? date : new Date(new Date().setDate(new Date().getDate() + 11))
  )
  const [isCalenderOpen, setIsCalenderOpen] = useState(false)
  let date = useSelector((state) => state.filter.date)

  const onSubmit = async (values) => {
    if (date) {
      dispatch(setreached2ndStep(true))
      dispatch(setStep1State(values))
      router.push('/shipping')
    }
  }

  const step1State = useSelector((state) => state.cart.step1State)
  const handleDateFormat = (dates) => {
    return dates.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }

  const tileDisabled = ({ date, view }) => {
    return (
      view === 'month' && date < new Date().setDate(new Date().getDate() + 10)
    )
  }

  const handleDateChange = (date) => {
    setIsCalenderOpen(false)
    onChange(date)
    dispatch(setDate(value))
  }

  return (
    <>
      <div className={Styles.SwagOrder_FAQ}>
        {!isBilling && <h3>1. Tell us about your Swag Project</h3>}
        <Formik
          initialValues={step1State || initialValuesSwagOrderForm1stStep}
          onSubmit={onSubmit}
        >
          {({ values, errors }) => (
            <>
              <Form>
                <div className={Styles.SwagOrder_faqInput}>
                  <p>When do you need this order? *</p>
                  <p
                    className=""
                    onClick={() => setIsCalenderOpen(!isCalenderOpen)}
                  >
                    selected date:{handleDateFormat(date)}
                  </p>
                  {isCalenderOpen && (
                    <Calendar
                      onChange={handleDateChange}
                      value={value}
                      tileDisabled={tileDisabled}
                    />
                  )}
                  {/* <Field
                    type="date"
                    id="selectedDate"
                    name="selectedDate"
                    autocomplete="off"
                    min={getTodayDate()}
                    disabled
                  /> */}
                </div>

                {isBilling && (
                  <div className={Styles.cart_left_faqInput}>
                    <p>Swift swag?</p>
                    <div className={Styles.cart_left_swift_content}>
                      <div className={Styles.custom_checkbox}>
                        <input
                          type="checkbox"
                          name="services"
                          id="swift_swag"
                        />
                        <label for="swift_swag">
                          {' '}
                          Checking this box will override the date selected
                          above to within 10 business days if you have gone
                          through the Swift Swag process. Please note additional
                          charges will apply.
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                <div className={Styles.SwagOrder_need}>
                  <p>Notes about your order:</p>

                  <Field
                    as="textarea"
                    rows="4"
                    type="text"
                    id="textarea"
                    name="textarea"
                    placeholder="notes about your order"
                    autocomplete="off"
                    className={Styles.SwagOrder_need_textarea}
                    disabled={isBilling}
                  />
                  <ErrorMessage
                    name="textarea"
                    component="div"
                    className={Styles.error}
                  />
                </div>

                <div className={Styles.SwagOrder_interested_section}>
                  <p>Are you interested in additional services?</p>
                  <div className={Styles.SwagOrder_interested_section_fields}>
                    <div className={Styles.inputs}>
                      <div className={Styles.custom_checkbox}>
                        <Field
                          type="checkbox"
                          name="swagPack"
                          id="swagPack"
                          disabled={isBilling}
                        />
                        <label for="swagPack">Swag Pack Kitting</label>
                      </div>
                    </div>
                    <div className={Styles.inputs}>
                      <div className={Styles.custom_checkbox}>
                        <Field
                          type="checkbox"
                          name="Warehousing"
                          id="Warehousing"
                          disabled={isBilling}
                        />
                        <label for="Warehousing">Warehousing</label>
                      </div>
                    </div>
                    <div className={Styles.inputs}>
                      <div className={Styles.custom_checkbox}>
                        <Field
                          type="checkbox"
                          name="graphicDesign"
                          id="graphicDesign"
                          disabled={isBilling}
                        />
                        <label for="graphicDesign">Graphic Design</label>
                      </div>
                    </div>
                    <div className={Styles.inputs}>
                      <div className={Styles.custom_checkbox}>
                        <Field
                          type="checkbox"
                          name="pickAndPack"
                          id="pickAndPack"
                          disabled={isBilling}
                        />
                        <label for="pickAndPack">Pick and Pack</label>
                      </div>
                    </div>
                    <div className={Styles.inputs}>
                      <div className={Styles.custom_checkbox}>
                        <Field
                          type="checkbox"
                          name="notSure"
                          id="notSure"
                          disabled={isBilling}
                        />
                        <label for="notSure">Not Sure</label>
                      </div>
                    </div>
                  </div>
                </div>
                {!isBilling && <Button onClick={onSubmit} disabled={!date} />}
              </Form>
            </>
          )}
        </Formik>
        {isBilling && (
          <button
            type="button"
            onClick={() => router.push('/cart')}
            className="edit_button"
          >
            <GrEdit />
            Edit
          </button>
        )}
      </div>
    </>
  )
}

export default SwagOrderForm
