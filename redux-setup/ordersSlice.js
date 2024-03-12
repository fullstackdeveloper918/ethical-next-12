// idSlice.js

import { createSlice } from '@reduxjs/toolkit'

// Define the initial state
const initialState = {
  selectedId: null,
  isEditable: false,
}

// Create a slice for managing the selected ID
const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setSelectedEditId(state, action) {
      state.selectedId = action.payload
      state.isEditable = false
    },
    setSelectedViewId(state, action) {
      state.selectedId = action.payload
      state.isEditable = true
    },
    clearSelectedId(state) {
      state.selectedId = null
    },
  },
})

// Export actions and reducer
export const { setSelectedEditId, setSelectedViewId, clearSelectedId } =
  ordersSlice.actions

export default ordersSlice.reducer
