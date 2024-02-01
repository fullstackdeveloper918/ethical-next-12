import { useState } from 'react'
import Styles from './Dot.module.css'
const Dot = ({ color, activeColor, setActiveColor }) => {
  // const [outline, setOutline] = useState(false);

  const btnClicked = () => {
    setActiveColor(color)
  }

  return (
    <div
      className={`${Styles.colored_dot} ${
        color === activeColor ? Styles.active : ''
      }`}
      style={{ background: color }}
      onClick={btnClicked}
    />
  )
}

export default Dot
