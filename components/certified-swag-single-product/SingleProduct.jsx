import React from 'react'
import styles from './singleProduct.module.css'
import shirtImg from '../../assets/shirt.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Dot from '@components/custom-colored-dot/Dot'
const SingleProduct = ({ product }) => {
  console.log(product?.colours[0]?.black)
  const router = useRouter()
  return (
    <div
      className={styles.container}
      onClick={() => router.push(`products/${product?.id}`)}
    >
      <div className={styles.image_container}>
        <Image
          src={product?.image || shirtImg}
          width={220}
          height={220}
          alt="product_image"
        />
      </div>
      <div className={styles.product_name}>
        {product?.product_title || 'fghjk'}
      </div>
      <div className={styles.colors_container}>
        {product?.colours &&
          Object.entries(product?.colours).map(([color, imageUrl]) => {
            return (
              <div>
                <Dot color={imageUrl} />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default SingleProduct
