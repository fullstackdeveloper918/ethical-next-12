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
import SwagOrderForm from '../SwagOrderForm/SwagOrderForm'

const Cart = ({
  token,
  selectedOption,
  setShowEstimateCart,
  showEstimateCart,
  showLoginComponent,
}) => {
  const dispatch = useDispatch()
  const [showLogin, setShowLogin] = useState(true)
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

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

  useEffect(() => {
    if (response) {
      localStorage.setItem('token_swag', response?.data?.accessToken)
      dispatch(setRole(response?.data?.role))
      setShowLogin(false)
      toast.success('Logged in successfully')
    }
    if (error) {
      console.log(error, 'errorMessage')
      toast.error(error.message)
    }
  }, [response, error])

  useEffect(() => {
    if (registerResponse) {
      localStorage.setItem('token_swag', registerResponse?.data?.accessToken)
      dispatch(setRole(registerResponse?.data?.role))
      toast.success(registerResponse?.message)
    }
    if (registerError) {
      toast.error(registerError?.error?.email[0])
    }
  }, [registerError, registerResponse])

  const b = async () => {
    const response = await fetch(
      'https://test.cybersify.tech/Eswag/public/api/sadm/product/count'
    )
    const movies = await response.json()
  }

  useEffect(() => {
    b()
  }, [])

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

          <SwagOrderForm />
        </div>
      </section>
    </>
  )
}

export default Cart
