import React, { useEffect, useState } from 'react'
import Product from '../../components/Product/Product'
import useFetch from '../../lib/useFetch'
import { useRouter } from 'next/router'
import PrimaryHeader from '../../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../../components/secondary-header/SecondaryHeader'
import Footer from '../../components/footer/Footer'
import Styles from '../../styles/common.module.css'
import ProductCard from '../../components/ProductCard/ProductCard'

const productID = () => {
  const params = useRouter()
  const { query } = params ?? {}
  const { productID } = query ?? {}
  const [data, setData] = useState([])

  const [loadQuery, { response, loading, error, errorMessage }] = useFetch(
    `/products/${productID}`,
    {
      method: 'get',
    }
  )

  useEffect(() => {
    loadQuery()
  }, [productID])

  console.log(response, 'single response')

  useEffect(() => {
    fetch('https://test.cybersify.tech/Eswag/public/api/products')
      .then((res) => res.json())

      .then((r) => setData(r?.data?.data))
  }, [])

  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <Product product={response?.data} loading={loading} error={error} />
      <section className={Styles.product_section}>
        <div className={Styles.heading_content}>
          <h3>Newly Added Swag</h3>
          <button>View All</button>
        </div>
        <div className={Styles.product_card_container}>
          {data?.length &&
            data?.slice(0, 5).map((item) => (
              <>
                <div className={Styles.product_content}>
                  <ProductCard item={item} key={item.id} />
                </div>
              </>
            ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default productID
