import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
const initialState =
  Cookies.get('user') && Cookies.get('token')
    ? {
        user: JSON.parse(Cookies.get('user')),
        token: JSON.parse(Cookies.get('token')),
      }
    : {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const userActions = userSlice.actions

export const userReducer = userSlice.reducer
