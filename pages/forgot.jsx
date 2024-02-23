import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import useFetch from '../lib/useFetch'
import Styles from '../styles/Login.module.css'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Image from 'next/image'
import images from '../constants/images'
import {
  initialValuesForgot,
  validationSchemaForgot,
} from '../lib/validationSchemas'

const forgot = () => {
  const router = useRouter()
  const [terms, setTerms] = useState(false)
  const [showPasswords, setShowPasswords] = useState(false)

  //   const [loadQuery, { response, loading, error }] = useFetch(
  //     `/auth/register`,
  //     {
  //       method: 'post',
  //     },
  //     'formdata'
  //   )

  //   useEffect(() => {
  //     const token = localStorage.getItem('token_swag')
  //     if (token) {
  //       router.push('/')
  //     }
  //   }, [])

  //   useEffect(() => {
  //     if (response) {
  //       localStorage.setItem('token_swag', response?.data?.accessToken)
  //       //   dispatch(setRole(response?.data?.role))
  //       toast.success(response?.message)

  //       router.push('/')
  //     }
  //     if (error) {
  //       toast.error(error?.error?.email[0])
  //     }
  //   }, [response, error])

  const onSubmit = async (values) => {
    console.log(values)
  }

  return (
    <>
      <div className={Styles.login_wrapper}>
        <div className={Styles.login_container}>
          <div className={Styles.login_content}>
            <div className={Styles.login_img_content}>
              <Image src={images.ethical_swag} />
            </div>
            <Formik
              initialValues={initialValuesForgot}
              validationSchema={validationSchemaForgot}
              onSubmit={onSubmit}
            >
              {() => (
                <Form className={Styles.form}>
                  {showPasswords ? (
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
                  ) : (
                    <>
                      <div className={Styles.input_box}>
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
                    </>
                  )}
                  <div className={Styles.input_box}>
                    <button type="submit" className={Styles.reset_password}>
                      Submit
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
  )
}

export default forgot
