// categorySlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
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
  },
})

export const { addCategory, removeCategory } = categorySlice.actions

export default categorySlice.reducer
