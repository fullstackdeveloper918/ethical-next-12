import Styles from './Dot.module.css'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

const Dot = ({
  color,
  imageUrl,
  selectedColor,
  setSelectedColor,
  fromFilters,
  filteredColors,
  setFilteredColors,
}) => {
  const handleSelect = (color) => {
    if (fromFilters) {
      const index = filteredColors.indexOf(color)

      if (index !== -1) {
        const updatedColors = [...filteredColors]
        updatedColors.splice(index, 1)
        setFilteredColors(updatedColors)
      } else {
        setFilteredColors((prevColors) => [...prevColors, color])
      }
    } else {
      setSelectedColor(color)
    }
  }

  const setOutlineColor = () => {
    if (fromFilters) {
      return ''
    } else {
      return selectedColor === color ? 'green' : ''
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
          onClick={() => handleSelect(color)}
          title={color}
        ></div>
      )}
    </>
  )
}

export default Dot
