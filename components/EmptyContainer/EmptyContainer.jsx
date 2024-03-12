import React from 'react'
import Styles from './EmptyContainer.module.css'
import { useRouter } from 'next/router'

const EmptyContainer = ({ data }) => {
  const router = useRouter()

  return (
    <>
      <div className={Styles.emptyContent}>
        <h2 className={Styles.title}>Hey, your {data} is Empty!</h2>
        <button
          className={Styles.shop_product_btn}
          onClick={() => router.push('/products')}
        >
          Shop Products
        </button>
      </div>
    </>
  )
}

export default EmptyContainer
