import React, { useEffect, useState } from 'react'
import PrimaryHeader from '../../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../../components/secondary-header/SecondaryHeader'
import Footer from '../../components/footer/Footer'
import useFetch from '../../lib/useFetch'
import Product from '../../components/Product/Product'
import { FaStar } from 'react-icons/fa6'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Styles from '../../styles/common.module.css'
import { LuMinusCircle, LuPlusCircle } from 'react-icons/lu'
import {
  Accordion_Data,
  Product_Review,
  Review_Progress,
} from '../../constants/data'
import Image from 'next/image'
import images from '../../constants/images'

const productID = () => {
  const router = useRouter()
  const [openIndex, setOpenIndex] = useState(null)
  const { query } = router ?? {}
  const { productID } = query ?? {}
  const [data, setData] = useState([])

  const country = useSelector((state) => state.country.country)

  const handleClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const [loadQuery, { response, loading, error }] = useFetch(
    `/products/${productID}?country=${country === 'canada' ? 'canada' : 'us'}`,
    {
      method: 'get',
    }
  )

  useEffect(() => {
    if (country) {
      loadQuery()
    }
  }, [productID])

  useEffect(() => {
    fetch(
      `https://test.cybersify.tech/Eswag/public/api/product/recent?pageSize=${10}&country=available_in_${country}`
    )
      .then((res) => res.json())
      .then((data) => setData(data?.data))
    // .then((data) => console.log(data?.data))
  }, [])

  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <Product product={response?.data} loading={loading} error={error} />
      <section className={Styles.product_section}>
        <div className={Styles.heading_content}>
          <h3>Newly Added Swag</h3>
          <button type="button" onClick={() => router.push('/products')}>
            View All
          </button>
        </div>

        <div className={Styles.product_card_container}>
          {data?.length > 0 &&
            data?.slice(0, 5).map((item) => (
              <>
                <div className={Styles.product_content}>
                  <ProductCard item={item} key={item.id} fromSingleProduct />
                </div>
              </>
            ))}
        </div>
        <div className={Styles.accordion_section}>
          <div className={Styles.accordion_left_container}>
            <h2>We’re serious about facts. Ask away.</h2>
            <button onClick={() => router.push('/faq')}>See All FAQs</button>
            <div className={Styles.accordion_container}>
              {Accordion_Data.map((data, index) => (
                <>
                  <div className={Styles.accordion_details}>
                    <div className={Styles.accordion_content}>
                      <h3>{data.text}</h3>
                      <button onClick={() => handleClick(index)}>
                        {openIndex === index ? (
                          <>
                            <LuMinusCircle fontSize={30} />
                          </>
                        ) : (
                          <LuPlusCircle fontSize={30} />
                        )}
                      </button>
                    </div>
                    <div className={Styles.accordion_detail}>
                      {openIndex === index && <p>{data.content}</p>}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className={Styles.accordion_right_container}>
            <div className={Styles.container}>
              <div className={Styles.content}>
                <div className={Styles.textContent}>
                  <h2 className={Styles.title}>We’re here for you.</h2>
                  <p className={Styles.desc}>
                    More than a supplement subscription, we’re committed to
                    supporting you as you grow.
                  </p>
                  <button>More About Our Services</button>
                </div>
                <div className={Styles.imgContent}>
                  <Image
                    src={images.bag_image}
                    width={200}
                    height={400}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className={Styles.container}>
              <div className={Styles.content}>
                <div className={Styles.textContent}>
                  <h2 className={Styles.title}>We’re here for you.</h2>
                  <p className={Styles.desc}>
                    You can also text or call us at:
                  </p>
                  <p>(877) 256-6998 | (902) 500-1086</p>
                  <p>Or reach us via email at:</p>
                  <p>info@ethicalswag.com</p>
                </div>
                <div className={Styles.imgContent}>
                  <Image src={images.email} width={200} height={400} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product Review Section */}
        <div className={Styles.product_review_section}>
          <div className={Styles.top_content}>
            <h2>Product Review</h2>
            <button>write a review</button>
          </div>
          <div className={Styles.bottomContent}>
            <div className={Styles.leftContent}>
              {Product_Review.map((review) => (
                <>
                  <div className={Styles.container}>
                    <div className={Styles.startRating}>
                      <FaStar color="#a2d061" fontSize={20} />
                      <FaStar color="#a2d061" fontSize={20} />
                      <FaStar color="#a2d061" fontSize={20} />
                      <FaStar color="#a2d061" fontSize={20} />
                      <FaStar color="#a2d061" fontSize={20} />
                    </div>
                    <h3 className={Styles.title}>{review.text}</h3>
                    <p className={Styles.desc}>{review.content}</p>
                  </div>
                </>
              ))}
            </div>
            <div className={Styles.rightContent}>
              <div className={Styles.righttopContent}>
                <p>4/5 Stars</p>
                <FaStar color="#a2d061" fontSize={20} />
                <FaStar color="#a2d061" fontSize={20} />
                <FaStar color="#a2d061" fontSize={20} />
                <FaStar color="#a2d061" fontSize={20} />
                <FaStar color="#a2d061" fontSize={20} />
                <span></span>
                <span>527 Reviews</span>
              </div>
              <div className={Styles.rightBottomContent}>
                {Review_Progress.map((data) => (
                  <>
                    <div className={Styles.bottom_content}>
                      <h3>{data.number}</h3>
                      <progress
                        max="100"
                        value={data.percentage}
                        style={{ color: '#a2d061' }}
                      />
                      <p>{data.percentage}%</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className={Styles.resources_section}>
          <div className={Styles.left_content}>
            <div className={Styles.textContent}>
              <h4>Resources</h4>
              <h2>How can you find the best product for your company?</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <div>
                <button>View Pdf</button>
                <button>Download Pdf</button>
              </div>
            </div>
          </div>
          <div className={Styles.right_content}>
            <Image src={images.pages} width={500} height={500} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default productID
