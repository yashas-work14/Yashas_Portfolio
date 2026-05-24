import React from 'react'
import { Link } from 'react-router-dom'

function Certificates() {
  // Add your certificates data here
  const certificates = [
    // {
    //   title: 'Certificate Name',
    //   issuer: 'Issuing Organization',
    //   date: 'Month Year',
    //   credentialId: 'Credential ID',
    //   credentialUrl: 'https://verify-certificate.com',
    //   skills: ['Skill 1', 'Skill 2'],
    //   image: '/path/to/certificate.png',
    // },
  ]

  return (
    <div className="gradient-bg min-h-screen">
      <div className="container mx-auto max-w-6xl px-6 py-24">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-semibold tracking-wider uppercase mb-4">Achievements</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-4">Certificates</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-lg">
                      🎓
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                      <p className="text-xs text-gray-500">{cert.date}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {cert.title}
                  </h3>
                  {cert.credentialId && (
                    <p className="text-gray-500 text-xs mb-3">ID: {cert.credentialId}</p>
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
                      className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1"
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
            <p className="text-gray-400">Certificate information will be displayed here once added.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Certificates
