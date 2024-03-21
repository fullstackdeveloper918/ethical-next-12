'use client'
import React, { useState, useEffect, useCallback } from 'react'
import Loaders from '../loaders/Loaders'
import Filter from '../Filter/Filter'
import Products from '../Products/Products'
import global from '../../styles/global.module.css'
import Styles from '../Filter/Filter.module.css'
import Pagination from '../pagination/Pagination'
import { useSelector, useDispatch } from 'react-redux'

const Product = () => {
  const [activeFilter, setActiveFilter] = useState(false)
  const [filteredColors, setFilteredColors] = useState([])
  const [finalProducts, setFinalProducts] = useState([])
  const getProductsRes = useSelector((state) => state.category.getProductsRes)

  const totalData = useSelector((state) => state.category.totalData)

  useEffect(() => {
    if (filteredColors.length > 0) {
      let result = getProductsRes?.data?.data
        ?.map((item) => item.colours)
        .filter((obj) => {
          return Object.keys(obj).some((color) =>
            filteredColors.includes(color)
          )
        })
      setFinalProducts(result)
    } else {
      setFinalProducts(getProductsRes?.data?.data)
    }
  }, [filteredColors, getProductsRes])

  console.log(finalProducts, 'finalProductsfinalProducts')

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
            filteredColors={filteredColors}
            setFilteredColors={setFilteredColors}
          />
          <Products finalProducts={finalProducts} />

          {getProductsRes?.data?.data?.length > 0 && totalData > 10 && (
            <div className={Styles.pagination_section}>
              <Pagination />
            </div>
          )}
        </section>
      </>
    </>
  )
}

export default Product
