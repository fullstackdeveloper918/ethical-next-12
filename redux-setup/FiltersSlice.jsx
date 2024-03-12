import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Price: null,
  }

export const FiltersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterPrice: (state, action) => {
      state.Price = action.payload
    },
  },
})

export const { filterPrice } = FiltersSlice.actions
export default FiltersSlice.reducer

