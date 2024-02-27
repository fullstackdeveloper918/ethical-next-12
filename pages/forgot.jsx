import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import useFetch from '../lib/useFetch'
import Styles from '../styles/Login.module.css'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Image from 'next/image'
import images from '../constants/images'
import {
  initialValuesForgotEmail,
  initialValuesForgotPassword,
  validationSchemaForgotPassword,
  validationSchemaForgotEmail,
} from '../lib/validationSchemas'

const forgot = () => {
  const router = useRouter()
  const [terms, setTerms] = useState(false)
  const [isOtpSent, setIsOtpSent] = useState(false)
  const [showPasswords, setShowPasswords] = useState(false)
  const [isEmail, setIsEmail] = useState(true)

  const [loadQuery, { response, loading, error }] = useFetch(
    `/auth/forget-password`,
    {
      method: 'post',
    },
    'formdata'
  )

  console.log(response, 'response from email api')

  const onEmailSubmit = async (values) => {
    try {
      let formData = new FormData()
      formData.append('email', values.email)

      loadQuery(formData)
    } catch (error) {
      console.log(error, 'from forgot email api')
    }
  }

  const onResetPassword = async (values) => {
    console.log('clkicked Password')
  }

  return (
    <>
      {isEmail && (
        <div className={Styles.login_wrapper}>
          <div className={Styles.login_container}>
            <div className={Styles.login_content}>
              <div className={Styles.login_img_content}>
                <Image src={images.ethical_swag} />
              </div>
              <Formik
                initialValues={initialValuesForgotEmail}
                validationSchema={validationSchemaForgotEmail}
                onSubmit={onEmailSubmit}
              >
                {({ values, errors }) => (
                  <Form className={Styles.form}>
                    <div className={Styles.input_box}>
                      <Field
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        autocomplete="off"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className={Styles.error}
                      />
                    </div>
                    <div className={Styles.input_box}>
                      <button
                        type="submit"
                        className={Styles.reset_password}
                        disabled={values.email == '' || errors.email || loading}
                      >
                        Submit Email
                      </button>
                    </div>
                    <div className={Styles.input_box}>
                      <p>
                        Don't have an account?
                        <span onClick={() => router.push('/register')}>
                          Register
                        </span>
                      </p>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}

      {isOtpSent && (
        <>
          <div className={Styles.login_wrapper}>
            <div className={Styles.login_container}>
              <div className={Styles.login_content}>
                <div className={Styles.login_img_content}>
                  <Image src={images.ethical_swag} />
                </div>
                <Formik
                  initialValues={initialValuesForgotEmail}
                  validationSchema={validationSchemaForgotEmail}
                >
                  {({ values, errors }) => (
                    <Form className={Styles.form}>
                      <div className={Styles.input_box}>
                        <Field
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Enter email"
                          autocomplete="off"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className={Styles.error}
                        />
                      </div>
                      <div className={Styles.input_box}>
                        <button
                          type="submit"
                          className={Styles.reset_password}
                          // disabled={values.email == '' || errors.email || loading}
                        >
                          Submit Email
                        </button>
                      </div>
                      <div className={Styles.input_box}>
                        <p>
                          Don't have an account?
                          <span onClick={() => router.push('/register')}>
                            Register
                          </span>
                        </p>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </>
      )}

      {showPasswords && (
        <div className={Styles.login_wrapper}>
          <div className={Styles.login_container}>
            <div className={Styles.login_content}>
              <div className={Styles.login_img_content}>
                <Image src={images.ethical_swag} />
              </div>
              <Formik
                initialValues={initialValuesForgotPassword}
                validationSchema={validationSchemaForgotPassword}
                onSubmit={onResetPassword}
              >
                {() => (
                  <Form className={Styles.form}>
                    <>
                      <div className={Styles.input_box}>
                        <Field
                          type="password"
                          id="email"
                          name="new_password"
                          placeholder="Enter new password"
                        />
                        <ErrorMessage
                          name="new_password"
                          component="div"
                          className={Styles.error}
                        />
                      </div>
                      <div className={Styles.input_box}>
                        <Field
                          type="password"
                          id="password"
                          name="confirm_password"
                          placeholder="Confirm new password"
                        />
                        <ErrorMessage
                          name="confirm_password"
                          component="div"
                          className={Styles.error}
                        />
                      </div>
                    </>

                    <div className={Styles.input_box}>
                      <button type="submit" className={Styles.reset_password}>
                        Reset Password
                      </button>
                    </div>
                    <div className={Styles.input_box}>
                      <p>
                        Don't have an account?
                        <span onClick={() => router.push('/register')}>
                          Register
                        </span>
                      </p>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default forgot
