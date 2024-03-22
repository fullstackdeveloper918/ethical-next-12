import React from 'react'
import Styles from '../../admin/Navbar/Navbar.module.css'
import images from '../../../constants/images'
import Image from 'next/image'
import { BsFiletypeCsv } from 'react-icons/bs'
import { useRouter } from 'next/router'

const Navbar = ({ data, thumbnail }) => {
  const router = useRouter()

  return (
    <>
      <div className={Styles.navbar_container}>
        <h2>{data}</h2>
        <div className={Styles.icons}>
          {router.asPath === '/super-admin/customer' && (
            <>
              <button className={Styles.button}>
                Add New by CSV <BsFiletypeCsv />
              </button>
              <button className={Styles.button}>Add New</button>
            </>
          )}
          {router.asPath === '/super-admin/invoice' && (
            <>
              <button className={Styles.button}>Add Invoice</button>
            </>
          )}
          {router.asPath === '/super-admin/blog' && (
            <>
              <button className={Styles.button}>Add Post</button>
            </>
          )}
          {router.asPath === '/super-admin/orders' && (
            <>
              <button className={Styles.button}>Add New</button>
            </>
          )}
          {router.asPath === '/super-admin/pages' && (
            <>
              <button className={Styles.button}>Add Page</button>
            </>
          )}
          {router.asPath === '/super-admin/categories' && (
            <>
              <button className={Styles.button}>Add New</button>
            </>
          )}
          {(router.asPath === '/super-admin/users' ||
            router.asPath === '/super-admin/add-users' ||
            router.asPath === '/super-admin/add-roles') && (
            <>
              <button className={Styles.button}>Upload CSV</button>
              <button className={Styles.button}>Add New Print</button>
              <button className={Styles.button}>Print</button>
            </>
          )}
          <span className={Styles.icon}>
            <Image
              src={images.Bell_Icon}
              width={20}
              height={20}
              alt="bell_icon"
            />
          </span>
          {thumbnail && (
            <>
              <span className={Styles.icon}>
                <Image src={thumbnail} width={20} height={20} alt="user_icon" />
              </span>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
