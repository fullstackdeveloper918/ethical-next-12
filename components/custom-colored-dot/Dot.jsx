import Styles from './Dot.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCartItems } from '../../redux-setup/cartSlice'
const Dot = ({ color, imageUrl, selectedColor, setSelectedColor }) => {
  const dispatch = useDispatch()
  return (
    <>
      {color && (
        <div
          className={`${Styles.colored_dot}`}
          style={{
            background: color,
            outlineColor: selectedColor === color ? 'green' : '',
          }}
          onClick={() => setSelectedColor(color)}
          title={color}
        ></div>
      )}
    </>
  )
}

export default Dot
