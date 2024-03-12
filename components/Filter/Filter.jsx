'use client'
import React, { useEffect, useState } from 'react'
import Styles from './Filter.module.css'
import Image from 'next/image'
import FilterPanel from '../FilterPanel/FilterPanel'
import images from '../../constants/images'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchState, setSelectedOptionValue } from 'redux-setup/cartSlice'

const Filter = ({ activeFilter, setActiveFilter, optimizedFn }) => {
  const [scrolled, setScrolled] = useState(false)
  const dispatch = useDispatch()
  const searchState = useSelector((state) => state.cart.searchState)
  const selectedOptionValue = useSelector(
    (state) => state.cart.selectedOptionValue
  )

  const subCategoryData = useSelector((state) => state.category.subCategories)

  const dataArray = Object.entries(subCategoryData).map(([key, value]) => ({
    id: key,
    category: value.replace(/"/g, ''), // Remove double quotes from the value
  }))
  console.log(dataArray, 'dataarray')

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
          {/* {subCategoryData &&
            subCategoryData.map((item) => (
              <>{console.log(item, 'itemhello')}</>
            ))} */}
          {/* <input
            type="text"
            value={searchState}
            onChange={(e) => {
              e.preventDefault()
              dispatch(setSearchState(e.target.value))
              optimizedFn(searchState)
            }}
          /> */}
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
        {activeFilter && <FilterPanel setActiveFilter={setActiveFilter} />}
      </div>
    </>
  )
}

export default Filter
