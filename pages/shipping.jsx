import React from 'react'
import PrimaryHeader from '../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../components/secondary-header/SecondaryHeader'
import Footer from '../components/footer/Footer'
import EstimateCard from '../components/EstimateCard/EstimateCard'

const shipping = () => {
  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <EstimateCard />
      <Footer />
    </>
  )
}

export default shipping
