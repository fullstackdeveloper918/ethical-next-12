import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  orderPlaced: [],
  searchState: '',
  selectedOptionValue: '',
  reached2ndStep: false,
  reached3rdStep: false,
  step1State: null,
  step2State: null,
  step3State: null,
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
    setOrderPlaced: (state, action) => {
      state.orderPlaced.push(action.payload)
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
    setStep1State: (state, action) => {
      state.step1State = action.payload
    },
    setStep2State: (state, action) => {
      state.step2State = action.payload
    },
    setStep3State: (state, action) => {
      state.step3State = action.payload
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
  setStep2State,
  setStep3State,
  setStep1State,
  setOrderPlaced,
} = cartSlice.actions
export default cartSlice.reducer
