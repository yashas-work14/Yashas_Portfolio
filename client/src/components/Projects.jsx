import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  const projects = [
    {
      title: 'Repo Analyzer',
      subtitle: 'GenAI — AI-Powered Codebase Analysis',
      description:
        'AI-powered tool to analyze any codebase — upload a ZIP or clone a Git repo to get instant architecture insights, module detection, interactive Q&A, and auto-generated documentation (PDF/MD/HTML).',
      tags: ['Python', 'FastAPI', 'LLMs', 'NLP', 'GitHub APIs'],
      icon: '🔍',
      gradient: 'from-violet-500 to-purple-600',
      githubUrl: 'https://github.com/Yashas14/Repo_Analyzer',
    },
    {
      title: 'MediMind AI',
      subtitle: 'Healthcare AI — Multi-Agent Diagnostic Platform',
      description:
        'Full-stack AI healthcare platform with a 5-agent diagnostic pipeline (Claude Sonnet 4), RAG knowledge base, real-time WebSocket chat, interactive body map, and Next.js 14 dashboard covering 41 diseases.',
      tags: ['Claude Sonnet 4', 'RAG', 'WebSocket', 'Next.js 14', 'FastAPI'],
      icon: '🏥',
      gradient: 'from-emerald-500 to-teal-600',
      githubUrl: 'https://github.com/Yashas14/MediMind_AI',
    },
    {
      title: 'QR Nexus — AI-Powered QR Platform',
      subtitle: 'Full-Stack — Next.js 14 & OpenAI GPT-4o',
      description:
        'Generate custom QR codes, scan in real-time via camera, analyze content with GPT-4o, and track usage through an interactive analytics dashboard. Built with Next.js 14 & TypeScript.',
      tags: ['Next.js 14', 'TypeScript', 'OpenAI GPT-4o', 'Analytics'],
      icon: '📱',
      gradient: 'from-blue-500 to-indigo-600',
      githubUrl: 'https://github.com/Yashas14/QR_Nexus-AI-Powered_QR_Code_Platform',
    },
    {
      title: 'Skin Disease Detection & Telegram Bot',
      subtitle: 'Healthcare AI — Deep Learning',
      description:
        'InceptionV3 CNN trained on DermaNet to classify 23 skin diseases. Deployed as a patient-facing Telegram bot for real-time diagnosis support.',
      tags: ['Deep Learning', 'CNN', 'InceptionV3', 'Telegram Bot'],
      icon: '🔬',
      gradient: 'from-pink-500 to-rose-500',
      githubUrl:
        'https://github.com/Yashas14/Skin_Disease_Detection_using_Deep_Learning_and_Real-Time_Telegram_Bot_Interface',
    },
    {
      title: 'Seamless Gesture Recognition',
      subtitle: 'Computer Vision — Multi-Modal HCI',
      description:
        'Unified platform with virtual canvas, keyboard, calculator & mouse via hand gesture recognition and voice assistance using MediaPipe & OpenCV.',
      tags: ['OpenCV', 'MediaPipe', 'Voice Assistant', 'HCI'],
      icon: '🖐️',
      gradient: 'from-blue-500 to-cyan-500',
      githubUrl:
        'https://github.com/Yashas14/Seamless_Interaction_through_Gesture_Recognition',
    },
    {
      title: 'Predictive Analytics for Farming',
      subtitle: 'AgriTech — Crop Yield Prediction',
      description:
        'ML system predicting crop yields with data viz and an intuitive Streamlit web app to empower farmers with data-driven decisions.',
      tags: ['Machine Learning', 'Streamlit', 'Agriculture'],
      icon: '🌾',
      gradient: 'from-lime-500 to-green-500',
      githubUrl:
        'https://github.com/Yashas14/Predictive_Analytics_for_Future_Ready_Farming',
    },
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-semibold tracking-wider uppercase mb-4 text-cyan">My Work</p>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-secondary">
            AI/ML & GenAI projects — 25+ repositories spanning healthcare AI, LLM applications, computer vision, and data science.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl overflow-hidden"
            >
              {/* Project Header */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-between relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10">
                  <span className="text-4xl">{project.icon}</span>
                </div>
                <div className="absolute -right-8 -bottom-8 text-9xl opacity-10">
                  {project.icon}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold transition-colors hover-text-accent">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-cyan">{project.subtitle}</p>
                </div>

                <p className="text-sm leading-relaxed text-secondary">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="skill-badge text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 project-link-btn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  <Link
                    to="/projects"
                    className="flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 project-details-btn"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="btn-outline inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            View All 25+ Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects