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
} from '../../redux-setup/cartSlice'
import useFetch from '../../lib/useFetch'
// import Invoice from '../Invoice'
import Invoice from '../Invoice'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
const EstimateCard = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [totalCartPrice, setTotalCartPrice] = useState(0)

  const step1State = useSelector((state) => state.cart.step1State)
  const step2State = useSelector((state) => state.cart.step2State)
  const cartItems = useSelector((state) => state.cart.cartItems)
  const userId = useSelector((state) => state.auth.userId)

  const handleDelete = (val) => {
    dispatch(deleteCartItem(val))
  }

  let data = [step1State, step2State, cartItems]
  const [loadQuery, { response, loading, error }] = useFetch(
    `/bulkestimate/${userId}`,
    {
      method: 'post',
    }
  )

  const handleSubmit = () => {
    console.log('handleSubmit have been hit')
    if (!userId) {
      alert('Please Login To submit Estimate')
    } else if (!step1State || !setStep2State) {
      alert('Please Complete All Steps to submit.')
    } else if (cartItems.length === 0) {
      alert('Please Add something in tour cart to place order')
    } else {
      loadQuery(data)
    }
  }

  const totalPriceOfCart = () => {
    let totalPrice = 0
    for (let i = 0; i < cartItems.length; i++) {
      let tempPrice = cartItems[i]
      let a = tempPrice.quantity * tempPrice.price
      totalPrice += a
    }
    setTotalCartPrice(totalPrice)
  }

  useEffect(() => {
    if (response) {
      console.log(response, 'responseresponse')
      toast.success('Your request has been submmitted successfully')
      dispatch(deleteAllCartItems())
    }
  }, [response])

  useEffect(() => {
    totalPriceOfCart()
  }, [cartItems])

  const downLoadPdf = () => {
    const input = document.getElementById('invoice-container')

    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF('p', 'mm', 'a4')
      const imgWidth = 210
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let remainingHeight = imgHeight
      let position = 0
      pdf.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        0,
        0,
        imgWidth,
        imgHeight
      )

      pdf.save('invoice.pdf')
    })
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
                          {item.heading.slice(0, 70) + '...'}
                        </h4>
                        <span className={Styles.price}>
                          Price : Starting at ${item.price}
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
                              onClick={() =>
                                router.push(`/products/${item.id}`)
                              }
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
                      <Invoice />
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
                    onClick={() => router.push('/products')}
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
