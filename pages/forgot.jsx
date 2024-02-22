import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import useFetch from '../lib/useFetch'
import Styles from '../styles/Login.module.css'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Image from 'next/image'
import images from '../constants/images'
// import {
//   initialValuesRegister,
//   validationSchemaRegister,
// } from '../lib/validationSchemas'

const forgot = () => {
  const router = useRouter()
  const [terms, setTerms] = useState(false)

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

  //   const onSubmit = async (values) => {
  //     try {
  //       let formData = new FormData()
  //       formData.append('name', values.name)
  //       formData.append('email', values.email)
  //       formData.append('password', values.password)
  //       formData.append('c_password', values.c_password)

  //       loadQuery(formData)
  //     } catch (error) {
  //       console.log(error, 'from registerapi api')
  //     } finally {
  //     }
  //   }

  //   const handleChange = (event) => {
  //     setTerms((current) => !current)
  //   }
  return (
    <>
      <div className={Styles.login_wrapper}>
        <div className={Styles.login_container}>
          <div className={Styles.login_content}>
            <div className={Styles.login_img_content}>
              <Image src={images.ethical_swag} />
            </div>
            <Formik
            //   initialValues={initialValuesRegister}
            //   validationSchema={validationSchemaRegister}
            //   onSubmit={onSubmit}
            >
              {() => (
                <Form className={Styles.form}>
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

                  <div className={Styles.input_box}>
                    <button type="submit" className={Styles.reset_password}>
                      Reset Password
                    </button>
                  </div>
                  <div className={Styles.input_box}>
                    <p>
                      Already have an account?
                      <span onClick={() => router.push('/login')}>Login</span>
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
