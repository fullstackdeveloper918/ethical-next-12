import React from 'react'
import certifiedLogo from '../../assets/footerPics/certified.svg'
import facebook from '../../assets/footerPics/facebook.svg'
import instagram from '../../assets/footerPics/instagram.svg'
import linkdin from '../../assets/footerPics/linkdin.svg'
import youtube from '../../assets/footerPics/youtube.svg'
import banks from '../../assets/footerPics/banks.svg'
import Image from 'next/image'
import styles from './footer.module.css'

const Footer = () => {
  return (
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
          <div className="">input box</div>

          <div className={styles.social_links}>
            <div className="">
              <Image
                src={facebook}
                height={16}
                width={16}
                alt="certified corporation logo"
              />
            </div>
            <div className="">
              <Image
                src={instagram}
                height={16}
                width={16}
                alt="certified corporation logo"
              />
            </div>
            <div className="">
              <Image
                src={linkdin}
                height={16}
                width={16}
                alt="certified corporation logo"
              />
            </div>
            <div className="">
              <Image
                src={youtube}
                height={16}
                width={16}
                alt="certified corporation logo"
              />
            </div>
          </div>
        </div>
        <div className={styles.container_column_2}>
          <div className={styles.heading_footer_2}>Quick Links</div>
          <div className="">Swag Packs </div>
          <div className="">Plants & Seeds</div>
          <div className="">Apparel </div>
          <div className="">At Home </div>
          <div className="">Office </div>
          <div className="">Others</div>
          <div className="">Shop by</div>
        </div>
        <div className={styles.container_column_3}>
          <div className={styles.column_1}>
            <div className={styles.heading_footer_2}>Customer Support</div>
            <div className="">Frequently Asked Questions</div>
            <div className="">Terms of Service</div>
            <div className="">Privacy Policy</div>
            <div className="">Do not sell my personal information</div>
          </div>
          <div className={styles.column_2}>
            <div className={styles.heading_footer_2}>Reach Out</div>
            <div className="">info@ethicalswag.com</div>
            <div className="">1-877-256-6998</div>
            <div className="">1-902-500-1086</div>
          </div>
        </div>
        <div className={styles.container_column_4}>
          <div className={styles.column_4_1st_part}>
            <div className={styles.heading_footer_2}>
              Frequently Asked Questions
            </div>
            <div className="">Terms of Service</div>
            <div className="">Privacy Policy</div>
            <div className="">Do not sell my personal information</div>
          </div>
          <div className={styles.column_4_2nd_part}>
            <div className={styles.heading_footer_2}>Resources</div>
            <div className="">How to Order</div>
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
  )
}

export default Footer
