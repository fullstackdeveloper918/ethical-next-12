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
  const [totalData, setTotalData] = useState([])
  const [relatedCategories, setRelatedCategories] = useState([])
  const [totalPages, setTotalPages] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const getProductsRes = useSelector((state) => state.category.getProductsRes)
  const allCategories = useSelector((state) => state.category.allCategories)

  const collectionForUrl = useSelector(
    (state) => state.category.collectionForUrl
  )
  console.log(collectionForUrl, 'collectionForUrl')

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

  console.log(relatedCategories, 'relatedCategories')

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
            <Image src={images.Cup1} width={400} height={400} alt="" />
          </div>
          <div className={Styles.textContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro unde
            voluptatum debitis incidunt, esse, modi tenetur sapiente dignissimos
            itaque dolore officiis praesentium similique cum ducimus. Nostrum
            consectetur facilis iure fugiat. Quasi sit mollitia soluta at atque.
            Accusamus quas facilis officiis dolores corporis, impedit eius ex at
            fugit sint quisquam animi alias reiciendis temporibus molestiae
            rerum laudantium quia maiores, exercitationem debitis? Consequuntur
            cupiditate ut delectus recusandae minus mollitia, dolorem voluptas.
            consectetur facilis iure fugiat. Quasi sit mollitia soluta at atque.
            Accusamus quas facilis officiis dolores corporis, impedit eius ex at
            fugit sint quisquam animi alias reiciendis temporibus molestiae
            rerum laudantium quia maiores, exercitationem debitis? Consequuntur
            cupiditate ut delectus recusandae minus mollitia, dolorem voluptas.
          </div>
        </div>
      </div>

      <div className={Styles.related_categories}>
        <div className={Styles.content}>
          <div>
            <div className={Styles.imgContent}>
              <Image src={images.Shirt} height={300} width={300} alt="" />
            </div>
            <div className={Styles.textContent}>
              <div>
                <h3>Apparel</h3>
                <p>2200 products</p>
              </div>
              <button>Shop Now</button>
            </div>
          </div>
          <div>
            <div className={Styles.imgContent}>
              <Image src={images.Shirt} height={300} width={300} alt="" />
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
