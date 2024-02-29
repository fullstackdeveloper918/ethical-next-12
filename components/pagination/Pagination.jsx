import React, { useEffect, useState } from 'react'
import Styles from './pagination.module.css'
import { MdArrowBackIos } from 'react-icons/md'
import { IoChevronForwardSharp } from 'react-icons/io5'

const Pagination = ({
  page,
  totalData,
  totalPages,
  setCurrentPage,
  loading,
}) => {
  const [arr, setArr] = useState([])

  const handlePageChange = (val) => {
    if (val === 'prev') {
      page != 1 && setCurrentPage((prev) => prev - 1)
    } else if (val === 'next') {
      page != totalPages && setCurrentPage((prev) => prev + 1)
    }
  }

  const noOfPages = () => {
    let a = []
    for (let i = 1; i <= totalPages; i++) {
      a.push(i)
    }
    setArr(a)
  }

  useEffect(() => {
    if (totalPages) {
      noOfPages()
    }
  }, [totalPages])

  return (
    <>
      {/* {totalData && totalData.length > 10 ? ( */}
      <div className={Styles.pagination_container}>
        <div className={Styles.pagination_content}>
          <MdArrowBackIos cursor="pointer" />
          <button
            onClick={() => handlePageChange('prev')}
            disabled={page == 1 || loading}
          >
            Previous
          </button>

          {arr.map((item, i) => (
            <button
              onClick={() => setCurrentPage(i + 1)}
              disabled={loading}
              className={page === i + 1 ? Styles.current_page : ''}
              key={i}
            >
              {item}
            </button>
          ))}
          <span onClick={() => handlePageChange('next')} disabled={loading}>
            Next
          </span>
          <IoChevronForwardSharp cursor="pointer" />
        </div>
      </div>
      {/* ) : null} */}
    </>
  )
}

export default Pagination
