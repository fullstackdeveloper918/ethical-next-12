import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import images from '../../constants/images'
import { useSelector } from 'react-redux'
import Styles from './Product.module.css'
import Loaders from '../../components/loaders/Loaders'
import Dot from '../custom-colored-dot/Dot'

const Product = ({ product, loading, error }) => {
  const [ReadMore, setIsReadMore] = useState(false)
  // const [imageUrl, setImageUrl] = useState(product?.image)
  const [orderQuantity, setOrderQuantity] = useState(
    +product?.column_1_qty || 200
  )
  const [price, setPrice] = useState(0)
  const [activeBtn, setActiveBtn] = useState(0)
  const [custumize, setCustomize] = useState('No Decoration')
  const [activeColor, setActiveColor] = useState()
  const [sizeQuantity, setSizeQuantity] = useState({
    S: 25,
    M: 25,
    L: 25,
    XL: 25,
  })

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
  console.log(product, 'product?.column_1_retail_price_usd')

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

  const colors = product?.colours?.split(',')

  const customizations = [
    'Embroidery',
    'Full Color Decoration',
    'No Decoration',
  ]
  console.log(typeof product?.image, 'undefined image')

  const Slides = [
    { id: 1, src: images.shirt_small },
    { id: 2, src: images.shirt_small },
    { id: 3, src: images.shirt_small },
    { id: 4, src: images.shirt_small },
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

  const imageUrl = product?.image

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
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        width={400}
                        height={560}
                        alt="Single_Product_Image"
                      />
                    )}
                  </div>
                  <div className={Styles.images_container}>
                    {Slides.map((img, index) => (
                      <>
                        <div className={Styles.img}>
                          <Image
                            src={img.src}
                            alt="Single_Product_Small_Images"
                            width={61}
                            height={81}
                          />
                        </div>
                      </>
                    ))}

                    {/* <div className={Styles.img}>
                      <Image
                        src={images.shirt_small}
                        alt="Single_Product_Small_Images"
                        width={61}
                        height={81}
                      />
                    </div> */}
                    {/* <div className={Styles.img}>
                      <Image
                        src={images.shirt_small}
                        alt="Single_Product_Small_Images"
                        width={61}
                        height={81}
                      />
                    </div> */}
                    {/* <div className={Styles.img}>
                      <Image
                        src={images.shirt_small}
                        alt="Single_Product_Small_Images"
                        width={61}
                        height={81}
                      />
                    </div> */}
                  </div>
                </div>
              </div>

              <div className={Styles.detail_page_right_section}>
                {product?.certBy && (
                  <div className={Styles.tag}>
                    <p>Certified B Corporation</p>
                  </div>
                )}
                <div className={Styles.title}>
                  <h4>{product?.title}</h4>
                </div>
                <div className={Styles.reviews}>
                  <div className={Styles.star_review}>
                    {/* <span className="star_review_images">
                 <Image
                   src={images.star}
                   width={20}
                   height={20}
                   alt="review_images"
                 />
             </span> */}
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
                    >
                      {ReadMore ? 'Read Less' : '...Read More'}
                    </span>
                  </p>
                </div>
                <div className={Styles.input_checkbox}>
                  <input type="checkbox" name="" id="" />
                  <span>Is this a sample ?</span>
                </div>
                <div className={Styles.select_color_section}>
                  <p>Select Color</p>
                  <div className={Styles.colors_container}>
                    {colors &&
                      colors.map((color, index) => (
                        <>
                          <Dot
                            color={color}
                            key={index}
                            activeColor={activeColor}
                            setActiveColor={setActiveColor}
                          />
                        </>
                      ))}
                  </div>
                </div>
                <div className={Styles.cart_left_swift}>
                  <p>Swift swag?</p>
                  <div className={Styles.cart_left_swift_content}>
                    <input type="checkbox" name="" id="" />
                    <p>
                      Checking this box will override the date selected above to
                      within 10 business days if you have gone through the Swift
                      Swag process. Please note additional charges will apply.
                    </p>
                  </div>
                </div>
                <div className={Styles.customization_text}>
                  <p>Select Customization</p>
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
                  <p>
                    How many areas of the product would you like to add a logo
                    to?
                  </p>
                  <input
                    type="number"
                    className={Styles.input}
                    placeholder="3"
                  />
                </div>
                <div className={Styles.para_text}>
                  <p>Select location from the dropdown below</p>
                  <div className={Styles.inputs}>
                    <div>
                      <input
                        type="checkbox"
                        id="html"
                        name="location"
                        value="HTML"
                      />
                        <label for="html">Front</label>
                    </div>
                    <div>
                       
                      <input
                        type="checkbox"
                        id="css"
                        name="location"
                        value="CSS"
                      />
                        <label for="css">Back</label>
                    </div>
                    <div>
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
                <div className={Styles.para_text}>
                  <p>Upload Logo/ Artwork (.AI or .EPS vector format)</p>
                  <div className={Styles.upload_logo}>
                    <label htmlFor="file">
                      <p> Drop your front design</p>
                      <p>or browse your files</p>
                      <input type="file" name="" id="file" />
                    </label>
                    <label htmlFor="file">
                      <p>Drop your back design</p>
                      <p>or browse your files</p>
                      <input type="file" name="" id="file" />
                    </label>
                  </div>
                </div>
                <div className={Styles.number_of_units}>
                  <p>Enter the number of units you need?</p>
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
                  <p>Select sizes quantity</p>
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
                    {/* {product?.product_dimensions?.sizes === null &&
                      product?.product_dimensions?.other} */}
                  </div>
                </div>
                <div className={Styles.standard_business_section}>
                  <p>Production time</p>
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
                  <button>Add to bulk estimate</button>
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
