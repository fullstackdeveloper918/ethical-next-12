import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import images from '../../constants/images'
import { useDispatch, useSelector } from 'react-redux'
import Styles from './Product.module.css'
import Loaders from '../../components/loaders/Loaders'
import Dot from '../custom-colored-dot/Dot'
import { RxCross2 } from 'react-icons/rx'
import { setCartItems, setProductLogo } from '../../redux-setup/cartSlice'
import { toast } from 'react-toastify'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { CiSearch } from 'react-icons/ci'
import { CiShare2 } from 'react-icons/ci'

// import '../../global.css'
import {
  setDecorationItemObjSingleProductPage,
  setFinalDecorationKeyVal,
} from 'redux-setup/randomSlice'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import EmojiModal from '../EmojiModal/EmojiModal'
import { useRouter } from 'next/router'
import Share from '../Share/Share'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
}

const Product = ({ product, loading, error, productID }) => {
  const dispatch = useDispatch()
  const [openEmoji, setOpenEmoji] = useState(false)
  const [ReadMore, setIsReadMore] = useState(false)
  const [shareIcons, setShareIcons] = useState(false)
  const [uploadFirstLogo, setUploadFirstLogo] = useState('')
  const [selectedCustomization, setSelectedCustomization] = useState()
  const [choosenCustomization, setChoosenCustomization] = useState(null)
  const [actualMinQty, setActualMinQty] = useState(0)
  const [imagesArray, setImagesArray] = useState([])
  const [singleImage, setSingleImage] = useState('')
  const [nameOfDecorations, setNameOfDecorations] = useState([])
  const [sizeNotSure, setSizeNotSure] = useState(false)
  const [isSample, setIsSample] = useState(false)
  const [swiftSwag, setSwiftSwag] = useState(false)
  const [selectedColor, setSelectedColor] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [cartItemsSwiftSwag, setCartItemsSwiftSwag] = useState()
  const [priceWithoutCustomizations, setPriceWithoutCustomizations] =
    useState(0)
  const [customizationPrice, setCustomizationPrice] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [sizeQuantity, setSizeQuantity] = useState({
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
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
    isSample: false,
    swiftSwag: false,
    SizeQuantityS: 0,
    SizeQuantityM: 0,
    SizeQuantityL: 0,
    SizeQuantityXL: 0,
  })

  const handleQuantity = (e) => {
    const value = parseInt(e.target.value)
    setQuantity(value)
  }

  useEffect(() => {
    const sizes = Object.keys(sizeQuantity)
    const sizePriorities = {
      M: 40,
      L: 35,
      XL: 25,
      S: 10,
    }

    const totalPriorityQuantity = Object.values(sizePriorities).reduce(
      (acc, curr) => acc + curr,
      0
    )

    const updatedSizeQuantity = {}
    sizes.forEach((size) => {
      updatedSizeQuantity[size] = Math.round(
        (sizePriorities[size] / totalPriorityQuantity) * quantity
      )
    })
    setSizeQuantity(updatedSizeQuantity)
  }, [quantity])

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

  let ltm_price =
    country === 'usa'
      ? product?.ltm_usd
        ? product?.ltm_usd.replace(/[^\d]/g, '')
        : 0
      : product?.ltm_cad
      ? product?.ltm_cad.replace(/[^\d]/g, '')
      : 0
  let supplierFees =
    country === 'usa' ? product?.supplier_fees_usd : product?.supplier_fees_cad
  const getPrice = () => {
    if (isProductIncludesltm_final) {
      if (+quantity < +product?.column_1_qty) {
        setPriceWithoutCustomizations(+col1Price + ltm_price / +quantity)
      } else if (+quantity < +col2Qty) {
        setPriceWithoutCustomizations(+col1Price)
      } else if (+quantity < +col3Qty) {
        setPriceWithoutCustomizations(+col2Price)
      } else if (+quantity < +col4Qty) {
        setPriceWithoutCustomizations(+col3Price)
      } else if (+quantity < +col5Qty) {
        setPriceWithoutCustomizations(+col4Price)
      } else {
        setPriceWithoutCustomizations(+col5Price)
      }
    } else {
      if (+quantity < +col2Qty) {
        setPriceWithoutCustomizations(+col1Price)
      } else if (+quantity < +col3Qty) {
        setPriceWithoutCustomizations(+col2Price)
      } else if (+quantity < +col4Qty) {
        setPriceWithoutCustomizations(+col3Price)
      } else if (+quantity < +col5Qty) {
        setPriceWithoutCustomizations(+col4Price)
      } else {
        setPriceWithoutCustomizations(+col5Price)
      }
    }
  }
  useEffect(() => {
    if (isSample) {
      setQuantity(3)
    } else if (product && actualMinQty && !isSample) {
      setQuantity(actualMinQty)
    }
  }, [product, actualMinQty, isSample])
  useEffect(() => {
    if (product) {
      getPrice()
    }
  }, [quantity, totalPrice, product, customizationPrice])

  useEffect(() => {
    if (product) {
      let minQtyy = isProductIncludesltm_final
        ? +product?.column_1_qty / 2
        : +product?.column_1_qty
      setActualMinQty(Math.round(minQtyy))
    }
  }, [product])

  useEffect(() => {
    if (openEmoji) {
      document.documentElement.classList.add('open_emoji')
    } else {
      document.documentElement.classList.remove('open_emoji')
    }
  }, [openEmoji])

  // let handleQuantitySize = (e) => {
  //   if (e.target.value < 0) {
  //     setSizeQuantity((prev) => ({
  //       ...prev,
  //       [e.target.name]: 0,
  //     }))
  //   } else {
  //     setSizeQuantity((prev) => ({
  //       ...prev,
  //       [e.target.name]: e.target.value,
  //     }))
  //   }
  //   setQuantity(sizeQuantity)
  // }

  const handleQuantitySize = (e) => {
    let newSizeQuantity
    if (e.target.value < 0) {
      newSizeQuantity = {
        ...sizeQuantity,
        [e.target.name]: 0,
      }
    } else {
      newSizeQuantity = {
        ...sizeQuantity,
        [e.target.name]: parseInt(e.target.value),
      }
    }
    setSizeQuantity(newSizeQuantity)

    // Calculate total quantity
    const totalQuantity = Object.values(newSizeQuantity).reduce(
      (acc, curr) => acc + parseInt(curr),
      0
    )
    setQuantity(totalQuantity)
  }

  const uploadFirstFile = (event) => {
    setUploadFirstLogo(event.target.files[0])
    dispatch(setProductLogo(event.target.files[0]))
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
      if (quantity < +val.qty_rc_2) {
        price = +price1
      } else if (quantity < +val.qty_rc_3) {
        price = +price2
      } else if (quantity < +val.qty_rc_4) {
        price = +price3
      } else if (quantity < +val.qty_rc_5) {
        price = +price4
      } else {
        price = +price5
      }

      let finalCustomPrice = retailSetup / quantity + price
      setCustomizationPrice(finalCustomPrice)
    } else {
      if (quantity < col2Qty) {
        price = +price1
      } else if (quantity < col3Qty) {
        price = +price2
      } else if (quantity < col4Qty) {
        price = +price3
      } else if (quantity < col5Qty) {
        price = +price4
      } else {
        price = +price5
      }
      setCustomizationPrice(price)
    }
  }
  const handleAddToCart = (e) => {
    e.preventDefault()
    if (cartItemsSwiftSwag === null || cartItemsSwiftSwag === swiftSwag) {
      setCartState({
        quantity: quantity,
        image: imagesArray && imagesArray.length > 0 && imagesArray[0],
        heading: product?.product_description,
        pricePerUnit: totalPrice === Infinity ? 0 : totalPrice.toFixed(2),
        id: product.id,
        logoImg: uploadFirstLogo,
        colours: selectedColor,
        customization: choosenCustomization,
        totalPrice: quantity * +totalPrice,
        isSample: isSample,
        swiftSwag: swiftSwag,
      })
      dispatch(
        setCartItems({
          quantity: quantity,
          image: imagesArray && imagesArray.length > 0 && imagesArray[0],
          heading: product?.product_description,
          pricePerUnit: totalPrice === Infinity ? 0 : totalPrice.toFixed(2),
          id: product.id,
          logoImg: uploadFirstLogo,
          colours: selectedColor,
          customization: choosenCustomization,
          totalPrice: quantity * +totalPrice,
          isSample: isSample,
          swiftSwag: swiftSwag,
        })
      )
      toast.success('Added to cart successfully')
      window.scrollTo({
        top: '0',
        left: '0',
        behavior: 'smooth',
      })
    } else {
      toast.error(
        'You cannot add swift swag products with non swift swag products'
      )
    }
  }

  useEffect(() => {
    document.body.classList.add('single_product_page')
  }, [])

  const updateImage = (item) => {
    setSingleImage(item)
  }
  useEffect(() => {
    if (imagesArray && imagesArray.length > 0) {
      setSingleImage(imagesArray[0])
    }
  }, [imagesArray])

  useEffect(() => {
    if (product) {
      setImagesArray(
        country === 'usa' ? product?.images_us : product?.images_ca
      )
      setSingleImage(
        country === 'usa'
          ? product?.images_us &&
              product?.images_us?.length > 0 &&
              product?.images_us[0]
          : product?.images_ca &&
              product?.images_ca?.length > 0 &&
              product?.images_ca[0]
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
  useEffect(() => {
    if (cartItems.length == 0) {
      setCartItemsSwiftSwag(null)
    } else if (cartItems.length > 0) {
      setCartItemsSwiftSwag(cartItems[0].swiftSwag)
    }
  }, [cartItems])

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
                  <div className={Styles.icon_wrapper}>
                    {/* <div className={Styles.border_svg}>
                      <MdOutlineFavoriteBorder
                        fontSize={25}
                        className={Styles.icon}
                      />
                    </div> */}
                    {/* <div className={Styles.border_svg}>
                      <Image src={images.ZooomSvg} className={Styles.icon} />
                    </div> */}
                    <div className={Styles.border_svg}>
                      <CiShare2
                        fontSize={25}
                        // color="#D3D3D3"
                        className={Styles.icon}
                        onClick={() => setShareIcons(true)}
                      />
                    </div>
                  </div>
                  <div className={Styles.detail_page_image_content}>
                    <div className={Styles.product_big_image}>
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
                  </div>
                  {imagesArray && imagesArray.length > 0 && (
                    <div className={Styles.margin_top}>
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
                        arrows={true}
                        keyBoardControl={true}
                        customTransition="all .5s"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={['tablet', 'mobile']}
                        // deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        slidesToSlide={2}
                        className={Styles.product_slider}
                      >
                        {imagesArray &&
                          imagesArray?.length > 0 &&
                          imagesArray?.map((item, index) => (
                            <div
                              style={{
                                border:
                                  singleImage === item
                                    ? '1px solid #a2d061'
                                    : '',
                              }}
                              className={Styles.add_color}
                            >
                              <Image
                                src={item}
                                width={100}
                                height={100}
                                alt="product_image"
                                style={{
                                  cursor: 'pointer',
                                }}
                                onClick={() => updateImage(item)}
                                className={Styles.product_images}
                              />
                            </div>
                          ))}
                      </Carousel>
                    </div>
                  )}
                </div>
              </div>

              <div className={Styles.detail_page_right_section}>
                <div className={Styles.page_right_content}>
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

                    {/* <div className={Styles.reviews}>
                    <div className={Styles.star_review}>
                      <span className={Styles.star_review_images}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          
                        </div>
                      </span>
                    </div> */}
                    {/* <div className={Styles.text_review}>
                    <span className={Styles.text_review_content}>
                    527 Reviews
                    </span>
                  </div> */}
                    {/* </div> */}
                  </div>
                  <div className={Styles.reviews}>
                    <h4>527 Reviews </h4>
                    <span className={Styles.emoji_left_border}>
                      {product?.emoji_ratings &&
                        Object.entries(product?.emoji_ratings).map(
                          ([key, value]) => (
                            <>
                              <span>{value}</span>
                            </>
                          )
                        )}
                    </span>
                    <Image
                      src={images.Info_svg}
                      width={20}
                      height={20}
                      alt="info icon"
                      onClick={() => setOpenEmoji(true)}
                    />
                  </div>
                  <div className={Styles.text_content}>
                    {product?.product_description?.length < 200 ? (
                      <p>{product?.product_description}</p>
                    ) : (
                      <p>
                        {ReadMore
                          ? product?.product_description
                          : product?.product_description.slice(0, 200)}
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
                    <div className={Styles.centering}>
                      <label className={Styles.switch}>
                        <input
                          type="checkbox"
                          name="sample"
                          id="sample"
                          checked={isSample} //setSizeNotSure
                          onChange={() => setIsSample(!isSample)}
                        />
                        <span className={Styles.slider}></span>{' '}
                      </label>
                    </div>
                    <p> This is a sample checkbox</p>
                  </div>
                  {product?.colours ? (
                    <div className={Styles.select_color_section}>
                      <div className={Styles.common_header}>
                        <h6>Select Color</h6>
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
                              <Dot
                                color={color}
                                imageUrl={imageUrl}
                                setSelectedColor={setSelectedColor}
                                selectedColor={selectedColor}
                                productID={productID}
                                fromSingleProduct
                              />
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
                        <h6>Swift Swag</h6>
                        <Image
                          src={images.Info_Icon}
                          width={18}
                          height={18}
                          alt="info_icon"
                        />
                      </div>
                      <div className={Styles.cart_left_swift_content}>
                        <div className={Styles.custom_checkbox}>
                          <input
                            type="checkbox"
                            name="swift_swag"
                            id="swift_swag"
                            checked={swiftSwag}
                            onChange={() => setSwiftSwag(!swiftSwag)}
                          />
                          <label htmlFor="swift_swag">
                            Checking this box will override the date selected
                            above to within 10 business days if you have gone
                            through the Swift Swag process. Please note
                            additional charges will apply.
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                  {!isSample && Object.keys(finalDecorationKeyVal).length > 0 && (
                    <>
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
                                    {val?.decoration_type &&
                                      JSON.parse(val?.decoration_type)}
                                  </p>
                                )
                            )}
                        </div>
                      </div>
                    </>
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
                  {!isSample && (
                    <div className={Styles.para_text}>
                      <div className={Styles.common_header}>
                        <p className={Styles.font_weight}>
                          Upload Logo/ Artwork{' '}
                          <span className={Styles.fw400}>
                            (.AI, .svg, .jpg, .ai,image/jpeg, image/png, .pdf or
                            .EPS vector format)
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
                              <div className={Styles.position_relative}>
                                <Image
                                  src={URL.createObjectURL(uploadFirstLogo)}
                                  width={150}
                                  height={150}
                                />
                                <RxCross2
                                  onClick={() => removeLogo(setUploadFirstLogo)}
                                  className={Styles.cross_logo}
                                />
                              </div>
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
                                  <span className={Styles.colorLight}>
                                    design
                                  </span>
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
                                  accept=".svg,.jpg,.jpeg .eps, .cdr, .ai, .pdf, image/svg+xml, application/postscript, application/pdf,image/jpeg, image/png"
                                  onChange={uploadFirstFile}
                                />
                              </label>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className={Styles.border_top}>
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
                        // placeholder={product?.column_1_qty}
                        name="orderQuantity"
                        // value={isSample ? '3' : quantity}
                        value={quantity}
                        onChange={handleQuantity}
                        onBlur={(e) => {
                          if (isSample) {
                            quantity < 3 && quantity > 0
                              ? setQuantity(quantity)
                              : setQuantity(3)
                          } else if (!isSample && quantity < actualMinQty) {
                            setQuantity(actualMinQty)
                          }
                        }}
                      />
                      {isSample ? (
                        <span>(maximum 3 units allowed for sample)</span>
                      ) : (
                        <span>(minimum {+actualMinQty} units required)</span>
                      )}
                    </div>
                  </div>
                  <div className={Styles.select_size_quantity}>
                    {sizeNotSure || isSample ? (
                      ''
                    ) : (
                      <>
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
                                  value={sizeQuantity[key]}
                                  onChange={handleQuantitySize}
                                  min="0"
                                />
                              </div>
                            </>
                          ))}
                        </div>
                      </>
                    )}
                    {/* <div className={Styles.custom_checkbox}> */}
                    {/* <input
                      type="checkbox"
                      id="sizeCheckbox"
                      checked={sizeNotSure} //setSizeNotSure
                      onChange={() => setSizeNotSure(!sizeNotSure)}
                    />
                    <label htmlFor="sizeCheckbox">
                      {' '}
                      Not sure about size yet
                    </label> */}
                    {!isSample && (
                      <div className={Styles.flex_row}>
                        <div className={Styles.centering}>
                          <label
                            htmlFor="sizeCheckbox"
                            className={Styles.switch}
                          >
                            <input
                              type="checkbox"
                              id="sizeCheckbox"
                              checked={sizeNotSure} //setSizeNotSure
                              onChange={() => setSizeNotSure(!sizeNotSure)}
                            />
                            <span className={Styles.slider}></span>{' '}
                          </label>
                        </div>
                        <p> I don’t have sizes yet</p>
                      </div>
                    )}
                  </div>
                </div>
                {/* </div> */}
                <div className={Styles.position_sticky}>
                  {/* <div className={Styles.standard_down_line}></div> */}
                  <div className={Styles.sticky_bottom}>
                    <div className={Styles.business_box}>
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

                        <p>
                          <strong>Standard</strong> - 15{' '}
                          <strong>Business days</strong>
                        </p>
                      </div>

                      <div className={Styles.price_section}>
                        {!isSample && (
                          <p>{`Price ${
                            totalPrice === Infinity ? 0 : totalPrice.toFixed(2)
                          }/unit`}</p>
                        )}
                        <p>
                          $
                          {isSample
                            ? (3 * col1Price).toFixed(2)
                            : (quantity * +totalPrice).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className={Styles.add_to_bulk_container}>
                      <button onClick={handleAddToCart}>
                        Add to bulk estimate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
      {openEmoji && (
        <EmojiModal EmojiModal={EmojiModal} setOpenEmoji={setOpenEmoji} />
      )}
      {shareIcons && (
        <>
          <Share setShareIcons={setShareIcons} item={product} />
        </>
      )}
    </>
  )
}

export default Product
