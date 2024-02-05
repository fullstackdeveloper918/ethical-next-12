'use client'
import React, { useEffect, useState } from 'react'
import Styles from './Filter.module.css'
import Image from 'next/image'
import downIcon from '../../assets/headerPics/down-black.svg'
import { IoIosArrowDown } from 'react-icons/io'
import { Button } from '@/components/ui/button'
import FilterPanel from '../FilterPanel/FilterPanel'
import images from '../../constants/images'
// import { LIST, PRODUCT_TYPE_LIST } from '../../constants/data'

const Filter = ({ activeFilter, setActiveFilter }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position, you can adjust the threshold as needed
      const isScrolled = window.scrollY > 100

      // Set the state based on the scroll position
      setScrolled(isScrolled)
    }

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll)

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
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
          <input type="text" />
        </div>
        <div className={Styles.filter_select}>
          <div>
            <select name="" id="" className={Styles.Select_inputs}>
              <option defaultValue value="">
                Select an Option
              </option>
              <option value="sort">Sort</option>
              <option value="featured">Featured</option>
              <option value="best_selling">Best Selling</option>
              <option value="asc">Alphabetically, A-Z</option>
              <option value="des">Alphabetically, Z-A</option>
              <option value="price-low">Price, low to high</option>
              <option value="price-high">Price, high to low </option>
              <option value="date-old">Date, old to new </option>
              <option value="date-new">Date, new to old </option>
            </select>
          </div>
        </div>
      </div>
      <div className={Styles.filter_panel_wrap}>
        {activeFilter && <FilterPanel />}
      </div>
    </>
  )
}

export default Filter
