import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

/* ─── Domain colour palette ─────────────────────────────────────── */
const DOMAIN_CONFIG = {
  'Energy & Forecasting':        { accent: '#f59e0b', tag: 'rgba(245,158,11,0.15)', icon: '⚡' },
  'HCI & Computer Vision':       { accent: '#3b82f6', tag: 'rgba(59,130,246,0.15)', icon: '🖐' },
  'Medical Disease Prediction':  { accent: '#10b981', tag: 'rgba(16,185,129,0.15)', icon: '🩺' },
  'AI Dermatology':              { accent: '#ec4899', tag: 'rgba(236,72,153,0.15)', icon: '🔬' },
  'NLP & Education':             { accent: '#8b5cf6', tag: 'rgba(139,92,246,0.15)', icon: '🎓' },
  'Smart Infrastructure':        { accent: '#f97316', tag: 'rgba(249,115,22,0.15)', icon: '🛣' },
  'Medical Imaging':             { accent: '#06b6d4', tag: 'rgba(6,182,212,0.15)',  icon: '🫀' },
  'Precision Agriculture':       { accent: '#84cc16', tag: 'rgba(132,204,22,0.15)', icon: '🌿' },
}

const publications = [
  {
    id: 1,
    title: 'Time Series Forecasting For Energy Consumption Using XGBoost and LSTM',
    authors: ['Rajasree RS', 'Yashwanth Pavankumar K', 'Sree Dinesh Reddy P', 'Yashas D', "Sonia Maria D'Souza"],
    venue: '2024 Asia Pacific Conference on Innovation in Technology (APCIT)',
    year: 2024,
    publishedDate: 'July 26, 2024',
    pages: '1–8',
    doi: '10.1109/APCIT62007.2024.10673558',
    ieeeLink: 'https://ieeexplore.ieee.org/abstract/document/10673558',
    certificateUrl: '/certificates/cert1.pdf',
    tags: ['Time Series', 'Energy Consumption', 'XGBoost', 'LSTM', 'Machine Learning', 'Forecasting'],
    domain: 'Energy & Forecasting',
    brief: 'Compares XGBoost (89.05% accuracy) and LSTM (82% accuracy) for energy consumption forecasting. XGBoost outperforms LSTM by capturing non-linear dependencies in time-series data, offering stronger predictive performance for resource management and sustainability planning.',
    abstract: 'The increasing demand for accurate energy consumption forecasting has spurred a surge of interest in leveraging advanced machine learning techniques. This project focuses on the application of XGBoost for time series forecasting in energy consumption. LSTM networks are also applied for forecasting predicted energy consumption. We analyze the abilities of LSTM models in predicting patterns of consumption; it exhibits a performance of 82% accuracy. XGBoost models intricate dependencies and captures non-linear relationships within the series data, showing a performance of 89.05% accuracy. XGBoost has outperformed LSTM for TSF in energy consumption.',
  },
  {
    id: 2,
    title: 'Seamless Interaction through Gesture Recognition: Integrating Virtual Canvas, Keyboard, Calculator And Mouse with Voice Assistance on a Unified Platform',
    authors: ['Jimsha K Mathew', 'D Yashas', 'M Shivani Kashyap', 'K Jyothsna', 'K Vinay Prasad', 'Pratibha Prakash Machakanur'],
    venue: '2024 Third International Conference on Trends in Electrical, Electronics, and Computer Engineering (TEECCON)',
    year: 2024,
    publishedDate: 'November 7, 2024',
    pages: '1–6',
    doi: '10.1109/TEECCON64024.2024.10939637',
    ieeeLink: 'https://ieeexplore.ieee.org/abstract/document/10939637',
    certificateUrl: '/certificates/cert2.pdf',
    tags: ['Gesture Recognition', 'Human-Computer Interaction', 'Computer Vision', 'OpenCV', 'MediaPipe', 'Voice Recognition'],
    domain: 'HCI & Computer Vision',
    brief: 'A unified, touchless HCI system that lets users control a virtual mouse, air-keyboard, calculator, and drawing canvas using hand gestures and voice commands. Built with OpenCV and MediaPipe for real-time hand tracking, eliminating the need for physical input devices.',
    abstract: 'This paper discusses "Seamless Interaction through Gesture Recognition," a system designed for human-computer interaction without touching any physical tool. It simulates interaction virtually through a gesture-controlled mouse with voice recognition, an air-based keyboard, a calculator, and a drawing canvas. The system applies computer vision, machine learning, and speech recognition technologies to interpret hand movements and voice commands captured by a webcam and microphone. All components were developed using OpenCV and MediaPipe frameworks, which allow real-time hand tracking and gesture identification.',
  },
  {
    id: 3,
    title: 'Exploratory Analysis of Heart Attack and Breast Cancer Early Stage Prediction',
    authors: ['CP Vandana', 'M Shivani Kashyap', 'D Yashas', 'Neha Singh'],
    venue: '2024 Third International Conference on Trends in Electrical, Electronics, and Computer Engineering (TEECCON)',
    year: 2024,
    publishedDate: 'November 7, 2024',
    pages: '1–6',
    doi: '10.1109/TEECCON64024.2024.10941411',
    ieeeLink: 'https://ieeexplore.ieee.org/abstract/document/10941411',
    certificateUrl: '/certificates/cert3.pdf',
    tags: ['Healthcare AI', 'Heart Disease', 'Breast Cancer', 'Machine Learning', 'SVM', 'Random Forest', 'XGBoost'],
    domain: 'Medical Disease Prediction',
    brief: 'A web-based ML platform enabling users to predict heart attack and breast cancer risk by comparing Logistic Regression, KNN, SVM, Random Forest, and XGBoost models. Users input health indicators and receive model-wise predictions with accuracy, F1, precision, and recall metrics.',
    abstract: 'This paper involves the development of a web-based platform with an integrated machine learning algorithm to address problems pertaining to heart disease and breast cancer. It enables users to select datasets and apply models such as Logistic Regression, KNN, SVM, Random Forest, and XGBoost. Performance is evaluated using accuracy, F1 score, precision, and recall, enabling users to pick the most effective model. Users can also input health indicators such as age, sex, cholesterol level, and heart rate to estimate their probability of developing heart disease or breast cancer.',
  },
  {
    id: 4,
    title: 'Next-Gen Dermatology: Revolutionizing Dermatological Diagnostics with AI and Emergency Care Solutions',
    authors: ['Yashas D', 'M Shivani Kashyap', 'Charan PR', 'Hemanth Kumar GP', 'Abhishek BK', 'Deekshith C'],
    venue: '2025 International Conference on Intelligent and Innovative Technologies in Computing, Electrical and Electronics (IITCEE)',
    year: 2025,
    publishedDate: 'January 16, 2025',
    pages: '1–6',
    doi: '10.1109/IITCEE64140.2025.10915434',
    ieeeLink: 'https://ieeexplore.ieee.org/abstract/document/10915434',
    tags: ['Deep Learning', 'Dermatology', 'CNN', 'InceptionV3', 'Telegram Bot', 'Healthcare AI', 'Skin Disease'],
    domain: 'AI Dermatology',
    brief: 'An AI dermatology system using CNN (InceptionV3) trained on the DermaNet dataset, deployed via a Telegram bot. Users upload a skin image and receive an instant disease diagnosis with severity percentage, doctor location recommendations, and suggested treatments.',
    abstract: 'This paper presents an AI-based system that makes use of Convolutional Neural Networks with the InceptionV3 Architecture for predicting skin diseases. The model, based on the large DermaNet dataset, classifies skin disorders fast and effectively. The system is coupled with a Telegram-based application where a user can upload a photo of the affected skin area and receive a diagnosis within seconds, including an explanation of the disease and its severity in percentage. The bot also provides nearby doctor recommendations and appropriate cures, making it possible to fill the healthcare void in underserved areas.',
  },
  {
    id: 5,
    title: 'AI-Driven Automated Assessment and Evaluation System Using NLP and Machine Learning',
    authors: ['Yashas D', 'Kaviya Shri P', 'M Shivani Kashyap', 'Sahana Ravi', 'Sumehra Banu S', 'Yazhini T S'],
    venue: '2025 2nd International Conference on New Frontiers in Communication, Automation, Management and Security (ICCAMS)',
    year: 2025,
    publishedDate: 'July 11, 2025',
    pages: '1–6',
    doi: '10.1109/ICCAMS65118.2025.11234507',
    ieeeLink: 'https://ieeexplore.ieee.org/abstract/document/11234507',
    tags: ['NLP', 'Education Technology', 'Automated Assessment', 'Plagiarism Detection', 'Machine Learning', 'AI Grading'],
    domain: 'NLP & Education',
    brief: 'An AI/ML/NLP-based automated educational grading system (AESA) that performs dynamic and static code analysis using abstract syntax trees and control flow graphs. Features real-time feedback, plagiarism detection, and bias-free evaluation.',
    abstract: 'The Automated Evaluation and Assessment System (AESA) transforms educational assessment through AI, ML, and NLP for various content types, making grading efficient, scalable, and fair. Major features include dynamic and static analysis, comparative methods using abstract syntax trees and control flow graphs, and real-time feedback for customized learning. It eliminates limitations of manual assessment such as bias, subjectivity, and time inefficiencies while including plagiarism detection to enhance academic integrity.',
  },
  {
    id: 6,
    title: 'Machine Learning–Based Smart Road Surface Anomaly Detection',
    authors: ['Yashas D', 'M Shivani Kashyap', 'Keerthana M G', 'Kaviya Shri P', 'Deepu T', 'Yazhini T S'],
    venue: '2025 First International Conference on Intelligent Computing and Communication Systems (CICCS)',
    year: 2025,
    publishedDate: 'September 18, 2025',
    pages: '1–6',
    doi: '10.1109/CICCS66437.2025.11280062',
    ieeeLink: 'https://ieeexplore.ieee.org/abstract/document/11280062',
    tags: ['Computer Vision', 'Road Safety', 'Pothole Detection', 'Smart Cities', 'Deep Learning', 'IoT', 'Transportation'],
    domain: 'Smart Infrastructure',
    brief: 'An automated pothole and road hump detection system using deep learning trained on the Roboflow pothole dataset. Real-time, scalable, and adaptable to varied lighting and weather conditions — integrates with cloud and smart city infrastructure.',
    abstract: 'This project develops an automated pothole and hump detection system using machine learning and computer vision. A deep learning-based approach trained on the Roboflow pothole dataset analyzes road images and detects abnormalities with accuracy. The implementation is flexible enough to handle various road conditions, lighting environments, rainy conditions, and traffic densities. Cloud-based interfacing enables deployment under smart city infrastructure or standalone use in drones and vehicles.',
  },
  {
    id: 7,
    title: 'Advanced Liver Tumor Detection Using 3D Scan Segmentation With Dense Convolutional Networks',
    authors: ['Yashas D', 'Kaviya Shri P', 'M Shivani Kashyap', 'Sahana Ravi', 'Sumehra Banu S', 'Yazhini T S'],
    venue: '2025 2nd International Conference on New Frontiers in Communication, Automation, Management and Security (ICCAMS)',
    year: 2025,
    publishedDate: 'July 11, 2025',
    pages: '1–6',
    doi: '10.1109/ICCAMS65118.2025.11233924',
    ieeeLink: 'https://ieeexplore.ieee.org/abstract/document/11233924',
    tags: ['Medical Imaging', 'Liver Tumor', 'DenseNet', 'Image Segmentation', 'CNN', '3D CT Scan', 'Deep Learning'],
    domain: 'Medical Imaging',
    brief: 'An automatic liver lesion segmentation framework using DenseNet on the LITS dataset of 3D CT scans. A hybrid loss function (Binary Crossentropy + Dice Coefficient) optimizes pixel-level accuracy. Deployed via a Flask web app for real-time clinical decision-making support.',
    abstract: 'This study presents an automatic framework for liver lesion segmentation using DenseNet architecture, benchmarked on the LITS dataset. Densely connected convolutional networks are utilized for feature reuse and efficiency in learning hierarchical representations. A hybrid loss function combining Binary Crossentropy and Dice Coefficient optimizes the DenseNet model for pixel-level segmentation accuracy. A Flask-based web application enables users to upload 3D liver CT scans and visualize segmentation results, assisting clinical decision-making in real time.',
  },
  {
    id: 8,
    title: 'A Multifunctional UAV System for Precision Agriculture and Environmental Monitoring',
    authors: ['Yashas D', 'Kaviya Shri P', 'M Shivani Kashyap', 'Sahana Ravi', 'Sumehra Banu S', 'Yazhini T S'],
    venue: '2025 2nd International Conference on New Frontiers in Communication, Automation, Management and Security (ICCAMS)',
    year: 2025,
    publishedDate: 'July 11, 2025',
    pages: '1–6',
    doi: '10.1109/ICCAMS65118.2025.11234592',
    ieeeLink: 'https://ieeexplore.ieee.org/abstract/document/11234592',
    tags: ['UAV', 'Precision Agriculture', 'Environmental Monitoring', 'Drones', 'IoT Sensors', 'Smart Farming', 'LIDAR'],
    domain: 'Precision Agriculture',
    brief: 'A multifunctional drone using a Pixhawk flight controller with environmental sensors (air quality, temperature, LIDAR). Features solar charging, autonomous water landing, and a black box for data integrity — enabling real-time scalable agricultural monitoring.',
    abstract: 'A multifunctional UAV system for real-time environmental monitoring in agricultural landscapes is presented. This drone uses a Pixhawk flight controller and environmental sensors including air quality (MQ-135), soil moisture, temperature (DHT22), water pollution, and LIDAR distance sensors (VL53L0X). It features an SD card black box for safe data storage, solar charging for extended mission time, and autonomous water landing. The UAV provides accurate environmental data to assist farmers in decision-making regarding irrigation, fertilization, and pollution control.',
  },
]

/* ─── Abstract toggle ────────────────────────────────────────────── */
function AbstractToggle({ text, accentColor }) {
  const [expanded, setExpanded] = useState(false)
  const limit = 240
  const isLong = text.length > limit
  return (
    <div>
      <p className="text-secondary text-sm leading-[1.7]">
        {expanded || !isLong ? text : text.slice(0, limit).trimEnd() + '…'}
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded(v => !v)}
          style={{ color: accentColor, fontSize: '0.75rem', marginTop: '0.375rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          {expanded ? '▲ Show less' : '▼ Read more'}
        </button>
      )}
    </div>
  )
}

/* ─── Domain pill ────────────────────────────────────────────────── */
function DomainPill({ domain, active, onClick }) {
  const cfg = DOMAIN_CONFIG[domain]
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
        padding: '0.3rem 0.85rem', borderRadius: '9999px',
        fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer',
        border: `1.5px solid ${active ? cfg.accent : 'rgba(150,150,150,0.2)'}`,
        background: active ? `${cfg.accent}22` : 'var(--bg-card)',
        color: active ? cfg.accent : 'var(--text-muted)',
        transition: 'all 0.2s',
      }}
    >
      <span>{cfg.icon}</span>{domain}
    </button>
  )
}

/* ─── Paper card ─────────────────────────────────────────────────── */
function PaperCard({ pub, cfg, index }) {
  return (
    <div
      className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
      style={{
        borderLeft: `4px solid ${cfg.accent}`,
      }}
    >
      {/* Top row */}
      <div className="flex items-center justify-between px-6 pt-5 pb-3 flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <span className="text-base">{cfg.icon}</span>
          <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{ background: `${cfg.accent}22`, border: `1.5px solid ${cfg.accent}55`, color: cfg.accent }}>
            {pub.domain}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-[rgba(139,92,246,0.15)] text-[#a78bfa] border border-[rgba(139,92,246,0.3)]">
            {pub.year}
          </span>
          {pub.certificateUrl && (
            <a href={pub.certificateUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all pub-cert-btn bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.3)] text-[#34d399]">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Certificate
            </a>
          )}
          <a href={pub.ieeeLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all pub-ieee-btn bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.3)] text-[#60a5fa]">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            IEEE Xplore
          </a>
        </div>
      </div>

      <div className="px-6 pb-6">
        {/* Venue */}
        <p className="text-xs mb-3 leading-snug text-muted">
          📍 {pub.venue}
        </p>

        {/* Number + Title */}
        <div className="flex gap-3 items-start mb-3">
          <span className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-extrabold"
            style={{ background: `${cfg.accent}20`, color: cfg.accent, border: `1.5px solid ${cfg.accent}44` }}>
            {index + 1}
          </span>
          <h3 className="text-lg sm:text-xl font-bold leading-snug transition-colors">
            {pub.title}
          </h3>
        </div>

        {/* Authors */}
        <div className="flex items-start gap-2 mb-4">
          <svg className="w-4 h-4 mt-0.5 shrink-0 text-muted"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-sm leading-relaxed text-secondary">
            {pub.authors.join(' · ')}
          </p>
        </div>

        {/* Brief */}
        <div className="rounded-xl p-4 mb-4"
          style={{ background: `${cfg.accent}0d`, border: `1px solid ${cfg.accent}2a` }}>
          <p className="text-sm leading-relaxed text-secondary">
            <span style={{ color: cfg.accent, fontWeight: 700 }}>Overview: </span>
            {pub.brief}
          </p>
        </div>

        {/* Abstract */}
        <div className="mb-5">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-muted">Abstract</p>
          <AbstractToggle text={pub.abstract} accentColor={cfg.accent} />
        </div>

        {/* Tags + meta */}
        <div className="flex flex-wrap items-end justify-between gap-4 pt-4 border-t border-[var(--border-color)]">
          <div className="flex flex-wrap gap-1.5">
            {pub.tags.map((tag, i) => (
              <span key={i} className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                style={{ background: cfg.tag, color: cfg.accent, border: `1px solid ${cfg.accent}33` }}>
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 text-xs shrink-0 text-muted">
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {pub.publishedDate}
            </span>
            <span>pp. {pub.pages}</span>
            <span className="font-mono opacity-75 hidden sm:inline">DOI: {pub.doi}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Main page ──────────────────────────────────────────────────── */
function Publications() {
  const [filterYear, setFilterYear]     = useState('All')
  const [filterDomain, setFilterDomain] = useState('All')
  const [searchQuery, setSearchQuery]   = useState('')

  const years = useMemo(() => {
    const ys = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a)
    return ['All', ...ys]
  }, [])

  const filtered = useMemo(() => {
    return publications.filter(pub => {
      const matchYear   = filterYear   === 'All' || pub.year   === Number(filterYear)
      const matchDomain = filterDomain === 'All' || pub.domain === filterDomain
      const q = searchQuery.toLowerCase()
      const matchSearch =
        !q ||
        pub.title.toLowerCase().includes(q) ||
        pub.tags.some(t => t.toLowerCase().includes(q)) ||
        pub.domain.toLowerCase().includes(q) ||
        pub.authors.some(a => a.toLowerCase().includes(q))
      return matchYear && matchDomain && matchSearch
    })
  }, [filterYear, filterDomain, searchQuery])

  /* Group by year for timeline separators */
  const grouped = useMemo(() => {
    const map = {}
    filtered.forEach(pub => {
      if (!map[pub.year]) map[pub.year] = []
      map[pub.year].push(pub)
    })
    return Object.entries(map).sort(([a], [b]) => Number(a) - Number(b))
  }, [filtered])

  return (
    <div className="gradient-bg min-h-screen">
      <div className="container mx-auto max-w-5xl px-5 py-24">

        {/* Back */}
        <Link to="/"
          className="inline-flex items-center gap-2 mb-8 transition-colors font-medium text-sm text-muted hover-text-accent">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        {/* ── Hero ── */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 bg-[rgba(139,92,246,0.12)] border border-[rgba(139,92,246,0.25)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#a78bfa]" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8b5cf6]" />
            </span>
            <span className="text-[#a78bfa] text-[0.78rem] font-bold tracking-[0.08em] uppercase">
              Peer-Reviewed Research
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold gradient-text mb-4 leading-tight tracking-tight">
            Publications
          </h1>
          <p className="text-secondary max-w-[34rem] mx-auto mb-6 leading-[1.7] text-base">
            IEEE-indexed research spanning AI, healthcare diagnostics, smart systems, and precision agriculture —
            bridging cutting-edge science with real-world impact.
          </p>

          <a href="https://scholar.google.com/citations?user=zEQLrAEAAAAJ&hl=en"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all pub-scholar-btn bg-[rgba(59,130,246,0.12)] border-[1.5px] border-[rgba(59,130,246,0.3)] text-[#60a5fa]">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5h3.7v10h2.6v-5h2.6v4.9h2.7V9.5H15l-3-2.7V24H12V0zm8 6.5l4 3.5H20V6.5z"/>
            </svg>
            View Google Scholar Profile
          </a>
        </div>

        {/* ── Stats ── */}
        <div className="mb-10">
          {/* Overall count — hero stat */}
          <div className="glass-card rounded-2xl p-6 mb-4 text-center relative overflow-hidden hover:scale-[1.02] transition-transform duration-300 border-[1.5px] border-[rgba(139,92,246,0.3)] shadow-[0_0_40px_rgba(139,92,246,0.12)]">
            {/* Decorative blobs */}
            <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full blur-2xl pointer-events-none bg-[rgba(139,92,246,0.18)]" />
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full blur-2xl pointer-events-none bg-[rgba(236,72,153,0.15)]" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl text-3xl bg-[rgba(139,92,246,0.15)] border-[1.5px] border-[rgba(139,92,246,0.3)]">
                📝
              </div>
              <div className="text-center sm:text-left">
                <p className="text-5xl font-black leading-none gradient-text">9</p>
                <p className="text-base font-bold mt-1">Total Research Publications</p>
                <p className="text-xs mt-0.5 text-muted">Peer-reviewed · Internationally indexed</p>
              </div>
            </div>
          </div>

          {/* Breakdown — 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* IEEE */}
            <div className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden"
              style={{ border: '1.5px solid rgba(59,130,246,0.3)', boxShadow: '0 0 24px rgba(59,130,246,0.08)' }}>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full blur-2xl pointer-events-none" style={{ background: 'rgba(59,130,246,0.15)' }} />
              <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-xl text-2xl"
                style={{ background: 'rgba(59,130,246,0.12)', border: '1.5px solid rgba(59,130,246,0.3)' }}>
                🏛
              </div>
              <div>
                <p className="text-3xl font-black leading-none" style={{ color: '#60a5fa' }}>8</p>
                <p className="text-sm font-bold mt-0.5">IEEE Conference Papers</p>
                <p className="text-xs mt-0.5 text-muted">Published · IEEE Xplore indexed</p>
              </div>
            </div>

            {/* Springer */}
            <div className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden"
              style={{ border: '1.5px solid rgba(16,185,129,0.3)', boxShadow: '0 0 24px rgba(16,185,129,0.08)' }}>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full blur-2xl pointer-events-none" style={{ background: 'rgba(16,185,129,0.15)' }} />
              <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-xl text-2xl"
                style={{ background: 'rgba(16,185,129,0.12)', border: '1.5px solid rgba(16,185,129,0.3)' }}>
                📚
              </div>
              <div>
                <p className="text-3xl font-black leading-none" style={{ color: '#34d399' }}>1</p>
                <p className="text-sm font-bold mt-0.5">Springer Conference Paper</p>
                <p className="text-xs mt-0.5 text-muted">Presented · Springer indexed</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Domain filter ── */}
        <div className="mb-5">
          <p className="text-xs font-bold uppercase tracking-widest mb-3 text-muted">
            Filter by Research Domain
          </p>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setFilterDomain('All')} style={{
              display: 'inline-flex', alignItems: 'center', padding: '0.3rem 0.85rem',
              borderRadius: '9999px', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer',
              border: `1.5px solid ${filterDomain === 'All' ? '#8b5cf6' : 'rgba(150,150,150,0.2)'}`,
              background: filterDomain === 'All' ? 'rgba(139,92,246,0.18)' : 'var(--bg-card)',
              color: filterDomain === 'All' ? '#a78bfa' : 'var(--text-muted)',
              transition: 'all 0.2s',
            }}>All Domains</button>
            {Object.keys(DOMAIN_CONFIG).map(d => (
              <DomainPill key={d} domain={d} active={filterDomain === d}
                onClick={() => setFilterDomain(filterDomain === d ? 'All' : d)} />
            ))}
          </div>
        </div>

        {/* ── Year filter + Search ── */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 items-start">
          <div className="flex gap-2 flex-wrap items-center">
            <span className="text-xs font-bold uppercase tracking-widest mr-1 text-muted">Year:</span>
            {years.map(y => (
              <button key={y} onClick={() => setFilterYear(String(y))}
                className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
                style={{
                  background: String(filterYear) === String(y) ? '#8b5cf6' : 'var(--bg-card)',
                  color: String(filterYear) === String(y) ? '#fff' : 'var(--text-muted)',
                  border: `1.5px solid ${String(filterYear) === String(y) ? '#8b5cf6' : 'rgba(150,150,150,0.2)'}`,
                  boxShadow: String(filterYear) === String(y) ? '0 4px 14px rgba(139,92,246,0.35)' : 'none',
                }}>
                {y}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:max-w-xs sm:ml-auto">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z"/>
            </svg>
            <input type="text" placeholder="Search title, tag, author…"
              value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full text-sm glass-card focus:outline-none border-[1.5px] border-[rgba(139,92,246,0.2)] bg-transparent"
            />
          </div>
        </div>

        {/* ── Result count ── */}
        <p className="text-sm mb-8 text-muted">
          Showing <span className="text-[#a78bfa] font-bold">{filtered.length}</span> of {publications.length} publications
          {filterYear !== 'All' && <> · Year: <span className="text-[#a78bfa] font-semibold">{filterYear}</span></>}
          {filterDomain !== 'All' && <> · Domain: <span className="font-semibold" style={{ color: DOMAIN_CONFIG[filterDomain]?.accent }}>{filterDomain}</span></>}
        </p>

        {/* ── Cards grouped by year ── */}
        {grouped.length > 0 ? (
          <div className="space-y-12">
            {grouped.map(([year, pubs]) => (
              <div key={year}>
                {/* Year divider */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-[var(--border-color)]" />
                  <div className="flex items-center gap-2 px-4 py-1 rounded-full"
                    style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)' }}>
                    <svg className="w-3.5 h-3.5 text-[#a78bfa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <span className="text-[#a78bfa] font-bold text-[0.85rem]">{year}</span>
                  </div>
                  <div className="h-px flex-1 bg-[var(--border-color)]" />
                </div>

                <div className="space-y-5">
                  {pubs.map(pub => {
                    const cfg = DOMAIN_CONFIG[pub.domain] ?? DOMAIN_CONFIG['NLP & Education']
                    // Sequential numbering: count all pubs in previous year groups + position in current group
                    const allPubsFlat = grouped.flatMap(([, g]) => g)
                    const seqIdx = allPubsFlat.findIndex(p => p.id === pub.id)
                    return <PaperCard key={pub.id} pub={pub} cfg={cfg} index={seqIdx} />
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-12 text-center mt-4">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No results found</h3>
            <p className="text-secondary">Try adjusting your search or filters.</p>
          </div>
        )}

        {/* ── Footer CTA ── */}
        <div className="mt-16 glass-card rounded-2xl p-8 text-center border-[rgba(59,130,246,0.2)]">
          <div className="text-3xl mb-3">🎓</div>
          <h3 className="text-lg font-bold mb-1 gradient-text">Google Scholar Profile</h3>
          <p className="text-sm mb-5 text-secondary">
            See full citation counts, h-index, and citation graph.
          </p>
          <a href="https://scholar.google.com/citations?user=zEQLrAEAAAAJ&hl=en"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all pub-scholar-btn"
            style={{ background: 'rgba(59,130,246,0.15)', border: '1.5px solid rgba(59,130,246,0.35)', color: '#60a5fa' }}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5h3.7v10h2.6v-5h2.6v4.9h2.7V9.5H15l-3-2.7V24H12V0zm8 6.5l4 3.5H20V6.5z"/>
            </svg>
            Open Google Scholar Profile
          </a>
        </div>

      </div>
    </div>
  )
}

export default Publications
