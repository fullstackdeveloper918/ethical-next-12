import React, { useEffect, useState } from 'react'
import Styles from './ReviewEstimate.module.css'
import Image from 'next/image'
import images from '../../constants/images'
import { GrEdit } from 'react-icons/gr'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const ReviewEstimate = () => {
  const router = useRouter()

  const cartItems = useSelector((state) => state.cart.cartItems)
  const cartItemsLength = useSelector((state) => state.cart.cartItems.length)
  const [isExpand, setIsExpand] = useState(false)
  const [cartItemss, setCartItemss] = useState(cartItems)
  useEffect(() => {
    if (isExpand) {
      setCartItemss(cartItems)
    } else if (!isExpand) {
      setCartItemss(cartItems.slice(0, 2))
    }
  }, [isExpand])
  return (
    <>
      <div className={Styles.reviewEstimate_container}>
        <p>3.Review Your Estimate</p>
        <div className={Styles.project_details_text}>
          <p className={Styles.form_labelwrap}>Your Swag Project Details</p>
        </div>
        {cartItemsLength > 2 && (
          <div className={Styles.expand_all_content}>
            <button type="button" onClick={() => setIsExpand(!isExpand)}>
              {isExpand ? 'Hide' : 'Expand All'}
            </button>
          </div>
        )}
        <div className={Styles.reviewContainer}>
          {cartItemss?.length > 0 &&
            cartItemss.map((item, i) => (
              <>
                <div className={Styles.reviewContent} key={i}>
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
                <div className={Styles.buttons}>
                  <button
                    onClick={() => router.push(`/products/${item.id}`)}
                    type="button"
                  >
                    <GrEdit />
                    Edit
                  </button>
                  <button>See More</button>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  )
}

export default ReviewEstimate
