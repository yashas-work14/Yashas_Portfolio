import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin } from 'lucide-react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setDropdownOpen(false)
  }, [location])

  const mainNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about', isAnchor: true },
    { name: 'Contact', href: '/#contact', isAnchor: true },
  ]

  const pageLinks = [
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Publications', href: '/publications' },
    { name: 'Patents', href: '/patents' },
    { name: 'Hackathons', href: '/hackathons' },
    { name: 'Certificates', href: '/certificates' },
    { name: 'Volunteer', href: '/volunteer' },
  ]

  const GoogleScholarIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
    </svg>
  )

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Yashas14', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/yashasd2004/', label: 'LinkedIn' },
    { CustomIcon: GoogleScholarIcon, href: 'https://scholar.google.com/citations?user=zEQLrAEAAAAJ&hl=en', label: 'Google Scholar' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'glass py-3 shadow-lg shadow-purple-500/10' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <motion.div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg transition-all duration-300 bg-brand"
                    whileHover={{ 
                      boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
                      rotate: [0, -5, 5, 0]
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    YD
                  </motion.div>
                  <div className="absolute inset-0 rounded-xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300 bg-brand" />
                </div>
                <div className="hidden sm:block">
                  <motion.span 
                    className="font-bold text-xl gradient-text"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Yashas D
                  </motion.span>
                  <motion.span 
                    className="text-sm block text-secondary"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Gen AI Developer
                  </motion.span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {mainNavLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.isAnchor ? (
                    <a
                      href={link.href}
                      className="relative px-4 py-2 text-gray-300 hover:text-white font-medium transition-colors duration-300 group"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-3/4 transition-all duration-300 rounded-full bg-brand" />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className={`relative px-4 py-2 font-medium transition-colors duration-300 group ${
                        location.pathname === link.href ? 'text-violet-400' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {link.name}
                      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 transition-all duration-300 rounded-full bg-brand ${
                        location.pathname === link.href ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                      }`} />
                    </Link>
                  )}
                </motion.div>
              ))}
              
              {/* Portfolio Dropdown */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="relative px-4 py-2 text-gray-300 hover:text-white font-medium transition-colors duration-300 flex items-center gap-1 group">
                  Portfolio
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ rotate: dropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-3/4 transition-all duration-300 rounded-full bg-brand" />
                </button>
                
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="rounded-2xl p-4 min-w-[280px] grid grid-cols-2 gap-2 dropdown-panel">
                        {pageLinks.map((link, i) => (
                          <motion.div
                            key={link.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <Link
                              to={link.href}
                              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                                location.pathname === link.href 
                                  ? 'text-violet-400 nav-active-bg' 
                                  : 'text-gray-300 hover:text-white hover:translate-x-1'
                              }`}
                            >
                              {link.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Social Links - Desktop */}
              <div className="hidden md:flex items-center gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-gray-400 hover:text-violet-400 transition-colors"
                    title={social.label}
                  >
                    {social.CustomIcon ? <social.CustomIcon /> : <social.icon size={20} />}
                  </motion.a>
                ))}
              </div>



              {/* Hire Me Button - Desktop */}
              <motion.a
                href={isHomePage ? '#contact' : '/#contact'}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-white font-semibold text-sm transition-all duration-300 hire-me-btn"
              >
                Hire Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl dropdown-panel"
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                    >
                      <X size={24} className="text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                    >
                      <Menu size={24} className="text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
              onClick={() => setMobileMenuOpen(false)} 
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm p-6 pt-24 mobile-menu-panel"
            >
              <div className="flex flex-col h-full">
                {/* Navigation Links */}
                <div className="flex flex-col gap-2">
                  {mainNavLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.isAnchor ? (
                        <a
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-3 rounded-xl text-lg font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                            location.pathname === link.href 
                              ? 'text-violet-400 nav-active-bg' 
                              : 'text-gray-300 hover:text-white'
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-4 border-t border-subtle" />
                <p className="text-xs text-gray-500 px-4 uppercase tracking-wider mb-2">Portfolio</p>

                {/* Page Links */}
                <div className="flex flex-col gap-1 overflow-y-auto flex-1">
                  {pageLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        className={`block px-4 py-3 rounded-xl font-medium transition-all ${
                          location.pathname === link.href 
                            ? 'text-violet-400 nav-active-bg' 
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Section */}
                <div className="mt-auto pt-6 border-t border-subtle">
                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-xl text-gray-400 hover:text-violet-400 transition-colors mobile-social-btn"
                      >
                        {social.CustomIcon ? <social.CustomIcon /> : <social.icon size={24} />}
                      </motion.a>
                    ))}
                  </div>
                  
                  {/* Hire Me Button */}
                  <motion.a
                    href={isHomePage ? '#contact' : '/#contact'}
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full text-center px-6 py-3 rounded-xl text-white font-semibold hire-me-btn"
                  >
                    Hire Me
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar