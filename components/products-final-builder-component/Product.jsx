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
  const [activeFilter, setActiveFilter] = useState(true)
  const [filteredColors, setFilteredColors] = useState([])
  const [finalColorFilteredProducts, setFinalColorFilteredProducts] = useState(
    []
  )
  const [finalSwiftProducts, setFinalSwiftProducts] = useState([])
  const [finalDecorationProducts, setFinalDecorationProducts] = useState([])
  const [finalProductType, setFinalProductType] = useState([])
  const [finalEmojiType, setFinalEmojiType] = useState([])
  const [finalProducts, setFinalProducts] = useState([])
  const [decorationsArray, setDecorationsArray] = useState([])
  const [productTypeArray, setProductTypeArray] = useState([])
  const [emojiTypeArray, setEmojiTypeArray] = useState([])
  const getProductsRes = useSelector((state) => state.category.getProductsRes)

  const totalData = useSelector((state) => state.category.totalData)
  const country = useSelector((state) => state.country.country)
  const swiftSwag = useSelector((state) => state.filter.swiftSwag)

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
    if (getProductsRes?.data?.data?.length > 0 && swiftSwag) {
      let result = finalColorFilteredProducts?.filter((item) => {
        return item.swift_tag == 1
      })

      setFinalSwiftProducts(result)
    } else if (getProductsRes?.data?.data?.length > 0) {
      setFinalSwiftProducts(finalColorFilteredProducts)
    }
  }, [swiftSwag, finalColorFilteredProducts])

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

  useEffect(() => {
    if (getProductsRes?.data?.data?.length > 0 && productTypeArray.length > 0) {
      let result = finalDecorationProducts?.filter((item) => {
        return productTypeArray.some((type) =>
          item.product_type?.includes(type)
        )
      })
      setFinalProductType(result)
    } else if (getProductsRes?.data?.data?.length > 0) {
      setFinalProductType(finalDecorationProducts)
    }
  }, [productTypeArray, finalDecorationProducts])

  useEffect(() => {
    if (getProductsRes?.data?.data?.length > 0 && emojiTypeArray.length > 0) {
      let result = finalProductType?.filter((item) => {
        return emojiTypeArray.some((type) => item.emoji_ratings?.includes(type))
      })
      setFinalEmojiType(result)
    } else if (getProductsRes?.data?.data?.length > 0) {
      setFinalEmojiType(finalProductType)
    }
  }, [emojiTypeArray, finalProductType])
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
            setDecorationsArray={setDecorationsArray}
            decorationsArray={decorationsArray}
            productTypeArray={productTypeArray}
            setProductTypeArray={setProductTypeArray}
            setEmojiTypeArray={setEmojiTypeArray}
            emojiTypeArray={emojiTypeArray}
          />
          <Products finalProducts={finalEmojiType} />

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
