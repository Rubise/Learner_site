import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Payment from './pages/Payment'
function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/courses' element ={<Courses/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
    </>
  )
}

export default App
