import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  role: [],
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload
    },
  },
})

export const { setRole } = AuthSlice.actions

export default AuthSlice.reducer
