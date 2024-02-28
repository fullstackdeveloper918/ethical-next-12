'use client'
import React, { useState, useEffect, useCallback } from 'react'
import useFetch from '../../lib/useFetch'
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
  const [activeFilter, setActiveFilter] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalData, setTotalData] = useState([])
  const [totalPages, setTotalPages] = useState('')
  const [countryTosend, setCountryToSend] = useState(null)
  const [searchState, setSearchState] = useState('')
  const [productsData, setProductsData] = useState(null)
  const [Isloading, setIsloading] = useState(false)
  const [selectedOptionValue, setSelectedOptionValue] = useState('')
  const country = useSelector((state) => state.country.country)
  useEffect(() => {
    if (country) {
      setCountryToSend(
        country === 'usa' ? 'available_in_usa' : 'available_in_canada'
      )
    }
  }, [country])

  const getProducts = async (value = '') => {
    console.log('iiiiiii')
    try {
      if (countryTosend) {
        setIsloading(true)
        const response = await axios.get(
          `https://test.cybersify.tech/Eswag/public/api/products?page=${
            currentPage ? currentPage : 1
          }&pageSize=${10}&${countryTosend}=1&search_title=${value}&${selectedOptionValue}`
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

  useEffect(() => {
    getProducts()
  }, [currentPage, countryTosend, selectedOptionValue])

  const optimizedFn = useCallback(debounce(getProducts), [])

  useEffect(() => {
    if (productsData) {
      setCurrentPage(productsData?.data?.current_page)
      setTotalData(productsData?.data?.total)
      setTotalPages(productsData?.data?.last_page)
    }
  }, [productsData])

  console.log(selectedOptionValue, 'selectedOptionValueselectedOptionValue')

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
            setSearchState={setSearchState}
            searchState={searchState}
            optimizedFn={optimizedFn}
            setSelectedOptionValue={setSelectedOptionValue}
            selectedOptionValue={selectedOptionValue}
          />
          {Isloading ? (
            <div>
              {' '}
              <Loaders />
            </div>
          ) : (
            <Products response={productsData} loading={Isloading} />
          )}

          <div className={Styles.pagination_section}>
            <Pagination
              page={currentPage}
              totalData={totalData}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              loading={Isloading}
            />
          </div>
        </section>
      </>
    </>
  )
}

export default Product
