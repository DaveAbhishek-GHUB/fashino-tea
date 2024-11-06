/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import SubHeader from './components/SubHeader'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Signuppage from './pages/Signuppage'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<Signuppage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </>
  )
}

export default App