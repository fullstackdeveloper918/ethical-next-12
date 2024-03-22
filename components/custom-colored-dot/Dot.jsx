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
}) => {
  const router = useRouter()
  const isCategoryPage = useSelector((state) => state.random.isCategoryPage)
  let isProductPage = useSelector((state) => state.random.isProductPage)

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
      return selectedColor === color ? '#a2d061' : ''
    }
  }
  return (
    <>
      {color && (
        <div
          className={`${Styles.colored_dot} ${
            isCategoryPage === true ? Styles.categorydot_wrap : ''
          }${isProductPage === true ? Styles.product_color : ''}`}
          style={{
            background: color,
            outlineColor: setOutlineColor(),
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
