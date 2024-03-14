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
  const [value, onChange] = useState(new Date())
  const handleSubmit = () => {
    dispatch(setSwiftSwagTime(selectedOption))

    setIsOpenModal(false)
  }
  let swiftSwag = useSelector((state) => state.random.swiftSwag)
  useEffect(() => {
    if (swiftSwag === '') {
      setIsOpenModal(true)
    }
  }, [])

  let minSelectableDate = new Date()
  minSelectableDate.setDate(minSelectableDate.getDate() + 10)

  useEffect(() => {
    let minSelectableDate = new Date()
    if (selectedOption === 'within10Days') {
      let minSelectableDate = new Date()
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
                display: 'flex',
                gap: '30px',
              }}
              className={Style.flex_calender}
            >
              <div className={Style.Calendar_wrapper}>
                <Calendar onChange={onChange} value={value} minDate={minDate} />
              </div>
              <div
                className={Style.Calendar_content_wrapper}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'baseline',
                }}
              >
                <h2>When do you want this order delivered?</h2>
                <div className={Style.label_field}>
                  <div>
                    <input
                      type="radio"
                      value="within10Days"
                      checked={selectedOption === 'within10Days'}
                      onChange={(event) =>
                        setSelectedOption(event.target.value)
                      }
                    />
                    <label>
                      I want This order to e delivered within 10 days{' '}
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="flexible"
                      checked={selectedOption === 'flexible'}
                      onChange={(event) =>
                        setSelectedOption(event.target.value)
                      }
                    />
                    <label>I am flexible with order delivery.</label>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className={Style.submit_btn}
                >
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
