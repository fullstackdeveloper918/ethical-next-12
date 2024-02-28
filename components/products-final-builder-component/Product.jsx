'use client'
import React, { useState, useEffect } from 'react'
import useFetch from '../../lib/useFetch'
import Loaders from '../loaders/Loaders'
import Filter from '../Filter/Filter'
import Products from '../Products/Products'
import global from '../../styles/global.module.css'
import Styles from '../Filter/Filter.module.css'
import { MdArrowBackIos } from 'react-icons/md'
import Pagination from '../pagination/Pagination'
import { IoChevronForwardSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const Product = () => {
  const [activeFilter, setActiveFilter] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalData, setTotalData] = useState([])
  const [totalPages, setTotalPages] = useState('')
  const [countryTosend, setCountryToSend] = useState(null)
  const [loadQuery, { response, loading, error, errorMessage }] = useFetch(
    `/products?page=${
      currentPage ? currentPage : 1
    }&pageSize=${10}&${countryTosend}=1
  `,
    {
      method: 'get',
    }
  )
  const country = useSelector((state) => state.country.country)
  useEffect(() => {
    if (country) {
      setCountryToSend(
        country === 'usa' ? 'available_in_usa' : 'available_in_canada'
      )
    }
  }, [country])
  useEffect(() => {
    if (countryTosend) {
      loadQuery()
      window.scrollTo({
        top: '0',
        left: '0',
        behavior: 'smooth',
      })
    }
  }, [currentPage, countryTosend])

  useEffect(() => {
    if (response?.data) {
      setCurrentPage(response?.data?.current_page)
      setTotalData(response?.data?.total)
      setTotalPages(response?.data?.last_page)
    }
  }, [response])

  return (
    <>
      {loading ? (
        <div>
          {' '}
          <Loaders />
        </div>
      ) : (
        <>
          <section
            className={`${global.container} ${
              activeFilter ? Styles.category_section : ''
            }`}
            style={{ overflow: 'hidden' }}
          >
            <Filter
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
            <Products response={response} loading={loading} error={error} />
            {/* <Pagination /> */}
            <div className={Styles.pagination_section}>
              <Pagination
                page={currentPage}
                totalData={totalData}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                loading={loading}
              />
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default Product
