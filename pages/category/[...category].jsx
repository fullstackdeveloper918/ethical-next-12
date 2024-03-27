import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Footer from '@components/footer/Footer'
import Modal from '@components/modal/Modal'
import PrimaryHeader from '@components/primary-header/PrimaryHeader'
import SecondaryHeader from '@components/secondary-header/SecondaryHeader'
import Product from '@components/products-final-builder-component/Product'
import Image from 'next/image'
import images from '../../constants/images'
import Styles from '../../styles/category.module.css'

const index = () => {
  const router = useRouter()
  const [relatedCategories, setRelatedCategories] = useState([])
  const allCategories = useSelector((state) => state.category.allCategories)
  const collectionForUrl = useSelector(
    (state) => state.category.collectionForUrl
  )
  const swiftSwag = useSelector((state) => state.filter.swiftSwag)

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
            <h1>{swiftSwag ? 'Swift Swag' : 'Category'}</h1>
            {swiftSwag && (
              <p>Your swag produced and delivered in 10 business days!</p>
            )}
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
                      src={allCategories[data]?.image}
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
