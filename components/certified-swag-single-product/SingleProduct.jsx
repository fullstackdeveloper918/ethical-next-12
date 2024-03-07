import React, { useState } from 'react'
import styles from './singleProduct.module.css'
import shirtImg from '../../assets/shirt.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Dot from '@components/custom-colored-dot/Dot'
import images from 'constants/images'
const SingleProduct = ({ product }) => {
  const [starProductsImage, setStarProductImage] = useState(product?.image)
  const router = useRouter()

  console.log(product, 'unit price')

  const handleImageOnError = () => {
    setStarProductImage(images.No_product)
  }

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
        {product?.product_title || 'fghjk'}
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
