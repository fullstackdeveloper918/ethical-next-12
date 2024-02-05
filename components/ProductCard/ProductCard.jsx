import React, { useState } from 'react'
import Link from 'next/link'
import Styles from './../Filter/Filter.module.css'
import Dot from '../custom-colored-dot/Dot'
import Image from 'next/image'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { CiSearch } from 'react-icons/ci'
import { CiShare2 } from 'react-icons/ci'
// import { useRouter } from 'next/navigation'

const ProductCard = ({ item }) => {
  const [ActiveOption, setActiveOption] = useState(false)
  // const router = useRouter()

  return (
    <>
      <Link href={`products/${item?.id}`}>
        <div className={Styles.collection_items}>
          <Image
            src={item?.image}
            width={278}
            height={311}
            alt="products_images"
          />
          <div className={Styles.product_card_content}>
            <h4 className={Styles.title}>{item?.product_title}</h4>
            <div className={Styles.small_text}>
              as low as ${item?.unit_price || 0}
            </div>
            <div className={Styles.colors}>
              {item.colours.split(',').map((c) => {
                return (
                  <>
                    <Dot color={c} />
                  </>
                )
              })}
            </div>
          </div>

          <div className={Styles.hidden_icons}>
            <div className={Styles.icons}>
              <span>
                <MdOutlineFavoriteBorder
                  fontSize={25}
                  color="#d3d3d3"
                  className={Styles.icon}
                />
              </span>
              <span>
                <CiSearch
                  fontSize={25}
                  color="#d3d3d3"
                  className={Styles.icon}
                />
              </span>
              <span>
                <CiShare2
                  fontSize={25}
                  color="#d3d3d3"
                  className={Styles.icon}
                />
              </span>
            </div>

            <button className={Styles.viewProduct_btn}>View Product</button>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ProductCard
