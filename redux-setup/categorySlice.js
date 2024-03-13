// categorySlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
  allCategories: {},
  subCategories: {},
  activeFilters: [],
  subCategoryOnTop: [],
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory(state, action) {
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
      state.activeFilters = action.payload
    },
    setSubCategoryOnTop: (state, action) => {
      state.subCategoryOnTop = action.payload
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
  setSubCategoryOnTop,
} = categorySlice.actions

export default categorySlice.reducer
