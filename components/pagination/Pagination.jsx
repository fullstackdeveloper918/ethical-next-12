import React from 'react'
import Styles from './pagination.module.css'
import { MdArrowBackIos } from 'react-icons/md'
import { IoChevronForwardSharp } from 'react-icons/io5'

const Pagination = () => {
  return (
    <>
      <div className={Styles.pagination_container}>
        <div className={Styles.pagination_content}>
          <MdArrowBackIos cursor="pointer" />
          <span>Previous</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>Next</span>
          <IoChevronForwardSharp cursor="pointer" />
        </div>
      </div>
    </>
  )
}

export default Pagination
