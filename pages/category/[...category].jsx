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
  const [totalData, setTotalData] = useState([])
  const [totalPages, setTotalPages] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const getProductsRes = useSelector((state) => state.category.getProductsRes)
  const allCategories = useSelector((state) => state.category.allCategories)
  const activeCategory = router?.asPath.split('/').pop()

  console.log(activeCategory, 'activeCategory')

  // console.log(
  //   allCategories &&
  //     Object.entries(allCategories).map(([key, value]) =>
  //       console.log(key, 'key', value, 'value')
  //     )
  // )

  const getProductsLoading = useSelector(
    (state) => state.category.getProductsLoading
  )
  const getProductsError = useSelector(
    (state) => state.category.getProductsError
  )
  useEffect(() => {
    if (getProductsRes) {
      setCurrentPage(getProductsRes?.data?.current_page)
      setTotalData(getProductsRes?.data?.total)
      setTotalPages(getProductsRes?.data?.last_page)
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
            <h1>All Swag</h1>
            <p>
              Home <span> {'>'}</span> All Swag
            </p>
          </div>
        </div>
      </section>

      <Product
        getProductsRes={getProductsRes}
        totalData={totalData}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        loading={getProductsLoading}
      />

      <div className={Styles.related_product_container}>
        <div className={Styles.related_product_content}>
          <div className={Styles.imgContent}>
            <Image src={images.Related_product} width={400} height={400} alt="" />
          </div>
          <div className={Styles.textContent}>
            <h4>Related Product</h4>
            <h2>Travel Bags & Accessories</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro unde
            voluptatum debitis incidunt, esse, modi tenetur sapiente dignissimos
            itaque dolore officiis praesentium similique cum ducimus. Nostrum
            consectetur facilis iure fugiat.</p>
            <button type='button'> Shop Now</button>
          </div>
        </div>
      </div>

      <div className={Styles.related_categories}>
        <div className={Styles.content_wrapper}>
          <div className={Styles.img_content_1}>
            <div className={Styles.imgContent}>
              <Image src={images.all_tech} layout='fill' alt="" />
            </div>
            <div className={Styles.textContent}>
              <div>
                <h3>Apparel</h3>
                <p>2200 products</p>
              </div>
              <button>Shop Now</button>
            </div>
          </div>
          <div className={Styles.img_content_2}>
            <div className={Styles.imgContent}>
              <Image src={images.Drinkware} layout='fill' alt="" />
            </div>
            <div className={Styles.textContent}>
              <div>
                <h3>Drinkware</h3>
                <p>2200 products</p>
              </div>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default index
