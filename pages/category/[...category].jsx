import Footer from '@components/footer/Footer'
import Modal from '@components/modal/Modal'
import PrimaryHeader from '@components/primary-header/PrimaryHeader'
import Product from '@components/products-final-builder-component/Product'
import SecondaryHeader from '@components/secondary-header/SecondaryHeader'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const index = () => {
  const router = useRouter()
  const [totalData, setTotalData] = useState([])
  const [totalPages, setTotalPages] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const getProductsRes = useSelector((state) => state.category.getProductsRes)

  const getProductsLoading = useSelector(
    (state) => state.category.getProductsLoading
  )
  const getProductsError = useSelector(
    (state) => state.category.getProductsError
  )
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

      <Product
        getProductsRes={getProductsRes}
        totalData={totalData}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        loading={getProductsLoading}
      />
      <Footer />
    </div>
  )
}

export default index
