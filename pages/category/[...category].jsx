import Footer from '@components/footer/Footer'
import Modal from '@components/modal/Modal'
import PrimaryHeader from '@components/primary-header/PrimaryHeader'
import Product from '@components/products-final-builder-component/Product'
import SecondaryHeader from '@components/secondary-header/SecondaryHeader'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Styles from '../../styles/category.module.css'
import Image from 'next/image'
import images from '../../constants/images'

const index = () => {
  const router = useRouter()
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
          (category) => (category === collectionForUrl, 'category')
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
  }, [collectionForUrl])

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
          <div className={Styles.imgContent}>
            <Image
              src={images.Related_product}
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div className={Styles.textContent}>
            <h4>Related Product</h4>
            <h2>Bags</h2>
            <p>
              Bags refer to a category of products that are designed for
              carrying and storing various items. They come in a wide range of
              styles, sizes, and materials, each catering to specific needs and
              preferences
            </p>
            <button type="button" onClick={() => router.push(`/category/bags`)}>
              Shop Now
            </button>
          </div>
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
                      {/* {allCategories && <p>{allCategories[data].count}</p>} */}
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
