// idSlice.js

import { createSlice } from '@reduxjs/toolkit'

// Define the initial state
const initialState = {
  inventory: [],
}

// Create a slice for managing the selected ID
const submitEstimateSlice = createSlice({
  name: 'submitEstimate',
  initialState,
  reducers: {
    setEstimate: (state, action) => {
      state.inventory.push(action.payload)
      console.log(action.payload, 'payload')
    },
  },
})

// Export actions and reducer
export const { setEstimate } = submitEstimateSlice.actions

export default submitEstimateSlice.reducer
