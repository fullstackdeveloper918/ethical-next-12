import Styles from './Dot.module.css'
import Image from 'next/image'
const Dot = ({ color, activeColor, setActiveColor }) => {
  const btnClicked = () => {
    setActiveColor(color)
  }

  return (
    <>
      {color && (
        <div
          className={`${Styles.colored_dot} ${
            color === activeColor ? Styles.active : ''
          }`}
          style={{ background: color }}
          onClick={btnClicked}
        >
          {color && <Image src={color} layout="fill" />}
        </div>
      )}
    </>
  )
}

export default Dot
