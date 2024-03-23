import Styles from '../Filter/Filter.module.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dot from '@components/custom-colored-dot/Dot'
import { setColorsObj, setShowAllFilters } from 'redux-setup/FiltersSlice'

const FilterPanel = ({
  setFilteredColors,
  filteredColors,
  setIsSwiftSwag,
  setDecorationsArray,
  decorationsArray,
  setProductTypeArray,
  productTypeArray,
  emojiTypeArray,
  setEmojiTypeArray,
}) => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  const [inputSlider, setInputSlider] = useState(0)
  const [openIndex, setOpenIndex] = useState([])
  const [allFiltersLengthArray, setAllFiltersLengthArray] = useState(0)
  const [isActive, setIsActive] = useState(true)
  const [swagRadio, setSwagRadio] = useState('No SwiftSwag')
  const allFilters = useSelector((state) => state.filter.allFilters)
  const showAllFilters = useSelector((state) => state.filter.showAllFilters)

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

  const toggleAccordion = (index) => {
    if (openIndex.includes(index)) {
      let filteredIndex = openIndex.filter((item) => item !== index)
      setOpenIndex(filteredIndex)
    } else {
      setOpenIndex([...openIndex, index])
    }
    setIsActive(!isActive)
  }
  console.log(openIndex, 'openIndex')
  const handleCheckboxChange = (event, item) => {
    const { name, checked } = event.target
    if (item.label === 'uniqueProductType') {
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
      console.log(item, 'itemitem')
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
    if (event.target.value === 'SwiftSwag') {
      setSwagRadio('SwiftSwag')
    } else if (event.target.value === 'No SwiftSwag') {
      setSwagRadio('No SwiftSwag')
    }
  }

  useEffect(() => {
    if (swagRadio === 'No SwiftSwag') {
      setIsSwiftSwag(false)
    } else if (swagRadio === 'SwiftSwag') {
      setIsSwiftSwag(true)
    }
  }, [swagRadio])

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

  useEffect(() => {
    setOpenIndex(allFiltersLengthArray)
  }, [allFiltersLengthArray])
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
                      {/* {isActive && openIndex?.includes(index) ? '-' : '+'} */}
                    </div>
                  </div>
                </div>

                {/* {isActive && openIndex === index && (
                  <div className={Styles.open_accordionWrap}>
                    {isActive &&
                    openIndex === index &&
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
                    ) : isActive &&
                      openIndex === index &&
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
                    ) : isActive &&
                      openIndex === index &&
                      item.label === 'Swift swag' ? (
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
                                checked={swagRadio === child}
                                onChange={handleSwagChange}
                              />
                              <label htmlFor={`checkbox_id_${childIndex}`}>
                                {child}
                              </label>
                            </li>
                          )
                        )}
                      </div>
                    ) : isActive &&
                      openIndex === index &&
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
                    ) : isActive &&
                      openIndex === index &&
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
                    ) : (
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
                                // onChange={handleCheckboxChange}
                                // checked={filteredList.includes(child)}
                              />
                              <label htmlFor={`checkbox_id_${childIndex}`}>
                                {child}
                              </label>
                            </li>
                          )
                        )}
                      </div>
                    )}
                  </div>
                )} */}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default FilterPanel
