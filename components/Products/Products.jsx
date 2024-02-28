'use client'
import React from 'react'
import Styles from '../Filter/Filter.module.css'
import Image from 'next/image'
import Featured_product from '../../assets/headerPics/main-product.png'
import PromotionImg from '../../assets/products_promotion.svg'
import ProductCard from '../ProductCard/ProductCard'
import { useSelector } from 'react-redux'

const Products = ({ response, error, loading }) => {
  const inputPrice = useSelector((state) => state.filter?.Price)

  const filterProducts = response?.data?.data?.filter(
    (p) => p?.unit_price > inputPrice
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
            <div className={Styles.collection_Single}>
              <div className={Styles.imgContent}>
                <Image
                  src={Featured_product}
                  width={221}
                  height={345}
                  alt="cup"
                  className={Styles.img}
                />
                <span className={Styles.badget}>Sale 30%</span>
              </div>
              <div className={Styles.textContent}>
                <h4 className={Styles.textContent_title}>
                  Zama Flannel Plaid Button Down Shirt - Unisex
                </h4>
                <p>as low as $60.00</p>
                <Image
                  src={PromotionImg}
                  width={132}
                  height={21}
                  alt="cup"
                  className={Styles.img}
                />
                <div className={Styles.checkbtn}>
                  <button>Check it out</button>
                </div>
              </div>
            </div>

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
