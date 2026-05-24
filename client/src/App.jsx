import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import Patents from './pages/Patents'
import Publications from './pages/Publications'
import ProjectsPage from './pages/ProjectsPage'
import Hackathons from './pages/Hackathons'
import Certificates from './pages/Certificates'
import Volunteer from './pages/Volunteer'
import SkillsPage from './pages/SkillsPage'
import Experience from './pages/Experience'

// Tech-inspired animated background
const TechBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="tech-background">
      {/* Animated gradient orbs */}
      <div className="gradient-orb orb-1" />
      <div className="gradient-orb orb-2" />
      <div className="gradient-orb orb-3" />
      
      {/* Mouse follower glow */}
      <div 
        className="mouse-glow"
        style={{
          left: mousePos.x - 200,
          top: mousePos.y - 200,
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="grid-pattern" />
      
      {/* Floating code symbols */}
      <div className="code-particles">
        {['</', '/>', '{}', '[]', '()', '=>', '&&', '||', '++', '--', '/**/', '/*', '*/', '===', '!==', 'const', 'let', 'async', 'await', 'import', 'export', 'function', 'return', 'if', 'else'].map((symbol, i) => (
          <span
            key={i}
            className="code-symbol"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 15}s`,
              fontSize: `${10 + Math.random() * 14}px`,
              opacity: 0.1 + Math.random() * 0.2,
            }}
          >
            {symbol}
          </span>
        ))}
      </div>
      
      {/* Circuit lines */}
      <svg className="circuit-svg" viewBox="0 0 1920 1080" preserveAspectRatio="none">
        <defs>
          <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#764ba2" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#f093fb" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Horizontal lines */}
        {[...Array(8)].map((_, i) => (
          <g key={`h-${i}`}>
            <line
              x1="0"
              y1={135 * (i + 1)}
              x2="1920"
              y2={135 * (i + 1)}
              stroke="url(#circuitGrad)"
              strokeWidth="1"
              className="circuit-line"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
            {/* Circuit nodes */}
            {[...Array(6)].map((_, j) => (
              <circle
                key={`node-${i}-${j}`}
                cx={320 * (j + 1)}
                cy={135 * (i + 1)}
                r="3"
                fill="#667eea"
                className="circuit-node"
                style={{ animationDelay: `${(i + j) * 0.3}s` }}
              />
            ))}
          </g>
        ))}
        {/* Vertical lines */}
        {[...Array(6)].map((_, i) => (
          <line
            key={`v-${i}`}
            x1={320 * (i + 1)}
            y1="0"
            x2={320 * (i + 1)}
            y2="1080"
            stroke="url(#circuitGrad)"
            strokeWidth="1"
            className="circuit-line vertical"
            style={{ animationDelay: `${i * 0.7}s` }}
          />
        ))}
      </svg>
      
      {/* Floating tech icons */}
      <div className="tech-icons">
        {['⚛️', '🔷', '🟨', '🐍', '☁️', '🔮', '💾', '🔧', '⚡', '🧠'].map((icon, i) => (
          <span
            key={i}
            className="tech-icon"
            style={{
              left: `${10 + (i * 9)}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            {icon}
          </span>
        ))}
      </div>
      
      {/* Binary rain effect */}
      <div className="binary-rain">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="binary-column"
            style={{
              left: `${i * 7}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 7}s`,
            }}
          >
            {[...Array(20)].map((_, j) => (
              <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
            ))}
          </div>
        ))}
      </div>
      
      {/* Particles */}
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen relative overflow-hidden">
          <TechBackground />
          <div className="relative z-10">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/patents" element={<Patents />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/hackathons" element={<Hackathons />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App