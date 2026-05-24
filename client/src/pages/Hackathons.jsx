import React, { useState } from 'react'
import { Link } from 'react-router-dom'

/* ─── Position config ──────────────────────────────────────────── */
const POS = {
  winner:        { color: '#f59e0b', bg: 'rgba(245,158,11,0.15)',  border: 'rgba(245,158,11,0.4)'  },
  runnerup:      { color: '#94a3b8', bg: 'rgba(148,163,184,0.15)', border: 'rgba(148,163,184,0.4)' },
  top:           { color: '#f97316', bg: 'rgba(249,115,22,0.15)',  border: 'rgba(249,115,22,0.4)'  },
  finalist:      { color: '#3b82f6', bg: 'rgba(59,130,246,0.15)',  border: 'rgba(59,130,246,0.4)'  },
  round:         { color: '#06b6d4', bg: 'rgba(6,182,212,0.15)',   border: 'rgba(6,182,212,0.4)'   },
  participation: { color: '#a78bfa', bg: 'rgba(139,92,246,0.10)', border: 'rgba(139,92,246,0.25)' },
}

/* ─── Data ─────────────────────────────────────────────────────── */
const hackathons = [
  /* ── Notable ── */
  { title: 'Express-A-Thon',                              organizer: 'NHCE – Evolve.AI',                          place: 'Offline',          date: '2024',     position: 'Winners',                             positionType: 'winner'        },
  { title: "HACK KSHETRA'24",                             organizer: 'VVCE',                                      place: 'Offline',          date: '2024',     position: 'Runners Up',                          positionType: 'runnerup'      },
  { title: 'TATA InnoVent',                               organizer: 'TATA Technologies',                         place: 'Online',           date: '2024',     position: 'Top 17th among 2,600+ Teams',         positionType: 'top'           },
  { title: 'Vultr Cloud Innovate Hackathon',              organizer: 'Vultr & GeeksforGeeks',                     place: 'Online',           date: '2024',     position: 'Top 25th among 50,000+ Participants', positionType: 'top'           },
  { title: "ML-Fiesta: AI/ML Hackathon – Synergy'24",    organizer: 'IIIT, Bangalore',                           place: 'Unstop – Online',  date: '2024',     position: '9th Place',                           positionType: 'top'           },
  { title: 'YI YUVA',                                    organizer: 'G20 & YI YUVA',                             place: 'Offline',          date: '2023',     position: 'Finals',                              positionType: 'finalist'      },
  { title: 'VISION NET TechThon 2024',                   organizer: 'VISIONET Company',                          place: 'Offline',          date: '2024',     position: 'Finalist – 6th Place',                positionType: 'finalist'      },
  { title: 'Parul Hack Verse Hackathon 2025',            organizer: 'Parul University, Vadodara',                place: 'Unstop – Offline',  date: '2025',     position: 'Finalist',                            positionType: 'finalist'      },
  { title: "CODE RED '25 – Round 03",                    organizer: 'BMSIT',                                     place: 'Unstop – Offline',  date: '2025',     position: 'Cleared Round 1',                     positionType: 'round'         },
  /* ── Participation ── */
  { title: 'SEED Hackathon 2024',                        organizer: 'SEED Global Education',                     place: 'Online',           date: 'Nov 2024', position: 'Participation', positionType: 'participation' },
  { title: 'Accenture Innovation Challenge 2023',        organizer: 'Accenture & Unstop',                        place: 'Unstop – Online',  date: '2023',     position: 'Participation', positionType: 'participation' },
  { title: 'Accenture Innovation Challenge 2024',        organizer: 'Accenture & Unstop',                        place: 'Hack2Skill – Online', date: '2024',  position: 'Participation', positionType: 'participation' },
  { title: "CODE RED '25",                               organizer: 'BMSIT',                                     place: 'Unstop – Online',  date: '2025',     position: 'Participation', positionType: 'participation' },
  { title: 'Flipkart GRiD 6.0',                          organizer: 'Flipkart',                                  place: 'Unstop – Online',  date: '2024',     position: 'Participation', positionType: 'participation' },
  { title: 'HACKZONE 2022',                              organizer: 'NHCE',                                      place: 'Offline',          date: '2022',     position: 'Participation', positionType: 'participation' },
  { title: 'HP Power Lab',                               organizer: 'HPC Ltd',                                   place: 'Unstop – Online',  date: '2024',     position: 'Participation', positionType: 'participation' },
  { title: 'Loreal Sustainability Challenge 2024',       organizer: 'LOREAL',                                    place: 'Unstop – Online',  date: '2024',     position: 'Participation', positionType: 'participation' },
  { title: 'National Building Case Study',               organizer: 'National Building',                         place: 'Unstop – Online',  date: '2025',     position: 'Participation', positionType: 'participation' },
  { title: "Incept of UNNAYAN'25",                       organizer: 'National Institute of Agriculture, Hyd',   place: 'Unstop – Online',  date: '2025',     position: 'Participation', positionType: 'participation' },
  { title: 'TATA Crucible Campus',                       organizer: 'TATA Group',                               place: 'Unstop – Online',  date: '2024',     position: 'Participation', positionType: 'participation' },
  { title: 'TATA Imagination Challenge 2023',            organizer: 'TATA Group',                               place: 'Unstop – Online',  date: '2023',     position: 'Participation', positionType: 'participation' },
  { title: 'TATA Imagination Challenge 2024',            organizer: 'TATA Group',                               place: 'Unstop – Online',  date: '2024',     position: 'Participation', positionType: 'participation' },
  { title: 'Tata Steel TomorrowLab',                     organizer: 'TATA Group',                               place: 'Unstop – Online',  date: '2023',     position: 'Participation', positionType: 'participation' },
  { title: 'HACK FOR GOOD 2023',                         organizer: 'BMSCE ACM Student Chapter',                place: 'Online',           date: '2023',     position: 'Participation', positionType: 'participation' },
  { title: 'QUANTUM HACKS',                              organizer: 'QuantumX-24, NHCE',                        place: 'Offline',          date: '2024',     position: 'Participation', positionType: 'participation' },
  { title: 'Sparkathon',                                 organizer: 'Converge Walmart',                         place: 'Online',           date: '2024',     position: 'Participation', positionType: 'participation' },
  { title: 'Technovate for INDIA',                       organizer: 'The Times of India',                       place: 'Offline',          date: '2024',     position: 'Participation', positionType: 'participation' },
  { title: 'EY Teachathon 5.0',                          organizer: 'EY (Ernst & Young) & Unstop',              place: 'Unstop – Online',  date: '2024',     position: 'Participation', positionType: 'participation' },
  { title: 'Connect 2K24 – CODEFATHER HACKAHOLICS',      organizer: 'NHCE Clubs',                               place: 'Offline',          date: '2024',     position: 'Participation', positionType: 'participation' },
  { title: 'IMPULSE – Ideathon',                         organizer: 'SJB Institute of Technology',              place: 'Offline',          date: '2024',     position: 'Participation', positionType: 'participation' },
  { title: 'AI For Impact 2024',                         organizer: 'Google Cloud',                             place: 'Online',           date: '2024',     position: 'Participation', positionType: 'participation' },
]

const notable         = hackathons.filter(h => h.positionType !== 'participation')
const allParticipations = hackathons.filter(h => h.positionType === 'participation')

/* ─── Notable Achievement Card ─────────────────────────────────── */
function NotableCard({ h }) {
  const cfg = POS[h.positionType]
  return (
    <div
      className="glass-card rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 hover:scale-[1.02]"
      style={{ borderLeft: `4px solid ${cfg.color}`, boxShadow: `0 0 20px ${cfg.bg}` }}
    >
      <div className="flex items-start justify-between gap-2 flex-wrap">
        <h3 className="text-base font-bold leading-snug flex-1">{h.title}</h3>
        <span
          className="shrink-0 px-2.5 py-0.5 rounded-full text-xs font-bold whitespace-nowrap"
          style={{ background: cfg.bg, color: cfg.color, border: `1.5px solid ${cfg.border}` }}
        >
          {h.position}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-secondary">
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          {h.organizer}
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {h.place}
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {h.date}
        </span>
      </div>
    </div>
  )
}

/* ─── Participation Row ─────────────────────────────────────────── */
function ParticipationRow({ h, index }) {
  const isOnline = h.place.toLowerCase().includes('online')
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors bg-elevated hover:bg-[rgba(139,92,246,0.05)]">
      <span className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold bg-[rgba(139,92,246,0.12)] text-[#a78bfa]">
        {index + 1}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold truncate">{h.title}</p>
        <p className="text-xs text-secondary truncate">{h.organizer} · {h.date}</p>
      </div>
      <span
        className="shrink-0 hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold"
        style={{
          background: isOnline ? 'rgba(6,182,212,0.1)' : 'rgba(139,92,246,0.1)',
          color: isOnline ? '#67e8f9' : '#c4b5fd',
          border: `1px solid ${isOnline ? 'rgba(6,182,212,0.25)' : 'rgba(139,92,246,0.25)'}`,
        }}
      >
        {isOnline ? '🌐 Online' : '📍 Offline'}
      </span>
    </div>
  )
}

/* ─── Main Page ─────────────────────────────────────────────────── */
function Hackathons() {
  const [showAll, setShowAll] = useState(false)
  const visibleParticipations = showAll ? allParticipations : allParticipations.slice(0, 10)

  const stats = [
    { label: 'Total Events',  value: hackathons.length, color: '#a78bfa', bg: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.3)' },
    { label: 'Winner',        value: 1,                  color: '#f59e0b', bg: 'rgba(245,158,11,0.12)',  border: 'rgba(245,158,11,0.3)'  },
    { label: 'Runners Up',    value: 1,                  color: '#94a3b8', bg: 'rgba(148,163,184,0.12)', border: 'rgba(148,163,184,0.3)' },
    { label: 'Top Rankings',  value: 3,                  color: '#f97316', bg: 'rgba(249,115,22,0.12)',  border: 'rgba(249,115,22,0.3)'  },
    { label: 'Finalists',     value: 3,                  color: '#3b82f6', bg: 'rgba(59,130,246,0.12)',  border: 'rgba(59,130,246,0.3)'  },
  ]

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
              Competitions & Challenges
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold gradient-text mb-4 leading-tight tracking-tight">
            Hackathons
          </h1>
          <p className="text-secondary max-w-[34rem] mx-auto leading-[1.7] text-base">
            From national-level competitions to global challenges — a complete record of every hackathon, ideathon, and innovation challenge.
          </p>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12">
          {stats.map((s, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-4 text-center hover:scale-[1.03] transition-transform duration-300"
              style={{ border: `1.5px solid ${s.border}`, boxShadow: `0 0 20px ${s.bg}` }}
            >
              <p className="text-3xl font-black leading-none" style={{ color: s.color }}>{s.value}</p>
              <p className="text-xs font-semibold mt-1 text-secondary">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Notable Achievements ── */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-[var(--border-color)]" />
            <h2 className="text-base font-bold text-[#a78bfa] flex items-center gap-2 px-3 whitespace-nowrap">
              🏅 Notable Achievements
            </h2>
            <div className="h-px flex-1 bg-[var(--border-color)]" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {notable.map((h, i) => (
              <NotableCard key={i} h={h} />
            ))}
          </div>
        </div>

        {/* ── Full Participation Log ── */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-[var(--border-color)]" />
            <h2 className="text-base font-bold text-[#a78bfa] flex items-center gap-2 px-3 whitespace-nowrap">
              📋 Participation Log
              <span className="text-xs font-normal text-secondary">({allParticipations.length} events)</span>
            </h2>
            <div className="h-px flex-1 bg-[var(--border-color)]" />
          </div>

          <div className="glass-card rounded-2xl p-4 space-y-1">
            {visibleParticipations.map((h, i) => (
              <ParticipationRow key={i} h={h} index={i} />
            ))}
          </div>

          {allParticipations.length > 10 && (
            <div className="text-center mt-4">
              <button
                onClick={() => setShowAll(v => !v)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all"
                style={{ background: 'rgba(139,92,246,0.12)', border: '1.5px solid rgba(139,92,246,0.3)', color: '#a78bfa' }}
              >
                {showAll ? '▲ Show Less' : `▼ Show All ${allParticipations.length} Events`}
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Hackathons
