import React from 'react'
import { Link } from 'react-router-dom'

function Certificates() {
  const certificates = [
    // --- Coursera 2025 ---
    {
      title: 'Introduction to Large Language Models',
      issuer: 'Google Cloud',
      date: 'September 29, 2025',
      credentialUrl: 'https://coursera.org/share/e146b729ec7c8549200bf2ef473922bf',
      skills: ['LLM', 'Generative AI', 'Google Cloud'],
    },
    {
      title: 'Generative AI with Large Language Models',
      issuer: 'DeepLearning.AI',
      date: 'September 14, 2025',
      credentialUrl: 'https://coursera.org/share/a158837cf4ae1b7a1c5f6256e38927c4',
      skills: ['LLM', 'Generative AI', 'Deep Learning'],
    },
    {
      title: 'Introduction to Generative AI',
      issuer: 'Google Cloud',
      date: 'September 12, 2025',
      credentialUrl: 'https://coursera.org/share/62e0bcddcbb52839cb4b46f33a720d14',
      skills: ['Generative AI', 'Google Cloud'],
    },
    // --- HP Foundation ---
    {
      title: 'Data Science & Analytics',
      issuer: 'HP Foundation',
      date: 'March 2, 2025',
      credentialId: 'a72a0f0e-2f1d-4197-8993-e9c4de14471c',
      skills: ['Data Science', 'Analytics'],
    },
    {
      title: 'AI for Beginners',
      issuer: 'HP Foundation',
      date: 'March 2, 2025',
      credentialId: 'fc0d9706-cd85-44cc-8173-a2d9425208b9',
      skills: ['Artificial Intelligence'],
    },
    {
      title: 'Introduction to Cybersecurity Awareness',
      issuer: 'HP Foundation',
      date: 'March 2, 2025',
      credentialId: 'df3b7eac-2454-4bf2-bbe7-1e23a5429e52',
      skills: ['Cybersecurity'],
    },
    // --- Forage Simulations ---
    {
      title: 'Advanced Software Engineering Job Simulation',
      issuer: 'Walmart Global Tech',
      date: 'February 6, 2025',
      credentialId: 'SwDmr4ZKEJCAyCJze',
      skills: ['Software Engineering'],
    },
    {
      title: 'Software Engineering Job Simulation',
      issuer: 'Goldman Sachs',
      date: 'February 4, 2025',
      credentialId: 'SwDmr4ZKEJCAyCJze',
      skills: ['Software Engineering'],
    },
    {
      title: 'Cybersecurity Job Simulation',
      issuer: 'Mastercard',
      date: 'February 4, 2025',
      credentialId: 'SwDmr4ZKEJCAyCJze',
      skills: ['Cybersecurity'],
    },
    // --- VTU ---
    {
      title: 'Cloud Computing',
      issuer: 'VTU',
      date: 'February 19, 2025',
      skills: ['Cloud Computing'],
    },
    {
      title: 'Getting Started with Competitive Programming',
      issuer: 'VTU',
      date: 'February 18, 2025',
      skills: ['Competitive Programming', 'DSA'],
    },
    // --- Informatica ---
    {
      title: 'Data Engineering Foundation Certificate 2024/2025',
      issuer: 'Informatica University',
      date: 'March 3, 2025',
      skills: ['Data Engineering', 'Informatica'],
    },
    // --- Unstop ---
    {
      title: '30 Days DSA Bootcamp',
      issuer: 'Unstop',
      date: 'March 14, 2025',
      skills: ['DSA', 'Competitive Programming'],
    },
    // --- Google Cloud ---
    {
      title: 'Introduction to Responsible AI',
      issuer: 'Google Cloud',
      date: 'February 10, 2025',
      credentialId: '7885434',
      skills: ['Responsible AI', 'AI Ethics', 'Google Cloud'],
    },
    // --- IBM SkillsBuild ---
    {
      title: 'Getting Started with Data',
      issuer: 'IBM SkillsBuild',
      date: 'July 15, 2025',
      skills: ['Data Science', 'IBM'],
    },
    {
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: 'November 8, 2024',
      skills: ['Artificial Intelligence', 'IBM'],
    },
    {
      title: 'AI Ethics',
      issuer: 'IBM SkillsBuild',
      date: 'November 8, 2024',
      skills: ['AI Ethics', 'Artificial Intelligence', 'IBM'],
    },
    {
      title: 'Introduction to Artificial Intelligence',
      issuer: 'IBM SkillsBuild',
      date: 'November 7, 2024',
      skills: ['Artificial Intelligence', 'IBM'],
    },
    {
      title: 'Machine Learning and Deep Learning',
      issuer: 'IBM SkillsBuild',
      date: 'November 7, 2024',
      skills: ['Machine Learning', 'Deep Learning', 'IBM'],
    },
    {
      title: 'Natural Language Processing and Computer Vision',
      issuer: 'IBM SkillsBuild',
      date: 'November 7, 2024',
      skills: ['NLP', 'Computer Vision', 'IBM'],
    },
    {
      title: 'Cybersecurity Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: 'February 28, 2024',
      skills: ['Cybersecurity', 'IBM'],
    },
    // --- Microsoft & LinkedIn ---
    {
      title: 'Career Essentials in Cybersecurity by Microsoft and LinkedIn',
      issuer: 'Microsoft & LinkedIn',
      date: 'September 24, 2024',
      credentialId: '5caf22f5a9b5035705832db94aa9b2ba110de91ff7e8044426c27701f2ca5cec',
      skills: ['Cybersecurity', 'Microsoft'],
    },
    {
      title: 'Career Essentials in Generative AI by Microsoft and LinkedIn',
      issuer: 'Microsoft & LinkedIn',
      date: 'September 23, 2024',
      credentialId: 'a71623e270f6a04d026c590565a0a4847d980598deef97c23a26be8dface701b',
      skills: ['Generative AI', 'Microsoft'],
    },
    // --- Microsoft ---
    {
      title: 'Microsoft Azure AI Fundamentals',
      issuer: 'Microsoft',
      date: 'August 24, 2024',
      skills: ['Azure', 'Artificial Intelligence', 'Microsoft'],
    },
    {
      title: 'Introduction to Natural Language Processing',
      issuer: 'Great Learning',
      date: 'September 2024',
      skills: ['NLP', 'Machine Learning'],
    },
    // --- Infosys ---
    {
      title: 'Cyber Security and Applied Ethical Hacking',
      issuer: 'Infosys Springboard',
      date: 'May 20, 2024',
      skills: ['Cybersecurity', 'Ethical Hacking'],
    },
    // --- Cisco ---
    {
      title: 'JavaScript Essentials 1',
      issuer: 'Cisco Networking Academy',
      date: 'April 29, 2024',
      skills: ['JavaScript', 'Programming'],
    },
    // --- Microsoft (Coursera) ---
    {
      title: 'Artificial Intelligence on Microsoft Azure',
      issuer: 'Microsoft',
      date: 'February 28, 2024',
      skills: ['Azure', 'Artificial Intelligence', 'Microsoft'],
    },
    {
      title: 'Microsoft Azure Machine Learning',
      issuer: 'Microsoft',
      date: 'February 21, 2024',
      skills: ['Azure', 'Machine Learning', 'Microsoft'],
    },
    // --- Cisco ---
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: 'February 21, 2024',
      skills: ['Cybersecurity', 'Networking'],
    },
    // --- Udemy ---
    {
      title: 'Python and Flask Framework Complete Course',
      issuer: 'Udemy',
      date: 'February 24, 2024',
      skills: ['Python', 'Flask', 'Web Development'],
    },
    // --- WHO ---
    {
      title: 'Research Ethics Online Training',
      issuer: 'WHO',
      date: 'November 16, 2024',
      skills: ['Research Ethics'],
    },
    // --- Cisco ---
    {
      title: 'Network Addressing and Basic Troubleshooting',
      issuer: 'Cisco Networking Academy',
      date: 'December 14, 2023',
      skills: ['Networking', 'Troubleshooting'],
    },
    // --- Udemy ---
    {
      title: 'French for you, Grammar A1-A2 and Beyond',
      issuer: 'Udemy',
      date: 'October 22, 2023',
      skills: ['French', 'Language'],
    },
  ]

  return (
    <div className="gradient-bg min-h-screen">
      <div className="container mx-auto max-w-6xl px-6 py-24">
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
        <div className="text-center mb-16">
          <p className="font-semibold tracking-wider uppercase mb-4 text-link">Achievements</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-4">Certificates</h1>
          <p className="max-w-2xl mx-auto text-secondary">
            Professional certifications and courses completed to enhance my skills.
          </p>
        </div>

        {/* Certificates Grid */}
        {certificates.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden group">
                {cert.image && (
                  <div className="h-40 overflow-hidden bg-white/5">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg bg-brand">
                      🎓
                    </div>
                    <div>
                      <p className="text-sm text-secondary">{cert.issuer}</p>
                      <p className="text-xs text-muted">{cert.date}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 transition-colors">
                    {cert.title}
                  </h3>
                  {cert.credentialId && (
                    <p className="text-xs mb-3 text-muted">ID: {cert.credentialId}</p>
                  )}
                  {cert.skills && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="skill-badge text-xs">{skill}</span>
                      ))}
                    </div>
                  )}
                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex items-center gap-1 text-cyan"
                    >
                      Verify Certificate
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-2">No Certificates Added Yet</h3>
            <p className="text-secondary">Certificate information will be displayed here once added.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Certificates
