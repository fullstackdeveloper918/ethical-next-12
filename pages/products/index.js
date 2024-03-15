import Footer from '@components/footer/Footer'
import Modal from '@components/modal/Modal'
import PrimaryHeader from '@components/primary-header/PrimaryHeader'
import Product from '@components/products-final-builder-component/Product'
import SecondaryHeader from '@components/secondary-header/SecondaryHeader'
import useFetch from '@lib/useFetch'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const index = () => {
  const router = useRouter()
  const [totalData, setTotalData] = useState([])
  const [totalPages, setTotalPages] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [countryTosend, setCountryToSend] = useState('usa')
  const [url, setUrl] = useState('')
  const country = useSelector((state) => state.country.country)
  let swiftSwag = useSelector((state) => state.random.swiftSwag)
  //   //   console.log(router.asPath.includes('232'), 'pllll')
  //   `https://test.cybersify.tech/Eswag/public/api/products?page=${
  //             currentPage ? currentPage : 1
  //           }&pageSize=${10}&${countryTosend}=1&search_title=${value}&${selectedOptionValue}=desc&collection_ids=${
  //             activeFilters[0] ? activeFilters[0] : ''
  //           }&swift_tag=${swiftSwag === `flexible` ? 0 : 1}`

  useEffect(() => {
    if (country) {
      setCountryToSend(
        country === 'usa' ? 'available_in_usa' : 'available_in_canada'
      )
    }
  }, [country])

  useEffect(() => {
    if (countryTosend) {
      const route = `/products?page=${
        currentPage ? currentPage : 1
      }&pageSize=${10}&${countryTosend}=1&swift_tag=${
        swiftSwag !== `flexible` ? 1 : 0
      }`
      setUrl(route)
    }
  }, [countryTosend, swiftSwag, currentPage])

  useEffect(() => {
    if (url) {
      getProducts()
    }
  }, [url])
  const [
    getProducts,
    {
      response: getProductsRes,
      loading: getProductsLoading,
      error: getProductsError,
    },
  ] = useFetch(url, {
    method: 'get',
  })

  useEffect(() => {
    if (getProductsRes) {
      router.replace(url, undefined, { shallow: true })
    }
  }, [getProductsRes])

  useEffect(() => {
    if (getProductsRes) {
      setCurrentPage(getProductsRes?.data?.current_page)
      setTotalData(getProductsRes?.data?.total)
      setTotalPages(getProductsRes?.data?.last_page)
    }
  }, [getProductsRes])

  return (
    <div>
      <PrimaryHeader />
      <SecondaryHeader />
      <Modal />
      {!getProductsLoading && !getProductsError && (
        <Product
          getProductsRes={getProductsRes}
          totalData={totalData}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          loading={getProductsLoading}
        />
      )}
      <Footer />
    </div>
  )
}

export default index
