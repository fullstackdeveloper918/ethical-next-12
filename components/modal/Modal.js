import React, { useEffect, useRef, useState } from 'react'
import Style from './Modal.module.css'
import { setSwiftSwagTime } from 'redux-setup/randomSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
const Modal = () => {
  const dispatch = useDispatch()

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [selectedOption, setSelectedOption] = useState('flexible')
  const [minDate, setMinDate] = useState(new Date())
  const [value, onChange] = useState(null)
  const [isOpenCalender, setIsOpenCalender] = useState(false)
  const handleSubmit = () => {
    dispatch(setSwiftSwagTime(selectedOption))
    if (selectedOption === 'within10Days') {
      setIsOpenCalender(true)
    } else {
      setIsOpenModal(false)
    }
  }

  let swiftSwag = useSelector((state) => state.random.swiftSwag)
  useEffect(() => {
    if (swiftSwag === '') {
      setIsOpenModal(true)
    }
  }, [])
  useEffect(() => {
    let minSelectableDate = new Date()
    if (selectedOption === 'within10Days') {
    } else if (selectedOption === 'flexible') {
      minSelectableDate.setDate(minSelectableDate.getDate() + 10)
    }
    setMinDate(minSelectableDate)
  }, [selectedOption])
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
                            setSelectedOption('flexible')
                            dispatch(setSwiftSwagTime('flexible'))
                            setIsOpenModal(false)
                          }}
                        >
                          No, I have flexible with timeline
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className={Style.Popup_btntwo}
                          onClick={() => {
                            setSelectedOption('within10Days')
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
                    <button type="button" className={Style.Popup_btncalender}>
                      Cancel
                    </button>
                    <button
                      type="button"
                      className={Style.Popup_btncalenderTwo}
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
