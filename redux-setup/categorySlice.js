// categorySlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  getProductsRes: null,
  getProductsLoading: null,
  getProductsError: null,
  categories: [],
  allCategories: {},
  subCategories: {},
  activeFilters: [],
  subCategoryOnTop: [],
  productCategoryId: '',
  collectionId: null,
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
    setProductCategoryId: (state, action) => {
      state.productCategoryId = action.payload
    },
    setCollectionId: (state, action) => {
      state.collectionId = action.payload
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
  setSubCategories,
  setActiveFilters,
  clearSubCategories,
  setSubCategoryOnTop,
  setProductCategoryId,
  setCollectionId,
  setCollectionForUrl,
  setSubCollectionForUrl,
  setProductsRes,
  setProductsLoading,
  setProductsError,
} = categorySlice.actions

export default categorySlice.reducer
