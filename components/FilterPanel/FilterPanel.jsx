import Styles from '../Filter/Filter.module.css'
import React, { useEffect, useState } from 'react'
import { LIST } from '../../constants/data'
import { useDispatch } from 'react-redux'
import { filterPrice } from '../../redux-setup/FiltersSlice'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import { setActiveFilters } from 'redux-setup/categorySlice'

const FilterPanel = ({ setActiveFilter }) => {
  const dispatch = useDispatch()
  const [inputSlider, setInputSlider] = useState(0)
  const subCategoryData = useSelector((state) => state.category.categories)
  const activeFilters = useSelector((state) => state.category.activeFilters)
  const [addList, setAddList] = useState([])
  const [openIndex, setOpenIndex] = useState(0)
  const [isActive, setIsActive] = useState(true)
  const [price, setPrice] = useState(50)
  const [isChecked, setIsChecked] = useState({
    backPacks: false,
    Coolers: false,
    fannyPacks: false,
    laundryBags: false,
    Pouches: false,
    toteBags: false,
    waterBottles: false,
  })
  const [filtersState, setFiltersState] = useState([])

  useEffect(() => {
    dispatch(filterPrice(inputSlider))
  }, [inputSlider])

  const handleCheckboxChange = (e, checkboxName) => {
    const { name, checked } = e.target

    setIsChecked((prev) => ({
      ...prev,
      [checkboxName]: checked,
    }))
  }

  const toggleAccordion = (index) => {
    setOpenIndex(index)
    setIsActive(!isActive)
  }

  useEffect(() => {
    dispatch(setActiveFilters(filtersState))
  }, [filtersState])

  const handleAddLists = (text) => {
    if (filtersState.includes(text?.apikey)) {
      let f = filtersState.filter((item) => item !== text?.apikey)
      setFiltersState(f)
    } else {
      setFiltersState((prevC) => [...prevC, text?.apikey])
    }
  }

  const subCategories = useSelector((state) => state.category.subCategories)
  return (
    <>
      <div className={Styles.filterPanel}>
        <div className={Styles.filterPanel_top}>
          <h4 className={Styles.filterPanel_title}>Clear All</h4>
          <RxCross2 fontSize={25} onClick={() => setActiveFilter(false)} />
        </div>
        {/* <div className={Styles.filterPanel_Product_Section}></div> */}
        <div className={Styles.filterPanel_ProductCollection_list}>
          {LIST(subCategories).map((item, index) => (
            <>
              <div className={Styles.accordion}>
                <div className={Styles.accordion_item}>
                  <div className={Styles.horizontal}></div>
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
                {isActive &&
                  openIndex === index &&
                  item.children.map((child, index) => (
                    <>
                      {item.label === 'Price' ? (
                        <>
                          <div
                            className={Styles.filter_panel_price_input_section}
                          >
                            <input
                              type="range"
                              className={Styles.filter_panel_price_input}
                              min={child.minPrice}
                              max={child.maxPrice}
                              value={inputSlider}
                              onChange={(e) => setInputSlider(e.target.value)}
                            />
                            <div className={Styles.filter_panel_textInput}>
                              <input
                                type="text"
                                value={inputSlider}
                                onChange={(e) => setInputSlider(e.target.value)}
                              />
                              <p>${child.maxPrice}</p>
                            </div>
                          </div>
                        </>
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
                                name={child.label}
                                checked={isChecked[item.label]}
                                onChange={handleCheckboxChange}
                              />
                              <label
                                htmlFor={`checkbox_id_${index}`}
                                onClick={() => handleAddLists(child)}
                              >
                                {child.label}
                              </label>
                            </li>
                          </div>
                        </>
                      )}
                    </>
                  ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default FilterPanel
