import PrimaryHeader from '../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../components/secondary-header/SecondaryHeader'
import Footer from '../components/footer/Footer'
import EstimateCard from '../components/EstimateCard/EstimateCard'
import QuotationSubmissionHeader from '../components/QuotationSubmissionHeader/QuotationSubmissionHeader'
import Styles from '../components/cart/Cart.module.css'
import Button from '../components/Button/Button'
import Shipping from '../components/Shipping/Shipping'
const shipping = () => {
  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <section className={Styles.cart_section}>
        <div className={Styles.widthFull}>
          <QuotationSubmissionHeader />
          <Shipping />
        </div>
        <EstimateCard />
      </section>
      <Footer />
    </>
  )
}

export default shipping
