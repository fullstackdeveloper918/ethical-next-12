// categorySlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
  allCategories: {},
  subCategories: {},
  activeFilters: [],
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory(state, action) {
      console.log(action.payload, 'hello redux')
      state.categories.push(action.payload)
    },
    clearCategories(state) {
      state.categories = []
    },
    clearSubCategories(state) {
      state.subCategories = []
    },
    getAllCategories: (state, action) => {
      state.allCategories = action.payload
    },
    setSubCategories: (state, action) => {
      state.subCategories = action.payload
    },
    setActiveFilters: (state, action) => {
      console.log(action.payload, 'action bro')
      state.activeFilters = action.payload
    },
  },
})

export const {
  addCategory,
  removeCategory,
  getAllCategories,
  setSubCategories,
  setActiveFilters,
  clearSubCategories,
} = categorySlice.actions

export default categorySlice.reducer
