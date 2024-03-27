import React, { useState } from 'react'
import certifiedLogo from '../../assets/footerPics/certified.svg'
import facebook from '../../assets/footerPics/facebook.svg'
import instagram from '../../assets/footerPics/instagram.svg'
import axios from 'axios'
import linkdin from '../../assets/footerPics/linkdin.svg'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import youtube from '../../assets/footerPics/youtube.svg'
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa6'
import banks from '../../assets/footerPics/banks.svg'
import {
  initialValuesNewLetter,
  validationNewsLetter,
} from '../../lib/validationSchemas'
import Image from 'next/image'
import styles from './footer.module.css'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const Footer = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false)
  const router = useRouter()

  const onSubmit = async (values) => {
    try {
      setIsButtonClicked(true)
      let formData = new FormData()
      const data = {
        email: values.email,
      }
      formData.append('email', values.email)
      const response = await axios.post(
        'https://test.cybersify.tech/Eswag/public/api/newsletter',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers if needed
          },
        }
      )
      values.email = ''
      setIsButtonClicked(false)
      console.log(response?.data?.message, 'res')
      if (response.statusText) {
        toast.success(response?.data?.message, {
          position: 'top-center',
        })
      }
    } catch (error) {
      setIsButtonClicked(false)
      console.log(error, 'from login api')
    }
  }

  return (
    <div className={styles.footer_section}>
      <div className={styles.footer_container}>
        <div className={styles.main_footer_container}>
          <div className={styles.container_column_1}>
            <div className="">
              <Image
                src={certifiedLogo}
                height={135}
                width={80}
                alt="certified corporation logo"
              />
            </div>
            <div className={styles.heading_footer}>
              We are formally committed to donate more than 20% of profits to
              charity each year.
            </div>
            <Formik
              initialValues={initialValuesNewLetter}
              validationSchema={validationNewsLetter}
              onSubmit={onSubmit}
            >
              {({ values, error, resetForm }) => (
                <>
                  <Form>
                    <div className={styles.inputContainer}>
                      <div>
                        <Field
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Join Our Newsletter"
                          autocomplete="off"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className={styles.error}
                        />
                      </div>

                      <button type="submit" disabled={isButtonClicked || error}>
                        {isButtonClicked ? 'Sending...' : 'Send'}
                      </button>
                    </div>
                  </Form>
                </>
              )}
            </Formik>

            <div className={styles.social_links}>
              <a href="https://www.facebook.com/ethicalswag" target="_blank">
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/ethical-swag/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/ethicalswag/" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/channel/UCLQe2_4Tf2k8BOsgM8bWOjA">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className={styles.container_column_2}>
            <div className={styles.heading_footer_2}>Quick Links</div>
            <div className="">
              <span
                className={styles.footer_li}
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/products')}
              >
                Swag Packs
              </span>
            </div>
            <div className="">
              <span
                className={styles.footer_li}
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/about-us')}
              >
                About
              </span>
            </div>
            <div className="">
              <span
                className={styles.footer_li}
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/blog')}
              >
                Blogs
              </span>
            </div>
            <div className="">
              <span
                className={styles.footer_li}
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/services')}
              >
                Services
              </span>
            </div>
            <div className="">
              <span
                className={styles.footer_li}
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/what-to-expect')}
              >
                What to Expect
              </span>
            </div>
            <div className="">
              <span
                className={styles.footer_li}
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/contact')}
              >
                Contact
              </span>
            </div>
            <div className="">
              <span
                className={styles.footer_li}
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/privacy-policy')}
              >
                Privacy Policy
              </span>
            </div>
          </div>
          <div className={styles.container_column_3}>
            <div className={styles.column_1}>
              <div className={styles.heading_footer_2}>Customer Support</div>
              <div className="">
                <span
                  className={styles.footer_li}
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push('/faq')}
                >
                  Frequently Asked Questions
                </span>
              </div>
              <div>
                <span
                  className={styles.footer_li}
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push('/terms-of-service')}
                >
                  Terms of Service
                </span>
              </div>
              <div>
                <span
                  className={styles.footer_li}
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push('/privacy-policy')}
                >
                  Privacy Policy
                </span>
              </div>
            </div>
            <div className={styles.column_2}>
              <div className={styles.heading_footer_2}>Reach Out</div>
              <div className={styles.footer_li}>
                <Link
                  href="mailto:info+swagpackca@ethicalswag.com"
                  target="_blank"
                  style={{ textTransform: 'lowercase' }}
                >
                  info@ethicalswag.com
                </Link>
              </div>
              <div className={styles.footer_li}>1-877-206-6998</div>
              <div className={styles.footer_li}>1-902-500-1086</div>
            </div>
          </div>
          <div className={styles.container_column_4}>
            <div className={styles.column_4_1st_part}>
              <div className={styles.heading_footer_2}>Sustainability</div>
              <div>
                <span
                  className={styles.footer_li}
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push('/faq')}
                >
                  Frequently Asked Questions
                </span>
              </div>
              <div>
                <span
                  className={styles.footer_li}
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push('/terms-of-service')}
                >
                  Terms of Service
                </span>
              </div>
              <div className="">
                <span
                  className={styles.footer_li}
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push('/privacy-policy')}
                >
                  Privacy Policy
                </span>
              </div>
            </div>
            <div className={styles.column_4_2nd_part}>
              <div className={styles.heading_footer_2}>Resources</div>
              <div className="">
                <span
                  className={styles.footer_li}
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push('/what-to-expect')}
                >
                  How to Order
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.horizontal_line_container}>
          <hr className={styles.horizontal_line} />
        </div>
        <div className={styles.banks_main_container}>
          <div className={styles.banks_main_container_left}>
            © 2023 Ethical Swag | USA
          </div>
          <div className={styles.banks_main_container_right}>
            We accept credit cards
            <Image src={banks} alt="bank logo" width={228} height={30} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
