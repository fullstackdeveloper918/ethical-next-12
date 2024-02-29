import React from 'react'
import Styles from './ReviewEstimate.module.css'
import Image from 'next/image'
import images from '../../constants/images'
import { GrEdit } from 'react-icons/gr'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'

const ReviewEstimate = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)

  console.log(cartItems, 'cartItemscartItems')

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
          {cartItems?.length > 0 &&
            cartItems.map((item, i) => (
              <div className={Styles.content} key={i}>
                <div className={Styles.left_content}>
                  <div className={Styles.imgContent}>
                    <Image
                      src={item.image}
                      width={54}
                      height={72}
                      alt="image"
                    />
                  </div>
                  <div className={Styles.textContent}>
                    <div>
                      <h4 className={Styles.title}>
                        {item.heading.slice(0, 100)}
                      </h4>
                      <p className={Styles.color}>Black</p>
                      <p className={Styles.quantity}>
                        Quantity - {item.quantity}
                      </p>
                    </div>
                    <div>
                      <p className={Styles.price}>
                        ${item.price * item.quantity}
                      </p>
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
            ))}
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
