import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  contacts: [],
  cureentId: 0,
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload)
    },
    getAll: (state, action) => {
      state.contacts = action.payload
    },
    setCurrentContact: (state, action) => {
      state.cureentId = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const contactActions = contactSlice.actions

export const contactReducer = contactSlice.reducer
