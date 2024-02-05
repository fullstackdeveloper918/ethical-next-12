import React, { useEffect } from 'react'
import Product from '../../components/Product/Product'
import useFetch from '../../lib/useFetch'
import { useRouter } from 'next/router'
import PrimaryHeader from '../../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../../components/secondary-header/SecondaryHeader'
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

  useEffect(() => {
    loadQuery()
  }, [productID])

  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <Product product={response?.data} loading={loading} error={error} />
    </>
  )
}

export default productID
