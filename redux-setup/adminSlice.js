import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalCount: {},
  recentProducts: [],
  recentCustomers: [],
}

export const AdminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    getTotalCount: (state, action) => {
      state.totalCount = action.payload
    },
    getRecentProducts: (state, action) => {
      state.recentProducts = action.payload
    },
    getRecentCustomers: (state, action) => {
      state.recentCustomers = action.payload
    },
  },
})

export const { getTotalCount, getRecentProducts, getRecentCustomers } =
  AdminSlice.actions

export default AdminSlice.reducer
