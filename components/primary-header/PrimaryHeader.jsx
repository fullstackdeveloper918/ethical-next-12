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
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import loginIcon from '../../assets/login-icon.svg'
import signIcon from '../../assets/headerPics/Sign-up.svg'
import { usePathname, useRouter } from 'next/router'
import { Button } from '@/components/ui/button'

const PrimaryHeader = () => {
  const [position, setPosition] = React.useState('bottom')

  const router = useRouter()
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

  return (
    <div className={`${styles.top_bar} ${styles.container}`}>
      {' '}
      <div className={styles.primary_header_container}>
        <div className={styles.container_left}>
          <div className={styles.offer_container}>
            <div className="">
              <Image src={phoneImg} alt="down arrow" width={16} height={15} />
            </div>
            <div className="">1-877-256-6998</div>
          </div>
          <div className={styles.offer_container}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={styles.tap_annument}>
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
          <div className="" onClick={() => router.push('/login')}>
            {screenSize > 767 && <button className={styles.top_barbtn}>Login</button>}
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
            {screenSize > 991 && <button className={styles.top_barbtn}>SignUp</button>}
            {screenSize <= 991 && (
              <span>
                <button>
                  <Image src={signIcon} alt="Register" width={18} height={18} />
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrimaryHeader
