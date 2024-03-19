// categorySlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  getProductsRes: null,
  getProductsLoading: null,
  getProductsError: null,
  categories: [],
  allCategories: {},
  activeFilters: [],
  subCategoryOnTop: [],
  collectionForUrl: '',
  subCollectionForUrl: '',
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

    getAllCategories: (state, action) => {
      state.allCategories = action.payload
    },

    setActiveFilters: (state, action) => {
      state.activeFilters = action.payload
    },
    setSubCategoryOnTop: (state, action) => {
      state.subCategoryOnTop = action.payload
    },

    setCollectionForUrl: (state, action) => {
      state.collectionForUrl = action.payload
    },
    setSubCollectionForUrl: (state, action) => {
      state.subCollectionForUrl = action.payload
    },
    setProductsRes: (state, action) => {
      state.getProductsRes = action.payload
    },
    setProductsLoading: (state, action) => {
      state.getProductsLoading = action.payload
    },
    setProductsError: (state, action) => {
      state.getProductsError = action.payload
    },
  },
})

export const {
  addCategory,
  removeCategory,
  getAllCategories,
  setActiveFilters,
  setSubCategoryOnTop,
  setCollectionForUrl,
  setSubCollectionForUrl,
  setProductsRes,
  setProductsLoading,
  setProductsError,
} = categorySlice.actions

export default categorySlice.reducer
