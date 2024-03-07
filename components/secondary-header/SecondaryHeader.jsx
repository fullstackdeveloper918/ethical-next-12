'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import cartImg from '../../assets/headerPics/cart.svg'
import searchImg from '../../assets/headerPics/Search-black.svg'
import heartImg from '../../assets/headerPics/Heart.svg'
import downIcon from '../../assets/headerPics/down-black.svg'
import EthicalLogo from '../../components/EthicalLogo/EthicalLogo'
import Usa from '../../assets/headerPics/use_flag.svg'
import Canada from '../../assets/headerPics/canada-flag.svg'
import { FaChevronDown } from 'react-icons/fa'
import CrossIcon from '../../assets/headerPics/corss.svg'
import Humburg from '../../assets/headerPics/menu-bar.png'
import { RxCross2 } from 'react-icons/rx'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useDispatch, useSelector } from 'react-redux'
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
import { selectCountry } from 'redux-setup/countrySlice'
import { debounce } from '@lib/utils'
import {
  addCategory,
  getAllCategories,
  setSubCategories,
} from 'redux-setup/categorySlice'
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
  const popupRef = useRef(null)
  const dispatch = useDispatch()
  const router = useRouter() ///products/[productID]
  const [showResults, setShowResults] = useState(false)
  const [searchProduct, setSearchProduct] = useState('')
  const [data, setData] = useState([])
  const [category, setCategory] = useState([])
  const [showSearchInput, setShowSearchInput] = useState(false)
  const [openLinks, setOpenLinks] = useState(false)
  const [inputbtn, setInputBtn] = useState(false)
  const [country, setCountry] = useState('usa')
  const wishlistItems = useSelector((state) => state.wishlist.items)
  const [screenSize, setScreenSize] = useState(992)
  const [showOnMobile, setShowOnMobile] = useState(false)

  const cartItems = useSelector((state) => state.cart.cartItems.length)
  const reached2ndStep = useSelector((state) => state.cart.reached2ndStep)
  const reached3rdStep = useSelector((state) => state.cart.reached3rdStep)
  const allCategories = useSelector((state) => state.category.allCategories)
  const subCategories = useSelector((state) => state.category.subCategories)
  const filteredProducts = data?.filter((product) =>
    product?.title?.toLowerCase().includes(searchProduct.toLowerCase())
  )
  const optimizedFn = useCallback(debounce(handleChange), [])
  const getSingleProductPageRoute =
    router.asPath.includes('/products/') || router.asPath.includes('/contact')
  const [loadQuery, { response, loading, error, errorMessage }] = useFetch(
    `/products?q=${searchProduct}`,
    {
      method: 'get',
    }
  )

  const [
    getCategories,
    {
      response: categoriesRes,
      loading: categoriesLoading,
      error: categoriesError,
    },
  ] = useFetch(`category`, {
    method: 'get',
  })

  useEffect(() => {
    getCategories()
  }, [])

  useEffect(() => {
    if (categoriesRes?.data) {
      dispatch(getAllCategories(categoriesRes?.data))
    }
  }, [categoriesRes])

  const handleResize = () => {
    setScreenSize(window.innerWidth)
  }

  const handleInput = (boolean) => {
    setShowSearchInput(boolean)
    setInputBtn(boolean)
  }

  const handleChange = (value) => {
    // loadQuery()
    fetch(`https://test.cybersify.tech/Eswag/public/api/products?q=${value}`)
      .then((res) => res.json())
      .then((data) => console.log(data?.data))
    // .then((json) => setSuggestions(json.data.items))
  }

  const handleClick = (item) => {
    console.log(item, 'item')
    dispatch(addCategory(item))
    router.push('/products')
  }

  const handleCart = () => {
    if (reached3rdStep) {
      router.push('/billing-address')
    } else if (reached2ndStep) {
      router.push('/shipping')
    } else {
      router.push('/cart')
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    dispatch(selectCountry(country))
  }, [country])

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

  const handleSetSubCategory = (item) => {
    dispatch(setSubCategories(allCategories[item]?.matchingValues))
    router.push('/products')
  }

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
            {/* logo icon */}
            <EthicalLogo />
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
                  <div
                    id="shop"
                    className={`${openLinks ? styles.mega_menu_open : ''} ${
                      styles.shop_menu
                    }`}
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => setOpenLinks(true)}
                    onMouseLeave={() => setOpenLinks(false)}
                  >
                    Shop
                    {/* <span>
                      <FaChevronDown fontSize={12} />
                    </span> */}
                    {allCategories && (
                      <div
                        className={styles.header_menu_wrapper}
                        style={{
                          top: getSingleProductPageRoute ? '121px' : '71px',
                        }}
                      >
                        <div className={styles.header_menu}>
                          {Object.keys(allCategories).map((item, i) => (
                            <div className={styles.mega_menu} key={i}>
                              <span
                                className={`${styles.shop_menu} ${styles.shop_menuWrap}`}
                                onClick={() => handleSetSubCategory(item)}
                              >
                                {item}
                              </span>
                              {/* <ul>
                              {Object.entries(category[item].matchingValues)
                                .slice(0, 5)
                                .map(([subCategoryId, subCategory]) => (
                                  <>
                                  <li key={subCategoryId}>
                                  {JSON.parse(subCategory)}
                                  </li>
                                  </>
                                  ))}
                                </ul> */}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              </div>
              <div className="text_with_down_icon">
                <div
                  variant="ghost"
                  className={styles.shop_menu}
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push('/about-us')}
                >
                  About
                </div>
              </div>
              <div
                variant="ghost"
                className={styles.shop_menu}
                style={{ cursor: 'pointer' }}
                onClick={() => router.push('/contact')}
              >
                Contact
              </div>
            </div>
          </div>
        </>

        <div
          className={`${styles.mobile_menu} ${
            openLinks ? styles.open_Sidebar : ''
          }`}
        >
          <div className={styles.mobile_menuwrap}>
            <ul>
              <span className={styles.menu_cross}>
                <Image
                  src={CrossIcon}
                  width={20}
                  height={20}
                  alt="Cross_Icon"
                  onClick={() => setOpenLinks(false)}
                />
              </span>
              <li onClick={() => setShowOnMobile(!showOnMobile)}>
                shop{' '}
                <span>
                  <FaChevronDown fontSize={12} />
                </span>
                <div className={styles.mobi_submenu}>
                  {showOnMobile && (
                    <ul>
                      <li>Apparel</li>
                      <li>Office & School</li>
                      <li>Plants & Seeds</li>
                      <li>Drinkware</li>
                      <li>All Swag</li>
                      <li>At Home</li>
                      <li>Tech</li>
                      <li>Other</li>
                      <li>Wellness</li>
                      <li>Bags</li>
                    </ul>
                  )}
                </div>
              </li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

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
                      width={28}
                      height={20}
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
                    {countries.map((c, i) => {
                      return (
                        <DropdownMenuRadioItem
                          value={c.country}
                          key={i}
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
                      e.preventDefault()
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
              style={{ cursor: 'pointer', position: 'relative' }}
            >
              <Image
                src={heartImg}
                width={29}
                height={29}
                alt="like"
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
                  background: '#a2d061',
                  padding: '5px',
                }}
              >
                {wishlistItems.length}
              </span>
            </div>
          )}

          <div
            className=""
            onClick={handleCart}
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
                background: '#a2d061',
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
