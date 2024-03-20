import Styles from '../Filter/Filter.module.css'
import React, { useEffect, useState } from 'react'
import { LIST } from '../../constants/data'
import { useDispatch, useSelector } from 'react-redux'

const FilterPanel = () => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  const [inputSlider, setInputSlider] = useState(0)
  const [openIndex, setOpenIndex] = useState(0)
  const [isActive, setIsActive] = useState(true)

  const toggleAccordion = (index) => {
    setOpenIndex(index)
    setIsActive(!isActive)
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
          {/* <h4
            className={Styles.filterPanel_title}
            onClick={() => handleClear()}
            style={{ cursor: 'pointer' }}
          >
            Clear All
          </h4> */}
        </div>

        <div className={Styles.filterPanel_ProductCollection_list}>
          {LIST().map((item, index) => (
            <>
              <div className={Styles.accordion}>
                <div className={Styles.accordion_item}>
                  {/* <div className={Styles.horizontal}></div> */}
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
                      Object.values(item.children).map((child, index) => (
                        <>
                          {item.label === 'Price' ? (
                            <>
                              <div
                                className={
                                  Styles.filter_panel_price_input_section
                                }
                              >
                                <input
                                  type="range"
                                  className={Styles.filter_panel_price_input}
                                  min={child.minPrice}
                                  max={child.maxPrice}
                                  value={inputSlider}
                                  onChange={(e) =>
                                    setInputSlider(e.target.value)
                                  }
                                />
                                <div className={Styles.filter_panel_textInput}>
                                  <input
                                    type="text"
                                    value={inputSlider}
                                    onChange={(e) =>
                                      setInputSlider(e.target.value)
                                    }
                                  />
                                  <p>${child.maxPrice}</p>
                                </div>
                              </div>
                            </>
                          ) : item.label === 'Colors' ? (
                            <>{console.log(child, 'meeeee')}</>
                          ) : (
                            <>
                              <div className={Styles.custom_checkbox}>
                                <li
                                  key={item.id}
                                  className={Styles.filterPanel_list_item}
                                >
                                  <input
                                    type="checkbox"
                                    id={`checkbox_id_${index}`}
                                    name={child}
                                    // checked={isChecked[item.label]}
                                    // onChange={handleCheckboxChange}
                                  />
                                  <label
                                    htmlFor={`checkbox_id_${index}`}
                                    // onClick={() => handleAddLists(child)}
                                  >
                                    {child}
                                  </label>
                                </li>
                              </div>
                            </>
                          )}
                        </>
                      ))}
                  </div>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default FilterPanel
