'use client'
import React, { useState, useEffect } from 'react'
import global from '../styles/global.module.css'
import Styles from '../components/Filter/Filter.module.css'

import Filter from '../components/Filter/Filter'
// import Pagination from '../../components/Pagination/Pagination'
import Products from '../components/Products/Products'
import useFetch from '../lib/useFetch'
import Loaders from '../components/loaders/Loaders'
import SecondaryHeader from '../components/secondary-header/SecondaryHeader'
import PrimaryHeader from '../components/primary-header/PrimaryHeader'
import Footer from '../components/footer/Footer'
const products = () => {
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
          <PrimaryHeader />
          <SecondaryHeader />
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
          </section>
          <Footer />
        </>
      )}
    </>
  )
}

export default products
