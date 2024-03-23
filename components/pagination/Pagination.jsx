import React, { useEffect, useState } from 'react'
import Styles from './pagination.module.css'
import { MdArrowBackIos } from 'react-icons/md'
import { IoChevronForwardSharp } from 'react-icons/io5'

const Pagination = ({
  products,
  page,
  setPage,
  paginatedProducts,
  setPaginatedProducts,
}) => {
  const [arr, setArr] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  let itemsPerPage = 10
  const paginate = () => {
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    let paginated = products.slice(startIndex, endIndex)
    setPaginatedProducts(paginated)
  }

  const handlePageChange = (val) => {
    if (val === 'prev') {
      page != 1 && setPage(page - 1)
    } else if (val === 'next') {
      page != totalPages && setPage(page + 1)
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

  useEffect(() => {
    const pages = Math.ceil(products.length / itemsPerPage)
    setTotalPages(pages)
  }, [products, itemsPerPage])

  useEffect(() => {
    paginate()
  }, [totalPages, products, page, itemsPerPage])

  return (
    <>
      <div className={Styles.pagination_container}>
        <div className={Styles.pagination_content}>
          <button
            onClick={() => handlePageChange('prev')}
            disabled={page === 1}
            style={{
              opacity: page === 1 ? '0.7' : '1',
              cursor: page === 1 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
            }}
          >
            <MdArrowBackIos cursor="pointer" />
            Previous
          </button>

          {arr.map((item, i) => (
            <button
              onClick={() => setPage(i + 1)}
              className={page === i + 1 ? Styles.current_page : ''}
              key={i}
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => handlePageChange('next')}
            disabled={page === totalPages}
            style={{
              opacity: page == totalPages ? '0.7' : '1',
              cursor: page == totalPages ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
            }}
          >
            Next
            <IoChevronForwardSharp cursor="pointer" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Pagination
