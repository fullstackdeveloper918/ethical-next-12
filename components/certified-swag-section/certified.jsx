import React, { useEffect, useState } from 'react'
import SingleProduct from '../certified-swag-single-product/SingleProduct'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import styles from './certified.module.css'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const Certified = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('https://test.cybersify.tech/Eswag/public/api/testproducts')
      .then((res) => res.json())
      .then((r) => setData(r?.data?.data))
  }, [])

  console.log(data, 'length')

  return (
    <>
      <div className={styles.heading}>
        Certified <span className={styles.heading_colored}>CORP SWAG</span>
      </div>
      <div className="">
        {data && (
          <div>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={false} // means to render carousel on server-side.
              infinite={true}
              // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
              // autoPlay
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5s"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={['tablet', 'mobile']}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {data?.length &&
                data?.map((product) => (
                  <SingleProduct product={product} key={product.id} />
                ))}
            </Carousel>
          </div>
        )}
      </div>
      <div className={styles.btn}>View All</div>
    </>
  )
}

export default Certified
