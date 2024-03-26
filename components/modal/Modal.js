import React, { useEffect, useState } from 'react'
import Style from './Modal.module.css'
import { useDispatch, useSelector } from 'react-redux'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { setSwiftSwag } from 'redux-setup/FiltersSlice'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const Modal = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [selectedOption, setSelectedOption] = useState('flexible')
  const [minDate, setMinDate] = useState(new Date())
  const [value, onChange] = useState(null)
  const [isOpenCalender, setIsOpenCalender] = useState(false)
  let swiftSwag = useSelector((state) => state.filter.swiftSwag)
  useEffect(() => {
    if (swiftSwag === '') {
      setIsOpenModal(true)
    }
  }, [])
  useEffect(() => {
    let minSelectableDate = new Date()
    minSelectableDate.setDate(minSelectableDate.getDate() + 10)
    setMinDate(minSelectableDate)
  }, [selectedOption])

  const handleCloseModal = () => {
    if (value === null) {
      toast.error('Please select date from calender')
    } else {
      dispatch(setSwiftSwag(true))
      setIsOpenModal(false)
      router.push('/category/Apparel')
    }
  }
  return (
    <>
      {isOpenModal && !isOpenCalender && (
        <div className={Style.overlay}>
          <div className={Style.modal_content}>
            <span className={Style.close} onClick={() => setIsOpenModal(false)}>
              &times;
            </span>
            <div className={Style.flex_calender}>
              <div
                className={Style.Calendar_content_wrapper}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'baseline',
                }}
              >
                {!isOpenCalender && (
                  <>
                    <h2>Do you have a strict deadline for delivery?</h2>
                    <p>
                      Swift Swag is our new service designed to serve your Swag
                      needs with quick delivery! The production time for a Bulk
                      Order is on average 20 business days, but with Swift Swag
                      we can produce and deliver your order in 10 business days!
                    </p>
                    <div className={Style.label_field}>
                      <div>
                        <button
                          type="button"
                          className={Style.Popup_btnone}
                          onClick={() => {
                            dispatch(setSwiftSwag(false))
                            setIsOpenModal(false)
                            router.push('/category/Apparel')
                          }}
                        >
                          No, I have a flexible timeline
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className={Style.Popup_btntwo}
                          onClick={() => {
                            setIsOpenCalender(true)
                          }}
                        >
                          Yes I have tight timeline
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {isOpenModal && isOpenCalender && (
        <div className={Style.overlay}>
          <div className={Style.modal_content}>
            <span className={Style.close} onClick={() => setIsOpenModal(false)}>
              &times;
            </span>
            <div className={Style.flex_calender}>
              {isOpenCalender && (
                <div className={Style.Calendar_wrapper}>
                  <h3>Please select your requested delivery date</h3>
                  <Calendar
                    onChange={onChange}
                    value={value}
                    minDate={minDate}
                  />
                  <p>
                    *Swift Swag we can produce and deliver your order in 10
                    business days!
                  </p>
                  <div className={Style.label_field}>
                    <button
                      type="button"
                      className={Style.Popup_btncalender}
                      onClick={() => setIsOpenCalender(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className={Style.Popup_btncalenderTwo}
                      onClick={handleCloseModal}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
