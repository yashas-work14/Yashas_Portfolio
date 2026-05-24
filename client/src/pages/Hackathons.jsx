import React from 'react'
import { Link } from 'react-router-dom'

function Hackathons() {
  // Add your hackathons data here
  const hackathons = [
    // {
    //   title: 'Hackathon Name',
    //   organizer: 'Organizing Body',
    //   date: 'Month Year',
    //   location: 'City, Country / Virtual',
    //   position: '1st Place / Winner / Finalist',
    //   project: 'Project Built',
    //   description: 'What you built and achieved',
    //   teamSize: 4,
    //   prize: '$1000',
    //   tags: ['AI', 'Web3', 'Healthcare'],
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
          <p className="text-purple-400 font-semibold tracking-wider uppercase mb-4">Competitions</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-4">Hackathons</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hackathons and coding competitions I've participated in and achievements earned.
          </p>
        </div>

        {/* Hackathons List */}
        {hackathons.length > 0 ? (
          <div className="space-y-8">
            {hackathons.map((hackathon, index) => (
              <div key={index} className="glass-card rounded-2xl p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{hackathon.title}</h3>
                    <p className="text-gray-400">{hackathon.organizer}</p>
                  </div>
                  {hackathon.position && (
                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border border-yellow-500/30 flex items-center gap-2 w-fit">
                      <span>🏆</span>
                      {hackathon.position}
                    </span>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">{hackathon.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{hackathon.location}</span>
                  </div>
                  {hackathon.teamSize && (
                    <div className="flex items-center gap-2 text-gray-400">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-sm">Team of {hackathon.teamSize}</span>
                    </div>
                  )}
                  {hackathon.prize && (
                    <div className="flex items-center gap-2 text-gray-400">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">{hackathon.prize}</span>
                    </div>
                  )}
                </div>

                {hackathon.project && (
                  <div className="mb-4">
                    <span className="text-purple-400 font-semibold">Project: </span>
                    <span className="text-white">{hackathon.project}</span>
                  </div>
                )}

                <p className="text-gray-400 mb-4">{hackathon.description}</p>

                {hackathon.tags && (
                  <div className="flex flex-wrap gap-2">
                    {hackathon.tags.map((tag, i) => (
                      <span key={i} className="skill-badge text-xs">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-2">No Hackathons Added Yet</h3>
            <p className="text-gray-400">Hackathon information will be displayed here once added.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Hackathons
