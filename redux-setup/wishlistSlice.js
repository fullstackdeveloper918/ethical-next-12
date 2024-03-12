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
      if (!isItemInWishlist) {
        state.items.push({ ...newItem, itemAdded: true }) // Set itemAdded to true for the new item
      }
    },

    removeItemFromWishlist(state, action) {
      const itemIdToRemove = action.payload
      state.items = state.items.filter((item) => {
        if (item.id === itemIdToRemove) {
          item.itemAdded = false // Set itemAdded to false for the removed item
        }
        return item.id !== itemIdToRemove
      })
    },
    clearWishlist(state) {
      state.items = []
      state.itemAdded = false
    },
  },
})

export const { addItemToWishlist, removeItemFromWishlist, clearWishlist } =
  wishlistSlice.actions

export default wishlistSlice.reducer
