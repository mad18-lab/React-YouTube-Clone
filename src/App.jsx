import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/home" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
