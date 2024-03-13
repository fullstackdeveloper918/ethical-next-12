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
    category: 'Cup design',
    heading:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 2,
    img: CardTwo,
    className: '',
    category: 'Cup design',
    heading:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 3,
    img: CardThree,
    className: '',
    category: 'Cup design',
    heading:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 4,
    img: CardFour,
    className: '',
    category: 'Make T-shirt design',
    heading:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 5,
    img: CardFive,
    className: '',
    category: 'Bottles package box',
    heading:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
]

const Dummy = () => {
  const router = useRouter()
  const [cards, setCards] = useState(imagesList)
  const handleHover = (index) => {
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
              <li key={index} className={index ? styles.hello: ''}>
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
                  <div>
                    <div className={styles.flat_dis}>Flat 20% off</div>
                    <div className={styles.bottom_content}>
                      <h2>{card.category}</h2>
                      <p>{card.heading}</p>
                      <button>View Product</button>
                    </div>
                  </div>
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
