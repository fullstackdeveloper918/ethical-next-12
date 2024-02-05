import React from 'react'
import styles from './leftbar.module.css'
import homeImg from '../../../assets/homeIcon.svg'
import Image from 'next/image'
const sideMenuArr = [
  {
    id: 1,
    imageUrl: homeImg,
    href: '/home',
    title: 'Dashboard',
  },
  {
    id: 2,
    imageUrl: homeImg,
    href: '/home',
    title: 'Dashboard',
  },
  {
    id: 3,
    imageUrl: homeImg,
    href: '/home',
    title: 'Dashboard',
  },
]

const LeftSideBar = () => {
  return (
    <div className={styles.container}>
      {sideMenuArr.map((item) => (
        <div className={styles.single_item} key={item.id}>
          <Image src={item.imageUrl} height={30} width={30} alt="home" />
          {item.title}
        </div>
      ))}
    </div>
  )
}

export default LeftSideBar
