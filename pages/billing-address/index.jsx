import React, { useEffect } from 'react'
import { GrEdit } from 'react-icons/gr'
import { useRouter } from 'next/router'

import PrimaryHeader from '../../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../../components/secondary-header/SecondaryHeader'
import Button from '../../components/Button/Button'
import EstimateCard from '../../components/EstimateCard/EstimateCard'
import Footer from '../../components/footer/Footer'
import ReviewEstimate from '../../components/ReviewEstimate/ReviewEstimate'
import Styles from '../../components/cart/Cart.module.css'
import QuotationSubmissionHeader from '../../components/QuotationSubmissionHeader/QuotationSubmissionHeader'
import EmptyContainer from '../../components/EmptyContainer/EmptyContainer'
import { useSelector } from 'react-redux'
import SwagOrderForm from '../../components/SwagOrderForm/SwagOrderForm'
const BillingAddress = () => {
  const router = useRouter()
  const step2State = useSelector((state) => state.cart.step2State)

  console.log(step2State, 'step2Statestep2State')

  const cartItemsLength = useSelector((state) => state.cart.cartItems.length)

  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <section className={Styles.cart_section}>
        {cartItemsLength > 0 ? (
          <>
            <div className={Styles.widthFull}>
              <QuotationSubmissionHeader />
              <ReviewEstimate />
              <div className={Styles.cart_left_FAQ}>
                <h3>Other Info</h3>
                <SwagOrderForm />
              </div>

              {/* Shipping address  css writen in cart module*/}
              <div className={Styles.shipping_address_container}>
                <p>Shipping Address</p>
                <div className={Styles.content}>
                  <div>
                    <p>{step2State.apartment}</p>
                    <p>
                      {step2State.address} {step2State.city} ,
                      {step2State.number} Zip: {step2State.pin} ,
                      {step2State.country}
                    </p>
                  </div>
                  <div className={Styles.buttonContent}>
                    <button
                      type="button"
                      onClick={() => router.push('/shipping')}
                    >
                      <GrEdit />
                      Edit
                    </button>
                  </div>
                </div>
                <div className={Styles.bottom_content}>
                  <p>
                    If everything looks good, go ahead and click submit mockup
                    request!{' '}
                  </p>
                </div>
              </div>
              <Button hideContinue />
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

export default BillingAddress
