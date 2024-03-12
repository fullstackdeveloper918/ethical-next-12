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

const Dummy = () => {
  const router = useRouter()
  const [cards, setCards] = useState(imagesList)
  const handleHover = (index) => {
    console.log(index, 'i am being called')
    const newCards = [...cards]
    const temp = newCards[index]
    newCards[index] = newCards[0]
    newCards[0] = temp
    setCards(newCards)
  }

  return (
    <div>
      <div className={styles.text}>
        <ul className={styles.explor_imgSec}>
          {cards.map((card, index) => (
            <>
              <li key={index}>
                <div
                  className={styles.list_explore}
                  onMouseEnter={() => handleHover(index)}
                >
                  <Image
                    src={card.img}
                    alt=""
                    height={600}
                    width={600}
                    className={styles.cardImage}
                    //  onClick={() => router.push('/products')}
                  />
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dummy
