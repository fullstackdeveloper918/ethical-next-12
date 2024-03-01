import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  role: [],
  currentPage: null,
  userId: null,
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role.push(action.payload)
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setuserId: (state, action) => {
      state.userId = action.payload
    },
  },
})

export const { setRole, setCurrentPage, setuserId } = AuthSlice.actions

export default AuthSlice.reducer
