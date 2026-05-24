import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import PortfolioNav from '../components/PortfolioNav'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { MarqueeSection } from '../components/MarqueeSection'

// Floating particles component
const Particles = () => {
  return (
    <div className="particles">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  )
}

function Home() {
  return (
    <div className="gradient-bg min-h-screen relative">
      <Particles />
      <div className="relative z-10">
        <Header />
        <About />
        <PortfolioNav />
        <Projects />
        <Skills />
        <MarqueeSection />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Home
