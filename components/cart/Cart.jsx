'use client'
import React, { useEffect, useState } from 'react'
import Styles from './Cart.module.css'
import { Formik, Form, Field, ErrorMessage, resetForm } from 'formik'
import {
  initialValuesLogin,
  validationSchema,
} from '../../lib/validationSchemas'
import useFetch from '../../lib/useFetch'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setRole } from '../../redux-setup/authSlice'

const Cart = ({ token, selectedOption }) => {
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    email: '',
    password: '',
    selectedDate: new Date().toISOString().split('T')[0],
    content: '',
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({
      ...prev,
      [name]:
        name === 'selectselectedDate'
          ? new Date(value).toISOString().split('T')[0]
          : value,
    }))
  }

  const [loadQuery, { response, loading, error, errorMessage }] = useFetch(
    `/auth/login`,
    {
      method: 'post',
    },
    'formdata'
  )

  useEffect(() => {
    if (response) {
      localStorage.setItem('token_swag', response?.data?.accessToken)
      dispatch(setRole(response?.data?.role))
      toast.success('Logged in sucessfully')

      // router.push('/')
    }
    if (error) {
      console.log(error, 'errorMessage')
      toast.error(error.message)
    }
  }, [response, error])

  const onSubmit = async (values) => {
    try {
      let formData = new FormData()
      formData.append('email', values.email)
      formData.append('password', values.password)

      loadQuery(formData)
    } catch (error) {
      console.log(error, 'from login api')
    } finally {
    }
  }

  return (
    <>
      <section className={Styles.cart_section}>
        {/* Left Section  */}
        <div className={Styles.cart_left}>
          {/* <QuotationSubmissionHeader /> */}
          {!token && selectedOption === 'Existing_client' && (
            <Formik
              initialValues={initialValuesLogin}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {() => (
                <>
                  <Form className={Styles.form}>
                    <div className={Styles.form_inputs}>
                      <Field
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className={Styles.error}
                      />
                    </div>

                    <div className={Styles.form_inputs}>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className={Styles.error}
                      />
                    </div>

                    <div className={Styles.form_inputs}>
                      <button
                        type="submit"
                        disabled={loading}
                        className={Styles.form_button}
                      >
                        Login
                      </button>
                    </div>
                  </Form>
                </>
              )}
            </Formik>
          )}

          {!token && selectedOption === 'New_client' && (
            <Formik
              initialValues={initialValuesLogin}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {() => (
                <>
                  <Form className={Styles.form}>
                    <div className={Styles.form_inputs}>
                      <Field
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className={Styles.error}
                      />
                    </div>

                    <div className={Styles.form_inputs}>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className={Styles.error}
                      />
                    </div>
                    <div className={Styles.form_inputs}>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className={Styles.error}
                      />
                    </div>
                    <div className={Styles.form_inputs}>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className={Styles.error}
                      />
                    </div>

                    <div className={Styles.form_inputs}>
                      <button
                        type="submit"
                        disabled={loading}
                        className={Styles.form_button}
                      >
                        Login
                      </button>
                    </div>
                  </Form>
                </>
              )}
            </Formik>
          )}

          <div className={Styles.cart_left_FAQ}>
            <h3>1. Tell us about your Swag Project</h3>
            <div className={Styles.cart_left_faqInput}>
              <p>When do you need this order? *</p>
              <input
                type="date"
                name="selectedDate"
                value={values.selectedDate}
                onChange={handleInputChange}
              />
            </div>
            <div className={Styles.cart_left_need}>
              <p>Notes about your order:</p>
              <textarea
                placeholder="notes about your order"
                name="content"
                value={values.content}
                onChange={handleInputChange}
                className={Styles.cart_left_need_textarea}
              ></textarea>
            </div>
            <div className={Styles.cart_left_interested_section}>
              <p>Are you interested in additional services?</p>
              <div className={Styles.cart_left_interested_section_fields}>
                <div className={Styles.inputs}>
                  <input type="checkbox" name="services" id="" />
                  <h6>Swag Pack Kitting</h6>
                </div>
                <div className={Styles.inputs}>
                  <input type="checkbox" name="services" id="" />
                  <h6>Warehousing</h6>
                </div>
                <div className={Styles.inputs}>
                  <input type="checkbox" name="services" id="" />
                  <h6>Graphic Design</h6>
                </div>
                <div className={Styles.inputs}>
                  <input type="checkbox" name="services" id="" />
                  <h6>Pick and Pack</h6>
                </div>
                <div className={Styles.inputs}>
                  <input type="checkbox" name="services" id="" />
                  <h6>Not Sure</h6>
                </div>
              </div>
            </div>

            {/* <Button /> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
