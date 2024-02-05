import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import useFetch from '../lib/useFetch'
import { useDispatch } from 'react-redux'
import { setRole } from '../redux-setup/authSlice'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter email in correct format')
    .required('email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(3, 'Password must be at least 8 characters')
    .max(50, 'Too Long!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
})

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
}
const login = () => {
  const dispatch = useDispatch()
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
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
            <label htmlFor="confirmPassword">confirmPassword:</label>
            <Field
              type="confirmPassword"
              id="confirmPassword"
              name="confirmPassword"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error"
            />
          </div>

          <div>
            <button type="submit" disabled={loading}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default login
