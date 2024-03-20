import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Price: null,
  allFilters: {},
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
  },
})

export const { filterPrice, setAllFilters } = FiltersSlice.actions
export default FiltersSlice.reducer
