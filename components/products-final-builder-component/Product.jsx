'use client'
import React, { useState, useEffect, useCallback } from 'react'
import Loaders from '../loaders/Loaders'
import Filter from '../Filter/Filter'
import Products from '../Products/Products'
import global from '../../styles/global.module.css'
import Styles from '../Filter/Filter.module.css'
import Pagination from '../pagination/Pagination'
import { useSelector } from 'react-redux'
import { debounce } from '@lib/utils'
import axios from 'axios'

const Product = () => {
  const [activeFilter, setActiveFilter] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalData, setTotalData] = useState([])
  const [totalPages, setTotalPages] = useState('')
  const [countryTosend, setCountryToSend] = useState(null)
  const [productsData, setProductsData] = useState(null)
  const [Isloading, setIsloading] = useState(false)

  const country = useSelector((state) => state.country.country)
  const activeFilters = useSelector((state) => state.category.activeFilters)

  const selectedOptionValue = useSelector(
    (state) => state.cart.selectedOptionValue
  )

  const getProducts = async (value = '') => {
    try {
      if (countryTosend) {
        setIsloading(true)
        const response = await axios.get(
          `https://test.cybersify.tech/Eswag/public/api/products?page=${
            currentPage ? currentPage : 1
          }&pageSize=${10}&${countryTosend}=1&search_title=${value}&${selectedOptionValue}=desc&collection_ids=${
            activeFilters[0] ? activeFilters[0] : ''
          }`
        )
        setProductsData(response.data)
        window.scrollTo({
          top: '0',
          left: '0',
          behavior: 'smooth',
        })
      }
    } catch (error) {
      console.log(error, 'from get all products')
    } finally {
      setIsloading(false)
    }
  }
  const optimizedFn = useCallback(debounce(getProducts), [])

  useEffect(() => {
    if (country) {
      setCountryToSend(
        country === 'usa' ? 'available_in_usa' : 'available_in_canada'
      )
    }
  }, [country])

  useEffect(() => {
    getProducts()
  }, [currentPage, countryTosend, selectedOptionValue, activeFilters])

  useEffect(() => {
    if (productsData) {
      setCurrentPage(productsData?.data?.current_page)
      setTotalData(productsData?.data?.total)
      setTotalPages(productsData?.data?.last_page)
    }
  }, [productsData])
  let length = productsData?.data?.data?.length

  return (
    <>
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
            optimizedFn={optimizedFn}
          />
          {Isloading ? (
            <div>
              {' '}
              <Loaders />
            </div>
          ) : length ? (
            <Products response={productsData} loading={Isloading} />
          ) : (
            <div
              className={Styles.collection_wrapper}
              style={{
                marginBottom: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '3rem',
                color: '#a2d061',
              }}
            >
              No Products Found
            </div>
          )}
          {productsData && totalData > 10 && (
            <div className={Styles.pagination_section}>
              <Pagination
                page={currentPage}
                totalData={totalData}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                loading={Isloading}
              />
            </div>
          )}
        </section>
      </>
    </>
  )
}

export default Product
