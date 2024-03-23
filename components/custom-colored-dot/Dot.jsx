import Styles from './Dot.module.css'

import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

const Dot = ({
  color,
  imageUrl,
  selectedColor,
  setSelectedColor,
  fromFilters,
  filteredColors,
  setFilteredColors,
  productID,
  fromSingleProduct,
}) => {
  const router = useRouter()
  const isCategoryPage = useSelector((state) => state.random.isCategoryPage)

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
      return filteredColors.includes(color) && '#a2d061'
    } else {
      return selectedColor === color ? '#a2d061' : ''
    }
  }
  return (
    <>
      {color && (
        <div
          className={`${Styles.colored_dot} ${
            isCategoryPage === true ? Styles.categorydot_wrap : ''
          }${fromSingleProduct && Styles.product_color}`}
          style={{
            background: color,
            outlineColor: setOutlineColor(),
            outlineWidth: '2px',
            outlineOffset: '-2px',
            // color: isCategoryPage === true ? 'red': 'pink'
          }}
          onClick={() => handleSelect(color)}
          title={color}
        ></div>
      )}
    </>
  )
}

export default Dot
