import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import images from '../constants/images'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import useFetch from '../lib/useFetch'
import { useDispatch, useSelector } from 'react-redux'
import { setRole, setuserId } from '../redux-setup/authSlice'
import { toast } from 'react-toastify'
import EthicalLogo from '../components/EthicalLogo/EthicalLogo'
import { initialValuesLogin, validationSchema } from '../lib/validationSchemas'
import Styles from '../styles/Login.module.css'
import { data } from 'autoprefixer'

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

  // useEffect(() => {
  //   const token = localStorage.getItem('token_swag')
  //   if (token) {
  //     if (page) {
  //       router.push(`/${page}`)
  //     } else {
  //       router.push(`/`)
  //     }
  //   }
  // }, [])
  const page = useSelector((state) => state.auth.currentPage)
  console.log(page, 'page from login')
  useEffect(() => {
    if (response) {
      console.log(response, 'hash')
      localStorage.setItem('token_swag', response?.data?.accessToken)
      localStorage.setItem('userId', response?.data?.id)
      dispatch(setRole(response?.data?.role))
      dispatch(setuserId(response?.data?.id))
      toast.success('Logged in sucessfully', {
        position: 'top-center',
      })
    }
    if (response?.data?.role[0] === 'super admin') {
      router.push('/super-admin/dashboard')
    } else if (response?.data?.role[0] === 'company') {
      router.push('/')
    }
    // if (page) {
    //   router.push(`/${page}`)
    // } else {
    //   router.push(`/`)
    // }

    // if (error) {
    //   console.log(error, 'errorMessage')
    //   toast.error(error.message)
    // }
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
              <EthicalLogo />
            </div>
            <Formik
              initialValues={initialValuesLogin}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ values }) => (
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

                    <div className={Styles.input_box}>
                      <label
                        className={Styles.forgot_password}
                        onClick={() => router.push('/forgot')}
                      >
                        Forgot Password?
                      </label>
                    </div>

                    <div className={Styles.input_box}>
                      <button
                        type="submit"
                        disabled={
                          loading || values.email == '' || values.password == ''
                        }
                      >
                        Login
                      </button>
                    </div>

                    <div className={Styles.input_box}>
                      <p className={Styles.registered_text}>
                        Dont have an account?
                        <span onClick={() => router.push('/register')}>
                          Register
                        </span>
                      </p>
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
