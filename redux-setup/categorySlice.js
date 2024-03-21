// categorySlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  getProductsRes: null,
  getProductsLoading: null,
  getProductsError: null,
  allCategories: {},
  subCategoryOnTop: [],
  collectionForUrl: '',
  subCollectionForUrl: '',
  totalPages: 1,
  currentPage: 1,
  totalData: 0,
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getAllCategories: (state, action) => {
      state.allCategories = action.payload
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
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload
    },
    setTotalData: (state, action) => {
      state.totalData = action.payload
    },
  },
})

export const {
  getAllCategories,
  setSubCategoryOnTop,
  setCollectionForUrl,
  setSubCollectionForUrl,
  setProductsRes,
  setProductsLoading,
  setProductsError,
  setCurrentPage,
  setTotalPages,
  setTotalData,
} = categorySlice.actions

export default categorySlice.reducer
