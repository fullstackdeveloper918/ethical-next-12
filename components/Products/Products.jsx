'use client'
import React, { useState } from 'react'
import Styles from '../Filter/Filter.module.css'
import Image from 'next/image'
import Featured_product from '../../assets/headerPics/main-product.png'
import PromotionImg from '../../assets/products_promotion.svg'
import ProductCard from '../ProductCard/ProductCard'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Loaders from '@components/loaders/Loaders'

const Products = ({ response, loading }) => {
  const router = useRouter()
  const promotionalProduct = useSelector(
    (state) => state.random.singleProductPromotion
  )

  return (
    <>
      {loading ? (
        <div>
          <Loaders />
        </div>
      ) : (
        <div
          className={Styles.collection_wrapper}
          style={{ marginBottom: '30px' }}
        >
          <div className={Styles.collection_container}>
            {promotionalProduct && (
              <div className={Styles.collection_Single}>
                <div className={Styles.imgContent}>
                  <Image
                    src={promotionalProduct.image}
                    width={221}
                    height={345}
                    alt="cup"
                    className={Styles.img}
                  />
                  <span className={Styles.badget}>Sale 30%</span>
                </div>
                <div className={Styles.textContent}>
                  <h4 className={Styles.textContent_title}>
                    {promotionalProduct.product_title}
                  </h4>
                  <p>as low as ${promotionalProduct.unit_price || 60}</p>
                  <Image
                    src={PromotionImg}
                    width={132}
                    height={21}
                    alt="cup"
                    className={Styles.img}
                  />
                  <div className={Styles.checkbtn}>
                    <button
                      onClick={() =>
                        router.push(`/products/${promotionalProduct.id}`)
                      }
                    >
                      Check it out
                    </button>
                  </div>
                </div>
              </div>
            )}

            {response?.data?.data?.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Products
