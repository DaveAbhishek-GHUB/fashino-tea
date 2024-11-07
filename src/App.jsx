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
import TeaBlends from './pages/TeaBlends'
import AdventCalendar from './pages/AdventCalendars'
import TeaChocolate from './pages/TeaChocolate'
import Matcha from './pages/Matcha'
import Wintertea from './pages/Wintertea'
import GreenTea from './pages/GreenTea'
import BlackTea from './pages/BlackTea'
import HerbalTea from './pages/HerbalTea'
import Oolongtea from './pages/Oolongtea'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<Signuppage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/teablends' element={<TeaBlends/>}/>
        <Route path='/Adventcalendar' element={<AdventCalendar/>}/>
        <Route path='/teachocolate' element={<TeaChocolate/>}/>
        <Route path='/matcha' element={<Matcha/>}/>
        <Route path='/wintertea' element={<Wintertea/>}/>
        <Route path='/greentea' element={<GreenTea/>}/>
        <Route path='/blacktea' element={<BlackTea/>}/>
        <Route path='/herbaltea' element={<HerbalTea/>}/>
        <Route path='/oolongtea' element={<Oolongtea/>}/>
      </Routes>
    </>
  )
}

export default App