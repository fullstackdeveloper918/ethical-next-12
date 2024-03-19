import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Styles from './../Filter/Filter.module.css'
import Dot from '../custom-colored-dot/Dot'
import Image from 'next/image'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { CiSearch } from 'react-icons/ci'
import { CiShare2 } from 'react-icons/ci'
import Share from '../../components/Share/Share'
import { useDispatch, useSelector } from 'react-redux'
import {
  addItemToWishlist,
  removeItemFromWishlist,
  setFavroiteIcon,
} from '../../redux-setup/wishlistSlice'
import images from 'constants/images'
import Loaders from '@components/loaders/Loaders'
import { toast } from 'react-toastify'
import { RxCross1 } from 'react-icons/rx'
import { useRouter } from 'next/router'
const ProductCard = ({ item, fromSingleProduct }) => {
  const [singleImage, setSingleImage] = useState('')
  const [shareIcons, setShareIcons] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()
  const wishListItems = useSelector((state) => state.wishlist.items)
  const favoriteIconColor = useSelector((state) => state.wishlist.favoriteIcon)
  const country = useSelector((state) => state.country.country)

  useEffect(() => {
    setSingleImage(item?.image)
  }, [item])

  console.log(singleImage, 'kjchjvc')
  const addToWishlist = (item) => {
    const isInWishlist = wishListItems.some(
      (wishlistItem) => wishlistItem.id === item.id
    )
    if (isInWishlist) {
      // If the item is already in the wishlist, remove it
      dispatch(setFavroiteIcon(false))
      dispatch(removeItemFromWishlist(item.id))
      toast.success('Item removed from wishlist', {
        position: 'top-center',
        autoClose: 5000,
      })
    } else {
      // Otherwise, add the item to the wishlist
      dispatch(addItemToWishlist(item))
      dispatch(setFavroiteIcon(true))
      toast.success('Item added to wishlist', {
        position: 'top-center',
        autoClose: 5500,
      })
    }
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
              alt={item?.product_title}
              onError={() => setSingleImage(images.No_product)}
            />
          ) : (
            <Image src={images.No_product} width={278} height={311} />
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
            <div
              className={Styles.colors}
              onClick={() => router.push(`product/${item?.id}`)}
            >
              {Object.keys(item?.colours).length > 0 &&
                Object.entries(item?.colours)
                  .slice(0, 8)
                  .map(([color, imageUrl], i) => {
                    return <Dot color={color} imageUrl={imageUrl} key={i} />
                  })}
            </div>
          </div>
          <div className={Styles.hidden_icons}>
            <div className={Styles.icons}>
              <span
                className={Styles.border_svg}
                style={{ backgroundColor: favoriteIconColor ? '#A2D061' : '' }}
              >
                <MdOutlineFavoriteBorder
                  fontSize={25}
                  // color="#D3D3D3"
                  className={`${Styles.icon} ${
                    favoriteIconColor ? Styles.favActive : ''
                  }`}
                  onClick={() => addToWishlist(item)}
                />
              </span>
              {/* <span className={Styles.border_svg}>
                <CiSearch
                  fontSize={25}
                  color="#D3D3D3"
                  className={Styles.icon}
                />
              </span> */}
              <span className={Styles.border_svg}>
                <CiShare2
                  fontSize={25}
                  color="#D3D3D3"
                  className={Styles.icon}
                  onClick={() => setShareIcons(true)}
                />
              </span>
            </div>
            {shareIcons && (
              <>
                <Share setShareIcons={setShareIcons} item={item} />
              </>
            )}

            <button
              className={Styles.viewProduct_btn}
              onClick={() =>
                router.push(
                  fromSingleProduct ? `${item?.id}` : `/product/${item?.id}`
                )
              }
            >
              View Product
            </button>
          </div>
        </div>
      )}
    </>
  )
}
export default ProductCard
