import React, { useEffect, useState } from 'react'
import Styles from './EstimateCard.module.css'
import images from '../../constants/images'
import Image from 'next/image'
import useFetch from '../../lib/useFetch'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItem } from '../../redux-setup/cartSlice'

const EstimateCard = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems)
  console.log(cartItems, 'cartItems from estimate')

  const handleDelete = (val) => {
    dispatch(deleteCartItem(val))
  }

  return (
    <>
      <div className={Styles.estimate_wrapper}>
        <h3 className={Styles.estimate_title}>Estimate</h3>
        <div className={Styles.estimate_horizontal_line}></div>
        <div className={Styles.estimate_container}>
          <div className={Styles.estimate_container_top}>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div className={Styles.estimate_content} key={item.id}>
                  <div className={Styles.estimate_content_imgContent}>
                    <Image
                      src={item.image ? item.image : images.cart_image}
                      width={49}
                      height={66}
                      alt="product_image"
                    />
                  </div>
                  <div className={Styles.estimate_content_textContent}>
                    <h4 className={Styles.title}>
                      {item.heading.slice(0, 70) + '...'}
                    </h4>
                    <span className={Styles.price}>
                      Price : Starting at ${item.price}
                    </span>
                    <div className={Styles.amountwrapper}>
                      <div className={Styles.amountContainer}>
                        <div
                          className={Styles.decrease_amount}
                          onClick={() => handleQuantity(index, 'dec')}
                        >
                          -
                        </div>

                        <div className={Styles.amount_number}>
                          {item.quantity}
                        </div>

                        <div
                          className={Styles.increase_amount}
                          onClick={() => handleQuantity(index, 'inc')}
                        >
                          +
                        </div>
                      </div>
                      <div
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleDelete(item.id)}
                      >
                        <Image
                          src={images.delete_icon}
                          width={14}
                          height={16}
                          alt="delete_icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div>Nothing in Cart!</div>
                <div>Start adding your favs to cart</div>
              </>
            )}
          </div>
          <div className={Styles.estimate_container_bottom}>
            <div className={Styles.estimate_horizontal_line}></div>
            <div className={Styles.total_amount_container}>
              <span className={Styles.text}>Total Estimate</span>
              <span className={Styles.price}>$11670</span>
            </div>
            <button className={Styles.estimate_bottom_btn}>
              Submit Estimate Request
            </button>
            <div className={Styles.estimate_clear_content}>
              <p className={Styles.estimate_clear_btn}>Clear Orders</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EstimateCard
