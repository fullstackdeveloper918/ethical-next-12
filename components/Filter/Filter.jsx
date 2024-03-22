'use client'
import React, { useEffect, useState } from 'react'
import Styles from './Filter.module.css'
import Image from 'next/image'
import FilterPanel from '../FilterPanel/FilterPanel'
import images from '../../constants/images'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchState, setSelectedOptionValue } from 'redux-setup/cartSlice'
import {
  setActiveFilters,
  setCollectionId,
  setSubCollectionForUrl,
} from 'redux-setup/categorySlice'
import { useRouter } from 'next/router'

const Filter = ({
  activeFilter,
  setActiveFilter,
  setFilteredColors,
  filteredColors,
  setFilteredProductType,
  filteredProductType,
  setIsSwiftSwag,
  isSwiftSwag,
  setDecorationsArray,
  decorationsArray,
  productTypeArray,
  setProductTypeArray,
  emojiTypeArray,
  setEmojiTypeArray,
}) => {
  const [scrolled, setScrolled] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()

  const [active, setActive] = useState('')
  const [filtersState, setFiltersState] = useState([])

  const searchState = useSelector((state) => state.cart.searchState)
  const selectedOptionValue = useSelector(
    (state) => state.cart.selectedOptionValue
  )

  const subCategoryOnTop = useSelector(
    (state) => state.category.subCategoryOnTop
  )
  const collectionForUrl = useSelector(
    (state) => state.category.collectionForUrl
  )

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100

      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSelectChange = (event) => {
    const value = event.target.value
    dispatch(setSelectedOptionValue(value))
  }

  useEffect(() => {
    dispatch(setSearchState(''))
  }, [])

  const handleAddLists = (key, value) => {
    dispatch(setSubCollectionForUrl(JSON.parse(value)))
    router.push(`/category/${collectionForUrl}/${JSON.parse(value)}`)

    setActive(value)
  }

  return (
    <>
      {/* Filter Section */}
      <div className={Styles.filter_Container}>
        <button
          className={Styles.filter_btn}
          onClick={() => setActiveFilter(!activeFilter)}
        >
          <span>
            <Image
              src={images.Filter_btn_icon}
              width={20}
              height={20}
              alt="filter_btn_icon"
            />
          </span>
          <span>Filter</span>
        </button>
        <div className={Styles.filter_input}>
          {Object.keys(subCategoryOnTop).length > 0 &&
            Object.entries(subCategoryOnTop).map(([key, value]) => (
              <p
                className={value === active ? Styles.subCatgeory_Active : ''}
                onClick={() => handleAddLists(key, value)}
                key={value}
              >
                {value ? JSON.parse(value) : ' '}
              </p>
            ))}
        </div>
        <div className={Styles.filter_select}>
          <div>
            <select
              name=""
              id=""
              className={Styles.Select_inputs}
              value={selectedOptionValue}
              onChange={handleSelectChange}
            >
              <option defaultValue value="">
                Select an Option
              </option>

              <option value="product_title_asc">Alphabetically, A-Z</option>
              <option value="product_title_desc">Alphabetically, Z-A</option>

              <option value="created_at_asc">Date, old to new </option>
              <option value="created_at_desc">Date, new to old </option>
            </select>
          </div>
        </div>
      </div>
      <div className={Styles.filter_panel_wrap}>
        {activeFilter && (
          <FilterPanel
            filteredColors={filteredColors}
            setFilteredColors={setFilteredColors}
            setFilteredProductType={setFilteredProductType}
            filteredProductType={filteredProductType}
            isSwiftSwag={isSwiftSwag}
            setIsSwiftSwag={setIsSwiftSwag}
            setDecorationsArray={setDecorationsArray}
            decorationsArray={decorationsArray}
            productTypeArray={productTypeArray}
            setProductTypeArray={setProductTypeArray}
            setEmojiTypeArray={setEmojiTypeArray}
            emojiTypeArray={emojiTypeArray}
          />
        )}
      </div>
    </>
  )
}

export default Filter
