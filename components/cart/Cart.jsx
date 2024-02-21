'use client'
import React, { useEffect, useState } from 'react'
import Styles from './Cart.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {
  initialValuesLogin,
  initialValuesRegister,
  validationSchema,
  validationSchemaRegister,
} from '../../lib/validationSchemas'
import useFetch from '../../lib/useFetch'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setRole } from '../../redux-setup/authSlice'
import axios from 'axios'

const Cart = ({
  token,
  selectedOption,
  setShowEstimateCart,
  showEstimateCart,
  showLoginComponent,
}) => {
  //  const [tokenLocally,setTokenLocally] = useState('')

  const dispatch = useDispatch()
  const [showLogin, setShowLogin] = useState(true)
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

  const [loadQuery, { response, loading, error }] = useFetch(
    `/auth/login`,
    {
      method: 'post',
    },
    'formdata'
  )

  const [
    register,
    {
      response: registerResponse,
      loading: registerLoading,
      error: registerError,
    },
  ] = useFetch(
    `/auth/register`,
    {
      method: 'post',
    },
    'formdata'
  )

  const user_Id = 915

  useEffect(() => {
    if (response) {
      localStorage.setItem('token_swag', response?.data?.accessToken)
      dispatch(setRole(response?.data?.role))
      setShowLogin(false)

      toast.success('Logged in sucessfully')
      axios
        .get(`https://test.cybersify.tech/Eswag/public/api/cart/${user_Id}`, {
          headers: {
            Authorization: response?.data?.accessToken,
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          console.log('Response from cart:', res.data)
          // Handle the response data here
        })
        .catch((err) => {
          console.error('Error:', err)
          // Handle errors here
        })
    }
    if (registerResponse) {
      localStorage.setItem('token_swag', registerResponse?.data?.accessToken)
      dispatch(setRole(registerResponse?.data?.role))
      toast.success(registerResponse?.message)
    }
    if (error) {
      console.log(error, 'errorMessage')
      toast.error(error.message)
    }
    if (registerError) {
      toast.error(registerError?.error?.email[0])
    }
  }, [response, error, registerLoading, registerError])

  const onSubmit = async (values) => {
    try {
      let formData = new FormData()
      formData.append('email', values.email)
      formData.append('password', values.password)

      loadQuery(formData)
      setShowEstimateCart(true)
    } catch (error) {
      console.log(error, 'from login api')
    } finally {
    }
  }

  const onSubmitRegister = async (values) => {
    try {
      let formData = new FormData()
      formData.append('name', values.name)
      formData.append('email', values.email)
      formData.append('password', values.password)
      formData.append('c_password', values.c_password)

      register(formData)
    } catch (error) {
      console.log(error, 'from registerapi api')
    } finally {
    }
  }

  return (
    <>
      <section className={Styles.cart_section}>
        {/* Left Section  */}
        <div className={Styles.cart_left}>
          {/* <QuotationSubmissionHeader /> */}
          {showLoginComponent && selectedOption === 'Existing_client' && (
            <Formik
              initialValues={initialValuesLogin}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {() => (
                <>
                  <Form className={Styles.form}>
                    <div className={Styles.form_inputs}>
                      <div className={Styles.flexform}>
                        <div className={Styles.inputField}>
                          <Field
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Enter email"
                            className={Styles.input}
                            autocomplete="off"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className={Styles.error}
                          />
                        </div>

                        <div className={Styles.form_inputs}>
                          <div className={Styles.inputField}>
                            <Field
                              type="password"
                              id="password"
                              name="password"
                              placeholder="Enter Password"
                              className={Styles.input}
                              autocomplete="off"
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className={Styles.error}
                            />
                          </div>
                        </div>
                      </div>
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

          {showLoginComponent && selectedOption === 'New_client' && (
            <Formik
              initialValues={initialValuesRegister}
              validationSchema={validationSchemaRegister}
              onSubmit={onSubmitRegister}
            >
              {() => (
                <>
                  <Form className={Styles.form}>
                    <div className={Styles.form_inputs}>
                      <div className={`${Styles.flexform} ${Styles.flexwrap}`}>
                        <div className={Styles.inputField}>
                          <Field
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter name"
                            className={Styles.input}
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className={Styles.error}
                          />
                        </div>

                        <div className={Styles.form_inputs}>
                          <div className={Styles.inputField}>
                            <Field
                              type="text"
                              id="email"
                              name="email"
                              placeholder="Enter email"
                              className={Styles.input}
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className={Styles.error}
                            />
                          </div>
                        </div>
                        <div className={Styles.form_inputs}>
                          <div className={Styles.inputField}>
                            <Field
                              type="password"
                              id="password"
                              name="password"
                              placeholder="Enter Password"
                              className={Styles.input}
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className={Styles.error}
                            />
                          </div>
                        </div>
                        <div className={Styles.form_inputs}>
                          <div className={Styles.inputField}>
                            <Field
                              type="password"
                              id="c_password"
                              name="c_password"
                              placeholder="confirm password"
                              className={Styles.input}
                            />
                            <ErrorMessage
                              name="c_password"
                              component="div"
                              className={Styles.error}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={Styles.form_inputs}>
                      <button
                        type="submit"
                        disabled={registerLoading}
                        className={Styles.form_button}
                      >
                        Register
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
            <div className={Styles.cart_left_faqInput}>
              {/* <p>Swift swag?</p> */}
              <div className={Styles.cart_left_swift_content}>
                {/* <input type="checkbox" name="" id="" />
                <label>
                  Checking this box will override the date selected above to
                  within 10 business days if you have gone through the Swift
                  Swag process. Please note additional charges will apply.
                </label> */}
                {/* <div className={Styles.custom_checkbox}>
                  <input type="checkbox" name="services" id="swift_swag" />
                  <label for="swift_swag">
                    {' '}
                    Checking this box will override the date selected above to
                    within 10 business days if you have gone through the Swift
                    Swag process. Please note additional charges will apply.
                  </label>
                </div> */}
              </div>
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
        </div>
      </section>
    </>
  )
}

export default Cart
