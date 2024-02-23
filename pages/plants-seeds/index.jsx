import React from 'react'
import PrimaryHeader from '../../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../../components/secondary-header/SecondaryHeader'
import Footer from '../../components/footer/Footer'
import Styles from '../../styles/common.module.css'

const Plants = () => {
  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <div className="container">
        <h1 className={Styles.common_emptyProducts}>
          No Plants & Seeds Available
        </h1>
      </div>

      <Footer />
    </>
  )
}

export default Plants
