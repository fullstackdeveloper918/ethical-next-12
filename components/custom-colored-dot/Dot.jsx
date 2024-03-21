import Styles from './Dot.module.css'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

const Dot = ({
  color,
  imageUrl,
  selectedColor,
  setSelectedColor,
  fromFilters,
}) => {
  const handleSelect = () => {
    if (fromFilters) {
    } else {
      setSelectedColor(color)
    }
  }

  const setOutlineColor = () => {
    if (fromFilters) {
      return ''
    } else {
      return selectedColor === color ? '#a2d061' : ''
    }
  }
  return (
    <>
      {color && (
        <div
          className={`${Styles.colored_dot}`}
          style={{
            background: color,
            outlineColor: setOutlineColor(),
          }}
          onClick={handleSelect}
          title={color}
        ></div>
      )}
    </>
  )
}

export default Dot
