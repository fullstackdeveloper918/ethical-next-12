import Styles from './Dot.module.css'
import Image from 'next/image'
const Dot = ({ color, imageUrl }) => {
  // const btnClicked = () => {
  //   setActiveColor(color)
  // }

  return (
    <>
      {color && (
        <div
          className={`${Styles.colored_dot}`}
          style={{ background: color }}
          // onClick={btnClicked}
        >
          {/* {color && <Image src={imageUrl} layout="fill" />} */}
        </div>
      )}
    </>
  )
}

export default Dot
