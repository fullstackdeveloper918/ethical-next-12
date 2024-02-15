import React from 'react'
import Styles from './QuotationSubmissionHeader.module.css'

const QuotationSubmissionHeader = () => {
  return (
    <>
   
      <div className={Styles.QuotationSubmissionHeader}>
        <h4 className={Styles.heading}>Home {'>'} Submit Quotation Request</h4>
        <div className={Styles.horizontal_line}>
          <div className={Styles.stepCount}>
            <span className={Styles.active}>1</span>
            <span>2</span>
            <span>3</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuotationSubmissionHeader
