import PrimaryHeader from '../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../components/secondary-header/SecondaryHeader'
import Footer from '../components/footer/Footer'
import EstimateCard from '../components/EstimateCard/EstimateCard'
import Styles from '../components/cart/Cart.module.css'
import Shipping from '../components/Shipping/Shipping'
import QuotationSubmissionHeader from '../components/QuotationSubmissionHeader/QuotationSubmissionHeader'
import { useSelector } from 'react-redux'
import EmptyContainer from '../components/EmptyContainer/EmptyContainer'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const shipping = () => {
  const router = useRouter()

  const cartItemsLength = useSelector((state) => state.cart.cartItems.length)
  const reached2ndStep = useSelector((state) => state.cart.reached2ndStep)
  useEffect(() => {
    if (!reached2ndStep) {
      router.push('/products')
    }
  }, [reached2ndStep])

  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <section className={Styles.cart_section}>
        {/* {cartItemsLength > 0 ? ( */}
        <>
          <div className={Styles.widthFull}>
            <QuotationSubmissionHeader />
            <Shipping />
          </div>
          <EstimateCard />
        </>
        {/* ) : (
          <>
            <div className={Styles.empty_card_container}>
              <EmptyContainer />
            </div>
          </>
        )} */}
      </section>
      <Footer />
    </>
  )
}

export default shipping
