import Styles from './Dot.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCartItems } from '../../redux-setup/cartSlice'
const Dot = ({ color, imageUrl }) => {
  const [selectColor, setSelectColor] = useState('')
  const dispatch = useDispatch()

  return (
    <>
      {color && (
        <div
          className={`${Styles.colored_dot}`}
          style={{ background: color }}
          onClick={() => dispatch(setCartItems(color))}
          title={color}
        ></div>
      )}
    </>
  )
}

export default Dot
