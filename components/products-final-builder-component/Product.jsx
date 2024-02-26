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
  const [loadQuery, { response, loading, error, errorMessage }] = useFetch(
    `/products`,
    {
      method: 'get',
    }
  )
  useEffect(() => {
    loadQuery()
  }, [])

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
            <Pagination />
          </section>
        </>
      )}
    </>
  )
}

export default Product
