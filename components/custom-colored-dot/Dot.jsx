import Styles from './Dot.module.css'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

const Dot = ({ color, imageUrl, selectedColor, setSelectedColor }) => {
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
