import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element = {<Home />} />
      </Routes>
    </>
  )
}

export default App
