import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  orderPlaced: [],
  orderIndex: '',
  searchState: '',
  selectedNameDateFilterValue: '',
  reached2ndStep: false,
  reached3rdStep: false,
  step1State: null,
  step2State: null,
  step3State: null,
  productLogo: null,
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
    deleteOrder: (state, action) => {
      const orderId = action.payload
      state.orderPlaced = state.orderPlaced.filter(
        (order, index) => index !== orderId
      )
    },
    setOrderPlaced: (state, action) => {
      state.orderPlaced.push(action.payload)
    },
    findOrder: (state, action) => {
      state.orderIndex = action.payload
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
    setSelectedNameDateFilterValue: (state, action) => {
      state.selectedNameDateFilterValue = action.payload
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
    setProductLogo: (state, action) => {
      state.productLogo = action.payload
    },
  },
})

export const {
  setCartItems,
  deleteCartItem,
  deleteAllCartItems,
  setSearchState,
  setSelectedNameDateFilterValue,
  setreached2ndStep,
  setreached3rdStep,
  setStep2State,
  setStep3State,
  setStep1State,
  setOrderPlaced,
  deleteOrder,
  findOrder,
  setProductLogo,
} = cartSlice.actions
export default cartSlice.reducer
