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
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import EmptyContainer from '../components/EmptyContainer/EmptyContainer'

const cart = () => {
  const router = useRouter()
  const token = localStorage.getItem('token_swag')
  const [selectedOption, setSelectedOption] = useState('Existing_client')
  const [showEstimateCart, setShowEstimateCart] = useState(false)
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }
  const [showLoginComponent, setShowLoginComponent] = useState(true)
  useEffect(() => {
    setShowEstimateCart(false)
  }, [])

  useEffect(() => {
    if (token || showEstimateCart) {
      setShowLoginComponent(false)
    }
  }, [showEstimateCart])

  const cartItemsLength = useSelector((state) => state.cart.cartItems.length)

  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <section className={Styles.cart_section}>
        {cartItemsLength > 0 ? (
          <>
            <div>
              <QuotationSubmissionHeader />
              {showLoginComponent && (
                <ClientTypeSelector
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  handleOptionChange={handleOptionChange}
                />
              )}
              <Cart
                token={token}
                selectedOption={selectedOption}
                setShowEstimateCart={setShowEstimateCart}
                showLoginComponent={showLoginComponent}
              />
            </div>
            <EstimateCard />
          </>
        ) : (
          <>
            <div className={Styles.empty_card_container}>
              <EmptyContainer />
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  )
}

export default cart
