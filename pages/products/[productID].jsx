import React, { useEffect } from 'react'
import Product from '../../components/Product/Product'
import useFetch from '../../lib/useFetch'
import { useRouter } from 'next/router'
import PrimaryHeader from '../../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../../components/secondary-header/SecondaryHeader'
import Footer from '../../components/footer/Footer'

const productID = () => {
  const params = useRouter()
  const { query } = params ?? {}
  const { productID } = query ?? {}

  console.log(productID)

  const [loadQuery, { response, loading, error, errorMessage }] = useFetch(
    `/products/${productID}`,
    {
      method: 'get',
    }
  )

  console.log('response', response?.data)

  useEffect(() => {
    loadQuery()
  }, [productID])

  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <Product product={response?.data} loading={loading} error={error} />
      <Footer />
    </>
  )
}

export default productID
