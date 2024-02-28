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

const Product = () => {
  const [activeFilter, setActiveFilter] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalData, setTotalData] = useState([])
  const [totalPages, setTotalPages] = useState('')
  const [loadQuery, { response, loading, error, errorMessage }] = useFetch(
    `/products?page=${currentPage ? currentPage : 1}&pageSize=${10}`,
    {
      method: 'get',
    }
  )
  useEffect(() => {
    loadQuery()
    window.scrollTo({
      top: '0',
      left: '0',
      behavior: 'smooth',
    })
  }, [currentPage])

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
            <Pagination
              page={currentPage}
              totalData={totalData}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              loading={loading}
            />
          </section>
        </>
      )}
    </>
  )
}

export default Product
