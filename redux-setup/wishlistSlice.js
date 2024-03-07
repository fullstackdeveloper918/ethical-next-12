// wishlistSlice.js

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItemToWishlist(state, action) {
      const newItem = action.payload
      const isItemInWishlist = state.items.find(
        (item) => item.id === newItem.id
      )
      if (isItemInWishlist) {
        return state
      }
      state.items.push(newItem)
    },

    removeItemFromWishlist(state, action) {
      const itemIdToRemove = action.payload
      state.items = state.items.filter((item) => item.id !== itemIdToRemove)
    },
    clearWishlist(state) {
      state.items = []
    },
  },
})

export const { addItemToWishlist, removeItemFromWishlist, clearWishlist } =
  wishlistSlice.actions

export default wishlistSlice.reducer
