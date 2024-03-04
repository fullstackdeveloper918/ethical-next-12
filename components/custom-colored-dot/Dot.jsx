import Styles from './Dot.module.css'
import Image from 'next/image'
const Dot = ({ color, imageUrl }) => {
  console.log(color, imageUrl, 'dot')

  return (
    <>
      {color && (
        <div
          className={`${Styles.colored_dot}`}
          style={{ background: color }}
          onClick={() => alert('clicked on color image')}
        ></div>
      )}
    </>
  )
}

export default Dot
