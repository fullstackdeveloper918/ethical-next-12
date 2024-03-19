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

const Filter = ({ activeFilter, setActiveFilter }) => {
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
  const subCollectionForUrl = useSelector(
    (state) => state.category.subCollectionForUrl
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
          {Object.keys(subCategoryOnTop).length > 0 &&
            Object.entries(subCategoryOnTop)
              .slice(0, 7)
              .map(([key, value]) => (
                <p
                  style={{
                    borderBottom:
                      value.label === active ? '2px solid #A2D061' : '',
                  }}
                  onClick={() => handleAddLists(key, value)}
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
