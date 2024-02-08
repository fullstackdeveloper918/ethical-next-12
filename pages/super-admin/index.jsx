import React from 'react'
import { useState } from 'react'

const SuperAdmin = () => {
  const [inputSlider, setInputSlider] = useState(1)

  const handleChange = (e) => {
    if (e.target.value < 1) {
      setInputSlider(1)
    } else if (e.target.value > 360) {
      setInputSlider(365)
    } else {
      setInputSlider(e.target.value)
    }
  }
  return (
    <>
      <input
        type="range"
        min={0}
        max={365}
        step={365 / 13}
        value={inputSlider}
        onChange={handleChange}
      />
      <p>{inputSlider}</p>
    </>
  )
}

export default SuperAdmin
