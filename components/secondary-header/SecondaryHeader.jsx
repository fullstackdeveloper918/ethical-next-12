'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import cartImg from '../../assets/headerPics/cart.svg'
import searchImg from '../../assets/headerPics/Search-black.svg'
import heartImg from '../../assets/headerPics/Heart.svg'
import downIcon from '../../assets/headerPics/down-black.svg'
import logo from '../../assets/headerPics/logo.svg'
import Usa from '../../assets/headerPics/use_flag.svg'
import Canada from '../../assets/headerPics/canada-flag.svg'
import CrossIcon from '../../assets/headerPics/corss.svg'
import Humburg from '../../assets/headerPics/menu-bar.png'
import { RxCross2 } from 'react-icons/rx'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useSelector } from 'react-redux'
import styles from './secondaryHeader.module.css'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useRouter } from 'next/router'
import { Input } from '@/components/ui/input'
import useFetch from '@lib/useFetch'
const countries = [
  {
    id: 1,
    country: 'usa',
    imageSrc: Usa,
  },
  {
    id: 2,
    country: 'canada',
    imageSrc: Canada,
  },
]
const SecondaryHeader = () => {
  const [showResults, setShowResults] = useState(false)
  const [searchProduct, setSearchProduct] = useState('')
  const [inputValue, setInputValue] = useState(searchProduct)
  const [data, setData] = useState([])
  const [showSearchInput, setShowSearchInput] = useState(false)
  const [openLinks, setOpenLinks] = useState(false)
  const router = useRouter()
  const [inputbtn, setInputBtn] = useState(false)
  const [country, setCountry] = useState('usa')
  const [screenSize, setScreenSize] = useState(992)
  const popupRef = useRef(null)
  useEffect(() => {
    if (inputbtn) {
      document.documentElement.classList.add('inputAdded')
    } else {
      document.documentElement.classList.remove('inputAdded')
    }
    return () => {
      document.documentElement.classList.remove('inputAdded')
    }
  }, [inputbtn])

  const [loadQuery, { response, loading, error, errorMessage }] = useFetch(
    `/products?q=${searchProduct}`,
    {
      method: 'get',
    }
  )

  const handleResize = () => {
    setScreenSize(window.innerWidth)
  }

  const handleInput = (boolean) => {
    setShowSearchInput(boolean)
    setInputBtn(boolean)
  }

  const debounce = (func) => {
    let timer
    return function (...args) {
      const context = this
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null
        func.apply(context, args)
      }, 500)
    }
  }

  const handleChange = (value) => {
    // loadQuery()
    fetch(`https://test.cybersify.tech/Eswag/public/api/products?q=${value}`)
      .then((res) => res.json())
      .then((data) => setData(data?.data?.data))
    // .then((json) => setSuggestions(json.data.items))
  }

  const optimizedFn = useCallback(debounce(handleChange), [])

  // const handleChange = () => {
  //   if (searchProduct !== '') {
  //     setShowResults(true)
  //     loadQuery()
  //     setData(response?.data)
  //   } else {
  //     setShowResults(false)
  //   }
  // }

  const filteredProducts = data?.filter((product) =>
    product.title.toLowerCase().includes(searchProduct.toLowerCase())
  )

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const cartItems = useSelector((state) => state.cart.cartItems.length)
  return (
    <div className={`${styles.header} ${openLinks ? styles.open_Sidebar : ''}`}>
      <div className={styles.primary_header_container}>
        <span className={styles.humburg_menu}>
          <Image
            src={Humburg}
            width={34}
            height={34}
            alt="downIcon"
            onClick={() => setOpenLinks(true)}
          />
        </span>
        <div className={styles.container_1}>
          <div className={styles.header_logo}>
            <Image
              src={logo}
              width={220}
              height={50}
              alt="search"
              onClick={() => router.push('/')}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <>
          <div className={styles.container_2}>
            <div className={styles.menu_center}>
              <span className={styles.menu_cross}>
                <Image
                  src={CrossIcon}
                  width={20}
                  height={20}
                  alt="Cross_Icon"
                  onClick={() => setOpenLinks(false)}
                />
              </span>
              <div className={styles.text_with_down_icon}>
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={styles.shop_menu}
                        style={{ cursor: 'pointer' }}
                      >
                        Shop
                        <span>
                          <Image
                            src={downIcon}
                            width={10}
                            height={10}
                            alt="search"
                          />
                        </span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className={styles.header_menu}>
                      <DropdownMenuRadioGroup>
                        <DropdownMenuRadioItem
                          value="top"
                          className={styles.shop_submenu}
                          onClick={() => router.push('/bags')}
                        >
                          Bags
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem
                          value="bottom"
                          className={styles.shop_submenu}
                          onClick={() => router.push('/apparel')}
                        >
                          Apparel
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem
                          value="right"
                          className={styles.shop_submenu}
                          onClick={() => router.push('/products')}
                        >
                          All Swag
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem
                          value="right"
                          className={styles.shop_submenu}
                          onClick={() => router.push('/wellness')}
                        >
                          Wellness
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              </div>
              <div className="text_with_down_icon">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={styles.shop_menu}
                      style={{ cursor: 'pointer' }}
                      onClick={() => router.push('/about-us')}
                    >
                      About
                      {/* <span>
                        <Image
                          src={downIcon}
                          width={8}
                          height={8}
                          alt="search"
                        />
                      </span> */}
                    </Button>
                  </DropdownMenuTrigger>
                  {/* <DropdownMenuContent className={styles.header_menu}>
                    <DropdownMenuRadioItem
                      value="top"
                      className={styles.shop_submenu}
                    >
                      Top
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem
                      value="bottom"
                      className={styles.shop_submenu}
                    >
                      Bottom
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem
                      value="right"
                      className={styles.shop_submenu}
                    >
                      Right
                    </DropdownMenuRadioItem>
                  </DropdownMenuContent> */}
                </DropdownMenu>
              </div>
              <Button
                variant="ghost"
                className={styles.shop_menu}
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/contact')}
              >
                Contact
              </Button>
            </div>
          </div>
        </>
        <div className={styles.container_3}>
          <div className="">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`${styles.language_dropdown} ${styles.desktop_menu}`}
                >
                  <span className="flag-img">
                    <Image
                      src={country === 'canada' ? Canada : Usa}
                      width={30}
                      height={22}
                      alt="like"
                    />
                  </span>
                  <span className={styles.dropdown_icon}>
                    <Image src={downIcon} width={14} height={14} alt="search" />
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className={styles.language_wrapdropdown}>
                <DropdownMenuRadioGroup
                  value={country}
                  onValueChange={setCountry}
                >
                  <div className={styles.countries_dropdown_container}>
                    {countries.map((c) => {
                      return (
                        <DropdownMenuRadioItem
                          value={c.country}
                          // style={{ display: "none" }}
                        >
                          <Image
                            src={c.imageSrc}
                            width={30}
                            height={22}
                            alt="like"
                          />
                        </DropdownMenuRadioItem>
                      )
                    })}
                  </div>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className={styles.header_searchicon}>
            <span>
              <Image
                src={searchImg}
                width={24}
                height={24}
                alt="search"
                onClick={() => handleInput(true)}
              />

              <div
                className={`${styles.searchInput} ${
                  showSearchInput ? styles.show_input : ''
                }`}
              >
                <div className={styles.centerField} ref={popupRef}>
                  <input
                    type="search"
                    placeholder="Search"
                    // value={searchProduct}
                    onChange={(e) => {
                      setSearchProduct(e.target.value)
                      optimizedFn(e.target.value)
                    }}
                  />

                  <span>
                    <RxCross2
                      color="black"
                      fontSize={28}
                      className={styles.cross_search}
                      onClick={() => handleInput(false)}
                    />
                  </span>

                  {showResults && (
                    <div className={styles.search_results}>
                      <ul>
                        {filteredProducts?.length !== 0 ? (
                          filteredProducts?.map((item) => (
                            <>
                              <li
                                className={styles.search_productlist}
                                onClick={() =>
                                  router.push(`/products/${item?.id}`)
                                }
                              >
                                <Image
                                  src={item?.image}
                                  width={80}
                                  height={80}
                                />
                                <div className={styles.search_productcontent}>
                                  <h4>{item?.title}</h4>
                                  <p>
                                    {(item?.product_description).slice(0, 100)}
                                  </p>
                                </div>
                              </li>
                            </>
                          ))
                        ) : (
                          <>
                            <h4 className={styles.empty_Products}>
                              No products available
                            </h4>
                          </>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </span>
          </div>
          {screenSize > 767 && (
            <div
              className=""
              onClick={() => router.push('/wishlist')}
              style={{ cursor: 'pointer' }}
            >
              <Image
                src={heartImg}
                width={29}
                height={29}
                alt="like"
                className={styles.cursor_pointer}
              />
            </div>
          )}
          <div
            className=""
            onClick={() => router.push('/cart')}
            style={{ cursor: 'pointer', position: 'relative' }}
          >
            <Image
              src={cartImg}
              width={27}
              height={27}
              alt="cart"
              className={styles.cursor_pointer}
            />
            <span
              style={{
                color: '#fff',
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '20px',
                height: '20px',
                top: '-3px',
                right: '-8px',
                borderRadius: '50%',
                background: 'red',
                padding: '5px',
              }}
            >
              {cartItems}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SecondaryHeader
