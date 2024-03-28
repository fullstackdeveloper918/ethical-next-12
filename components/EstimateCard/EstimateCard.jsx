import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { GrEdit } from 'react-icons/gr'
import Styles from './EstimateCard.module.css'
import { toast } from 'react-toastify'
import images from '../../constants/images'
import {
  deleteCartItem,
  deleteAllCartItems,
  setStep2State,
  setOrderPlaced,
} from '../../redux-setup/cartSlice'
import useFetch from '../../lib/useFetch'
import { PDFViewer, pdf } from '@react-pdf/renderer'
import Card from '@components/dummy/Card'
import { saveAs } from 'file-saver'
import { convertToObject } from 'typescript'
// import { addOrders } from '../../redux-setup/ordersSlice'

const EstimateCard = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [totalCartPrice, setTotalCartPrice] = useState(0)

  const step1State = useSelector((state) => state.cart.step1State)
  const step2State = useSelector((state) => state.cart.step2State)
  const cartItems = useSelector((state) => state.cart.cartItems)
  const productLogo = useSelector((state) => state.cart.productLogo)

  const userId = useSelector((state) => state.auth.userId)
  const handleDelete = (val) => {
    dispatch(deleteCartItem(val))
  }
  let addressArr = [step2State]
  let data = [step1State, addressArr, cartItems, { userId: userId }]
  const [loadQuery, { response, loading, error }] = useFetch(
    `/bulkestimate/${userId}`,
    {
      method: 'post',
    },
    'formdata'
  )

  const handleSubmit = () => {
    if (!userId) {
      toast.error('Please login to submit estimate', {
        position: 'top-center',
      })
    } else if (!step1State && !setStep2State) {
      toast.error('Please complete all steps to submit.', {
        position: 'top-center',
      })
    } else if (cartItems.length === 0) {
      toast.error('Please add something in your cart to place order', {
        position: 'top-center',
      })
    } else {
      const formData = new FormData()

      cartItems.forEach((item, index) => {
        Object.keys(item).forEach((key) => {
          if (key === 'logoImg') {
            formData.append(`${key}_${index}`, item[key])
          }
        })
      })

      formData.append('cartItems', JSON.stringify(cartItems))
      formData.append('step1State', JSON.stringify(step1State))
      formData.append('address', JSON.stringify(addressArr[0]))
      formData.append('userId', userId)

      loadQuery(formData)
    }
  }

  useEffect(() => {
    if (response) {
      console.log(response, 'response')
      toast.success('Your request has been submmitted successfully')
      dispatch(setOrderPlaced(response?.data))
      dispatch(deleteAllCartItems())
      router.push('/thank-you')
    }
  }, [response])

  useEffect(() => {
    if (cartItems.length > 0) {
      const totalPriceSum = cartItems.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.totalPrice
      }, 0)
      setTotalCartPrice(totalPriceSum)
    }
  }, [cartItems])

  const downLoadPdf = async () => {
    const blob = await pdf(<Card />).toBlob()
    saveAs(blob, 'untitled.pdf')
  }
  return (
    <>
      <div className={Styles.estimate_wrapper}>
        <h3 className={Styles.estimate_title}>Estimate</h3>
        <div className={Styles.estimate_horizontal_line}></div>
        <div className={Styles.estimate_container}>
          <div className={Styles.estimate_container_top}>
            {cartItems.length > 0 ? (
              <>
                <div className="">
                  {cartItems.map((item, index) => (
                    <div className={Styles.estimate_content} key={item.id}>
                      <div
                        className={Styles.estimate_content_imgContent}
                        style={{ cursor: 'pointer' }}
                      >
                        <Image
                          src={item.image ? item.image : images.cart_image}
                          width={49}
                          height={66}
                          alt="product_image"
                        />
                      </div>
                      <div className={Styles.estimate_content_textContent}>
                        <h4
                          className={Styles.title}
                          style={{ cursor: 'pointer' }}
                        >
                          {item?.heading?.slice(0, 70)}
                        </h4>
                        <span className={Styles.price}>
                          Price : Starting at ${item.pricePerUnit}
                        </span>
                        <div className={Styles.amountwrapper}>
                          <div className={Styles.amountContainer}>
                            <div>{item.quantity}</div>
                          </div>
                          <div className="">
                            <button
                              style={{ cursor: 'pointer', marginLeft: '5px' }}
                              onClick={() => handleDelete(item.id)}
                            >
                              <Image
                                src={images.delete_icon}
                                width={14}
                                height={16}
                                alt="delete_icon"
                              />
                            </button>
                            <button
                              style={{ marginLeft: '15px', color: '#A2D061' }}
                              onClick={() => router.push(`/product/${item.id}`)}
                              type="button"
                            >
                              <GrEdit />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={Styles.estimate_container_bottom}>
                  <div className={Styles.estimate_horizontal_line}></div>
                  <div className={Styles.total_amount_container}>
                    <span className={Styles.text}>Total Estimate</span>
                    <span className={Styles.price}>
                      ${totalCartPrice.toFixed(2)}
                    </span>
                  </div>
                  <button
                    className={Styles.estimate_bottom_btn}
                    type="button"
                    onClick={downLoadPdf}
                  >
                    Save a .pdf for later
                  </button>
                  <button
                    className={Styles.estimate_bottom_btn}
                    onClick={handleSubmit}
                  >
                    Submit Estimate Request
                  </button>
                  <>
                    <div>
                      <p>
                        Total estimate doesn't include taxes and shipping fees.
                        Payment is made after mockups are approved.
                      </p>
                    </div>
                  </>
                  <div className={Styles.estimate_clear_content}>
                    <button
                      className={Styles.estimate_clear_btn}
                      onClick={() => dispatch(deleteAllCartItems())}
                    >
                      Clear Orders
                    </button>
                  </div>
                  <div style={{ height: '0px', overflow: 'hidden' }}>
                    <div id="invoice-container">
                      <PDFViewer height={1000} width={2000}>
                        <Card />
                      </PDFViewer>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={Styles.nothing_show}>
                  <div>Your Cart is Empty!</div>
                  <button
                    className={Styles.shop_products}
                    onClick={() => router.push('/category/Apparel')}
                  >
                    Shop Products
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default EstimateCard
