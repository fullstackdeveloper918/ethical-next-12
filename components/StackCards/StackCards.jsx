'use client'
import React from 'react'
import Styles from './StackCards.module.css'
import Image from 'next/image'
import images from '../../constants/images'

const Stack_Card_Data = [
  {
    ID: 1,
    src: images.Stack_Card1,
    btn: 'Flat 25% off',
    text: 'one',
  },
  {
    ID: 2,
    src: images.Stack_Card2,
    btn: 'Flat 25% off',
    text: 'two',
  },
  {
    ID: 3,
    src: images.Stack_Card3,
    btn: 'Flat 25% off',
    text: 'three',
  },
  // {
  //   ID: 4,
  //   src: images.Stack_Card4,
  //   btn: 'Flat 25% off',
  //   text: 'four',
  // },
  // {
  //   ID: 5,
  //   src: images.Stack_Card5,
  //   btn: 'Flat 25% off',
  //   text: 'five',
  // },
]

const StackCards = () => {
  return (
    <>
      <div className={Styles.stack_container}>
        <div className={Styles.stack_left_content}>
          <p>Explore our collections</p>
          <h3>
            Show me <b> Products that...</b>
          </h3>
          <button className={Styles.btnn}>View Products</button>
        </div>
        <div className={Styles.stack_card_wrapper}>
          <figure className={Styles.stack}>
            {Stack_Card_Data.map((card) => (
              <>
                <div className={`${Styles.card} ${Styles[card.text]}`}>
                  <span className={Styles.span}>
                    <Image
                      src={card.src}
                      width={300}
                      height={400}
                      alt="stack-cards"
                    />
                  </span>
                </div>
              </>
            ))}
          </figure>
        </div>
      </div>
    </>
  )
}

export default StackCards
