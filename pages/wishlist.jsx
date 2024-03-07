import React from 'react'
import PrimaryHeader from '../components/primary-header/PrimaryHeader'
import SecondaryHeader from '../components/secondary-header/SecondaryHeader'
import Footer from '../components/footer/Footer'
import Styles from '../styles/common.module.css'
import filterStyles from '../components/Filter/Filter.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux'

import EmptyContainer from '../components/EmptyContainer/EmptyContainer'
import ProductCard from '../components/ProductCard/ProductCard'

const wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items)

  console.log(wishlistItems, 'hello wishlist')

  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <div className={filterStyles.wish_container}>
        <div className={filterStyles.collection_container}>
          {wishlistItems.length > 0 ? (
            wishlistItems.map((item) => (
              <>
                <ProductCard item={item} key={item.id} />
                {/* <div className={Styles.single_productlist}>
                <div>
                  <Image src={item?.image} width={200} height={200} />
                </div>
                <div>
                  <div>
                    <h3>{item?.product_title}</h3>
                    <p>{console.log(item?.unit_price, 'hello unit price')}</p>
                  </div>
                  <div>
                    <button>add to cart</button>
                  </div>
                </div>
              </div> */}
              </>
            ))
          ) : (
            <>
              <EmptyContainer data="Wishlist" />
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default wishlist
