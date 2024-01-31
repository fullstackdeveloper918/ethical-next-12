'use client'
import React, { useEffect, useState } from 'react'
import Styles from './Filter.module.css'
import Image from 'next/image'
import downIcon from '../../assets/headerPics/down-black.svg'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={Styles.shop_menu}>
                Select Option
                <span>
                  <Image src={downIcon} width={8} height={8} alt="search" />
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={Styles.header_menu}>
              <DropdownMenuRadioItem
                value="top"
                className={Styles.shop_submenu}
              >
                Top
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="bottom"
                className={Styles.shop_submenu}
              >
                Bottom
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="right"
                className={Styles.shop_submenu}
              >
                Right
              </DropdownMenuRadioItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className={Styles.filter_panel_wrap}>
        {activeFilter && <FilterPanel />}
      </div>
    </>
  )
}

export default Filter
