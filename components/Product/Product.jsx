import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import images from '../../constants/images'
import { useDispatch, useSelector } from 'react-redux'
import Styles from './Product.module.css'
import Loaders from '../../components/loaders/Loaders'
import Dot from '../custom-colored-dot/Dot'
// import { FaChevronLeft } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { setCartItems } from '../../redux-setup/cartSlice'
import { toast } from 'react-toastify'

const Product = ({ product, loading, error }) => {
  const dispatch = useDispatch()
  const [color, setColor] = useState('')
  const [ReadMore, setIsReadMore] = useState(false)
  const [orderQuantity, setOrderQuantity] = useState(+actualMinQty || 100)
  const [price, setPrice] = useState(0)
  const [uploadFirstLogo, setUploadFirstLogo] = useState('')
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
  const [priceWithoutCustomizations, setPriceWithoutCustomizations] =
    useState(0)
  const [actualMinQty, setActualMinQty] = useState(0)
  const [isItemInCart, setIsItemInCart] = useState(false)
  const country = useSelector((state) => state.country.country)

  let isProductIncludesltm_final = product?.ltm_final.includes('Y')
  let col1Price =
    country === 'usa'
      ? product?.column_1_retail_price_usd
      : product?.column_1_retail_price_cad
  let col2Price =
    country === 'usa'
      ? product?.column_2_retail_price_usd
      : product?.column_2_retail_price_cad
  let col3Price =
    country === 'usa'
      ? product?.column_3_retail_price_usd
      : product?.column_3_retail_price_cad
  let col4Price =
    country === 'usa'
      ? product?.column_4_retail_price_usd
      : product?.column_4_retail_price_cad
  let col5Price =
    country === 'usa'
      ? product?.column_5_retail_price_usd
      : product?.column_5_retail_price_cad
  let col1Qty = product?.column_1_qty
  let col2Qty = product?.column_2_qty
  let col3Qty = product?.column_3_qty
  let col4Qty = product?.column_4_qty
  let col5Qty = product?.column_5_qty
  let supplier_fee =
    country === 'usa' ? product?.supplier_fees_usd : product?.supplier_fees_cad
  let ltm_price = country === 'usa' ? product?.ltm_usd : product?.ltm_usd
  const getPrice = () => {
    if (isProductIncludesltm_final) {
      if (+orderQuantity < +product?.column_1_qty) {
        setPriceWithoutCustomizations(+col1Price + ltm_price / +orderQuantity)
      } else if (+orderQuantity > +product?.column_1_qty) {
        setPriceWithoutCustomizations(+col1Price + ltm_price / +orderQuantity)
        if (+orderQuantity < +col2Qty) {
          setPriceWithoutCustomizations(+col1Price)
        } else if (+orderQuantity < +col3Qty) {
          setPriceWithoutCustomizations(+col2Price)
        } else if (+orderQuantity < +col4Qty) {
          setPriceWithoutCustomizations(+col3Price)
        } else if (+orderQuantity < +col5Qty) {
          setPriceWithoutCustomizations(+col4Price)
        } else {
          setPriceWithoutCustomizations(+col5Price)
        }
      }
    } else {
      if (+orderQuantity < +col2Qty) {
        setPriceWithoutCustomizations(+col1Price)
      } else if (+orderQuantity < +col3Qty) {
        setPriceWithoutCustomizations(+col2Price)
      } else if (+orderQuantity < +col4Qty) {
        setPriceWithoutCustomizations(+col3Price)
      } else if (+orderQuantity < +col5Qty) {
        setPriceWithoutCustomizations(+col4Price)
      } else {
        setPriceWithoutCustomizations(+col5Price)
      }
    }
  }

  useEffect(() => {
    if (product) {
      let minQtyy = isProductIncludesltm_final
        ? +product?.column_1_qty / 2
        : +product?.column_1_qty
      setActualMinQty(Math.round(minQtyy))
    }
  }, [product])

  useEffect(() => {
    let total =
      +sizeQuantity.S + +sizeQuantity.M + +sizeQuantity.L + +sizeQuantity.XL
    setOrderQuantity(total > actualMinQty ? total : actualMinQty)
    getPrice()
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

  useEffect(() => {
    console.log('very poor')
  }, [])

  const customisazionPrice =
    custumize === 'Embroidery'
      ? 2
      : custumize === 'Full Color Decoration'
      ? 4
      : 0

  const handleAddToCart = (e) => {
    e.preventDefault()
    setCartState({
      quantity: orderQuantity,
      image: reqImageArray[0],
      heading: product?.product_description,
      price: price,
      id: product.id,
    })
    toast.success('Added to cart successfully')
    window.scrollTo({
      top: '0',
      left: '0',
      behavior: 'smooth',
    })
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

  useEffect(() => {
    document.body.classList.add('single_product_page')
  }, [])

  const updateImage = (index) => {
    // const selectedImage = productImages[index].url
    // setSingleImage(selectedImage)
  }

  const reqImageArray =
    country === 'usa' ? product?.images_us : product?.images_ca
  //  supplier_fees rc_mcq_source ltm_final

  // column_1_qty column_2_qty column_3_qty column_4_qty column_5_qty
  useEffect(() => {
    getPrice()
  }, [orderQuantity])

  console.log(priceWithoutCustomizations, 'priceWithoutCustomizations')

  console.log({
    isProductIncludesltm_final,
    ltm_price,
    col1Price,
    col2Price,
    col3Price,
    col4Price,
    col5Price,
  })

  console.log(product, 'productproduct')

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
                    {reqImageArray && reqImageArray.length > 0 && (
                      <Image
                        src={reqImageArray[0]}
                        width={400}
                        height={560}
                        alt="Single_Product_Image"
                        className={Styles.product_image}
                      />
                    )}
                  </div>
                  <div className={Styles.images_container}>
                    {reqImageArray?.map((image, index) => (
                      <>
                        <div className={Styles.product_Images}>
                          <Image
                            src={image}
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
                          <p>{data.product?.certBy}</p>
                        </div>
                      </>
                    ))}
                </div>

                <div className={Styles.title}>
                  <h4>{product?.product_title}</h4>
                </div>
                <div className={Styles.reviews}>
                  <div className={Styles.star_review}>
                    {/* <span className={Styles.star_review_images}>
                      {product?.emoji_ratings}
                    </span> */}
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
                {product?.colours.length > 0 ? (
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
                    <div className={Styles.colors_container}>
                      {product?.colours &&
                        Object.entries(product?.colours).map(
                          ([color, imageUrl]) => (
                            <>
                              <Dot color={color} imageUrl={imageUrl} />
                            </>
                          )
                        )}
                    </div>
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
                {/* <div className={Styles.para_text}>
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
                </div> */}
                {/* <div className={Styles.para_text}>
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
                </div> */}
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
                          <label
                            htmlFor="file1"
                            className={Styles.uploaded_content}
                          >
                            <p>
                              <span className={Styles.colorLight}>
                                Drop your
                              </span>
                              front
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
                    min={actualMinQty}
                  />
                  <span>(minimum {+actualMinQty} units required)</span>
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
                  <p>{`Price ${+priceWithoutCustomizations}/unit`}</p>
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
