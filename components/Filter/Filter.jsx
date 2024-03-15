'use client'
import React, { useEffect, useState } from 'react'
import Styles from './Filter.module.css'
import Image from 'next/image'
import FilterPanel from '../FilterPanel/FilterPanel'
import images from '../../constants/images'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchState, setSelectedOptionValue } from 'redux-setup/cartSlice'
import { setActiveFilters, setCollectionId } from 'redux-setup/categorySlice'

const Filter = ({ activeFilter, setActiveFilter }) => {
  const [scrolled, setScrolled] = useState(false)
  const dispatch = useDispatch()
  const [filtersState, setFiltersState] = useState([])

  const searchState = useSelector((state) => state.cart.searchState)
  const selectedOptionValue = useSelector(
    (state) => state.cart.selectedOptionValue
  )

  const subCategoryData = useSelector((state) => state.category.subCategories)
  const subCategoryOnTop = useSelector(
    (state) => state.category.subCategoryOnTop
  )

  const dataArray = Object.entries(subCategoryData).map(([key, value]) => ({
    id: key,
    category: value.replace(/"/g, ''), // Remove double quotes from the value
  }))

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

  const handleAddLists = (key) => {
    dispatch(setCollectionId(key))
    // if (filtersState.includes(text?.apikey)) {
    //   let f = filtersState.filter((item) => item !== text?.apikey)
    //   setFiltersState(f)
    // } else {
    //   setFiltersState((prevC) => [...prevC, text?.apikey])
    // }
  }

  useEffect(() => {
    dispatch(setActiveFilters(filtersState))
  }, [filtersState])
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

          {Object.keys(subCategoryOnTop).length > 0 &&
            Object.entries(subCategoryOnTop)
              .slice(0, 7)
              .map(([key, value]) => (
                <p onClick={() => handleAddLists(key)}>{JSON.parse(value)}</p>
              ))}
        </div>
        <div className={Styles.filter_select}>
          <div>
            <select
              name=""
              id=""
              className={Styles.Select_inputs}
              value={selectedOptionValue}
              // onChange={handleSelectChange}
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
