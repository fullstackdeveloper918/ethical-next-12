import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import images from '../../constants/images'
import { useDispatch, useSelector } from 'react-redux'
import Styles from './Product.module.css'
import Loaders from '../../components/loaders/Loaders'
import Dot from '../custom-colored-dot/Dot'
import { RxCross2 } from 'react-icons/rx'
import { setCartItems } from '../../redux-setup/cartSlice'
import { toast } from 'react-toastify'

const Product = ({ product, loading, error }) => {
  const dispatch = useDispatch()
  const [color, setColor] = useState('')
  const [ReadMore, setIsReadMore] = useState(false)
  const [orderQuantity, setOrderQuantity] = useState(
    +product?.column_1_qty || 200
  )
  const [price, setPrice] = useState(0)
  const [singleImage, setSingleImage] = useState('')
  const [uploadFirstLogo, setUploadFirstLogo] = useState('')
  const [productImages, setProductImages] = useState([])
  const [uploadSecondLogo, setUploadSecondLogo] = useState('')
  const [activeBtn, setActiveBtn] = useState(0)
  const [custumize, setCustomize] = useState('No Decoration')
  const [sizeQuantity, setSizeQuantity] = useState({
    S: 25,
    M: 25,
    L: 25,
    XL: 25,
  })
  const [cartState, setCartState] = useState({
    quantity: 0,
    image: null,
    heading: null,
    price: null,
    id: null,
  })
  const [isItemInCart, setIsItemInCart] = useState(false)

  useEffect(() => {
    let total =
      +sizeQuantity.S + +sizeQuantity.M + +sizeQuantity.L + +sizeQuantity.XL
    setOrderQuantity(total)
  }, [sizeQuantity])

  let handleQuantitySize = (e) => {
    if (e.target.value < 0) {
      setSizeQuantity((prev) => ({
        ...prev,
        [e.target.name]: 0,
      }))
    } else {
      setSizeQuantity((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }))
    }
  }

  useEffect(() => {
    const getData = setTimeout(() => {
      if (orderQuantity < product?.column_1_qty) {
        setOrderQuantity(+product?.column_1_qty)
      }
    }, 2000)

    return () => clearTimeout(getData)
  }, [orderQuantity])

  const setQuantity = (e) => {
    e.preventDefault()
    setOrderQuantity(e.target.value)
  }

  const country = useSelector((state) => state.country.country)

  useEffect(() => {
    fetchPrice()
  }, [orderQuantity, product, country])
  const fetchPrice = () => {
    if (orderQuantity <= product?.column_1_qty) {
      setPrice(
        country === 'usa'
          ? product?.column_1_retail_price_usd?.replace(/[^0-9.]/g, '')
          : product?.column_1_retail_price_cad?.replace(/[^0-9.]/g, '')
      )
    } else if (orderQuantity <= product?.column_2_qty) {
      setPrice(
        country === 'usa'
          ? product?.column_2_retail_price_usd?.replace(/[^0-9.]/g, '')
          : product?.column_2_retail_price_cad?.replace(/[^0-9.]/g, '')
      )
    } else if (orderQuantity <= product?.column_3_qty) {
      setPrice(
        country === 'usa'
          ? product?.column_3_retail_price_usd?.replace(/[^0-9.]/g, '')
          : product?.column_3_retail_price_cad?.replace(/[^0-9.]/g, '')
      )
    } else if (orderQuantity <= product?.column_4_qty) {
      setPrice(
        country === 'usa'
          ? product?.column_4_retail_price_usd?.replace(/[^0-9.]/g, '')
          : product?.column_4_retail_price_cad?.replace(/[^0-9.]/g, '')
      )
    } else if (orderQuantity > product?.column_4_q) {
      setPrice(
        country === 'usa'
          ? product?.column_5_retail_price_usd?.replace(/[^0-9.]/g, '')
          : product?.column_5_retail_price_cad?.replace(/[^0-9.]/g, '')
      )
    }
  }

  const uploadFirstFile = (e) => {
    setUploadFirstLogo(e.target.files[0])
  }

  const uploadSecondFile = (e) => {
    setUploadSecondLogo(e.target.files[0])
  }

  const removeLogo = (state) => {
    state('')
  }

  const customizations = [
    'Embroidery',
    'Full Color Decoration',
    'No Decoration',
  ]

  const btnClicked = (index, val) => {
    if (val === 'Embroidery') {
      setCustomize('Embroidery')
    } else if (val === 'Full Color Decoration') {
      setCustomize('Full Color Decoration')
    } else if (val === 'No Decoration') {
      setCustomize('No Decoration')
    }
    setActiveBtn(index)
  }

  const customisazionPrice =
    custumize === 'Embroidery'
      ? 2
      : custumize === 'Full Color Decoration'
      ? 4
      : 0

  useEffect(() => {
    const jsonData = product?.images_us
    if (jsonData) {
      try {
        const data = JSON.parse(jsonData)
        setProductImages(data)
      } catch (error) {
        console.error('Error parsing JSON data:', error)
      }
    } else {
      console.log('No image data available')
    }

    setSingleImage(product?.image)
  }, [product?.id])

  const handleAddToCart = (e) => {
    e.preventDefault()
    setCartState({
      quantity: orderQuantity,
      image: product?.image,
      heading: product?.product_description,
      price: price,
      id: product.id,
    })
    toast.success('Added to cart successfully')
  }

  useEffect(() => {
    if (cartState.quantity) {
      dispatch(setCartItems(cartState))
    }
  }, [cartState])

  const cartItems = useSelector((state) => state.cart.cartItems)

  const checkFromCart = () => {
    const idToFind = product.id
    const existingItemIndex = cartItems.find((item) => item.id === idToFind)
    if (existingItemIndex) {
      setIsItemInCart(existingItemIndex)
      setOrderQuantity(existingItemIndex.quantity)
      setPrice(existingItemIndex.price)
    }
  }

  useEffect(() => {
    if (product?.id) {
      checkFromCart()
    }
  }, [product?.id])

  const updateImage = (index) => {
    const selectedImage = productImages[index].url
    setSingleImage(selectedImage)
  }

  return (
    <>
      {loading ? (
        <div>
          <Loaders />
        </div>
      ) : (
        !error && (
          <div className={Styles.detail_page_wrapper}>
            <div className={Styles.detail_page_container}>
              <div className={Styles.detail_page_left_top}>
                <div className={Styles.sticky_sec}>
                  <div className={Styles.detail_page_image_content}>
                    {singleImage && (
                      <Image
                        src={singleImage}
                        width={400}
                        height={560}
                        alt="Single_Product_Image"
                        className={Styles.product_image}
                      />
                    )}
                  </div>
                  <div
                    className={`${Styles.images_container} ${Styles.scroll_hide}`}
                  >
                    {productImages.map((image, index) => (
                      <>
                        <div className={Styles.product_Images}>
                          <Image
                            src={image?.url}
                            width={100}
                            height={100}
                            alt="product_image"
                            style={{ cursor: 'pointer' }}
                            onClick={() => updateImage(index)}
                          />
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>

              <div className={Styles.detail_page_right_section}>
                <div className={Styles.certBy}>
                  {product?.certBy &&
                    JSON.parse(product?.certBy).map((data) => (
                      <>
                        <div className={Styles.tag}>
                          <p>{data}</p>
                        </div>
                      </>
                    ))}
                </div>

                <div className={Styles.title}>
                  <h4>{product?.product_title}</h4>
                </div>
                <div className={Styles.reviews}>
                  <div className={Styles.star_review}>
                    <span className={Styles.star_review_images}>
                      {product?.emoji_ratings}
                    </span>
                  </div>
                  <div className={Styles.text_review}>
                    <span className={Styles.text_review_content}>
                      527 Reviews
                    </span>
                  </div>
                </div>
                <div className={Styles.text_content}>
                  <p>
                    {ReadMore
                      ? product?.product_description
                      : product?.product_description.slice(0, 100)}
                    <span
                      className={Styles.read_more}
                      onClick={() => setIsReadMore(!ReadMore)}
                      style={{ cursor: 'pointer' }}
                    >
                      {ReadMore ? 'Read Less' : '...Read More'}
                    </span>
                  </p>
                </div>
                <div className={Styles.input_checkbox}>
                  <div className={Styles.custom_checkbox}>
                    <input type="checkbox" name="services" id="sample" />
                    <label for="sample" className={Styles.marinSpace}>
                      Is this a sample?{' '}
                    </label>
                  </div>
                </div>
                {product?.colours ? (
                  <div className={Styles.select_color_section}>
                    <div className={Styles.common_header}>
                      <p>Select Color</p>
                      <Image
                        src={images.Info_Icon}
                        width={18}
                        height={18}
                        alt="info_icon"
                      />
                    </div>
                    {/* <div className={Styles.colors_container}>
                      {product?.colours &&
                        Object.entries(product?.colours).map(
                          ([color, imageUrl]) => (
                            <>
                              {console.log(color, 'colorcode')}
                              <Dot color={color} imageUrl={imageUrl} />
                            </>
                          )
                        )}
                    </div> */}
                  </div>
                ) : (
                  ''
                )}
                <div className={Styles.cart_left_swift}>
                  <div className={Styles.common_header}>
                    <h6>Swift swag</h6>
                    <Image
                      src={images.Info_Icon}
                      width={18}
                      height={18}
                      alt="info_icon"
                    />
                  </div>
                  <div className={Styles.cart_left_swift_content}>
                    <div className={Styles.custom_checkbox}>
                      <input type="checkbox" name="" id="swift_swag" />
                      <label htmlFor="swift_swag">
                        Checking this box will override the date selected above
                        to within 10 business days if you have gone through the
                        Swift Swag process. Please note additional charges will
                        apply.
                      </label>
                    </div>
                  </div>
                </div>
                <div className={Styles.customization_text}>
                  <div className={Styles.common_header}>
                    <p>Select Customization</p>
                    <Image
                      src={images.Info_Icon}
                      width={18}
                      height={18}
                      alt="info_icon"
                    />
                  </div>

                  <div className={Styles.buttons}>
                    {customizations.map((button, index) => (
                      <button
                        className={`${Styles.btn} ${
                          activeBtn === index ? Styles.active : ''
                        }`}
                        onClick={() => btnClicked(index, button)}
                      >
                        {button}
                      </button>
                    ))}
                  </div>
                </div>
                <div className={Styles.para_text}>
                  <div className={Styles.common_header}>
                    <p>
                      How many areas of the product would you like to add a logo
                      to?
                    </p>
                    <Image
                      src={images.Info_Icon}
                      width={18}
                      height={18}
                      alt="info_icon"
                    />
                  </div>

                  <input
                    type="number"
                    className={Styles.input}
                    placeholder="3"
                  />
                </div>
                <div className={Styles.para_text}>
                  <div className={Styles.common_header}>
                    <p>Select location from the dropdown below</p>
                    <Image
                      src={images.Info_Icon}
                      width={18}
                      height={18}
                      alt="info_icon"
                    />
                  </div>
                  <div className={Styles.inputs}>
                    <div>
                      <div className={Styles.custom_checkbox}>
                        <input
                          type="checkbox"
                          id="html"
                          name="location"
                          value="HTML"
                        />
                        <label for="html">Front</label>
                      </div>
                    </div>
                    <div className={Styles.custom_checkbox}>
                      <input
                        type="checkbox"
                        id="css"
                        name="location"
                        value="CSS"
                      />
                      <label for="css">Back</label>
                    </div>
                    <div>
                      <div className={Styles.custom_checkbox}>
                        <input
                          type="checkbox"
                          id="javascript"
                          name="location"
                          value="JavaScript"
                        />
                        <label for="javascript">Left Sleeve</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={Styles.para_text}>
                  <div className={Styles.common_header}>
                    <p>
                      Upload Logo/ Artwork{' '}
                      <span className={Styles.fw400}>
                        (.AI or .EPS vector format)
                      </span>
                    </p>
                    <Image
                      src={images.Info_Icon}
                      width={18}
                      height={18}
                      alt="info_icon"
                    />
                  </div>

                  <div className={Styles.upload_logo}>
                    <div>
                      {uploadFirstLogo ? (
                        <>
                          <Image
                            src={URL.createObjectURL(uploadFirstLogo)}
                            width={150}
                            height={150}
                          />
                          <RxCross2
                            onClick={() => removeLogo(setUploadFirstLogo)}
                          />
                        </>
                      ) : (
                        <>
                          <label htmlFor="file1">
                            <p>
                              <span className={Styles.colorLight}>
                                {' '}
                                Drop your
                              </span>{' '}
                              front{' '}
                              <span className={Styles.colorLight}>design</span>
                            </p>
                            <p className={Styles.fw400}>
                              <span
                                className={`${Styles.colorLight} ${Styles.fw400}`}
                              >
                                or
                              </span>
                              browse
                              <span
                                className={`${Styles.colorLight} ${Styles.fw400}`}
                              >
                                your files
                              </span>
                            </p>
                            <input
                              type="file"
                              name=""
                              id="file1"
                              onChange={uploadFirstFile}
                            />
                          </label>
                        </>
                      )}
                    </div>

                    <div>
                      {uploadSecondLogo ? (
                        <>
                          <Image
                            src={URL.createObjectURL(uploadSecondLogo)}
                            width={150}
                            height={150}
                          />
                          <RxCross2
                            className=""
                            onClick={() => removeLogo(setUploadSecondLogo)}
                          />
                        </>
                      ) : (
                        <>
                          <label htmlFor="file2">
                            <p>
                              <span className={Styles.colorLight}>
                                {' '}
                                Drop your
                              </span>{' '}
                              back{' '}
                              <span className={Styles.colorLight}>design</span>
                            </p>
                            <p className={Styles.fw400}>
                              <span
                                className={`${Styles.colorLight} ${Styles.fw400}`}
                              >
                                {' '}
                                or{' '}
                              </span>{' '}
                              browse{' '}
                              <span
                                className={`${Styles.colorLight} ${Styles.fw400}`}
                              >
                                your files{' '}
                              </span>
                            </p>

                            <input
                              type="file"
                              name=""
                              id="file2"
                              onChange={uploadSecondFile}
                            />
                          </label>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className={Styles.number_of_units}>
                  <div className={Styles.common_header}>
                    <p>Enter the number of units you need?</p>
                    <Image
                      src={images.Info_Icon}
                      width={18}
                      height={18}
                      alt="info_icon"
                    />
                  </div>

                  <button>Price break</button>
                </div>
                <div className={Styles.input_data_required}>
                  <input
                    type="number"
                    placeholder={product?.column_1_qty}
                    name="orderQuantity"
                    value={orderQuantity}
                    onChange={setQuantity}
                    disabled
                    min={product?.column_1_qty}
                  />
                  <span>(minimum {+product?.column_1_qty} units required)</span>
                </div>
                <div className={Styles.select_size_quantity}>
                  <div className={Styles.common_header}>
                    <p>Select sizes quantity</p>
                    <Image
                      src={images.Info_Icon}
                      width={18}
                      height={18}
                      alt="info_icon"
                    />
                  </div>

                  <div className={Styles.inputs}>
                    <input
                      placeholder="S"
                      type="number"
                      name="S"
                      value={sizeQuantity.S}
                      onChange={handleQuantitySize}
                      min="0"
                    />
                    <input
                      placeholder="M"
                      type="number"
                      name="M"
                      value={sizeQuantity.M}
                      onChange={handleQuantitySize}
                      min="0"
                    />
                    <input
                      placeholder="L"
                      type="number"
                      name="L"
                      value={sizeQuantity.L}
                      onChange={handleQuantitySize}
                      min="0"
                    />
                    <input
                      placeholder="XL"
                      type="number"
                      name="XL"
                      value={sizeQuantity.XL}
                      onChange={handleQuantitySize}
                      min="0"
                    />
                  </div>
                </div>
                <div className={Styles.standard_business_section}>
                  <div className={Styles.common_header}>
                    <p>Production time</p>
                    <Image
                      src={images.Info_Icon}
                      width={18}
                      height={18}
                      alt="info_icon"
                    />
                  </div>

                  <p>Standard - 15 Business days</p>
                </div>
                <div className={Styles.standard_down_line}></div>
                <div className={Styles.price_section}>
                  <p>{`Price ${+price + +customisazionPrice}/unit`}</p>
                  <p>
                    $
                    {(orderQuantity * (+price + +customisazionPrice)).toFixed(
                      2
                    )}
                  </p>
                </div>
                <div className={Styles.add_to_bulk_container}>
                  <button onClick={handleAddToCart}>
                    Add to bulk estimate
                  </button>
                </div>
                <div className={Styles.total_estimate_container}>
                  <p className={Styles.total_estimate_container_text}>
                    Total estimate doesn't include taxes and shipping fees.
                    Payment is made after mockups are approved.
                  </p>
                </div>
                <div className={Styles.bottom_icons}>
                  <div className={Styles.container}>
                    <div className={Styles.content}>
                      <span>
                        <Image
                          src={images.Fast_Delivery_Icon}
                          width={30}
                          height={30}
                          alt="Fast_Delivery_Icon"
                        />
                      </span>
                      <span>Fast Delivery</span>
                    </div>
                    <div className={Styles.content}>
                      <span>
                        <Image
                          src={images.Replacement_Icon}
                          width={30}
                          height={30}
                          alt="Replacement_Icon"
                        />
                      </span>
                      <span>30 Days Replacement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  )
}

export default Product
