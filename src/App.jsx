import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Payment from './pages/Payment'
import CourseDetail from './pages/CourseDetail'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/courses' element ={<Courses/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/courses/:name' element={<CourseDetail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
