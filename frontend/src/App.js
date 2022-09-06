import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashBoard from './Components/DashBoard'
import LoginPage from './Pages/Login'
export default function App() {
  return (
    <Routes>
      <Route path='/dashboard/' element={<DashBoard />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
    </Routes>
  )
}
