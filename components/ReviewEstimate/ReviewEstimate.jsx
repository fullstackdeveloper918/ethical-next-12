import React from 'react'
import Styles from './ReviewEstimate.module.css'
import Image from 'next/image'
import images from '../../constants/images'

const ReviewEstimate = () => {
  return (
    <>
      <div className={Styles.reviewEstimate_container}>
        <p>3.Review Your Estimate</p>
        <div className={Styles.project_details}>
          <p>Your Swag Project Details</p>
        </div>
        <div className={Styles.expand_all_content}>
          <p>Expand All</p>
          <div className={Styles.content}>
            <div className={Styles.imgContent}>
              <Image
                src={images.shirt_small}
                width={50}
                height={50}
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
            <div className={Styles.review_content}>
              <span>527 reviews</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewEstimate
