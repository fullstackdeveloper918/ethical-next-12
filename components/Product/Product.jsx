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
import {
  setDecorationItemObjSingleProductPage,
  setFinalDecorationKeyVal,
} from 'redux-setup/randomSlice'

const Product = ({ product, loading, error }) => {
  const dispatch = useDispatch()
  const [ReadMore, setIsReadMore] = useState(false)
  const [orderQuantity, setOrderQuantity] = useState(+actualMinQty || 50)
  const [price, setPrice] = useState(0)
  const [uploadFirstLogo, setUploadFirstLogo] = useState('')
  const [selectedCustomization, setSelectedCustomization] = useState()
  const [choosenCustomization, setChoosenCustomization] = useState(null)
  console.log(choosenCustomization, 'choosenCustomization')
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
    logoImg: null,
    colours: null,
    customization: null,
  })
  const [priceWithoutCustomizations, setPriceWithoutCustomizations] =
    useState(0)
  const [customizationPrice, setCustomizationPrice] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [actualMinQty, setActualMinQty] = useState(0)
  const [isItemInCart, setIsItemInCart] = useState(false)
  const [imagesArray, setImagesArray] = useState([])
  const [singleImage, setSingleImage] = useState(imagesArray[0])
  const [nameOfDecorations, setNameOfDecorations] = useState([])
  const [sizeNotSure, setSizeNotSure] = useState(true)
  const country = useSelector((state) => state.country.country)
  const cartItems = useSelector((state) => state.cart.cartItems)
  const decorations = useSelector(
    (state) => state.random.decorationItemObjSingleProductPage
  )

  const finalDecorationKeyVal = useSelector(
    (state) => state.random.finalDecorationKeyVal
  )

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

  let ltm_price = country === 'usa' ? product?.ltm_usd : product?.ltm_cad
  let supplierFees =
    country === 'usa' ? product?.supplier_fees_usd : product?.supplier_fees_cad
  const getPrice = () => {
    if (isProductIncludesltm_final) {
      if (+orderQuantity < +product?.column_1_qty) {
        setPriceWithoutCustomizations(+col1Price + ltm_price / +orderQuantity)
      } else if (+orderQuantity < +col2Qty) {
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
      getPrice()
    }
  }, [orderQuantity, totalPrice, product, customizationPrice])

  useEffect(() => {
    if (product) {
      let minQtyy = isProductIncludesltm_final
        ? +product?.column_1_qty / 2
        : +product?.column_1_qty
      setActualMinQty(Math.round(minQtyy))
    }
  }, [product])

  useEffect(() => {
    if (sizeNotSure) {
      setSizeQuantity((prev) => ({
        ...prev,
        S: 0,
        M: 0,
        L: 0,
        XL: 0,
      }))
    } else {
      setSizeQuantity((prev) => ({
        ...prev,
        S: 3,
        M: 3,
        L: 3,
        XL: +actualMinQty - 9,
      }))
    }
  }, [sizeNotSure])

  useEffect(() => {
    if (product) {
      let total =
        +sizeQuantity.S + +sizeQuantity.M + +sizeQuantity.L + +sizeQuantity.XL
      setOrderQuantity(total > actualMinQty ? total : actualMinQty)
    }
  }, [sizeQuantity, product])

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

  const uploadFirstFile = (event) => {
    setUploadFirstLogo(event.target.files[0])
  }

  const removeLogo = (state) => {
    setUploadFirstLogo('')
  }

  const selectCustomizations = (index, key, val) => {
    const obj = {}
    obj.key = val
    setChoosenCustomization(obj)
    let price1 = country === 'usa' ? val.rc_usa_1 : val.rc_cad_1
    let price2 = country === 'usa' ? val.rc_usa_2 : val.rc_cad_2
    let price3 = country === 'usa' ? val.rc_usa_3 : val.rc_cad_3
    let price4 = country === 'usa' ? val.rc_usa_4 : val.rc_cad_4
    let price5 = country === 'usa' ? val.rc_usa_5 : val.rc_cad_5
    let retailSetup =
      country === 'usa' ? val.retail_setup_usd : val.retail_setup_cad

    setSelectedCustomization(index)

    let IsRcSourceIncluded = product.rc_mcq_source == 'Supplier Fees'
    let price = 0
    if (IsRcSourceIncluded) {
      if (orderQuantity < +val.qty_rc_2) {
        price = +price1
      } else if (orderQuantity < +val.qty_rc_3) {
        price = +price2
      } else if (orderQuantity < +val.qty_rc_4) {
        price = +price3
      } else if (orderQuantity < +val.qty_rc_5) {
        price = +price4
      } else {
        price = +price5
      }

      let finalCustomPrice = retailSetup / orderQuantity + price
      setCustomizationPrice(finalCustomPrice)
    } else {
      if (orderQuantity < col2Qty) {
        price = +price1
      } else if (orderQuantity < col3Qty) {
        price = +price2
      } else if (orderQuantity < col4Qty) {
        price = +price3
      } else if (orderQuantity < col5Qty) {
        price = +price4
      } else {
        price = +price5
      }
      setCustomizationPrice(price)
    }
  }
  const handleAddToCart = (e) => {
    e.preventDefault()
    setCartState({
      quantity: orderQuantity,
      image: setImagesArray[0],
      heading: product?.product_description,
      price: price,
      id: product.id,
      logoImg: uploadFirstLogo,
      colours: product?.colours,
      customization: choosenCustomization,
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

  const checkFromCart = () => {
    const idToFind = product.id
    const existingItemIndex = cartItems.find((item) => item.id === idToFind)
    if (existingItemIndex) {
      setIsItemInCart(existingItemIndex)
      setOrderQuantity(existingItemIndex.quantity)
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
    setSingleImage(imagesArray[index])
  }

  useEffect(() => {
    if (product) {
      setImagesArray(
        country === 'usa' ? product?.images_us : product?.images_ca
      )
      setSingleImage(
        country === 'usa'
          ? product?.images_us && product?.images_us[0]
          : product?.images_ca[0]
      )
    }
  }, [product])
  useEffect(() => {
    if (product) {
      let empt = []
      dispatch(setDecorationItemObjSingleProductPage(supplierFees))

      supplierFees &&
        Object.entries(supplierFees).map(([key, value]) => empt.push(value))
      let ab = empt.flat(50)
      let nameOfDecorations = []
      for (let i = 0; i < ab.length; i++) {
        const element = ab[i]
        nameOfDecorations.push(element && element?.decoration_type)
      }
      setNameOfDecorations(nameOfDecorations)
      {
        !supplierFees && setNameOfDecorations()
      }
    }
  }, [product])

  let setDecorations = () => {
    if (decorations && Object.keys(decorations).length > 0) {
      let objj = {}
      Object.entries(decorations).map(([key, value]) => {
        objj[key] = value[0]
      })
      dispatch(setFinalDecorationKeyVal(objj))
    } else {
      dispatch(setFinalDecorationKeyVal({}))
    }
  }
  useEffect(() => {
    if (product) {
      setDecorations()
    }
  }, [product])

  useEffect(() => {
    let TotalPrice = customizationPrice + priceWithoutCustomizations
    setTotalPrice(TotalPrice)
  }, [customizationPrice, priceWithoutCustomizations])
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
                        style={{ mixBlendMode: 'color-burn' }}
                        alt="Single_Product_Image"
                        className={Styles.product_image}
                      />
                    )}
                  </div>
                  <div className={Styles.images_container}>
                    {imagesArray &&
                      imagesArray?.map((image, index) => (
                        <>
                          <div
                            className={Styles.product_Images}
                            style={{
                              border:
                                singleImage === image ? '1px solid black' : '',
                            }}
                          >
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
                          <p>{data}</p>
                        </div>
                      </>
                    ))}
                </div>

                <div className={Styles.title}>
                  <h4>{product?.product_title}</h4>
                  <div className={Styles.reviews}>
                    <div className={Styles.star_review}>
                      <span className={Styles.star_review_images}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          {product?.emoji_ratings &&
                            Object.entries(product?.emoji_ratings).map(
                              ([key, value]) => <div>{value}</div>
                            )}
                        </div>
                      </span>
                    </div>
                    {/* <div className={Styles.text_review}>
                    <span className={Styles.text_review_content}>
                    527 Reviews
                    </span>
                  </div> */}
                  </div>
                </div>
                <div className={Styles.text_content}>
                  {product?.product_description?.length < 450 ? (
                    <p>{product?.product_description}</p>
                  ) : (
                    <p>
                      {ReadMore
                        ? product?.product_description
                        : product?.product_description.slice(0, 450)}
                      <span
                        className={Styles.read_more}
                        onClick={() => setIsReadMore(!ReadMore)}
                        style={{ cursor: 'pointer' }}
                      >
                        {ReadMore ? 'Read Less' : '...Read More'}
                      </span>
                    </p>
                  )}
                </div>
                <div className={Styles.input_checkbox}>
                  <div className={Styles.custom_checkbox}>
                    <input type="checkbox" name="services" id="sample" />
                    <label for="sample" className={Styles.marinSpace}>
                      Is this a sample?
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
                    <div className={Styles.colors_container}>
                      {product?.colours &&
                        Object.entries(product?.colours).map(
                          ([color, imageUrl]) => (
                            <Dot color={color} imageUrl={imageUrl} />
                          )
                        )}
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {product?.swift_tag == 1 && (
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
                          Checking this box will override the date selected
                          above to within 10 business days if you have gone
                          through the Swift Swag process. Please note additional
                          charges will apply.
                        </label>
                      </div>
                    </div>
                  </div>
                )}
                {Object.keys(finalDecorationKeyVal).length > 0 && (
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
                      {finalDecorationKeyVal &&
                        Object.keys(finalDecorationKeyVal).length > 0 &&
                        Object.entries(finalDecorationKeyVal).map(
                          ([key, val], index) =>
                            val !== undefined && (
                              <p
                                className={`${Styles.btn} ${
                                  selectedCustomization === index
                                    ? Styles.active
                                    : ''
                                }`}
                                onClick={() =>
                                  selectCustomizations(index, key, val)
                                }
                              >
                                {val && JSON.parse(val?.decoration_type)}
                              </p>
                            )
                        )}
                    </div>
                  </div>
                )}
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
                            className={Styles.cross_logo}
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
                              accept="image/*"
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
                    onChange={(e) => setOrderQuantity(e.target.value)}
                    disabled={!sizeNotSure}
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
                    {Object.keys(sizeQuantity).map((key) => (
                      <>
                        <div className={Styles.size_div}>
                          <label htmlFor="">{key}</label>
                          <input
                            placeholder={key}
                            type="number"
                            name={key}
                            value={sizeNotSure ? 0 : sizeQuantity[key]}
                            onChange={handleQuantitySize}
                            min="0"
                            disabled={sizeNotSure}
                          />
                        </div>
                      </>
                    ))}
                  </div>
                  <div className={Styles.custom_checkbox}>
                    <input
                      type="checkbox"
                      id="sizeCheckbox"
                      checked={sizeNotSure} //setSizeNotSure
                      onChange={() => setSizeNotSure(!sizeNotSure)}
                    />
                    <label htmlFor="sizeCheckbox">
                      {' '}
                      Not sure about size yet
                    </label>
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
                  <p>{`Price ${
                    totalPrice ? totalPrice.toFixed(2) : 0
                  }/unit`}</p>

                  <p>${(orderQuantity * +totalPrice).toFixed(2)}</p>
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
