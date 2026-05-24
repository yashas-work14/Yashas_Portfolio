import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Patents() {
  const [openPdf, setOpenPdf] = useState(null)

  // Add your patents data here
  const patents = [
   {
  title: 'WhatsApp Bot Based Dermatology Assistant for Skin Disease',
  patentNumber: '202541054237 A',
  status: 'Published (Grant Pending)',
  date: 'Filed on 05/06/2025 | Published on 27/06/2025',
  description:
    'An AI-powered dermatology assistant that uses CNNs with the InceptionV3 architecture to diagnose skin diseases from images. Integrated with a WhatsApp bot, the system provides diagnostic reports, severity analysis, emergency care suggestions, and helps users locate nearby clinics, improving accessibility to dermatological care.',
  inventors: [
    'Yashas D',
    'Dr. Vandana C P',
    'M. Shivani Kashyap',
  ],
  icon: '🤖',
  category: 'AI & Healthcare',
  pdfUrl: '/patents/Patent1.pdf',
},
{
  title: 'A Multimodal System for Gesture Recognition',
  patentNumber: '202541088551 A',
  status: 'Published (Grant Pending)',
  date: 'Filed on 17/09/2025 | Published on 17/10/2025',
  description:
    'A contactless human–computer interaction system integrating a virtual mouse with voice assistance, virtual calculator, virtual canvas, and virtual keyboard. The system leverages OpenCV and Mediapipe for real-time hand gesture recognition using 21-point landmarks, NLP for voice commands, and a hybrid rule-based and machine learning engine. It supports marker-free and marker-based interaction, enabling applications in education, assistive technology, creativity, and hands-free computing.',
  inventors: [
    'Yashas D',
    'Dr. Jimsha K Mathew',
    'Pratibha Prakash Machakanur',
    'M. Shivani Kashyap',
    'Vinay Prasad K'
  ],
  icon: '🖐️',
  category: 'HCI & Computer Vision',
  pdfUrl: '/patents/Patent2.pdf',
}
  ]

  return (
    <div className="gradient-bg min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-24 relative z-10">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 mb-8 transition-all hover:gap-3 group text-cyan"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        {/* Page Header with Animation */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <span className="text-2xl">📜</span>
            <span className="font-semibold tracking-wider uppercase text-sm text-link">Intellectual Property</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient">
              Patents
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-secondary">
            Innovative solutions transforming ideas into protected intellectual property
          </p>
          
          {/* Stats Bar */}
          <div className="flex justify-center gap-8 mt-10">
            <div className="glass-card px-6 py-4 rounded-2xl text-center">
              <div className="text-3xl font-bold text-link">{patents.length}</div>
              <div className="text-sm text-secondary">Patents Filed</div>
            </div>
            <div className="glass-card px-6 py-4 rounded-2xl text-center">
              <div className="text-3xl font-bold text-link">{patents.filter(p => p.status.includes('Pending')).length}</div>
              <div className="text-sm text-secondary">Grant Pending</div>
            </div>
            <div className="glass-card px-6 py-4 rounded-2xl text-center">
              <div className="text-3xl font-bold text-link">{patents.filter(p => p.status === 'Granted').length}</div>
              <div className="text-sm text-secondary">Granted</div>
            </div>
          </div>
        </div>

        {/* Patents Cards */}
        {patents.length > 0 ? (
          <div className="space-y-8">
            {patents.map((patent, index) => (
              <div 
                key={index} 
                className="group relative cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setOpenPdf(openPdf === index ? null : index)}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl transition-all duration-500 ${openPdf === index ? 'opacity-0' : 'opacity-0 group-hover:opacity-30 blur-lg'}`} />
                
                <div className="relative glass-card rounded-3xl p-8 md:p-10 border border-white/5 hover:border-purple-500/30 transition-all duration-500 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative z-10">
                    {/* Top Row - Status, Category, Date */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 ${
                        patent.status === 'Granted' 
                          ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                        {patent.status}
                      </span>
                      <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border border-purple-500/30">
                        {patent.category}
                      </span>
                      <span className="text-sm ml-auto hidden md:block text-muted">{patent.date}</span>
                    </div>

                    {/* Title with Icon */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-3xl shrink-0 border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                        {patent.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                          {patent.title}
                        </h3>
                        <p className="font-mono text-sm flex items-center gap-2 text-cyan">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                          </svg>
                          {patent.patentNumber}
                        </p>
                      </div>
                    </div>

                    {/* Date for mobile */}
                    <p className="text-sm mb-4 md:hidden text-muted">{patent.date}</p>

                    {/* Description */}
                    <p className="leading-relaxed mb-8 text-lg text-secondary">
                      {patent.description}
                    </p>

                    {/* Inventors */}
                    {patent.inventors && (
                      <div className="mb-6">
                        <p className="text-sm mb-3 flex items-center gap-2 text-muted">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          Inventors
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {patent.inventors.map((inventor, i) => (
                            <span 
                              key={i} 
                              className="px-4 py-2 rounded-full text-sm glass-card text-gray-300 border border-gray-600/50 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                            >
                              {inventor}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* View PDF Button & Inline Viewer */}
                    {patent.pdfUrl && (
                      <div>
                        <button 
                          onClick={(e) => { e.stopPropagation(); setOpenPdf(openPdf === index ? null : index); }}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-105"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {openPdf === index ? 'Hide Document' : 'View Full Document'}
                          <svg className={`w-4 h-4 transition-transform duration-300 ${openPdf === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Embedded PDF Viewer */}
                        {openPdf === index && (
                          <div className="mt-6 rounded-2xl overflow-hidden border border-purple-500/30 bg-gray-900/50" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-b border-purple-500/20">
                              <span className="text-sm text-purple-300 font-medium flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Patent Document — {patent.patentNumber}
                              </span>
                              <a
                                href={patent.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-gray-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                              >
                                Open in new tab
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            </div>
                            <iframe
                              src={patent.pdfUrl}
                              title={`Patent: ${patent.title}`}
                              className="w-full"
                              style={{ height: '80vh', minHeight: '600px' }}
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-3xl p-16 text-center border border-white/5">
            <div className="text-8xl mb-6 animate-bounce">📜</div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">No Patents Added Yet</h3>
            <p className="text-lg text-secondary">Patent information will be displayed here once added.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8 inline-block">
            <p className="text-secondary mb-4">Interested in collaborating on innovative projects?</p>
            <Link 
              to="/#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-105"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Patents
