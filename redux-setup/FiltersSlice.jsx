import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Price: null,
  allFilters: {},
  showAllFilters: [],
  colorsObj: {},
}

export const FiltersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterPrice: (state, action) => {
      state.Price = action.payload
    },
    setAllFilters: (state, action) => {
      state.allFilters = action.payload
    },
    setShowAllFilters: (state, action) => {
      state.showAllFilters = action.payload
    },
    setColorsObj: (state, action) => {
      state.colorsObj = action.payload
    },
  },
})

export const { filterPrice, setAllFilters, setShowAllFilters, setColorsObj } =
  FiltersSlice.actions
export default FiltersSlice.reducer
