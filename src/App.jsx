import React from 'react'
import { HashRouter } from 'react-router-dom'

import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <HashRouter>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </HashRouter>
  )
}

export default App
