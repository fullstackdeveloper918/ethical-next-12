import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {
  initialValuesShipping,
  validationSchemaShipping,
} from '../../lib/validationSchemas'
import Button from '../Button/Button'
import { setStep2State, setreached3rdStep } from '../../redux-setup/cartSlice'
import Styles from './Shipping.module.css'

const Shipping = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [terms, setTerms] = useState(false)
  const [errorLength, setErrorLength] = useState(false)
  const step2State = useSelector((state) => state.cart.step2State)

  const onSubmit = (values) => {
    if (errorLength == 0) {
      dispatch(setreached3rdStep(true))
      dispatch(setStep2State(values))
      router.push('/billing-address')
    }
  }

  const handleCheckboxChange = (event) => {
    setTerms((current) => !current)
  }

  return (
    <>
      <div className={Styles.shipping_container}>
        <h2 className={Styles.title}>2. Shipping Address</h2>

        <Formik
          initialValues={step2State}
          validationSchema={validationSchemaShipping}
          onSubmit={onSubmit}
        >
          {({ errors, values }) => (
            <>
              {setErrorLength(Object.keys(errors).length)}
              <Form className={Styles.form}>
                <h3 className={Styles.form_title}>Ship order to *</h3>
                <div className={Styles.form_inputs}>
                  <Field
                    type="text"
                    name="singleAddress"
                    id="singleAddress"
                    autocomplete="off"
                    placeholder="Single Address"
                  />
                  <ErrorMessage
                    name="singleAddress"
                    component="div"
                    className={Styles.error}
                  />
                </div>
                <div className={Styles.form_inputs}>
                  <Field
                    type="text"
                    placeholder="Country/region"
                    name="country"
                    id="country"
                    autocomplete="off"
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className={Styles.error}
                  />
                </div>

                <div className={`${Styles.form_inputs} ${Styles.flexInputs}`}>
                  <Field
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    id="firstName"
                    autocomplete="off"
                  />
                  <Field
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    id="lastName"
                    autocomplete="off"
                  />
                </div>
                <div className="">
                  <div className={`${Styles.form_inputs} ${Styles.flexInputs}`}>
                    <div className="">
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className={Styles.error}
                      />
                    </div>
                    <div className="">
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className={Styles.error}
                      />
                    </div>
                  </div>
                </div>

                <div className={Styles.form_inputs}>
                  <Field
                    type="number"
                    placeholder="Phone number"
                    name="number"
                    id="number"
                    autocomplete="off"
                  />
                  <ErrorMessage
                    name="number"
                    component="div"
                    className={Styles.error}
                  />
                </div>
                <div className={Styles.form_inputs}>
                  <Field
                    type="email"
                    placeholder="Email address"
                    name="email"
                    id="email"
                    autocomplete="off"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={Styles.error}
                  />
                </div>
                <div className={Styles.form_inputs}>
                  <Field
                    type="text"
                    placeholder="Company name"
                    name="companyName"
                    id="companyName"
                    autocomplete="off"
                  />
                  <ErrorMessage
                    name="companyName"
                    component="div"
                    className={Styles.error}
                  />
                </div>
                <div className={Styles.form_inputs}>
                  <Field
                    type="text"
                    placeholder="Address"
                    name="address"
                    id="address"
                    autocomplete="off"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className={Styles.error}
                  />
                </div>
                <div className={Styles.form_inputs}>
                  <Field
                    type="text"
                    placeholder="Appartment, suite, etc. (optional)"
                    name="apartment"
                    id="apartment"
                    autocomplete="off"
                  />
                  <ErrorMessage
                    name="apartment"
                    component="div"
                    className={Styles.error}
                  />
                </div>
                <div className={`${Styles.form_inputs} ${Styles.flexInputs}`}>
                  <Field
                    type="text"
                    placeholder="City"
                    name="city"
                    id="city"
                    autocomplete="off"
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className={Styles.error}
                  />
                  <Field
                    type="text"
                    placeholder="State"
                    name="state"
                    id="state"
                    autocomplete="off"
                  />
                  <ErrorMessage
                    name="state"
                    component="div"
                    className={Styles.error}
                  />
                  <Field
                    type="number"
                    placeholder="PIN Code"
                    name="pin"
                    id="pin"
                    autocomplete="off"
                  />
                  <ErrorMessage
                    name="pin"
                    component="div"
                    className={Styles.error}
                  />
                </div>
                <div className={`${Styles.form_inputs}`}>
                  <div
                    className={` ${Styles.flexInputs}  ${Styles.agreecheck}`}
                  >
                    <input
                      type="checkbox"
                      name="terms"
                      value={terms}
                      id="terms"
                      onChange={handleCheckboxChange}
                    />
                    <p>
                      I agree to the{' '}
                      <span className={Styles.textUnderline}>
                        terms & conditions | privacy policy
                      </span>
                    </p>
                    <ErrorMessage
                      name="radio"
                      component="div"
                      className={Styles.error}
                    />
                  </div>
                  {/* Shipping Form */}
                </div>

                <Button
                  disabled={
                    errorLength !== 0 || !terms || !values.singleAddress
                  }
                  onClick={onSubmit}
                />
              </Form>
            </>
          )}
        </Formik>
      </div>
    </>
  )
}

export default Shipping
