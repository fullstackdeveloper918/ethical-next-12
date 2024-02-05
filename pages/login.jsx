import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage, resetForm } from 'formik'
import * as Yup from 'yup'
import useFetch from '../lib/useFetch'
import Styles from '../styles/Login.module.css'
import { useDispatch } from 'react-redux'
import { setRole } from '../redux-setup/authSlice'
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Image from 'next/image'
import images from '../constants/images'
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter email in correct format')
    .required('email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(3, 'Password must be at least 8 characters')
    .max(50, 'Too Long!'),
})

const initialValues = {
  email: '',
  password: '',
}
const login = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [loadQuery, { response, loading, error, errorMessage }] = useFetch(
    `/auth/login`,
    {
      method: 'post',
    },
    'formdata'
  )
  useEffect(() => {
    const token = localStorage.getItem('token_swag')
    if (token) {
      router.push('/')
    }
  }, [])

  useEffect(() => {
    if (response) {
      localStorage.setItem('token_swag', response?.data?.accessToken)
      dispatch(setRole(response?.data?.role))
      toast.success('Logged in sucessfully')

      router.push('/')
    }
    if (error) {
      console.log(errorMessage, 'errorMessage')
    }
  }, [response])

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
      <div className={Styles.login_wrapper}>
        <div className={Styles.login_container}>
          <div className={Styles.login_content}>
            <div className={Styles.login_img_content}>
              <Image src={images.ethical_swag} />
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {() => (
                <>
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
                        className="error"
                      />
                    </div>

                    <div className={Styles.input_box}>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className={Styles.input_radio_content}>
                      <input type="radio" name="radio" />
                      <p>
                        I agree to the{' '}
                        <a>terms & conditions | privacy policy</a>
                      </p>
                    </div>

                    <div className={Styles.input_box}>
                      <button type="submit" disabled={loading}>
                        Login
                      </button>
                    </div>
                  </Form>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}

export default login
