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

    // setIsOpenModal(false)
  }
  useEffect(() => {
    if (value) {
      setIsOpenModal(false)
    }
  }, [value])
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
      {isOpenModal && (
        <div className={Style.overlay}>
          <div className={Style.modal_content}>
            <span className={Style.close} onClick={() => setIsOpenModal(false)}>
              &times;
            </span>
            <div
              style={{
                // display: 'flex',
                // gap: '30px',
              }}
              className={Style.flex_calender}
            >
              
              {isOpenCalender && (
                <div className={Style.Calendar_wrapper}>
                  <h3>Please select your requested delivery date</h3>
                  <Calendar
                    onChange={onChange}
                    value={value}
                    minDate={minDate}
                  />
                  <p>*Swift Swag we can produce and deliver your order in 10 business days!</p>
                  <div className={Style.label_field}>
                    <button
                      type="button"
                    
                      className={Style.Popup_btncalender}
                    >
                    Cancel
                    </button>
                    <button
                      type="button"
                    
                      className={Style.Popup_btncalenderTwo}
                    >
                     Continue
                    </button></div>
                </div>
              )}
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
                    <p>Swift Swag is our new service designed to serve your Swag needs with quick delivery! The production time for a Bulk Order is on average 20 business days, but with Swift Swag we can produce and deliver your order in 10 business days!</p>
                    <div className={Style.label_field}>
                      <div>
                        {/* <input
                          type="radio"
                          value="within10Days"
                          checked={selectedOption === 'within10Days'}
                          onChange={(event) =>
                            setSelectedOption(event.target.value)
                          }
                        /> */}
                        
                        <button
                      type="button"
                    
                      className={Style.Popup_btnone}
                    >
                     No, I have flexible with timeline
                    </button>
                        {/* <label>I need my order in a hurry (10-20 days)</label> */}
                      </div>
                      <div>
                        {/* <input
                          type="radio"
                          value="flexible"
                          checked={selectedOption === 'flexible'}
                          onChange={(event) =>
                            setSelectedOption(event.target.value)
                          }
                        />
                        <label>I'm flexible with my order delivery date.</label> */}
                      
                        <button
                      type="button"
                      className={Style.Popup_btntwo}
                      
                    >
                     Yes I have tight timeline
                    </button>

                      </div>
                    </div>
                    {/* <button
                      type="button"
                      onClick={handleSubmit}
                      className={Style.submit_btn}
                    >
                      submit
                    </button> */}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
