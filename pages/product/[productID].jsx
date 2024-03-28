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
import { Accordion_Data, Review_Progress } from '../../constants/data'
import Image from 'next/image'
import images from '../../constants/images'
import {
  initialValuesWriteReview,
  validationSchemaWriteReview,
} from '../../lib/validationSchemas'
import { toast } from 'react-toastify'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const productID = () => {
  const router = useRouter()
  const [writeReview, setWriteReview] = useState(true)
  const [isButtonClicked, setIsButtonClicked] = useState(false)
  const [selectedItem, setSelectedItem] = useState('Product')

  const [openIndex, setOpenIndex] = useState(null)
  const { query } = router ?? {}
  const { productID } = query ?? {}
  const [data, setData] = useState([])
  const [starRatings, setStarRatings] = useState(5)
  const [reviewData, setReviewData] = useState({
    userId: '',
    productId: '',
    rate: 5,
    name: '',
    email: '',
    review_title: '',
    review: '',
  })

  const country = useSelector((state) => state.country.country)

  const handleClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const [singleProductApi, { response: singleProduct, loading, error }] =
    useFetch(
      `/products/${productID}?country=${
        country === 'canada' ? 'canada' : 'us'
      }`,
      {
        method: 'get',
      }
    )

  useEffect(() => {
    if (country && productID) {
      singleProductApi()
      reviewsApi()
    }
  }, [productID, country])

  useEffect(() => {
    if (country) {
      fetch(
        `https://test.cybersify.tech/Eswag/public/api/products?product_catogries=${
          singleProduct && JSON.parse(singleProduct?.data?.product_catogries)[0]
        }&${country === 'usa' ? `available_in_usa=1` : `available_in_canada=1`}`
      )
        .then((res) => res.json())
        .then((data) => setData(data?.data))
    }
  }, [country, singleProduct])

  const [
    reviewsApi,
    { response: reviews, loading: reviewLoading, error: reviewError },
  ] = useFetch(`/product/review/${productID}`, {
    method: 'get',
  })

  const [
    reviewsApiPost,
    {
      response: reviewsApiPostRes,
      loading: reviewsApiPostLoading,
      error: reviewsApiPostError,
    },
  ] = useFetch(`/auth/user/review`, {
    method: 'post',
  })

  const onSubmit = async (values) => {
    try {
      let data = {
        name: values.name,
        email: values.email,
        rate: starRatings,
        review_title: values.review_title,
        review: values.review,
        userId: '',
        productId: productID,
      }
      reviewsApiPost(data)
      toast.success('Review Saved Successfully', {
        position: 'top-center',
      })
      values.name = ''
      values.email = ''
      values.review = ''
      values.review_title = ''
      setWriteReview(false)
    } catch (err) {
      console.log(err, 'hello error')
    }
  }

  useEffect(() => {
    if (reviewsApiPostRes) {
      reviewsApi()
    } else {
      console.log('error from res')
    }
  }, [reviewsApiPostRes])
  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <Product
        product={singleProduct?.data}
        loading={loading}
        error={error}
        productID={productID}
      />
      <section className={Styles.singleProduct_dimensions}>
        <div className={Styles.product_list_wrapper}>
          <ul style={{ cursor: 'pointer' }} className={Styles.singleProduct_list}>
            <li
              className={
                selectedItem === 'Product' ? Styles.active_product : ''
              }
              onClick={() => setSelectedItem('Product')}
            >
              Product Description
            </li>
            <li
              className={
                selectedItem === 'Dimensions' ? Styles.active_product : ''
              }
              onClick={() => setSelectedItem('Dimensions')}
            >
              Dimensions
            </li>
            <li
              className={
                selectedItem === 'Material' ? Styles.active_product : ''
              }
              onClick={() => setSelectedItem('Material')}
            >
              Material(s)
            </li>
            <li
              className={
                selectedItem === 'Swift Swag' ? Styles.active_product : ''
              }
              onClick={() => setSelectedItem('Swift Swag')}
            >
              Swift Swag Qualified
            </li>
          </ul>
        </div>
        <div className={Styles.product_description_details}>
          {selectedItem === 'Product' && (
            <li>{singleProduct?.data.product_description}</li>
          )}
          {selectedItem === 'Dimensions' && (
            <li>{singleProduct?.data.product_dimensions}</li>
          )}
          {selectedItem === 'Material' && (
            <li>{singleProduct?.data.material_made}</li>
          )}
          {selectedItem === 'Swift Swag' && (
            <>
              Swift Swag is our new service designed to serve your Swag needs
              with quick turn-around. Production and delivery time: 10 business
              days after proof approval and payment. Qualified Customization
              Methods: 1-Color Print (e.g. screen printing and pad printing)
              Laser Engraving Deboss Embroidery (apparel products only)
              Exceptions apply. Please inquire about Embroidery and Full-Color
              Customizations on Hard Goods and Drinkware with our team. Maximum
              Quantity per order: Apparel: 100 units per item. Hard Goods: 600
              units per item. For orders above these maximum quantities, please
              contact our team. Additional Charges: USD $55 per item. If your
              artwork file isn't ready for production, a fee will be added to
              your order and it may add a day in production. Freight is
              calculated after the order is submitted. The total amount will be
              sent to you along with the virtual proof for approval. Questions
              about Swift Swag? Contact us using the form below or email
              info@ethicalswag.com
            </>
          )}
        </div>
      </section>
      <section className={Styles.product_section}>
        <div className={Styles.heading_content}>
          <h3>You may also like</h3>
          {/* <button type="button" onClick={() => router.push('/products')}>
            View All
          </button> */}
        </div>

        <div className={Styles.product_card_container}>
          {data?.length > 0 &&
            data?.slice(0, 5).map((item, i) => (
              <>
                <div className={Styles.product_content} key={i}>
                  <ProductCard item={item} key={item.id} fromSingleProduct />
                </div>
              </>
            ))}
        </div>
        <div className={Styles.accordion_section}>
          <div className={Styles.accordion_left_container}>
            <h2>We’re serious about facts. Ask away.</h2>
            <button
              onClick={() => router.push('/faq')}
              className={Styles.product_bottombtn}
            >
              See All FAQs
            </button>
            <div className={Styles.accordion_container}>
              {Accordion_Data.map((data, index) => (
                <>
                  <div className={Styles.accordion_details}>
                    <div className={Styles.accordion_content}>
                      <p>{data.text}</p>
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
                      {openIndex === index && (
                        <p className={Styles.open_accrodion}>{data.content}</p>
                      )}
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
                  <div>
                    <h2 className={Styles.title}>We’re here for you.</h2>
                    <p className={Styles.desc}>
                      More than a supplement subscription, we’re committed to
                      supporting you as you grow.
                    </p>
                  </div>
                  <button
                    className={Styles.product_bottombtn}
                    onClick={() => router.push('/services')}
                  >
                    More About Our Services
                  </button>
                </div>
                <div className={Styles.imgContent}>
                  <Image src={images.bag_image} layout="fill" alt="" />
                </div>
              </div>
            </div>
            <div className={Styles.container}>
              <div className={Styles.content}>
                <div className={Styles.textContent}>
                  <div>
                    <h2 className={Styles.title}>We’re here for you.</h2>
                    <p className={Styles.desc}>
                      You can also text or call us at:
                    </p>
                    <div>(877) 256-6998 | (902) 500-1086</div>
                  </div>

                  <div>
                    <p className={Styles.desc}>Or reach us via email at:</p>
                    <div>info@ethicalswag.com</div>
                  </div>
                </div>
                <div className={Styles.imgContentwrap}>
                  <Image src={images.email} layout="fill" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product Review Section */}
        <div className={Styles.product_review_section}>
          <div className={Styles.top_content}>
            <h2>Product Review</h2>
            <button onClick={() => setWriteReview(!writeReview)}>
              Write a review
            </button>
          </div>
          {/* Write a Review Section */}
          <div
            className={
              writeReview ? Styles.write_review_container : Styles.hide_review
            }
          >
            <Formik
              initialValues={initialValuesWriteReview}
              validationSchema={validationSchemaWriteReview}
              onSubmit={onSubmit}
            >
              {({ values, errors }) => (
                <>
                  <Form>
                    <div className={Styles.input_field}>
                      <div
                        className={`${Styles.startRating} ${Styles.text_center} `}
                      >
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                            color={index < starRatings ? '#a2d061' : '#000000'}
                            fontSize={20}
                            onClick={() => setStarRatings(index + 1)}
                            style={{ cursor: 'pointer' }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className={Styles.row_flex}>
                      <div className={Styles.input_field}>
                        <Field
                          type="text"
                          id="textarea"
                          name="name"
                          placeholder="Enter your name"
                          autocomplete="off"
                          // className={Styles.SwagOrder_need_textarea}
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className={Styles.error}
                        />
                      </div>
                      <div className={Styles.input_field}>
                        <Field
                          type="text"
                          id="textarea"
                          name="email"
                          placeholder="Enter your email"
                          autocomplete="off"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className={Styles.error}
                        />
                      </div>
                    </div>

                    <div className={Styles.input_field}>
                      <Field
                        type="text"
                        id="textarea"
                        name="review_title"
                        placeholder="Enter your review title"
                        autocomplete="off"
                      />
                      <ErrorMessage
                        name="review_title"
                        component="div"
                        className={Styles.error}
                      />
                    </div>
                    <div
                      className={`${Styles.input_field} ${Styles.text_left}`}
                    >
                      <Field
                        as="textarea"
                        rows="4"
                        type="text"
                        id="textarea"
                        name="review"
                        placeholder="Enter your review "
                        autocomplete="off"
                      />
                      <ErrorMessage
                        name="review"
                        component="div"
                        className={Styles.error}
                      />

                      <p>
                        How we use your data: We’ll only contact you about the
                        review you left, and only if necessary. By submitting
                        your review, you agree terms and conditions and privacy
                        policy.
                      </p>
                    </div>

                    <div className={Styles.input_field}>
                      <button className={Styles.submit_review_button}>
                        Submit Review
                      </button>
                    </div>
                  </Form>
                </>
              )}
            </Formik>
          </div>
          <div className={Styles.bottomContent}>
            {reviews && reviews?.data?.productreview.length > 0 && (
              <>
                <div className={Styles.leftContent}>
                  {reviews?.data?.productreview &&
                    reviews?.data?.productreview.length > 0 &&
                    reviews?.data?.productreview.slice(0, 2).map((review) => (
                      <>
                        <div className={Styles.container}>
                          <div className={Styles.startRating}>
                            {[...Array(review.rate)].map((_, index) => (
                              <FaStar
                                key={index}
                                color="#a2d061"
                                fontSize={20}
                              />
                            ))}
                          </div>

                          <h3 className={Styles.title}>
                            {review.review_title}
                          </h3>
                          <p className={Styles.desc}>{review.review}</p>
                        </div>
                      </>
                    ))}
                </div>

                <div className={Styles.rightContent}>
                  <div className={Styles.righttopContent}>
                    <p>4/5 Stars</p>
                    <div className={Styles.stars_content}>
                      <FaStar color="#a2d061" fontSize={20} />
                      <FaStar color="#a2d061" fontSize={20} />
                      <FaStar color="#a2d061" fontSize={20} />
                      <FaStar color="#a2d061" fontSize={20} />
                      <FaStar color="#a2d061" fontSize={20} />
                    </div>
                    <span>{reviews?.data?.ratings?.total_reviews} Reviews</span>
                  </div>
                  {reviews?.data?.ratings?.percentage_data && (
                    <div className={Styles.rightBottomContent}>
                      {Review_Progress(
                        reviews?.data?.ratings?.percentage_data
                      ).map((data, i) => (
                        <>
                          <div className={Styles.bottom_content} key={i}>
                            <h3>{data.number}</h3>
                            <progress
                              max="100"
                              value={+data.percentage}
                              style={{ color: '#a2d061' }}
                              className={Styles.progress_bar}
                            />
                            <p>{+data.percentage}%</p>
                          </div>
                        </>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Resources Section */}
        <div className={Styles.resources_section}>
          <div className={Styles.ressource_container}>
            <div className={Styles.left_content}>
              <div className={Styles.textContent}>
                <p className={Styles.ressousce_subheading}>Resources</p>
                <h2>How can you find the best product for your company?</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
                <div className={Styles.resources_btns}>
                  <button>View Pdf</button>
                  <button>Download Pdf</button>
                </div>
              </div>
            </div>
            <div className={Styles.right_content}>
              <Image src={images.pages} width={500} height={500} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default productID
