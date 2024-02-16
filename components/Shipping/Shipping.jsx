import React from 'react'
import Styles from './Shipping.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {
  initialValuesShipping,
  validationSchemaShipping,
} from '../../lib/validationSchemas'

const Shipping = () => {
  const onSubmit = (values) => {
    console.log(values, 'values')
  }

  return (
    <>
      <div className={Styles.shipping_container}>
        <h2 className={Styles.title}>2. Shipping Address</h2>

        <Formik
          initialValues={initialValuesShipping}
          validationSchema={validationSchemaShipping}
          onSubmit={onSubmit}
        >
          {() => (
            <>
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
                  <div>
                    <Field
                      type="text"
                      placeholder="First name"
                      name="firstName"
                      id="firstName"
                      autocomplete="off"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className={Styles.error}
                    />
                  </div>
                  <div>
                    <Field
                      type="text"
                      placeholder="Last name"
                      name="lastName"
                      id="lastName"
                      autocomplete="off"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className={Styles.error}
                    />
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
                    <input type="radio" name="radio" id="radio" />
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
                </div>
                <button
                  type="submit"
                  style={{
                    padding: '1rem',
                    backgroundColor: 'black',
                    color: '#fff',
                  }}
                >
                  Login
                </button>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </>
  )
}

export default Shipping
