import React, { useState } from 'react'
import certifiedLogo from '../../assets/footerPics/certified.svg'
import facebook from '../../assets/footerPics/facebook.svg'
import instagram from '../../assets/footerPics/instagram.svg'
import axios from 'axios'
import linkdin from '../../assets/footerPics/linkdin.svg'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import youtube from '../../assets/footerPics/youtube.svg'
import Link from 'next/link'
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
  const router = useRouter()

  const onSubmit = async (values) => {
    try {
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

      console.log(response?.data?.message, 'res')
      if (response.statusText) {
        toast.success(response?.data?.message, {
          position: 'top-center',
        })
      }
    } catch (error) {
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

                      <button type="submit" disabled={error}>
                        Send
                      </button>
                    </div>
                  </Form>
                </>
              )}
            </Formik>

            <div className={styles.social_links}>
              <a href="https://www.facebook.com/ethicalswag" target="_blank">
                <div className="">
                  <Image
                    src={facebook}
                    height={20}
                    width={20}
                    alt="certified corporation logo"
                  />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/ethical-swag/"
                target="_blank"
              >
                <div className="">
                  <Image
                    src={linkdin}
                    height={20}
                    width={20}
                    alt="certified corporation logo"
                  />
                </div>
              </a>
              <a href="https://www.instagram.com/ethicalswag/" target="_blank">
                <div className="">
                  <Image
                    src={instagram}
                    height={20}
                    width={20}
                    alt="certified corporation logo"
                  />
                </div>
              </a>
              <a href="https://www.youtube.com/channel/UCLQe2_4Tf2k8BOsgM8bWOjA">
                <div className="">
                  <Image
                    src={youtube}
                    height={20}
                    width={20}
                    alt="certified corporation logo"
                    onClick={() =>
                      router.push(
                        'https://www.youtube.com/channel/UCLQe2_4Tf2k8BOsgM8bWOjA'
                      )
                    }
                  />
                </div>
              </a>
            </div>
          </div>
          <div className={styles.container_column_2}>
            <div className={styles.heading_footer_2}>Quick Links</div>
            <div className="">
              <span className={styles.footer_li}
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/products')}
              >
                Swag Packs
              </span>
            </div>
            <div className="">
              <span className={styles.footer_li}
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/about-us')}
              >
                About
              </span>
            </div>
            <div className="">
              <span className={styles.footer_li}
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/blog')}
              >
                Blogs
              </span>
            </div>
            <div className="">
              <span className={styles.footer_li}
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/services')}
              >
                Services
              </span>
            </div>
            <div className="">
              <span className={styles.footer_li}
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/what-to-expect')}
              >
                What to Expect
              </span>
            </div>
            <div className="">
              <span className={styles.footer_li}
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/contact')}
              >
                Contact
              </span>
            </div>
            <div className="">
              <span className={styles.footer_li}
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
                <span className={styles.footer_li}
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push('/faq')}
                >
                  Frequently Asked Questions
                </span>
              </div>
              <div>
                <span className={styles.footer_li}
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push('/terms-of-service')}
                >
                  Terms of Service
                </span>
              </div>
              <div>
                <span className={styles.footer_li}
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push('/privacy-policy')}
                >
                  Privacy Policy
                </span>
              </div>
            </div>
            <div className={styles.column_2}>
              <div className={styles.heading_footer_2}>Reach Out</div>
              <Link className={styles.footer_li}
                href={`info@ethicalswag.com`}
                target="_blank"
                style={{ textTransform: 'lowercase' }}
              >
                info@ethicalswag.com
              </Link>
              <div  className={styles.footer_li}>1-877-206-6998</div>
              <div  className={styles.footer_li}>1-902-500-1086</div>
            </div>
          </div>
          <div className={styles.container_column_4}>
            <div className={styles.column_4_1st_part}>
              <div className={styles.heading_footer_2}>Sustainability</div>
              <div>
                <span className={styles.footer_li}
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push('/faq')}
                >
                  Frequently Asked Questions
                </span>
              </div>
              <div>
                <span className={styles.footer_li}
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push('/terms-of-service')}
                >
                  Terms of Service
                </span>
              </div>
              <div className="">
                <span className={styles.footer_li}
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
                <span className={styles.footer_li}
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
