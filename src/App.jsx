import React from 'react'
import Navbar from './components/Navbar'
import "./App.css" 
import Hero from './components/Hero'
import ContactMe from './components/ContactMe'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ContactMe/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
