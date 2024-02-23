import React from 'react'
import styles from './singleProduct.module.css'
import shirtImg from '../../assets/shirt.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
const SingleProduct = ({ product }) => {
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
      <div className={styles.textCenter}>
        as low as $<span className="">{product?.unit_price || 678}</span>
      </div>
    </div>
  )
}

export default SingleProduct
