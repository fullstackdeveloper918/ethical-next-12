import React, { useEffect, useState } from 'react'
import Styles from './EstimateCard.module.css'
import images from '../../constants/images'
import Image from 'next/image'
import useFetch from '../../lib/useFetch'
import axios from 'axios'

const EstimateCard = ({ showEstimate }) => {
  const [quantities, setQuantities] = useState([])
  const token = localStorage.getItem('token_swag')
  console.log(token, 'token')

  // useEffect(() => {
  //   const datafetch = async () => {
  //     const res = await fetch(
  //       'https://test.cybersify.tech/Eswag/public/api/cart/915',
  //       {
  //         method: 'GET',
  //         headers: {
  //           Authorization: token,
  //           'Content-Type': 'application/json',
  //           // Add any other headers as needed
  //         },
  //       }
  //     )
  //       .then((response) => response.json())
  //       .then((json) => console.log(json))
  //   }

  //   datafetch()
  // }, [])

  const handleQuantity = (index, type) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities }
      console.log('newQuantities', newQuantities)
      const currentQuantity = newQuantities[index] || 1

      if (type === 'inc') {
        newQuantities[index] = currentQuantity + 1
      } else if (type === 'dec') {
        newQuantities[index] = Math.max(currentQuantity - 1, 1)
      }

      return newQuantities
    })
  }

  // const handleDelete = (index) => {
  //   setQuantities((prevQuantities) => {
  //     const newQuantities = prevQuantities
  //     console
  //       .log(newQuantities)

  //       .filter(([key]) => key !== index.toString()) // Remove the entry with the specified index
  //       .reduce((acc, [key, value]) => {
  //         acc[key] = value
  //         return acc
  //       }, {})

  //     return newQuantities
  //   })
  // }

  let arr = ['a', 'b', 'c', 'd', 'e']

  return (
    <>
      <div className={Styles.estimate_wrapper}>
        <h3 className={Styles.estimate_title}>Estimate</h3>
        <div className={Styles.estimate_horizontal_line}></div>
        <div className={Styles.estimate_container}>
          <div className={Styles.estimate_container_top}>
            {arr.map((item, index) => (
              <div className={Styles.estimate_content} key={index}>
                <div className={Styles.estimate_content_imgContent}>
                  <Image
                    src={images.cart_image}
                    width={49}
                    height={66}
                    alt="product_image"
                  />
                </div>
                <div className={Styles.estimate_content_textContent}>
                  <h4 className={Styles.title}>
                    Tentree® Men’s Kangaroo Organic Cotton Hoodie
                  </h4>
                  <span className={Styles.price}>Price : Starting at $80</span>
                  <div className={Styles.amountwrapper}>
                    <div className={Styles.amountContainer}>
                      <div
                        className={Styles.decrease_amount}
                        onClick={() => handleQuantity(index, 'dec')}
                      >
                        -
                      </div>

                      <div className={Styles.amount_number}>
                        {quantities[index] || 1}
                      </div>

                      <div
                        className={Styles.increase_amount}
                        onClick={() => handleQuantity(index, 'inc')}
                      >
                        +
                      </div>
                    </div>
                    <div style={{ cursor: 'pointer' }}>
                      <Image
                        src={images.delete_icon}
                        width={14}
                        height={16}
                        alt="delete_icon"
                        onClick={() => handleDelete(index)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
