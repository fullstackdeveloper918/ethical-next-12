import React, { useEffect, useState } from 'react'
import SingleProduct from '../certified-swag-single-product/SingleProduct'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import styles from './certified.module.css'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { setSingleProductPromotion } from 'redux-setup/randomSlice'
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const Certified = () => {
  const [data, setData] = useState(null)
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('https://test.cybersify.tech/Eswag/public/api/starproducts')
      .then((res) => res.json())
      .then((r) => {
        dispatch(setSingleProductPromotion(r?.data?.data[0]))
        setData(r?.data?.data)
      })
    // // .then((r) => setData(r?.data?.data))
    // .then((data) => console.log(data, 'allll'))
  }, [])

  const promotionalProduct = useSelector(
    (state) => state.random.singleProductPromotion
  )

  console.log(promotionalProduct, 'promotionalProductpromotionalProduct')

  return (
    <>
      <div className={styles.heading}>
        Certified <span className={styles.heading_colored}>CORP SWAG</span>
      </div>
      <div className="" style={{ width: '100%' }}>
        {data && (
          <div className={styles.slider_space}>
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
              arrows={false}
              keyBoardControl={true}
              customTransition="all .5s"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={['tablet', 'mobile']}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              slidesToSlide={2}
            >
              {data?.length &&
                data?.map((product) => (
                  <>
                    <SingleProduct product={product} key={product.id} />
                  </>
                ))}
            </Carousel>
          </div>
        )}
      </div>
      <div
        className={styles.btn}
        style={{ cursor: 'pointer' }}
        onClick={() => router.push('/products')}
      >
        View All
      </div>
    </>
  )
}

export default Certified
