import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  searchState: '',
  selectedOptionValue: '',
  reached2ndStep: false,
  reached3rdStep: false,
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
    setSearchState: (state, action) => {
      state.searchState = action.payload
    },
    setSelectedOptionValue: (state, action) => {
      state.selectedOptionValue = action.payload
    },
    setreached2ndStep: (state, action) => {
      state.reached2ndStep = action.payload
    },
    setreached3rdStep: (state, action) => {
      state.reached3rdStep = action.payload
    },
  },
})

export const {
  setCartItems,
  deleteCartItem,
  deleteAllCartItems,
  setSearchState,
  setSelectedOptionValue,
  setreached2ndStep,
  setreached3rdStep,
} = cartSlice.actions
export default cartSlice.reducer
