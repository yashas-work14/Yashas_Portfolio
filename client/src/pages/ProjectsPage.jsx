import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const categories = [
  { id: 'all', label: 'All Projects', icon: '🌐' },
  { id: 'ai-healthcare', label: 'AI & Healthcare', icon: '🏥' },
  { id: 'genai', label: 'GenAI & LLMs', icon: '🤖' },
  { id: 'computer-vision', label: 'Computer Vision & HCI', icon: '👁️' },
  { id: 'data-science', label: 'Data Science & Analytics', icon: '📊' },
  { id: 'web-dev', label: 'Web Development', icon: '🌍' },
  { id: 'core-programming', label: 'Core Programming', icon: '⚙️' },
]

const allProjects = [
  // ── GenAI & LLMs ──
  {
    title: 'Repo Analyzer',
    subtitle: 'AI-Powered Codebase Analysis',
    description:
      'AI-powered repository analysis platform that analyzes GitHub repos, extracts project structures, and generates intelligent code summaries using LLMs. Features architecture insights, module detection, interactive Q&A, and auto-generated documentation (PDF/MD/HTML).',
    tags: ['Python', 'FastAPI', 'LLMs', 'NLP', 'GitHub APIs', 'Documentation'],
    category: 'genai',
    icon: '🔍',
    gradient: 'from-violet-500 to-purple-600',
    githubUrl: 'https://github.com/Yashas14/Repo_Analyzer',
    language: 'Python',
    featured: true,
  },
  {
    title: 'MediMind AI',
    subtitle: 'Full-Stack AI Healthcare Platform',
    description:
      'Full-stack AI healthcare platform featuring a 5-agent diagnostic pipeline (Claude Sonnet 4), RAG knowledge base, real-time WebSocket chat, interactive body map, and a Next.js 14 dashboard. Includes standalone ML chatbot (Decision Tree + SVM) covering 41 diseases.',
    tags: ['Python', 'Claude Sonnet 4', 'RAG', 'WebSocket', 'Next.js 14', 'FastAPI'],
    category: 'genai',
    icon: '🏥',
    gradient: 'from-emerald-500 to-teal-600',
    githubUrl: 'https://github.com/Yashas14/MediMind_AI',
    language: 'Python',
    featured: true,
  },
  {
    title: 'QR Nexus — AI-Powered QR Platform',
    subtitle: 'Full-Stack QR Code Platform',
    description:
      'Full-stack QR platform built with Next.js 14 & TypeScript. Generate custom QR codes (URL, WiFi, vCard, SMS & more), scan in real-time via camera or file upload, analyze content with OpenAI GPT-4o, and track usage through an interactive analytics dashboard.',
    tags: ['Next.js 14', 'TypeScript', 'OpenAI GPT-4o', 'QR Code', 'Analytics'],
    category: 'genai',
    icon: '📱',
    gradient: 'from-blue-500 to-indigo-600',
    githubUrl: 'https://github.com/Yashas14/QR_Nexus-AI-Powered_QR_Code_Platform',
    language: 'TypeScript',
    featured: true,
  },

  // ── AI & Healthcare ──
  {
    title: 'Skin Disease Detection & Telegram Bot',
    subtitle: 'Healthcare AI — Deep Learning',
    description:
      'AI-driven solution for real-time skin disease detection using a CNN (InceptionV3) trained on the DermaNet dataset. Integrated with a Telegram bot for instant patient-facing diagnosis support across 23 skin conditions.',
    tags: ['Deep Learning', 'CNN', 'InceptionV3', 'Telegram Bot', 'Python'],
    category: 'ai-healthcare',
    icon: '🔬',
    gradient: 'from-pink-500 to-rose-500',
    githubUrl: 'https://github.com/Yashas14/Skin_Disease_Detection_using_Deep_Learning_and_Real-Time_Telegram_Bot_Interface',
    language: 'Jupyter Notebook',
    featured: true,
  },
  {
    title: 'MediPredict Healthcare App',
    subtitle: 'ML-Powered Risk Prediction',
    description:
      'Interactive healthcare web application leveraging machine learning to predict Heart Attack and Breast Cancer risks. Users select datasets, explore data visually, and choose from five classifiers — Logistic Regression, KNN, SVM, Random Forest, and XGBoost.',
    tags: ['TypeScript', 'Machine Learning', 'Scikit-learn', 'Healthcare', 'Next.js'],
    category: 'ai-healthcare',
    icon: '🫀',
    gradient: 'from-red-500 to-pink-500',
    githubUrl: 'https://github.com/Yashas14/MediPredict_Health_Care_Web_Application',
    language: 'TypeScript',
    featured: false,
  },
  {
    title: 'Healthcare Chat Bot',
    subtitle: 'NLP-Powered Medical Assistant',
    description:
      'AI-driven virtual health assistant providing real-time health-related support. Answers patient queries, offers medical guidance, and uses NLP techniques to understand natural language symptoms and concerns.',
    tags: ['NLP', 'Chatbot', 'Python', 'AI', 'Healthcare'],
    category: 'ai-healthcare',
    icon: '💬',
    gradient: 'from-teal-500 to-emerald-500',
    githubUrl: 'https://github.com/Yashas14/Health_Care_Chat_Bot',
    language: 'Python',
  },
  {
    title: 'COVID-19 Prediction Using ML',
    subtitle: 'Epidemic Forecasting',
    description:
      'Machine learning pipeline for predicting COVID-19 infections, enabling timely identification of at-risk patients based on symptoms and clinical features using classification algorithms.',
    tags: ['Machine Learning', 'Classification', 'Scikit-learn', 'Pandas', 'Python'],
    category: 'ai-healthcare',
    icon: '🦠',
    gradient: 'from-violet-500 to-purple-500',
    githubUrl: 'https://github.com/Yashas14/COVID-19-PREDICTION-USING-MACHINE-LEARNING',
    language: 'Jupyter Notebook',
  },

  // ── Computer Vision & HCI ──
  {
    title: 'Seamless Gesture Recognition Platform',
    subtitle: 'Computer Vision — Multi-Modal HCI',
    description:
      'Unified platform integrating virtual canvas, keyboard, calculator, and mouse control via real-time hand gesture recognition with voice assistance. Uses MediaPipe and OpenCV for seamless touchless interaction.',
    tags: ['OpenCV', 'MediaPipe', 'Voice Assistant', 'HCI', 'Python'],
    category: 'computer-vision',
    icon: '🖐️',
    gradient: 'from-blue-500 to-cyan-500',
    githubUrl: 'https://github.com/Yashas14/Seamless_Interaction_through_Gesture_Recognition',
    language: 'Python',
    featured: true,
  },
  {
    title: 'Virtual Drawing Using ML',
    subtitle: 'AI-Powered Creative Canvas',
    description:
      'Draw on a virtual canvas in real-time through hand gestures using MediaPipe hand tracking and OpenCV. Supports multiple colors, brush sizes, and an eraser — all controlled via intuitive finger movements.',
    tags: ['MediaPipe', 'OpenCV', 'Hand Tracking', 'Computer Vision', 'Python'],
    category: 'computer-vision',
    icon: '🎨',
    gradient: 'from-fuchsia-500 to-pink-500',
    githubUrl: 'https://github.com/Yashas14/Virtual_Drawing_Using_MachineLearning',
    language: 'Python',
  },
  {
    title: 'Virtual Gesture Solutions',
    subtitle: 'Touchless Desktop Control',
    description:
      'Interact with your computer through intuitive hand gestures and voice commands. Controls mouse cursor, clicks, scrolling, volume, and brightness — creating a fully touchless desktop experience.',
    tags: ['Gesture Control', 'Voice Commands', 'OpenCV', 'MediaPipe', 'Python'],
    category: 'computer-vision',
    icon: '✋',
    gradient: 'from-indigo-500 to-blue-500',
    githubUrl: 'https://github.com/Yashas14/Virtual_Gesture',
    language: 'Python',
  },

  // ── Data Science & Analytics ──
  {
    title: 'Biomass Supply Chain Optimizer',
    subtitle: 'Walmart Sparkathon 2024 Hackathon',
    description:
      'AI-driven biomass supply chain optimizer built for the Walmart Sparkathon Hackathon. Leverages ML for accurate biomass yield forecasting and advanced algorithms for optimal depot placement and logistics.',
    tags: ['XGBoost', 'Optimization', 'Forecasting', 'Walmart Hackathon', 'Python'],
    category: 'data-science',
    icon: '🏭',
    gradient: 'from-emerald-500 to-green-500',
    githubUrl: 'https://github.com/Yashas14/Optimize_biomass_supply_chain_through_AI-driven_forecasting_and_location-based_depot_optimization.',
    language: 'Jupyter Notebook',
    featured: true,
  },
  {
    title: 'Energy Consumption Forecasting (XGBoost)',
    subtitle: 'Time Series Prediction',
    description:
      'Predict energy consumption patterns using XGBoost. Analyzes historical energy data to build a robust predictive model that anticipates future usage trends with feature engineering and cross-validation.',
    tags: ['XGBoost', 'Time Series', 'Feature Engineering', 'Pandas', 'Python'],
    category: 'data-science',
    icon: '⚡',
    gradient: 'from-yellow-500 to-amber-500',
    githubUrl: 'https://github.com/Yashas14/Time_Series_Forecasting_For_Energy_Consumption_Using_XGBoost',
    language: 'Jupyter Notebook',
  },
  {
    title: 'XGBoost vs LSTM — Energy Forecasting',
    subtitle: 'Comparative Analysis',
    description:
      'Head-to-head comparison of XGBoost and LSTM deep learning models for energy consumption forecasting. Evaluates accuracy, training time, and generalization to determine the optimal approach.',
    tags: ['XGBoost', 'LSTM', 'Deep Learning', 'Time Series', 'Python'],
    category: 'data-science',
    icon: '📈',
    gradient: 'from-orange-500 to-red-500',
    githubUrl: 'https://github.com/Yashas14/A_Compartive_Analysis_of_Time_Series_Forecasting_For_Energy_Consumption_Using_XGBoost_and_LSTM',
    language: 'Jupyter Notebook',
  },
  {
    title: 'Predictive Analytics for Smart Farming',
    subtitle: 'AgriTech — Crop Yield Prediction',
    description:
      'Advanced ML system to predict crop yields for food processing farms. Combines data exploration, insightful visualizations, and an intuitive Streamlit web app to empower farmers with data-driven decisions.',
    tags: ['Machine Learning', 'Streamlit', 'Agriculture', 'Data Viz', 'Python'],
    category: 'data-science',
    icon: '🌾',
    gradient: 'from-lime-500 to-green-500',
    githubUrl: 'https://github.com/Yashas14/Predictive_Analytics_for_Future_Ready_Farming',
    language: 'Jupyter Notebook',
    featured: true,
  },
  {
    title: 'AI-Driven Route Optimizer',
    subtitle: 'Smart Cities — Traffic Optimization',
    description:
      'RouteOpt: An AI-driven solution for real-time route optimization that improves traffic flow and fuel efficiency in urban areas. Uses graph algorithms and ML to find optimal routes dynamically.',
    tags: ['Route Optimization', 'AI', 'Graph Algorithms', 'Smart Cities', 'Python'],
    category: 'data-science',
    icon: '🗺️',
    gradient: 'from-cyan-500 to-blue-500',
    githubUrl: 'https://github.com/Yashas14/AI-Driven_Route_Optimizer',
    language: 'Python',
    featured: true,
  },

  // ── Web Development ──
  {
    title: 'Team Outing App',
    subtitle: 'Collaborative Team Events Platform',
    description:
      'Full-stack application to make team events interactive and organized. Team members can vote on outing plans, upload and share photos, post messages, and provide feedback — creating a collaborative experience. Live at team-outing-client.vercel.app.',
    tags: ['TypeScript', 'React', 'Node.js', 'Vercel', 'Full-Stack'],
    category: 'web-dev',
    icon: '🎉',
    gradient: 'from-rose-500 to-orange-500',
    githubUrl: 'https://github.com/Yashas14/Team_Outing',
    language: 'TypeScript',
    featured: false,
    liveUrl: 'https://team-outing-client.vercel.app',
  },
  {
    title: 'FAB Hotels — Booking Platform',
    subtitle: 'Advanced UI/UX Hotel Booking',
    description:
      'Responsive hotel booking website featuring room browsing, dynamic pricing display, booking forms, and an elegant UI. Built with a focus on mobile-first responsive design and smooth user interactions.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX'],
    category: 'web-dev',
    icon: '🏨',
    gradient: 'from-purple-500 to-indigo-500',
    githubUrl: 'https://github.com/Yashas14/FAB_Hotels_Advanced_UI_UX_Hotel_Booking_Platform',
    language: 'JavaScript',
  },
  {
    title: 'SkillMaster LMS',
    subtitle: 'Learning Management System',
    description:
      'Comprehensive Learning Management System built with PHP for managing, delivering, and tracking online education courses. Features user management, course creation, progress tracking, and customizable dashboards.',
    tags: ['PHP', 'MySQL', 'LMS', 'Education', 'Web App'],
    category: 'web-dev',
    icon: '📚',
    gradient: 'from-sky-500 to-blue-500',
    githubUrl: 'https://github.com/Yashas14/SkillMaster_LMS',
    language: 'PHP',
  },
  {
    title: 'Question Paper Generator',
    subtitle: 'Education Automation Tool',
    description:
      'Automated question paper generator that simplifies exam creation. Upload your syllabus and let the tool auto-generate balanced question papers with configurable difficulty levels and marks distribution.',
    tags: ['PHP', 'Automation', 'Education', 'PDF Generation', 'Web App'],
    category: 'web-dev',
    icon: '📝',
    gradient: 'from-amber-500 to-orange-500',
    githubUrl: 'https://github.com/Yashas14/Question_Paper_Generator',
    language: 'PHP',
  },

  // ── Core Programming ──
  {
    title: 'Client-Server Communication',
    subtitle: 'Java Networking',
    description:
      'Real-time client-server communication system using Java networking libraries. Supports asynchronous data exchange between multiple clients and a centralized server with thread-safe message handling.',
    tags: ['Java', 'Sockets', 'Networking', 'Multi-threading', 'OOP'],
    category: 'core-programming',
    icon: '🔗',
    gradient: 'from-blue-600 to-indigo-600',
    githubUrl: 'https://github.com/Yashas14/Client-Server',
    language: 'Java',
  },
  {
    title: 'Encryption & Decryption Suite',
    subtitle: 'Java Security',
    description:
      'Securely encrypt and decrypt sensitive data using robust cryptographic algorithms. Converts plaintext to ciphertext and back, ensuring data privacy with modular, extensible cipher implementations.',
    tags: ['Java', 'Cryptography', 'AES', 'Security', 'OOP'],
    category: 'core-programming',
    icon: '🔐',
    gradient: 'from-gray-600 to-slate-600',
    githubUrl: 'https://github.com/Yashas14/Encryption-Decryption-',
    language: 'Java',
  },
]

const languageColors = {
  Python: 'bg-blue-400',
  'Jupyter Notebook': 'bg-orange-400',
  Java: 'bg-red-400',
  HTML: 'bg-amber-500',
  PHP: 'bg-indigo-400',
}

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory =
      activeCategory === 'all' || project.category === activeCategory
    const matchesSearch =
      searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const categoryCount = (catId) =>
    catId === 'all'
      ? allProjects.length
      : allProjects.filter((p) => p.category === catId).length

  return (
    <div className="gradient-bg min-h-screen">
      <div className="container mx-auto max-w-7xl px-6 py-24">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-8 transition-colors text-cyan"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <p className="font-semibold tracking-wider uppercase mb-4 text-link">
            My Work
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-4">
            Projects
          </h1>
          <p className="max-w-2xl mx-auto text-secondary">
            A curated collection of {allProjects.length} projects spanning AI/ML,
            Computer Vision, Data Science, Web Development, and more.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search projects, tags, or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
              <span
                className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === cat.id
                    ? 'bg-white/20'
                    : 'bg-white/5'
                }`}
              >
                {categoryCount(cat.id)}
              </span>
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-sm mb-6 text-center text-muted">
          Showing {filteredProjects.length} of {allProjects.length} projects
        </p>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group glass-card rounded-2xl overflow-hidden flex flex-col"
              >
                {/* Project Header with Gradient */}
                <div
                  className={`h-32 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-between relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="text-4xl">{project.icon}</span>
                    <div>
                      {project.featured && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white uppercase tracking-wider">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Language Badge */}
                  <div className="relative z-10 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white/90">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        languageColors[project.language] || 'bg-gray-400'
                      }`}
                    />
                    {project.language}
                  </div>
                  <div className="absolute -right-8 -bottom-8 text-9xl opacity-10">
                    {project.icon}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-purple-400 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium mt-1 text-cyan">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed flex-1 text-secondary">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="skill-badge text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Button */}
                  <div className="pt-4 mt-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-all hover:border-purple-500/50 flex items-center justify-center gap-2 group/btn"
                    >
                      <svg
                        className="w-4 h-4 group-hover/btn:text-purple-400 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Source Code
                      <svg
                        className="w-3 h-3 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="glass-card rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-gray-400">
              Try adjusting your search or category filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all')
                setSearchQuery('')
              }}
              className="mt-4 px-6 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors text-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <div className="glass-card rounded-2xl p-8 max-w-lg mx-auto">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-bold mb-2">Like what you see?</h3>
            <p className="text-gray-400 text-sm mb-6">
              Check out all repositories on GitHub and drop a star!
            </p>
            <a
              href="https://github.com/Yashas14"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
