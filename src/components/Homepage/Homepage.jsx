import React from 'react'
import './Homepage.css'
import { motion } from 'framer-motion'
import About from '../About/About'
import Contact from '../Contact/Contact'

const Homepage = () => {
  return (
    <div className="homepage-container">
      <About />
      <Contact />
    </div>
  )
}

export default Homepage