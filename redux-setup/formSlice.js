// reducers/formSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  step: 1,
  swagData: [],
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    swagFormData: (state, action) => {
      state.FormStage = action.payload
    },
  },
})

export const { updateFormData, nextStep, previousStep } = formSlice.actions
export default formSlice.reducer
