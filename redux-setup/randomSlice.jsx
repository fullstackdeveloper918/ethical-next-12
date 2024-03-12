import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  singleProductPromotion: null,
  decorationItemObjSingleProductPage: {},
  finalDecorationKeyVal: {},
  swiftSwag: 'flexible',
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
  },
})

export const {
  setSingleProductPromotion,
  setDecorationItemObjSingleProductPage,
  setFinalDecorationKeyVal,
  setSwiftSwagTime,
} = RandomSlice.actions
export default RandomSlice.reducer
