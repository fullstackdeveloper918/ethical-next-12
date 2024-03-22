import Styles from '../Filter/Filter.module.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dot from '@components/custom-colored-dot/Dot'
import { setColorsObj, setShowAllFilters } from 'redux-setup/FiltersSlice'

const FilterPanel = ({
  setFilteredColors,
  filteredColors,
  filteredProductType,
  setFilteredProductType,
}) => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  const [inputSlider, setInputSlider] = useState(0)
  const [openIndex, setOpenIndex] = useState('')
  const [isActive, setIsActive] = useState(true)
  const [filteredList, setFilteredList] = useState([])
  // const
  const allFilters = useSelector((state) => state.filter.allFilters)
  const showAllFilters = useSelector((state) => state.filter.showAllFilters)
  const colorsObj = useSelector((state) => state.filter.colorsObj)

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
    setOpenIndex(index)
    setIsActive(!isActive)
  }
  // console.log(filteredProductType, 'filteredProductType')
  const handleCheckboxChange = (event, item) => {
    const { name } = event.target
    console.log(name, item, 'name')
    if (item === 'uniqueProductType') {
      if (event.target.checked) {
        setFilteredProductType([...filteredProductType, name])
      } else {
        setFilteredProductType(
          filteredProductType.filter((item) => item !== name)
        )
      }
    }
  }
  const handleClear = () => {
    setFilteredColors([])
  }
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
          {showAllFilters.map((item, index) => {
            return (
              <div className={Styles.accordion} key={index}>
                <div className={Styles.accordion_item}>
                  <div
                    className={Styles.items}
                    onClick={() => toggleAccordion(index)}
                  >
                    <div>{item.label}</div>
                    <div className={Styles.accordion_icon}>
                      {isActive && openIndex === index ? '-' : '+'}
                    </div>
                  </div>
                </div>

                {isActive && openIndex === index && (
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
                                onChange={(e) =>
                                  handleCheckboxChange(e, item.label)
                                }
                                checked={filteredProductType.includes(child)}
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
