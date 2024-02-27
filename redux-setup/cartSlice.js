import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

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
        console.log('if i do not exist')
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
  },
})

export const { setCartItems, deleteCartItem } = cartSlice.actions
export default cartSlice.reducer
