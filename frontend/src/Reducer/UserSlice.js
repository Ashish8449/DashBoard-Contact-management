import { createSlice } from '@reduxjs/toolkit'

const initialState = null

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const userActions = userSlice.actions

export const userReducer = userSlice.reducer
