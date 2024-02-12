import React, { useState } from 'react'
import PrimaryHeader from '../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../components/secondary-header/SecondaryHeader'
import Footer from '../components/footer/Footer'
import Styles from './../styles/Contact.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
} from 'react-icons/fa'
import {
  initialValuesContact,
  validationSchemaContact,
} from '../lib/validationSchemas'
import images from '../constants/images'

const contact = () => {
  const [terms, setTerms] = useState(false)

  const handleChange = (event) => {
    setTerms((current) => !current)
  }

  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <div className={Styles.Contact_container}>
        <div className={Styles.left_Section}>
          <div className={Styles.left_Section_Content}>
            <h2 className={Styles.heading}>Contact Information</h2>
            <p className={Styles.text_content}>
              Use the form to send your message. A member of our team will reach
              out to you within 1 business day. If you don't hear from us in
              this time frame, please check your spam box. Prefer to call?
            </p>
            <div className={Styles.horizontal_line}></div>
            <div className={Styles.contact_numbers_container}>
              <div className={Styles.telephone_icon}>
                <FaPhoneAlt color="#a2d061" fontSize={30} />
              </div>
              <div className={Styles.numbers}>
                <span>+1 (877) 256-6998</span>
                <span>+1 (902) 500-1086</span>
                <span>Call Now and Get a FREE consultation</span>
              </div>
            </div>
            <div className={Styles.horizontal_line}></div>
            <div className={Styles.meeting_section}>
              <h2>Schedule a Quick meeting</h2>
              <Image
                src={images.Calender}
                width={400}
                height={400}
                alt="calender_image"
              />
            </div>
            <div className={Styles.info_section}>
              <Link href="/contact">info@ethicalswag.com</Link>
            </div>
            <div className={Styles.social_icons}>
              <div className="icon">
                <FaLinkedinIn fontSize={18} cursor={'pointer'} />
              </div>
              <div className="icon">
                <FaInstagram fontSize={18} cursor={'pointer'} />
              </div>
              <div className="icon">
                <FaFacebookF fontSize={18} cursor={'pointer'} />
              </div>
              <div className="icon">
                <FaYoutube fontSize={18} cursor={'pointer'} />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.right_Section}>
          <Formik
            initialValues={initialValuesContact}
            validationSchema={validationSchemaContact}
          >
            {() => (
              <>
                <Form>
                  <div className={Styles.inputs}>
                    <Field
                      type="text"
                      id="text"
                      name="companyName"
                      placeholder="Company Name"
                    />
                    <ErrorMessage
                      name="companyName"
                      component="span"
                      className={Styles.error}
                    />
                  </div>

                  <div className={Styles.inputs}>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="span"
                      className={Styles.error}
                    />
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="span"
                      className={Styles.error}
                    />
                  </div>
                  <div className={Styles.inputs}>
                    <Field
                      type="number"
                      id="number"
                      name="number"
                      placeholder="Phone Number"
                    />
                    <ErrorMessage
                      name="number"
                      component="span"
                      className={Styles.error}
                    />
                  </div>
                  <div className={Styles.inputs}>
                    <Field
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className={Styles.error}
                    />
                  </div>
                  <div className={Styles.inputs}>
                    <Field
                      type="text"
                      id="ethicalSwagReferral"
                      name="ethicalSwagReferral"
                      placeholder="How did you hear about Ethical Swag ?"
                    />
                    <ErrorMessage
                      name="ethicalSwagReferral"
                      component="span"
                      className={Styles.error}
                    />
                  </div>
                  <div className={Styles.inputs}>
                    <Field
                      as="textarea"
                      id="description"
                      name="description"
                      placeholder="Message"
                      rows="5"
                      cols="50"
                    />
                    <ErrorMessage
                      name="description"
                      component="span"
                      className={Styles.error}
                    />
                  </div>
                  <div className={Styles.input_radio}>
                    <Field type="radio" id="radio" name="radio" />
                    <p>I agree to the terms & conditions | privacy policy</p>
                  </div>
                  <div className={Styles.inputs}>
                    <button>Submit</button>
                  </div>
                </Form>
              </>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default contact
