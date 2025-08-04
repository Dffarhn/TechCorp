import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <Header isModalOpen={isModalOpen} />
      <Hero />
      <About />
      <Services />
      <Projects onModalStateChange={setIsModalOpen} />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
