import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage, resetForm } from 'formik'
import * as Yup from 'yup'
import useFetch from '../lib/useFetch'
import Styles from '../styles/Login.module.css'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Image from 'next/image'
import images from '../constants/images'

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).max(20),
  email: Yup.string()
    .email('Please enter email in correct format')
    .required('email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(3, 'Password must be at least 8 characters')
    .max(50, 'Too Long!'),
  c_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
})

const initialValues = {
  name: '',
  email: '',
  password: '',
  c_password: '',
}
const register = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const [loadQuery, { response, loading, error, errorMessage }] = useFetch(
    `/auth/register`,
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
      //   dispatch(setRole(response?.data?.role))
      toast.success(response?.message)

      router.push('/')
      console.log(response, 'responseeeeee')
    }
    if (error) {
      console.log(error?.error?.email[0], 'errorMessage from register api')
      toast.error(error?.error?.email[0])
    }
  }, [response, error])

  const onSubmit = async (values) => {
    try {
      let formData = new FormData()
      formData.append('name', values.name)
      formData.append('email', values.email)
      formData.append('password', values.password)
      formData.append('c_password', values.c_password)

      loadQuery(formData)
    } catch (error) {
      console.log(error, 'from registerapi api')
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
                <Form className={Styles.form}>
                  <div className={Styles.input_box}>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                    />
                  </div>

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
                      placeholder="Enter password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className={Styles.input_box}>
                    <Field
                      type="c_password"
                      id="c_password"
                      name="c_password"
                      placeholder="Confirm password"
                    />
                    <ErrorMessage
                      name="c_password"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className={Styles.input_radio_content}>
                    <input type="radio" name="radio" />
                    <p>
                      I agree to the <a>terms & conditions | privacy policy</a>
                    </p>
                  </div>

                  <div className={Styles.input_box}>
                    <button type="submit" disabled={false}>
                      Submit
                    </button>
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

export default register
