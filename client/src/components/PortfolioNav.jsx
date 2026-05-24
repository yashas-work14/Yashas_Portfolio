import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function PortfolioNav() {
  const portfolioLinks = [
    {
      name: 'Experience',
      href: '/experience',
      icon: '💼',
      color: 'from-blue-500 to-cyan-500',
      shadowColor: 'shadow-blue-500/25',
      description: 'Professional journey & work history',
      stats: '1.8+ Years',
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: '🚀',
      color: 'from-purple-500 to-pink-500',
      shadowColor: 'shadow-purple-500/25',
      description: 'Innovative solutions & applications',
      stats: '20+ Projects',
    },
    {
      name: 'Skills',
      href: '/skills',
      icon: '⚡',
      color: 'from-yellow-500 to-orange-500',
      shadowColor: 'shadow-yellow-500/25',
      description: 'Technical expertise & tools',
      stats: '20+ Skills',
    },
    {
      name: 'Patents',
      href: '/patents',
      icon: '📜',
      color: 'from-emerald-500 to-teal-500',
      shadowColor: 'shadow-emerald-500/25',
      description: 'Intellectual property & inventions',
      stats: '2 Patents',
    },
    {
      name: 'Publications',
      href: '/publications',
      icon: '📚',
      color: 'from-indigo-500 to-purple-500',
      shadowColor: 'shadow-indigo-500/25',
      description: 'Research papers & articles',
      stats: '8 Published',
    },
    {
      name: 'Hackathons',
      href: '/hackathons',
      icon: '🏆',
      color: 'from-rose-500 to-pink-500',
      shadowColor: 'shadow-rose-500/25',
      description: 'Competitions & achievements',
      stats: '5+ Wins',
    },
    {
      name: 'Certificates',
      href: '/certificates',
      icon: '🎓',
      color: 'from-amber-500 to-yellow-500',
      shadowColor: 'shadow-amber-500/25',
      description: 'Professional certifications',
      stats: '10+ Certs',
    },
    {
      name: 'Volunteer',
      href: '/volunteer',
      icon: '🤝',
      color: 'from-pink-500 to-rose-500',
      shadowColor: 'shadow-pink-500/25',
      description: 'Community contributions',
      stats: 'Active',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full blur-3xl bg-accent-primary-glow" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl bg-accent-secondary-glow" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 nav-active-bg">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-accent-primary"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-primary"></span>
            </span>
            <span className="font-semibold text-sm tracking-wider uppercase text-link">Explore My Work</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Portfolio</span>
            <span className="text-white"> Showcase</span>
          </h2>
          
          <p className="text-lg max-w-2xl mx-auto text-secondary">
            Dive into my professional journey through various dimensions of my career - 
            from technical expertise to creative achievements.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {portfolioLinks.map((link, index) => (
            <motion.div key={link.name} variants={cardVariants}>
              <Link to={link.href} className="block group">
                <div className={`relative glass-card rounded-2xl p-6 h-full overflow-hidden transition-all duration-500 hover:scale-105 hover:${link.shadowColor} hover:shadow-2xl`}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Animated border gradient */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${link.color} p-[1px]`}>
                      <div className="w-full h-full bg-slate-900/95 rounded-2xl" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with animated background */}
                    <div className="relative mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center text-3xl shadow-lg ${link.shadowColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        {link.icon}
                      </div>
                      {/* Glow effect */}
                      <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${link.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 transition-all duration-300">
                      {link.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm mb-4 line-clamp-2 text-secondary">
                      {link.description}
                    </p>

                    {/* Stats badge */}
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${link.color} bg-opacity-20 text-white`}>
                        {link.stats}
                      </span>
                      
                      {/* Arrow icon */}
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${link.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-card inline-flex items-center gap-4 px-8 py-4 rounded-2xl">
            <div className="flex -space-x-3">
              {['💻', '🎨', '🔬', '📊'].map((emoji, i) => (
                <span 
                  key={i} 
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg bg-accent-primary-glow border-base"
                >
                  {emoji}
                </span>
              ))}
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Interested in collaboration?</p>
              <p className="text-sm text-secondary">Let's build something amazing together</p>
            </div>
            <a 
              href="#contact" 
              className="ml-4 px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 bg-brand"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioNav
