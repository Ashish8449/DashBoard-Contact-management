import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, useNavigate } from 'react-router-dom'
import DashBoard from './Components/DashBoard'
import LoginPage from './Pages/Login'
export default function App() {
  const state = useSelector((state) => state)
  console.log(state)
  const navigate = useNavigate()
  // useEffect(() => {
  //   if (user) {
  //     navigate('/dashboard')
  //     console.log('dash')
  //   }
  //   return () => {}
  // }, [])

  // if (user) navigate('/dashboard')
  return (
    <Routes>
      <Route path='/dashboard/' element={<DashBoard />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
    </Routes>
  )
}
