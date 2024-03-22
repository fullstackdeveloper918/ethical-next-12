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
  const [filteredProductType, setFilteredProductType] = useState([])
  const [finalColorFilteredProducts, setFinalColorFilteredProducts] = useState(
    []
  )
  const [finalSwiftProducts, setFinalSwiftProducts] = useState([])
  const [finalDecorationProducts, setFinalDecorationProducts] = useState([])
  const [finalProducts, setFinalProducts] = useState([])
  const [f, setF] = useState([])
  const [isSwiftSwag, setIsSwiftSwag] = useState(false)
  const [decorationsArray, setDecorationsArray] = useState([])

  const getProductsRes = useSelector((state) => state.category.getProductsRes)

  const totalData = useSelector((state) => state.category.totalData)
  const country = useSelector((state) => state.country.country)

  useEffect(() => {
    setIsSwiftSwag(false)
  }, [getProductsRes?.data?.data])

  useEffect(() => {
    if (filteredColors.length > 0 && getProductsRes?.data?.data?.length > 0) {
      let result = getProductsRes?.data?.data?.filter((item) => {
        return Object.keys(item.colours).some((color) =>
          filteredColors.includes(color)
        )
      })
      setFinalProducts(result)
      setFinalColorFilteredProducts(result)
    } else if (filteredColors.length === 0) {
      setFinalProducts(getProductsRes?.data?.data)
      setFinalColorFilteredProducts(getProductsRes?.data?.data)
    }
  }, [filteredColors, getProductsRes])

  useEffect(() => {
    if (getProductsRes?.data?.data?.length > 0 && isSwiftSwag) {
      let result = finalColorFilteredProducts?.filter((item) => {
        return item.swift_tag == 1
      })

      setFinalSwiftProducts(result)
    } else if (getProductsRes?.data?.data?.length > 0) {
      setFinalSwiftProducts(finalColorFilteredProducts)
    }
  }, [isSwiftSwag, finalColorFilteredProducts, filteredColors])

  useEffect(() => {
    if (getProductsRes?.data?.data?.length > 0 && decorationsArray.length > 0) {
      let result = finalSwiftProducts?.filter((item) => {
        let supplierFees =
          country === 'usa' ? item?.supplier_fees_usd : item?.supplier_fees_cad
        return decorationsArray.some((decoration) =>
          supplierFees?.includes(decoration)
        )
      })
      setFinalDecorationProducts(result)
    } else if (getProductsRes?.data?.data?.length > 0) {
      setFinalDecorationProducts(finalSwiftProducts)
    }
  }, [decorationsArray, finalSwiftProducts])
  // console.log(getProductsRes?.data?.data, 'quest to find swift_swag')
  // console.log(finalColorFilteredProducts, 'finalColorFilteredProducts')
  // console.log(finalSwiftProducts, 'finalSwiftProducts')
  // console.log(finalDecorationProducts, 'finalDecorationProducts')

  // useEffect(() => {
  //   if (filteredProductType.length > 0 && finalSwiftProducts?.length > 0) {
  //   } else if (filteredProductType.length === 0) {
  //     setF(getProductsRes?.data?.data)
  //   }
  // }, [filteredProductType, getProductsRes])

  // useEffect(() => {
  //   // let supplierFees =
  //   // country === 'usa' ? item?.supplier_fees_usd : item?.supplier_fees_cad

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
            filteredProductType={filteredProductType}
            setFilteredProductType={setFilteredProductType}
            isSwiftSwag={isSwiftSwag}
            setIsSwiftSwag={setIsSwiftSwag}
            setDecorationsArray={setDecorationsArray}
            decorationsArray={decorationsArray}
          />
          <Products finalProducts={finalProducts} />

          {getProductsRes?.data?.data?.length > 0 && totalData > 100 && (
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
