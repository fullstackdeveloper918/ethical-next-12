import React, { useEffect, useState } from 'react'
import styles from './singleProduct.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Dot from '@components/custom-colored-dot/Dot'
import images from 'constants/images'
import { useSelector } from 'react-redux'

const SingleProduct = ({ product }) => {
  const router = useRouter()
  const [starProductsImage, setStarProductImage] = useState(product?.image)
  const [actualMinQty, setActualMinQty] = useState(0)
  const [priceWithoutCustomizations, setPriceWithoutCustomizations] =
    useState(0)
  const country = useSelector((state) => state.country.country)

  let isProductIncludesltm_final = product?.ltm_final.includes('Y')
  let ltm_price = country === 'usa' ? product?.ltm_usd : product?.ltm_usd

  let col1Price =
    country === 'usa'
      ? product?.column_1_retail_price_usd
      : product?.column_1_retail_price_cad

  const handleImageOnError = () => {
    setStarProductImage(images.No_product)
  }

  useEffect(() => {
    if (product) {
      let minQtyy = isProductIncludesltm_final
        ? +product?.column_1_qty / 2
        : +product?.column_1_qty
      setActualMinQty(Math.round(minQtyy))
    }
  }, [product])

  const getPrice = () => {
    if (isProductIncludesltm_final) {
      setPriceWithoutCustomizations(+col1Price + ltm_price / +actualMinQty)
    } else {
      setPriceWithoutCustomizations(+col1Price)
    }
  }

  useEffect(() => {
    if (actualMinQty) {
      getPrice()
    }
  }, [actualMinQty])

  return (
    <div
      className={styles.container}
      onClick={() => router.push(`products/${product?.id}`)}
    >
      <div className={styles.image_container}>
        <Image
          src={starProductsImage}
          width={220}
          height={220}
          alt="product_image"
          onError={handleImageOnError}
        />
      </div>
      <div className={styles.product_name}>
        {product?.product_title || 'No title received'}
        {/* {product?.emoji_ratings &&
          Object.entries(product?.emoji_ratings).map(([key, value]) => (
            <>
              <p>{value}</p>
            </>
          ))} */}
      </div>
      <div className={styles.product_price} style={{ textAlign: 'center' }}>
        $
        {priceWithoutCustomizations
          ? priceWithoutCustomizations.toFixed(2)
          : 60}
      </div>
      <div className={styles.colors_container}>
        {product?.colours &&
          Object.entries(product?.colours).map(([color, imageUrl]) => {
            return (
              <div>
                <Dot color={color} imageUrl={imageUrl} />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default SingleProduct
