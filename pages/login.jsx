import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import useFetch from '../lib/useFetch'
import Styles from '../styles/Login.module.css'
import { useDispatch } from 'react-redux'
import { setRole } from '../redux-setup/authSlice'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Image from 'next/image'
import images from '../constants/images'
import { initialValuesLogin, validationSchema } from '../lib/validationSchemas'

const login = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [terms, setTerms] = useState(false)
  const [loadQuery, { response, loading, error }] = useFetch(
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
      console.log('response', response)
      localStorage.setItem('token_swag', response?.data?.accessToken)
      dispatch(setRole(response?.data?.role))
      toast.success('Logged in sucessfully')

      router.push('/')
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
    }
  }

  const handleChange = (event) => {
    setTerms((current) => !current)
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
              initialValues={initialValuesLogin}
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
                        autocomplete="off"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className={Styles.error}
                      />
                    </div>

                    <div className={Styles.input_box}>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                        autocomplete="off"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className={Styles.error}
                      />
                    </div>
                    <div className={Styles.input_radio_content}>
                      <input
                        type="checkbox"
                        name="terms"
                        value={terms}
                        onChange={handleChange}
                      />
                      <p>
                        I agree to the{' '}
                        <span style={{ textDecoration: 'underline' }}>
                          terms & conditions | privacy policy
                        </span>
                      </p>
                    </div>

                    <div className={Styles.input_box}>
                      <button type="submit" disabled={loading || !terms}>
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
