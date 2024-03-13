import React, { useEffect, useRef, useState } from 'react'
import Style from './Modal.module.css'
import { setSwiftSwagTime } from 'redux-setup/randomSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const Modal = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const dateInputRef = useRef()

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [selectedOption, setSelectedOption] = useState('flexible')
  console.log(selectedOption, 'selectedOption')

  useEffect(() => {
    // Trigger the click event on the date input to open the date picker
    if (dateInputRef.current) {
      dateInputRef.current.focus()
    }
  }, [])
  const handleSubmit = () => {
    dispatch(setSwiftSwagTime(selectedOption))
    // if (selectedOption === 'flexible') {
    router.push('/products')
    // }
  }
  let swiftSwag = useSelector((state) => state.random.swiftSwag)
  console.log(swiftSwag, 'swiftSwag from redux')
  useEffect(() => {
    if (swiftSwag === '') {
      setIsOpenModal(true)
    }
  }, [])

  const getTodayDate = () => {
    const today = new Date()
    const year = today.getFullYear().toString()
    const month = (today.getMonth() + 1).toString().padStart(2, '0')

    const day = today.getDate().toString().padStart(2, '0')
    return `${year + '-' + month + '-' + day}`
  }
  const getFutureDate = (daysToAdd = 10) => {
    const today = new Date()
    const futureDate = new Date(today.setDate(today.getDate() + daysToAdd))

    const year = futureDate.getFullYear().toString()
    const month = (futureDate.getMonth() + 1).toString().padStart(2, '0')
    const day = futureDate.getDate().toString().padStart(2, '0')

    return `${year}-${month}-${day}`
  }

  return (
    <>
      {isOpenModal && (
        <div className={Style.overlay}>
          <div className={Style.modal_content}>
            <span className={Style.close} onClick={() => setIsOpenModal(false)}>
              &times;
            </span>
            <div
              style={{
                display: 'flex',
                // alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <input
                  ref={dateInputRef}
                  type="date"
                  id="selectedDate"
                  name="selectedDate"
                  autocomplete="off"
                  min={
                    selectedOption === 'flexible'
                      ? getFutureDate()
                      : getTodayDate()
                  }
                  // disabled={isBilling}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <h2>When do you want this order delivered?</h2>
                <label>
                  <input
                    type="radio"
                    value="within10Days"
                    checked={selectedOption === 'within10Days'}
                    onChange={(event) => setSelectedOption(event.target.value)}
                  />
                  I want This order to e delivered within 10 days
                </label>
                <label>
                  <input
                    type="radio"
                    value="flexible"
                    checked={selectedOption === 'flexible'}
                    onChange={(event) => setSelectedOption(event.target.value)}
                  />
                  I am flexible with order delivery.
                </label>
                <button type="button" onClick={handleSubmit}>
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
