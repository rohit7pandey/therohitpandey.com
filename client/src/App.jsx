import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Poems from './pages/Poems'
import PoemDetail from './pages/PoemDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kavitaayein" element={<Poems />} />
        <Route path="/kavitaayein/:id" element={<PoemDetail />} />
        <Route path="/parichay" element={<About />} />
        <Route path="/sampark" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
