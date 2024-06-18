import React from 'react'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import DisplayVid from './components/DisplayVid'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/video" element={<DisplayVid />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
