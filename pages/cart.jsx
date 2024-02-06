import React, { useEffect, useState } from 'react'
import PrimaryHeader from '../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../components/secondary-header/SecondaryHeader'
import Footer from '../components/footer/Footer'
import Cart from '../components/cart/Cart'
import EstimateCard from '../components/EstimateCard/EstimateCard'
import QuotationSubmissionHeader from '../components/QuotationSubmissionHeader/QuotationSubmissionHeader'
import ClientTypeSelector from '../components/ClientTypeSelector/ClientTypeSelector'
import Styles from '../components/cart/Cart.module.css'
import Button from '../components/Button/Button'

const cart = () => {
  const token = localStorage.getItem('token_swag')
  const [selectedOption, setSelectedOption] = useState('Existing_client')
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }
  //New_client //Existing_client

  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <section className={Styles.cart_section}>
        <div>
          <QuotationSubmissionHeader />
          {!token && (
            <ClientTypeSelector
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              handleOptionChange={handleOptionChange}
            />
          )}
          <Cart token={token} selectedOption={selectedOption} />
          <Button />
        </div>
        <EstimateCard />
      </section>
      <Footer />
    </>
  )
}

export default cart
