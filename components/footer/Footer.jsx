import React, { useState } from 'react'
import certifiedLogo from '../../assets/footerPics/certified.svg'
import facebook from '../../assets/footerPics/facebook.svg'
import instagram from '../../assets/footerPics/instagram.svg'
import linkdin from '../../assets/footerPics/linkdin.svg'
import youtube from '../../assets/footerPics/youtube.svg'
import banks from '../../assets/footerPics/banks.svg'
import Image from 'next/image'
import styles from './footer.module.css'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [disabled, setDisabled] = useState(true)

  console.log(email)

  const onSubmitEmail = () => {
    if (email.length < 1) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
    setEmail('')
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
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Join Our Newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={onSubmitEmail}>Send</button>
            </div>

            <div className={styles.social_links}>
              <div className="">
                <Image
                  src={facebook}
                  height={20}
                  width={20}
                  alt="certified corporation logo"
                />
              </div>
              <div className="">
                <Image
                  src={linkdin}
                  height={20}
                  width={20}
                  alt="certified corporation logo"
                />
              </div>
              <div className="">
                <Image
                  src={instagram}
                  height={20}
                  width={20}
                  alt="certified corporation logo"
                />
              </div>
              <div className="">
                <Image
                  src={youtube}
                  height={20}
                  width={20}
                  alt="certified corporation logo"
                />
              </div>
            </div>
          </div>
          <div className={styles.container_column_2}>
            <div className={styles.heading_footer_2}>Quick Links</div>
            <div className="">
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/products')}
              >
                Swag Packs
              </span>
            </div>
            <div className="">
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/plants-seeds')}
              >
                Plants & Seeds
              </span>
            </div>
            <div className="">
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/apparel')}
              >
                Apparel
              </span>
            </div>
            <div className="">
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/')}
              >
                At Home
              </span>
            </div>
            <div className="">
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/apparel')}
              >
                Office
              </span>
            </div>
            <div className="">
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/apparel')}
              >
                Others
              </span>
            </div>
            <div className="">
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/products')}
              >
                Shop by
              </span>
            </div>
          </div>
          <div className={styles.container_column_3}>
            <div className={styles.column_1}>
              <div className={styles.heading_footer_2}>Customer Support</div>
              <div className="">
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push('/faq')}
                >
                  Frequently Asked Questions
                </span>
              </div>
              <div className="">
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push('/terms-of-service')}
                >
                  Terms of Service
                </span>
              </div>
              <div className="">
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push('/privacy-policy')}
                >
                  Privacy Policy
                </span>
              </div>
            </div>
            <div className={styles.column_2}>
              <div className={styles.heading_footer_2}>Reach Out</div>
              <div className="">info@ethicalswag.com</div>
              <div className="">1-877-206-6998</div>
              <div className="">1-902-500-1086</div>
            </div>
          </div>
          <div className={styles.container_column_4}>
            <div className={styles.column_4_1st_part}>
              <div className={styles.heading_footer_2}>Sustainability</div>
              <div className="">
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push('/faq')}
                >
                  Frequently Asked Questions
                </span>
              </div>
              <div className="">
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push('/terms-of-service')}
                >
                  Terms of Service
                </span>
              </div>
              <div className="">
                <span
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
