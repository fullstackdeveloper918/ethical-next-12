import React from 'react'
import PrimaryHeader from '../../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../../components/secondary-header/SecondaryHeader'
import QuotationSubmissionHeader from '../../components/QuotationSubmissionHeader/QuotationSubmissionHeader'
import Button from '../../components/Button/Button'
import EstimateCard from '../../components/EstimateCard/EstimateCard'
import Footer from '../../components/footer/Footer'
import Styles from '../../components/cart/Cart.module.css'

const BillingAddress = () => {
  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <section className={Styles.cart_section}>
        <div className={Styles.widthFull}>
          <QuotationSubmissionHeader />
          <Button />
        </div>
        <EstimateCard />
      </section>
      <Footer />
    </>
  )
}

export default BillingAddress
