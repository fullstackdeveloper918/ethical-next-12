import React, { useEffect, useState } from 'react'
import styles from './dummy.module.css'
import CardOne from '../../assets/headerPics/card_one.svg'
import CardTwo from '../../assets/headerPics/card_two.svg'
import CardThree from '../../assets/headerPics/card_three.svg'
import CardFour from '../../assets/headerPics/card_four.svg'
import CardFive from '../../assets/headerPics/card_five.svg'
import Image from 'next/image'

let imagesList = [
  {
    id: 1,
    img: CardOne,
    className: '',
    textContent: '',
  },
  {
    id: 2,
    img: CardTwo,
    className: '',
  },
  {
    id: 3,
    img: CardThree,
    className: '',
  },
  {
    id: 4,
    img: CardFour,
    className: '',
  },
  {
    id: 5,
    img: CardFive,
    className: '',
  },
]

let tt

const splitArrayByIndex = (arr, index) => {
  if (index < arr.length) {
    return [arr.slice(0, index), arr.slice(-1 * (arr.length - index))]
  }
}

const arraySplitFromIndexAndJoinToLast = (array, index) => {
  let arr = [...array]
  let [first, last] = splitArrayByIndex(arr, index)
  return [...last, ...first]
}

let animiationTiming = 3000
const Dummy = () => {
  const [list, setList] = useState(imagesList)

  const [first, setFirst] = useState()

  useEffect(() => {
    clearInterval(tt)

    let currentIndex = 0
    tt = setInterval(() => {
      let moveFirstIndexToLastArr = arraySplitFromIndexAndJoinToLast(
        imagesList,
        currentIndex
      )
      let [first, last] = splitArrayByIndex(moveFirstIndexToLastArr, 1)
      setList(last)
      setFirst(false)
      setTimeout(() => {
        setFirst(first)
      }, 1)

      // setTimeout(() => { // for stack animation
      //   setList([...last,...first]);
      // }, animiationTiming-1000);

      if (imagesList.length - 1 === currentIndex) {
        currentIndex = 0
      } else {
        currentIndex++
      }
    }, animiationTiming)
  }, [])

  return (
    <div style={{ marginTop: '300px' }}>
      <div className={styles.text}>
        {first ? (
          <div className={styles.text_animation}>
            <Image
              src={first[0].img}
              alt=""
              height={400}
              width={400}
              className={styles.text_animation_img}
            />
          </div>
        ) : null}

        <ul>
          {list.length
            ? list.map((item, ind) => {
                return (
                  <li key={ind} className={`card${item.id} ${item.className}`}>
                    <Image
                      src={item.img}
                      alt=""
                      height={400}
                      width={400}
                      className={styles.cardImage}
                    />
                    <p>Flat 25% off</p>
                    <div>
                      <p>Cup design</p>
                      <p>
                        Lorem ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <button>View Products</button>
                    </div>
                  </li>
                )
              })
            : null}
        </ul>
      </div>
    </div>
  )
}

export default Dummy
