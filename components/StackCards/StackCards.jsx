import React, { useEffect, useState } from 'react'
import styles from './StackCards.module.css'
import CardOne from '../../assets/headerPics/card_one.png'
import CardTwo from '../../assets/headerPics/card_two.png'
import CardThree from '../../assets/headerPics/card_three.png'
import CardFour from '../../assets/headerPics/card_four.png'
import CardFive from '../../assets/headerPics/card_five.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

let imagesList = [
  {
    id: 1,
    img: CardOne,
  },
  {
    id: 2,
    img: CardTwo,
  },
  {
    id: 3,
    img: CardThree,
  },
  {
    id: 4,
    img: CardFour,
  },
  {
    id: 5,
    img: CardFive,
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
  const router = useRouter()
  const [list, setList] = useState(imagesList)

  const [first, setFirst] = useState()

  // useEffect(() => {
  //   clearInterval(tt)

  //   let currentIndex = 0
  //   tt = setInterval(() => {
  //     let moveFirstIndexToLastArr = arraySplitFromIndexAndJoinToLast(
  //       imagesList,
  //       currentIndex
  //     )
  //     let [first, last] = splitArrayByIndex(moveFirstIndexToLastArr, 1)
  //     setList(last)
  //     setFirst(false)
  //     setTimeout(() => {
  //       setFirst(first)
  //     }, 1)

  //     setTimeout(() => { // for stack animation
  //       setList([...last,...first]);
  //     }, animiationTiming-1000);

  //     if (imagesList.length - 1 === currentIndex) {
  //       currentIndex = 0
  //     } else {
  //       currentIndex++
  //     }
  //   }, animiationTiming)
  // }, [])

  return (
    // <div>
    //   <div className={styles.text}>
    //     <ul className={styles.explor_imgSec}>
    //       {imagesList &&
    //         imagesList.map((card) => (
    //           <>
    //             <li>
    //               <div className={styles.list_explore}>
    //                 <Image
    //                   src={card.img}
    //                   alt=""
    //                   height={600}
    //                   width={600}
    //                   className={styles.cardImage}
    //                   onClick={() => router.push('/products')}
    //                 />
    //               </div>
    //             </li>
    //           </>
    //         ))}
    //       <li>
    //         <div className={styles.list_explore}>
    //           <Image
    //             src={CardOne}
    //             alt=""
    //             height={600}
    //             width={600}
    //             className={styles.cardImage}
    //             onClick={() => router.push('/products')}
    //           />
    //         </div>
    //       </li>
    //       <li>
    //         <div className={styles.list_explore}>
    //           <Image
    //             src={CardTwo}
    //             alt=""
    //             height={600}
    //             width={600}
    //             onMouseLeave={() => alert('hello second card')}
    //             className={styles.cardImage}
    //             onClick={() => router.push('/products')}
    //           />
    //         </div>
    //       </li>
    //       <li>
    //         <div className={styles.list_explore}>
    //           <Image
    //             src={CardThree}
    //             alt=""
    //             height={600}
    //             width={600}
    //             className={styles.cardImage}
    //             onClick={() => router.push('/products')}
    //           />
    //         </div>
    //       </li>
    //       <li>
    //         <div className={styles.list_explore}>
    //           <Image
    //             src={CardFour}
    //             alt=""
    //             height={600}
    //             width={600}
    //             className={styles.cardImage}
    //             onClick={() => router.push('/products')}
    //           />
    //         </div>
    //       </li>

    //       <li>
    //         <div className={styles.list_explore}>
    //           <Image
    //             src={CardFive}
    //             alt=""
    //             height={600}
    //             width={600}
    //             className={styles.cardImage}
    //             onClick={() => router.push('/products')}
    //           />
    //         </div>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <>
      <div className={styles.text}>
        <ul className={styles.explor_imgSec}>
          {imagesList &&
            imagesList.map((card, index) => (
              <li key={index}>
                <div
                  className={styles.list_explore}
                  onMouseEnter={() => alert(index)}
                >
                  <Image
                    src={card.img}
                    alt=""
                    height={600}
                    width={600}
                    className={styles.cardImage}
                    // onClick={() => router.push('/products')}
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default Dummy
