import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import useFetch from '../lib/useFetch'
import Styles from '../styles/Login.module.css'
import { useDispatch, useSelector } from 'react-redux'
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
  const [registered, setRegistered] = useState(false)
  const [forgot_password, setForgotPassword] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

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
      if (page) {
        router.push(`/${page}`)
      } else {
        router.push(`/`)
      }
    }
  }, [])
  const page = useSelector((state) => state.auth.currentPage)
  useEffect(() => {
    if (response) {
      localStorage.setItem('token_swag', response?.data?.accessToken)
      dispatch(setRole(response?.data?.role))
      toast.success('Logged in sucessfully')

      if (page) {
        router.push(`/${page}`)
      } else {
        router.push(`/`)
      }
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

  const handleFormType = (type) => {
    if (type === 'login') {
      setIsLogin(true)
      setForgotPassword(false)
      setRegistered(false)
    } else if (type === 'register') {
      setIsLogin(true)
      setForgotPassword(false)
      setRegistered(true)
    } else if (type === 'forgot') {
      setIsLogin(false)
      setRegistered(false)
      setForgotPassword(true)
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
              initialValues={initialValuesLogin}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {() => (
                <>
                  <Form className={Styles.form}>
                    {registered && (
                      <div className={Styles.input_box}>
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter name"
                          autocomplete="off"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className={Styles.error}
                        />
                      </div>
                    )}
                    {(registered || isLogin || forgot_password) && (
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
                    )}
                    {(registered || isLogin) && (
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
                    )}
                    {registered && (
                      <div className={Styles.input_box}>
                        <Field
                          type="confirm password"
                          id="confirm password"
                          name="confirm password"
                          placeholder="Enter Password"
                          autocomplete="off"
                        />
                        <ErrorMessage
                          name="confirm password"
                          component="div"
                          className={Styles.error}
                        />
                      </div>
                    )}
                    {registered && (
                      <div className={Styles.input_radio_content}>
                        <label htmlFor="checkbox">
                          <input
                            type="checkbox"
                            id="checkbox"
                            name="terms"
                            value={terms}
                            onChange={handleChange}
                          />
                          I agree to the{' '}
                          <span style={{ textDecoration: 'underline' }}>
                            terms & conditions | privacy policy
                          </span>
                        </label>
                      </div>
                    )}

                    {isLogin && (
                      <div className={Styles.input_box}>
                        <p
                          className={Styles.forgot_password}
                          onClick={() => handleFormType('forgot')}
                        >
                          Forgot Password?
                        </p>
                      </div>
                    )}

                    <div className={Styles.input_box}>
                      <button type="submit" disabled={loading || !terms}>
                        {registered ? 'Submit' : 'Login'}
                      </button>
                    </div>

                    {(registered || isLogin || forgot_password) && (
                      <div className={Styles.input_box}>
                        {forgot_password || !registered ? (
                          <p>
                            Dont have an account?
                            <span onClick={() => handleFormType('register')}>
                              Register
                            </span>
                          </p>
                        ) : (
                          <p>
                            Already have an account?
                            <span onClick={() => handleFormType('login')}>
                              Login
                            </span>
                          </p>
                        )}
                      </div>
                    )}
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
