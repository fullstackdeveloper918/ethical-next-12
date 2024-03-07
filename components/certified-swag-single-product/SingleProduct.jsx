import React, { useEffect, useState } from 'react'
import styles from './singleProduct.module.css'
import shirtImg from '../../assets/shirt.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Dot from '@components/custom-colored-dot/Dot'
import images from 'constants/images'
import { useSelector } from 'react-redux'
const SingleProduct = ({ product }) => {
  const [starProductsImage, setStarProductImage] = useState(product?.image)
  const router = useRouter()
  const country = useSelector((state) => state.country.country)

  // console.log(product, 'unit price') //ltm_final column_1_retail_price_usd column_1_retail_price_cad
  // console.log(product?.column_1_retail_price_usd, 'column_1_retail_price_usd')
  // console.log(product?.column_1_retail_price_cad, ' column_1_retail_price_cad')
  // console.log(product?.ltm_final, 'unit ltm_final')
  //ltm_final column_1_retail_price_usd column_1_retail_price_cad

  const handleImageOnError = () => {
    setStarProductImage(images.No_product)
  }

  let isProductIncludesltm_final = product?.ltm_final.includes('Y')
  let ltmPrice = country === 'usa' ? product?.ltm_usd : product?.ltm_cad

  let col1Price =
    country === 'usa'
      ? product?.column_1_retail_price_usd
      : product?.column_1_retail_price_cad

  // console.log(isProductIncludesltm_final, 'isProductIncludesltm_final')

  const getPrice = () => {
    let PriceMin
    if (isProductIncludesltm_final) {
      let PriceMin = +col1Price + +ltmPrice / 2
    console.log(PriceMin, 'PriceMin')

    } else if (!isProductIncludesltm_final) {
      let PriceMin = +col1Price
    console.log(PriceMin, 'from else')

    }
  }

  useEffect(() => {
    getPrice()
  }, [])

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
      </div>
      <div className={styles.product_price}>
        <p>{product.unit_price}</p>
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
