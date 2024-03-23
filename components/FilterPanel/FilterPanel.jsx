import Styles from '../Filter/Filter.module.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dot from '@components/custom-colored-dot/Dot'
import {
  setColorsObj,
  setShowAllFilters,
  setSwiftSwag,
} from 'redux-setup/FiltersSlice'

const FilterPanel = ({
  setFilteredColors,
  filteredColors,
  setDecorationsArray,
  decorationsArray,
  setProductTypeArray,
  productTypeArray,
  emojiTypeArray,
  setEmojiTypeArray,
}) => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  const [openIndex, setOpenIndex] = useState([])
  const [allFiltersLengthArray, setAllFiltersLengthArray] = useState(0)
  const [allFilteredStateValuesArray, setAllFilteredStateValuesArray] =
    useState([])
  const allFilters = useSelector((state) => state.filter.allFilters)
  const showAllFilters = useSelector((state) => state.filter.showAllFilters)
  const colorsObj = useSelector((state) => state.filter.colorsObj)
  const swiftSwag = useSelector((state) => state.filter.swiftSwag)

  const toggleAccordion = (index) => {
    if (openIndex.includes(index)) {
      let filteredIndex = openIndex.filter((item) => item !== index)
      setOpenIndex(filteredIndex)
    } else {
      setOpenIndex([...openIndex, index])
    }
  }
  const handleCheckboxChange = (event, item) => {
    const { name } = event.target
    if (item.label === 'uniqueProductType') {
      console.log(item.children, 'from uniqueProductType')
      Object.keys(item.children).forEach((key) => {
        if (item.children[key] === name) {
          const index = productTypeArray.indexOf(key)

          if (index !== -1) {
            let a = productTypeArray.filter((item) => item !== key)
            setProductTypeArray(a)
          } else {
            setProductTypeArray([...productTypeArray, key])
          }
        }
      })
    } else if (item.label === 'Decoration') {
      Object.keys(item.children).forEach((key) => {
        if (item.children[key] === name) {
          const index = decorationsArray.indexOf(key)

          if (index !== -1) {
            let a = decorationsArray.filter((item) => item !== key)
            setDecorationsArray(a)
          } else {
            setDecorationsArray([...decorationsArray, key])
          }
        }
      })
    } else if (item.label === 'Emoji ratings') {
      Object.keys(item.children).forEach((key) => {
        if (item.children[key] === name) {
          const index = emojiTypeArray.indexOf(key)
          if (index !== -1) {
            let a = emojiTypeArray.filter((item) => item !== key)
            setEmojiTypeArray(a)
          } else {
            setEmojiTypeArray([...emojiTypeArray, key])
          }
        }
      })
    }
  }
  const handleClear = () => {
    setFilteredColors([])
  }

  const handleSwagChange = (event) => {
    if (event.target.value === 'true') {
      dispatch(setSwiftSwag(true))
    } else if (event.target.value === 'false') {
      dispatch(setSwiftSwag(false))
    }
  }

  const badge = (item, array) => {
    return <div onClick={() => console.log({ item, array })}>{item}</div>
  }

  useEffect(() => {
    let uniqueProductTypeObj = showAllFilters.filter(
      (item) => item.label === 'uniqueProductType'
    )
    let obj = uniqueProductTypeObj[0].children
    const newArray = productTypeArray.map((productId) => obj[productId])
  }, [productTypeArray])

  useEffect(() => {
    let arr = []
    if (showAllFilters.length > 0) {
      for (let i = 0; i < showAllFilters.length; i++) {
        const element = [i]
        arr.push(i)
      }
      setAllFiltersLengthArray(arr)
    } else {
      setAllFiltersLengthArray(arr)
    }
  }, [showAllFilters])
  // console.log(
  //   showAllFilters.filter((item) => item.label === 'uniqueProductType'),
  //   'showAllFilters'
  // )

  useEffect(() => {
    setOpenIndex(allFiltersLengthArray)
  }, [allFiltersLengthArray])

  useEffect(() => {
    let categoriesList = []
    if (Object.keys(allFilters).length > 0) {
      Object.entries(allFilters).map(([key, value]) => {
        let obj = {}
        obj.id = key
        obj.label = key
        obj.children = value
        categoriesList.push(obj)
      })
      dispatch(setShowAllFilters(categoriesList))
      let colors = categoriesList.filter((c) => c.label === 'Colors')
      if (colors.length > 0) {
        let colorsObjToUse = colors[0].children
        dispatch(setColorsObj(colorsObjToUse))
      } else {
        dispatch(setColorsObj({}))
      }
    }
  }, [allFilters])

  useEffect(() => {
    // allFilteredStateValuesArray
    let arr = []
    // arr.push()
  }, [swiftSwag])

  return (
    <>
      {active && (
        <div className={Styles.filter_topwrapper}>
          <h3>You’re viewing Swift Swag only products.</h3>
          <button>view all product intstead?</button>
        </div>
      )}

      <div className={Styles.filterPanel}>
        <div className={Styles.filterPanel_top}>
          <h4
            className={Styles.filterPanel_title}
            onClick={() => handleClear()}
            style={{ cursor: 'pointer' }}
          >
            Clear All
          </h4>
          <p>{filteredColors.map((item) => item)}</p>
          <p>
            {productTypeArray &&
              productTypeArray.length > 0 &&
              productTypeArray.map((item) => badge(item, productTypeArray))}
          </p>

          {/* {allFilteredStateValuesArray &&
            allFilteredStateValuesArray.length > 0 && (
              <p>{allFilteredStateValuesArray.map((item) => item)}</p>
            )} */}
        </div>

        <div className={Styles.filterPanel_ProductCollection_list}>
          {showAllFilters?.map((item, index) => {
            return (
              <div className={Styles.accordion} key={index}>
                <div className={Styles.accordion_item}>
                  <div
                    className={Styles.items}
                    onClick={() => toggleAccordion(index)}
                  >
                    <div>{item.label}</div>
                    <div className={Styles.accordion_icon}>
                      {openIndex.length > 0
                        ? openIndex?.includes(index)
                          ? '-'
                          : '+'
                        : null}
                    </div>
                  </div>
                </div>

                {openIndex.length > 0 && openIndex.includes(index) && (
                  <div className={Styles.open_accordionWrap}>
                    {openIndex.length > 0 &&
                    openIndex.includes(index) &&
                    item.label === 'Colors' ? (
                      <div className={Styles.colors_container}>
                        {Object.keys(colorsObj).length > 0 &&
                          Object.entries(colorsObj).map(
                            ([color, imageUrl], colorIndex) => (
                              <Dot
                                key={colorIndex}
                                color={color}
                                imageUrl={imageUrl}
                                fromFilters
                                filteredColors={filteredColors}
                                setFilteredColors={setFilteredColors}
                              />
                            )
                          )}
                      </div>
                    ) : openIndex.length > 0 &&
                      openIndex.includes(index) &&
                      item.label === 'uniqueProductType' ? (
                      <div className={Styles.custom_checkbox}>
                        {Object.values(item.children).map(
                          (child, childIndex) => (
                            <li
                              key={childIndex}
                              className={Styles.filterPanel_list_item}
                            >
                              <input
                                type="checkbox"
                                id={`checkbox_id_${childIndex}`}
                                name={child}
                                onChange={(e) => handleCheckboxChange(e, item)}
                                // checked={filteredProductType.includes(child)}
                              />
                              <label htmlFor={`checkbox_id_${childIndex}`}>
                                {child && JSON.parse(child)}
                              </label>
                            </li>
                          )
                        )}
                      </div>
                    ) : openIndex.length > 0 &&
                      openIndex.includes(index) &&
                      item.label === 'Swift swag' ? (
                      <div className={Styles.custom_checkbox}>
                        {Object.values(item.children).map(
                          (child, childIndex) => {
                            let val = child === 'SwiftSwag'
                            return (
                              <li
                                key={childIndex}
                                className={Styles.filterPanel_list_item}
                              >
                                <input
                                  type="radio"
                                  id={`checkbox_id_${childIndex}`}
                                  name="radioSwiftSwag"
                                  value={val}
                                  checked={swiftSwag == val}
                                  onChange={handleSwagChange}
                                />
                                <label htmlFor={`checkbox_id_${childIndex}`}>
                                  {child}
                                </label>
                              </li>
                            )
                          }
                        )}
                      </div>
                    ) : openIndex.length > 0 &&
                      openIndex.includes(index) &&
                      item.label === 'Decoration' ? (
                      <div className={Styles.custom_checkbox}>
                        {Object.values(item.children).map(
                          (child, childIndex) => (
                            <li
                              key={childIndex}
                              className={Styles.filterPanel_list_item}
                            >
                              <input
                                type="checkbox"
                                id={`checkbox_id_${childIndex}`}
                                name={child}
                                value={child}
                                // checked={decorations.includes(child)}
                                onChange={(e) => handleCheckboxChange(e, item)}
                              />
                              <label htmlFor={`checkbox_id_${childIndex}`}>
                                {child && JSON.parse(child)}
                              </label>
                            </li>
                          )
                        )}
                      </div>
                    ) : openIndex.length > 0 &&
                      openIndex.includes(index) &&
                      item.label === 'Emoji ratings' ? (
                      <div className={Styles.custom_checkbox}>
                        {Object.values(item.children).map(
                          (child, childIndex) => (
                            <li
                              key={childIndex}
                              className={Styles.filterPanel_list_item}
                            >
                              <input
                                type="checkbox"
                                id={`checkbox_id_${childIndex}`}
                                name={child}
                                onChange={(e) => handleCheckboxChange(e, item)}
                                // checked={filteredProductType.includes(child)}
                              />
                              <label htmlFor={`checkbox_id_${childIndex}`}>
                                {child}
                              </label>
                            </li>
                          )
                        )}
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default FilterPanel
