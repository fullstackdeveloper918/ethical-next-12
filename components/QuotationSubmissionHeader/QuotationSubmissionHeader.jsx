import React from 'react'
import Styles from './QuotationSubmissionHeader.module.css'

const QuotationSubmissionHeader = () => {
  console.log('QuotationSubmissionHeader component is called')
  return (
    <>
      <div className={Styles.QuotationSubmissionHeader}>
        <h4 className={Styles.heading}>Home {'>'} Submit Quotation Request</h4>
        <div className={Styles.horizontal_line}></div>
      </div>
    </>
  )
}

export default QuotationSubmissionHeader
