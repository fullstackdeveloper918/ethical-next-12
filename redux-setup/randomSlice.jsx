import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  singleProductPromotion: null,
  decorationItemObjSingleProductPage: {},
  finalDecorationKeyVal: {},
  isCategoryPage: '',
  isSingleProductPage: '',
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

    setIsCategoryPage: (state, action) => {
      state.isCategoryPage = action.payload
    },
    setIsSingleProductPage: (state, action) => {
      state.isSingleProductPage = action.payload
    },
  },
})

export const {
  setSingleProductPromotion,
  setDecorationItemObjSingleProductPage,
  setFinalDecorationKeyVal,
  setIsCategoryPage,
  setIsSingleProductPage,
} = RandomSlice.actions
export default RandomSlice.reducer
