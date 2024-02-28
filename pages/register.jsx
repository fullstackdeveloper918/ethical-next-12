import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import images from '../constants/images'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import useFetch from '../lib/useFetch'
import Styles from '../styles/Login.module.css'
import { toast } from 'react-toastify'
import {
  initialValuesRegister,
  validationSchemaRegister,
} from '../lib/validationSchemas'

const register = () => {
  const router = useRouter()
  const [terms, setTerms] = useState(false)

  const [loadQuery, { response, loading, error }] = useFetch(
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
    }
    if (error) {
      toast.error(error?.error?.email[0])
    }
  }, [response, error])

  const onSubmit = async (values) => {
    console.log(values, 'helo values')
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

  const handleCheckboxChange = (event) => {
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
              initialValues={initialValuesRegister}
              validationSchema={validationSchemaRegister}
              onSubmit={onSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
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
                      className={Styles.error}
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
                      className={Styles.error}
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
                      className={Styles.error}
                    />
                  </div>
                  <div className={Styles.input_box}>
                    <Field
                      type="password"
                      id="c_password"
                      name="c_password"
                      placeholder="Confirm password"
                    />
                    <ErrorMessage
                      name="c_password"
                      component="div"
                      className={Styles.error}
                    />
                  </div>
                  <div className={Styles.input_radio_content}>
                    <div className={Styles.custom_checkbox}>
                      <input
                        type="checkbox"
                        name="terms"
                        value={terms}
                        onChange={handleCheckboxChange}
                        id="checkBox"
                      />
                      <label htmlFor="checkBox">
                        I agree to the<a>terms & conditions | privacy policy</a>
                      </label>
                    </div>
                  </div>

                  <div className={Styles.input_box}>
                    <button
                      type="submit"
                      disabled={
                        loading ||
                        !terms ||
                        values.name == '' ||
                        values.email == '' ||
                        values.password == '' ||
                        values.c_password == '' ||
                        values.password !== values.c_password
                      }
                    >
                      Submit
                    </button>
                  </div>
                  <div className={Styles.input_box}>
                    <p className={Styles.registered_text}>
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

export default register
