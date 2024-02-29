import React from 'react'
import PrimaryHeader from '../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../components/secondary-header/SecondaryHeader'
import Footer from '../components/footer/Footer'
import Styles from '../styles/common.module.css'
import EmptyContainer from '../components/EmptyContainer/EmptyContainer'

const wishlist = () => {
  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <div className={Styles.wishlistContainer}>
        <EmptyContainer />
      </div>

      <Footer />
    </>
  )
}

export default wishlist
