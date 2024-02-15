import React from 'react'
import Styles from './ReviewEstimate.module.css'
import Image from 'next/image'
import images from '../../constants/images'
import { GrEdit } from 'react-icons/gr'
import { RxCross2 } from 'react-icons/rx'

const ReviewEstimate = () => {
  return (
    <>
      <div className={Styles.reviewEstimate_container}>
        <p>3.Review Your Estimate</p>
        <div className={Styles.project_details_text}>
          <p>Your Swag Project Details</p>
        </div>
        <div className={Styles.expand_all_content}>
          <p>Expand All</p>
        </div>
        <div className={Styles.container}>
          <div className={Styles.content}>
            <div className={Styles.left_content}>
              <div className={Styles.imgContent}>
                <Image
                  src={images.shirt_small}
                  width={54}
                  height={72}
                  alt="image"
                />
              </div>
              <div className={Styles.textContent}>
                <div>
                  <h4 className={Styles.title}>
                    Tentree® Men’s Kangaroo Organic Cotton Hoodie
                  </h4>
                  <p className={Styles.color}>Black</p>
                  <p className={Styles.quantity}>Quantity - 2 Cotton Hoodie</p>
                </div>
                <div>
                  <p className={Styles.price}>$80</p>
                </div>
              </div>
            </div>
            <div className={Styles.right_content}>
              <div className={Styles.review_content}>
                <span></span>
                <span>527 reviews</span>
              </div>
            </div>
          </div>
          <div className={Styles.content}>
            <div className={Styles.left_content}>
              <div className={Styles.imgContent}>
                <RxCross2 className={Styles.cross_icon} />
                <Image
                  src={images.Ethical_swag_small_logo}
                  width={54}
                  height={72}
                  alt="image"
                />
              </div>
              <div className={Styles.textContent}>
                <div>
                  <h4 className={Styles.title}>Front logo</h4>
                  <p className={Styles.color}>lorem isupm</p>
                  <p className={Styles.quantity}>lorem isupm lorem isupm</p>
                </div>
              </div>
            </div>
            <div className={Styles.buttons}>
              <button>
                <GrEdit />
                Edit
              </button>
              <button>See More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewEstimate
