'use client'
import React, { useState, useEffect } from 'react'
import global from '../styles/global.module.css'
import Styles from '../components/Filter/Filter.module.css'

import Filter from '../components/Filter/Filter'
// import Pagination from '../../components/Pagination/Pagination'
import Products from '../components/Products/Products'
// import { useRouter, useParams } from 'next/navigation'
import useFetch from '../lib/useFetch'
import Loaders from '../components/loaders/Loaders'

const products = () => {
  const [activeFilter, setActiveFilter] = useState(false)
  // const router = useRouter()
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
      )}
    </>
  )
}

export default products
