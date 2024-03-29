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
import { setCurrentPage, setuserId } from 'redux-setup/authSlice'
import { toast } from 'react-toastify'
import SaveChangesModal from '@components/modal/saveChangesModal'

const PrimaryHeader = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [screenSize, setScreenSize] = useState(992)
  const handleResize = () => {
    setScreenSize(window.innerWidth)
  }
  const [isSaveChangesModalOpen, setIsSaveChangesModalOpen] = useState(false)
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

    dispatch(setuserId(null))
    toast.success('Logged out successully')
    router.push('/login')
  }

  const handleLogin = () => {
    if (router.route === '/shipping' || router.route === '/cart') {
      setIsSaveChangesModalOpen(true)
    } else {
      router.push('/login')
    }
  }

  return (
    <>
      <div className={`${styles.top_bar} ${styles.container}`}>
        {' '}
        <div className={styles.primary_header_container}>
          <div className={styles.container_left}>
            <div className={styles.offer_container}>
              <div className="">
                <Image
                  src={phoneImg}
                  alt="down arrow"
                  width={16}
                  height={15}
                  className={styles.arrowDown}
                />
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
                    onClick={() => router.push('/services')}
                  >
                    What we Offer
                    <span></span>
                  </Button>
                </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </div>
          <div className={styles.container_right}>
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
                  {/* <DropdownMenuContent className={styles.header_menu}>
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
                  </DropdownMenuContent> */}
                </DropdownMenu>
                <button onClick={logout} style={{ cursor: 'pointer' }}>
                  logout
                </button>
              </div>
            ) : (
              <>
                <div className={styles.login_div} onClick={handleLogin}>
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
                      <Image
                        src={loginIcon}
                        alt="login"
                        width={13}
                        height={13}
                      />
                    </span>
                  )}
                </div>

                <div
                  className={`${styles.cursor_pointer} ${styles.login_div}`}
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
      {isSaveChangesModalOpen && (
        <div>
          <SaveChangesModal
            setIsSaveChangesModalOpen={setIsSaveChangesModalOpen}
            isSaveChangesModalOpen={isSaveChangesModalOpen}
            pageRoute={'/login'}
          />
        </div>
      )}
    </>
  )
}

export default PrimaryHeader
