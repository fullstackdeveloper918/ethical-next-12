'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import downArrowImg from '../../assets/headerPics/down.svg'
import phoneImg from '../../assets/headerPics/phone.svg'
import searchImg from '../../assets/headerPics/Search.svg'
import styles from './primaryHeader.module.css'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import loginIcon from '../../assets/login-icon.svg'
import signIcon from '../../assets/headerPics/Sign-up.svg'
import { useRouter } from 'next/router'
import { Button } from '@/components/ui/button'
import downIcon from '../../assets/headerPics/down-black.svg'
import useFetch from '../../lib/useFetch'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from 'redux-setup/authSlice'

const PrimaryHeader = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [screenSize, setScreenSize] = useState(992)
  const handleResize = () => {
    setScreenSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    dispatch(setCurrentPage(router.asPath))
  }, [])

  const isLoggedIn = !!localStorage.getItem('token_swag')

  const [loadQuery, { response, loading, error }] = useFetch(`/auth/logout`, {
    method: 'get',
  })

  const page = useSelector((state) => state.auth.currentPage)
  const logout = () => {
    loadQuery()
    if (response) {
    }
    if (error) {
    }
    localStorage.clear()
    router.push('/login')
  }

  return (
    <div className={`${styles.top_bar} ${styles.container}`}>
      {' '}
      <div className={styles.primary_header_container}>
        <div className={styles.container_left}>
          <div className={styles.offer_container}>
            <div className="">
              <Image src={phoneImg} alt="down arrow" width={16} height={15} />
            </div>
            <div className="" style={{ cursor: 'pointer' }}>
              1-877-256-6998
            </div>
          </div>
          <div className={styles.offer_container}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={styles.tap_annument}
                  style={{ cursor: 'pointer' }}
                >
                  What we Offer
                  <span>
                    <Image
                      src={downArrowImg}
                      alt="down arrow"
                      width={9}
                      height={9}
                    />
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className={styles.annument_dropdown}>
                <DropdownMenuRadioItem
                  value="bottom"
                  className={styles.shop_submenu}
                  onClick={() => router.push('/bags')}
                >
                  BAGS
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="right"
                  className={styles.shop_submenu}
                  onClick={() => router.push('/products')}
                >
                  ALL Swag
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="right"
                  className={styles.shop_submenu}
                  s
                  onClick={() => router.push('/wellness')}
                >
                  WELLNESS
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="right"
                  className={styles.shop_submenu}
                  onClick={() => router.push('/plants-seeds')}
                >
                  Plants & Seeds
                </DropdownMenuRadioItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className={styles.container_right}>
          <div className={styles.search_container}>
            <Image src={searchImg} alt="down arrow" width={16} height={16} />

            <input
              type="text"
              placeholder="Search for product..."
              className={styles.cursor_pointer}
            />
          </div>
          {isLoggedIn ? (
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={styles.shop_menu}
                    style={{ cursor: 'pointer' }}
                  >
                    Shop
                    {/* <span>
                      <Image src={downIcon} width={8} height={8} alt="search" />
                    </span> */}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={styles.header_menu}>
                  <DropdownMenuRadioItem
                    value="top"
                    className={styles.shop_submenu}
                  >
                    DashBoard
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value="bottom"
                    className={styles.shop_submenu}
                  >
                    Settings
                  </DropdownMenuRadioItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <button onClick={logout} style={{ cursor: 'pointer' }}>
                logout
              </button>
            </div>
          ) : (
            <>
              <div className="" onClick={() => router.push('/login')}>
                {screenSize > 767 && (
                  <button
                    className={styles.top_barbtn}
                    style={{ cursor: 'pointer' }}
                  >
                    Login
                  </button>
                )}
                {screenSize <= 767 && (
                  <span className={styles.cursor_pointer}>
                    <Image src={loginIcon} alt="login" width={13} height={13} />
                  </span>
                )}
              </div>

              <div
                className={styles.cursor_pointer}
                onClick={() => router.push('/register')}
              >
                {screenSize > 991 && (
                  <button
                    className={styles.top_barbtn}
                    style={{ cursor: 'pointer' }}
                  >
                    SignUp
                  </button>
                )}
                {screenSize <= 991 && (
                  <span>
                    <button style={{ cursor: 'pointer' }}>
                      <Image
                        src={signIcon}
                        alt="Register"
                        width={18}
                        height={18}
                      />
                    </button>
                  </span>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default PrimaryHeader
