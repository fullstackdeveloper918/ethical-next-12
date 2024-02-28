import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      const itemId = action.payload.id
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === itemId
      )
      if (existingItemIndex === -1) {
        state.cartItems.push(action.payload)
      } else {
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        state.cartItems.push(action.payload)
      }
    },
    deleteCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      )
    },
    deleteAllCartItems: (state, action) => {
      state.cartItems = []
    },
  },
})

export const { setCartItems, deleteCartItem, deleteAllCartItems } =
  cartSlice.actions
export default cartSlice.reducer
