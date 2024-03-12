import { useState } from 'react'

const Modal = ({ setShowModal }) => {
  const [radioState, setRadioState] = useState('flexible')
  const handleChange = (e) => {
    const { name, value } = e.target
    console.log({ name, value })
    setRadioState(value)
  }
  return (
    <div
      className=""
      style={{
        height: '300px',
        width: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="" style={{ flexDirection: 'column' }}>
        {/* <div className="">When do youwant the order?</div> */}
        <div className="">When do you want the order?</div>

        <input
          type="radio"
          id="within10days"
          name="time"
          value="within10days"
          onChange={handleChange}
          checked={radioState === 'within10days'}
        />
        <label for="within10days">Within 10 days?</label>
        <br />
        <input
          type="radio"
          id="flexible"
          name="time"
          value="flexible"
          onChange={handleChange}
          checked={radioState === 'flexible'}
        />
        <label for="flexible">I am flexible with timings</label>
        <button className="" onClick={() => setShowModal(false)}>
          {' '}
          submit
        </button>
      </div>
    </div>
  )
}

export default Modal
