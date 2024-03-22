import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  singleProductPromotion: null,
  decorationItemObjSingleProductPage: {},
  finalDecorationKeyVal: {},
  swiftSwag: '',
  isCategoryPage: "",
  isProductPage: "",
}

export const RandomSlice = createSlice({
  name: 'random',
  initialState,
  reducers: {
    setSingleProductPromotion: (state, action) => {
      state.singleProductPromotion = action.payload
    },
    setDecorationItemObjSingleProductPage: (state, action) => {
      state.decorationItemObjSingleProductPage = action.payload
    },
    setFinalDecorationKeyVal: (state, action) => {
      state.finalDecorationKeyVal = action.payload
    },
    setSwiftSwagTime: (state, action) => {
      state.swiftSwag = action.payload
    },
    setIsCategoryPage: (state, action) => {
      state.isCategoryPage = action.payload
    },
    setIsProductPage: (state, action) => {
      state.isProductPage = action.payload
    },
  },
})

export const {
  setSingleProductPromotion,
  setDecorationItemObjSingleProductPage,
  setFinalDecorationKeyVal,
  setSwiftSwagTime,
  setIsCategoryPage,
  setIsProductPage
} = RandomSlice.actions
export default RandomSlice.reducer
