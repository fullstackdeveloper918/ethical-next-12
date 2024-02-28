'use client'
import React, { useEffect, useState } from 'react'
import Styles from './Filter.module.css'
import Image from 'next/image'
import FilterPanel from '../FilterPanel/FilterPanel'
import images from '../../constants/images'

const Filter = ({
  activeFilter,
  setActiveFilter,
  setSearchState,
  optimizedFn,
  setSelectedOptionValue,
  selectedOptionValue,
}) => {
  const [scrolled, setScrolled] = useState(false)

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
    setSelectedOptionValue(value)
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
          <input
            type="text"
            onChange={(e) => {
              e.preventDefault()
              setSearchState(e.target.value)
              optimizedFn(e.target.value)
            }}
          />
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
              {/* <option value="sort">Sort</option>
              <option value="featured">Featured</option>
              <option value="best_selling">Best Selling</option> */}
              <option value="asc">Alphabetically, A-Z</option>
              <option value="des">Alphabetically, Z-A</option>
              <option value="priceAsc">Price, low to high</option>
              <option value="priceDes">Price, high to low </option>
              <option value="dateAsc">Date, old to new </option>
              <option value="dateDes">Date, new to old </option>
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
