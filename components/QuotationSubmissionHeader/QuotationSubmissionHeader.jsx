import React, { useState } from 'react'
import Styles from './QuotationSubmissionHeader.module.css'
import { useSelector } from 'react-redux'

const QuotationSubmissionHeader = () => {
  const reached2ndStep = useSelector((state) => state.cart.reached2ndStep)
  const reached3rdStep = useSelector((state) => state.cart.reached3rdStep)
  console.log(reached2ndStep, 'reached2ndStep')
  return (
    <>
      <div className={Styles.QuotationSubmissionHeader}>
        <h4 className={Styles.heading}>Home {'>'} Submit Quotation Request</h4>
        <div className={Styles.horizontal_line}>
          <div className={Styles.stepCount}>
            <span className={Styles.active}>1</span>
            <span className={reached2ndStep ? Styles.active : null}>2</span>
            <span className={reached3rdStep ? Styles.active : null}>3</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuotationSubmissionHeader
