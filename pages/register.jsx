import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage, resetForm } from 'formik'
import * as Yup from 'yup'
import useFetch from '../lib/useFetch'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/router'

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
      toast.success(response?.data?.message)

      router.push('/')
      console.log(response)
    }
    if (error) {
      console.log(errorMessage, 'errorMessage from register api')
    }
  }, [response])

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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="name">name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="email">email:</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="c_password">c_password:</label>
            <Field type="c_password" id="c_password" name="c_password" />
            <ErrorMessage name="c_password" component="div" className="error" />
          </div>

          <div>
            <button type="submit" disabled={false}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default register
