import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Styles from './../Filter/Filter.module.css'
import Dot from '../custom-colored-dot/Dot'
import Image from 'next/image'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { CiSearch } from 'react-icons/ci'
import { CiShare2 } from 'react-icons/ci'
import { useDispatch } from 'react-redux'
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from '../../redux-setup/wishlistSlice'
import images from 'constants/images'
import Loaders from '@components/loaders/Loaders'
import { toast } from 'react-toastify'

const ProductCard = ({ item, fromSingleProduct }) => {
  const [singleImage, setSingleImage] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    setSingleImage(item?.image)
  }, [])

  const addToWishlist = (item) => {
    console.log(item, 'abhishek')
    dispatch(addItemToWishlist(item))
    dispatch(removeItemFromWishlist(item?.id))

    toast.success('Item added to wishlist', {
      position: 'top-center',
    })
  }

  return (
    <>
      {!item ? (
        <Loaders />
      ) : (
        <div className={Styles.collection_items}>
          {singleImage ? (
            <Image
              src={singleImage}
              width={278}
              height={311}
              alt="products_images"
              onError={() => setSingleImage(images.No_product)}
            />
          ) : (
            <Image
              src={images.No_product}
              width={278}
              height={311}
              alt="products_images"
            />
          )}

          <div className={Styles.product_card_content}>
            <h4 className={Styles.title}>{item?.product_title}</h4>
            {item?.unit_price ? (
              <>
                <div className={Styles.small_text}>
                  as low as ${item?.unit_price}
                </div>
              </>
            ) : (
              ''
            )}
            {/* <div className={Styles.colors}>
              {item?.colours &&
                Object.entries(item?.colours).map(([color, imageUrl], i) => {
                  return <Dot color={color} imageUrl={imageUrl} key={i} />
                })}
            </div> */}
          </div>

          <div className={Styles.hidden_icons}>
            <div className={Styles.icons}>
              <span className={Styles.border_svg}>
                <MdOutlineFavoriteBorder
                  fontSize={25}
                  color="#d3d3d3"
                  className={Styles.icon}
                  onClick={() => addToWishlist(item)}
                />
              </span>
              <span className={Styles.border_svg}>
                <CiSearch
                  fontSize={25}
                  color="#d3d3d3"
                  className={Styles.icon}
                />
              </span>
              <span className={Styles.border_svg}>
                <CiShare2
                  fontSize={25}
                  color="#d3d3d3"
                  className={Styles.icon}
                />
              </span>
            </div>
            <Link
              href={fromSingleProduct ? `${item?.id}` : `products/${item?.id}`}
            >
              <button className={Styles.viewProduct_btn}>View Product</button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductCard
