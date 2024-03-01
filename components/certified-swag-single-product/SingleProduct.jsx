import React from 'react'
import styles from './singleProduct.module.css'
import shirtImg from '../../assets/shirt.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Dot from '@components/custom-colored-dot/Dot'
import images from 'constants/images'
const SingleProduct = ({ product }) => {
  const router = useRouter()
  return (
    <></>
    // <div
    //   className={styles.container}
    //   onClick={() => router.push(`products/${product?.id}`)}
    // >
    //   <div className={styles.image_container}>
    //     {product?.image ? (
    //       <Image
    //         src={`/${product?.image}`}
    //         width={220}
    //         height={220}
    //         alt="product_image"
    //       />
    //     ) : (
    //       <>
    //         <Image
    //           src={`/${images.No_product}`}
    //           width={220}
    //           height={220}
    //           alt="no product"
    //         />
    //       </>
    //     )}
    //   </div>
    //   <div className={styles.product_name}>
    //     {product?.product_title || 'fghjk'}
    //   </div>
    //   <div className={styles.colors_container}>
    //     {product?.colours &&
    //       Object.entries(product?.colours).map(([color, imageUrl]) => {
    //         return (
    //           <div>
    //             <Dot color={imageUrl} />
    //           </div>
    //         )
    //       })}
    //   </div>
    // </div>
  )
}

export default SingleProduct
