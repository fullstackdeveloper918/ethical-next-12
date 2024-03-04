import React, { useEffect, useState } from 'react'
import Styles from './QuotationSubmissionHeader.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  setreached2ndStep,
  setreached3rdStep,
} from '../../redux-setup/cartSlice'
import { useRouter } from 'next/router'

const QuotationSubmissionHeader = () => {
  const dispatch = useDispatch();



  const reached2ndStep = useSelector((state) => state.cart.reached2ndStep)
  const reached3rdStep = useSelector((state) => state.cart.reached3rdStep)
  const step1State = useSelector((state) => state.cart.step1State)
  const step2State = useSelector((state) => state.cart.step2State)

  useEffect(() => {
    if (step1State?.selectedDate) {
      dispatch(setreached2ndStep(true))
    } else if (!step1State?.selectedDate) {
      dispatch(setreached2ndStep(false))
    } 
  }, [step1State])

  useEffect(() => {
    if (step2State?.country) {
      dispatch(setreached3rdStep(true))
    } else if (!step2State?.country) {
      dispatch(setreached3rdStep(false))
    }
  }, [step2State])

  console.log(reached2ndStep, 'reached2ndStep')

  return (
    <>
      <div className={Styles.QuotationSubmissionHeader}>
        <h4 className={Styles.heading}>Home {'>'} Submit Quotation Request</h4>
        <div className={Styles.horizontal_line}>
          <div className={Styles.stepCount}>
            <span className={Styles.active}>1</span>
            <span className={reached2ndStep ? Styles.active : null}>2</span>
            {/* <span>2</span> */}
            {/* <span className={reached3rdStep ? Styles.active : null}>3</span> */}
            <span>3</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuotationSubmissionHeader
