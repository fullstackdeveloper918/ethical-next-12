import Footer from '@components/footer/Footer'
import Modal from '@components/modal/Modal'
import PrimaryHeader from '@components/primary-header/PrimaryHeader'
import Product from '@components/products-final-builder-component/Product'
import SecondaryHeader from '@components/secondary-header/SecondaryHeader'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Styles from '../../styles/category.module.css'
import Image from 'next/image'
import images from '../../constants/images'
import {
  setCurrentPage,
  setTotalData,
  setTotalPages,
} from '../../redux-setup/categorySlice'

const index = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [relatedCategories, setRelatedCategories] = useState([])
  const getProductsRes = useSelector((state) => state.category.getProductsRes)
  const allCategories = useSelector((state) => state.category.allCategories)

  const collectionForUrl = useSelector(
    (state) => state.category.collectionForUrl
  )

  useEffect(() => {
    const generateRelatedCategories = () => {
      const related =
        allCategories &&
        Object.keys(allCategories).filter(
          (category) => (category !== collectionForUrl, 'category')
        )
      if (related.length > 2) {
        const randomIndices = []
        while (randomIndices.length < 2) {
          const randomIndex = Math.floor(Math.random() * related.length)
          if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex)
          }
        }
        setRelatedCategories(randomIndices.map((index) => related[index]))
      } else {
        setRelatedCategories(related)
      }
    }

    // Call the function to generate related categories
    generateRelatedCategories()
  }, [collectionForUrl, allCategories])

  useEffect(() => {
    if (getProductsRes) {
      dispatch(setCurrentPage(getProductsRes?.data?.current_page))
      dispatch(setTotalData(getProductsRes?.data?.total))
      dispatch(setTotalPages(getProductsRes?.data?.last_page))
    }
  }, [getProductsRes])
  return (
    <div>
      <PrimaryHeader />
      <SecondaryHeader />
      <Modal />
      <section className={Styles.conatainer_Sec}>
        <div className={Styles.collection_banner}>
          <div className={Styles.collection_banner_heading}>
            <h1>Category</h1>
            <p>
              <span
                onClick={() => router.push('/')}
                style={{ cursor: 'pointer' }}
              >
                Home
              </span>{' '}
              <span> {'>'}</span> {collectionForUrl}
            </p>
          </div>
        </div>
      </section>

      <Product />

      <div className={Styles.related_product_container}>
        <div className={Styles.related_product_content}>
          {allCategories &&
            Object.keys(allCategories).map(
              (key) =>
                key === 'Bags' && (
                  <>
                    <div className={Styles.imgContent}>
                      <Image
                        src={images.bag_image}
                        width={400}
                        height={400}
                        alt=""
                      />
                    </div>
                    <div className={Styles.textContent}>
                      <h4>Related Product</h4>
                      <h2>{key}</h2>

                      <button
                        type="button"
                        onClick={() => router.push(`/category/${key}`)}
                      >
                        {' '}
                        Shop Now
                      </button>
                    </div>
                  </>
                )
            )}
        </div>
      </div>

      <div className={Styles.related_categories}>
        <div className={Styles.content_wrapper}>
          {relatedCategories &&
            relatedCategories.map((data) => (
              <>
                <div className={Styles.img_content_1}>
                  <div className={Styles.imgContent}>
                    <Image
                      src={allCategories[data].image}
                      layout="fill"
                      alt=""
                    />
                  </div>
                  <div className={Styles.textContent}>
                    <div>
                      <h3>{data}</h3>
                      <p>{allCategories[data]?.count} Products</p>
                    </div>

                    <button onClick={() => router.push(`/category/${data}`)}>
                      Shop Now
                    </button>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default index
