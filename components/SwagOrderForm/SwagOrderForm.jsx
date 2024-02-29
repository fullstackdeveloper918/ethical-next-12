import React, { useEffect, useState } from 'react'
import Styles from './SwagOrderForm.module.css'
import { swagFormData } from '../../redux-setup/formSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {
  initialValuesSwagOrderForm1stStep,
  validationSchemaSwagOrderForm1stStep,
} from '../../lib/validationSchemas'
import Button from '../Button/Button'
import { useRouter } from 'next/router'
import { setStep1State, setreached2ndStep } from '../../redux-setup/cartSlice'

const SwagOrderForm = () => {
  const router = useRouter()

  const dispatch = useDispatch()
  const [errorLength, setErrorLength] = useState(false)

  const onSubmit = async (values) => {
    if (values.selectedDate) {
      dispatch(setreached2ndStep(true))
      dispatch(setStep1State(values))
      router.push('/shipping')
    }
    // try {
    //   let formData = new FormData()
    //   formData.append('email', values.email)
    //   formData.append('password', values.password)

    //   loadQuery(formData)
    // } catch (error) {
    //   console.log(error, 'from login api')
    // }
  }
  const getTodayDate = () => {
    const today = new Date()
    const year = today.getFullYear().toString()
    const month = (today.getMonth() + 1).toString().padStart(2, '0')

    const day = today.getDate().toString().padStart(2, '0')
    return `${year + '-' + month + '-' + day}`
  }

  const step1State = useSelector((state) => state.cart.step1State)

  return (
    <>
      <div className={Styles.SwagOrder_FAQ}>
        <h3>1. Tell us about your Swag Project</h3>
        <Formik initialValues={step1State} onSubmit={onSubmit}>
          {({ values, errors }) => (
            <>
              <Form>
                <div className={Styles.SwagOrder_faqInput}>
                  <p>When do you need this order? *</p>
                  <Field
                    type="date"
                    id="selectedDate"
                    name="selectedDate"
                    autocomplete="off"
                    min={getTodayDate()}
                  />
                  <ErrorMessage
                    name="selectedDate"
                    component="div"
                    className={Styles.error}
                  />
                </div>

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
                        <Field type="checkbox" name="swagPack" id="swagPack" />
                        <label for="swagPack">Swag Pack Kitting</label>
                      </div>
                    </div>
                    <div className={Styles.inputs}>
                      <div className={Styles.custom_checkbox}>
                        <Field
                          type="checkbox"
                          name="Warehousing"
                          id="Warehousing"
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
                        />
                        <label for="pickAndPack">Pick and Pack</label>
                      </div>
                    </div>
                    <div className={Styles.inputs}>
                      <div className={Styles.custom_checkbox}>
                        <Field type="checkbox" name="notSure" id="notSure" />
                        <label for="notSure">Not Sure</label>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={onSubmit}
                  disabled={values.selectedDate == ''}
                />
              </Form>
            </>
          )}
        </Formik>
      </div>
    </>
  )
}

export default SwagOrderForm
