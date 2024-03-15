'use client'
import React, { useState, useEffect, useCallback } from 'react'
import Loaders from '../loaders/Loaders'
import Filter from '../Filter/Filter'
import Products from '../Products/Products'
import global from '../../styles/global.module.css'
import Styles from '../Filter/Filter.module.css'
import Pagination from '../pagination/Pagination'

const Product = ({
  getProductsRes,
  totalData,
  totalPages,
  setCurrentPage,
  currentPage,
  loading,
}) => {
  const [activeFilter, setActiveFilter] = useState(true)

  let length = getProductsRes?.data?.data?.length

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
          />
          {length ? (
            <Products response={getProductsRes} loading={loading} />
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
          {getProductsRes && totalData > 10 && (
            <div className={Styles.pagination_section}>
              <Pagination
                page={currentPage}
                totalData={totalData}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                loading={loading}
              />
            </div>
          )}
        </section>
      </>
    </>
  )
}

export default Product
