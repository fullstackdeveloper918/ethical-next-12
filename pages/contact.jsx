import React from 'react'
import PrimaryHeader from '../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../components/secondary-header/SecondaryHeader'
import Footer from '../components/footer/Footer'
import Styles from './../styles/Contact.module.css'

const contact = () => {
  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <div className={Styles.Contact_container}>
        <div className={Styles.left_Section}>hell</div>
        <div className={Styles.right_Section}>right</div>
      </div>
      <Footer />
    </>
  )
}

export default contact
