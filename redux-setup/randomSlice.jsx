import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  singleProductPromotion: null,
}

export const RandomSlice = createSlice({
  name: 'random',
  initialState,
  reducers: {
    setSingleProductPromotion: (state, action) => {
      state.singleProductPromotion = action.payload
    },
  },
})

export const { setSingleProductPromotion } = RandomSlice.actions
export default RandomSlice.reducer

