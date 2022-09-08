import { configureStore } from '@reduxjs/toolkit'
import { contactReducer } from './Reducer/ContactsSlice'
import { userReducer } from './Reducer/UserSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    contacts: contactReducer,
  },
})
