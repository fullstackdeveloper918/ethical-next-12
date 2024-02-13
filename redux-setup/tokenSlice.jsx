import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

// Check if localStorage is available
if (typeof localStorage !== 'undefined') {
  const storedToken = localStorage.getItem('token_swag')
  initialState.value = storedToken || null
}

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('token_swag', action.payload)
      }
    },
    clearToken: (state) => {
      state.value = null
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('token_swag')
      }
    },
  },
})

export const { setToken, clearToken } = tokenSlice.actions
export const selectToken = (state) => state.token.value
export default tokenSlice.reducer
