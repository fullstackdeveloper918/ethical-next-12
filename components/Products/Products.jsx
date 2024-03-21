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

const Products = ({ finalProducts }) => {
  const router = useRouter()
  const promotionalProduct = useSelector(
    (state) => state.random.singleProductPromotion
  )
  const response = useSelector((state) => state.category.getProductsRes)
  const loading = useSelector((state) => state.category.getProductsLoading)

  let length = response?.data?.data?.length
  return (
    <>
      {loading ? (
        <div>
          <Loaders />
        </div>
      ) : (
        <>
          {length ? (
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
                            router.push(`/product/${promotionalProduct.id}`)
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
          ) : (
            <div
              className={Styles.collection_wrapper}
              style={{
                marginBottom: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '3rem',
                color: '#a2d061',
              }}
            >
              No Products Found
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Products
