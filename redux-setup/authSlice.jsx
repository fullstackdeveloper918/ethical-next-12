import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  role: [],
  currentPage: null,
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
  },
})

export const { setRole, setCurrentPage } = AuthSlice.actions

export default AuthSlice.reducer
