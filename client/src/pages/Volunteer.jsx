import React from 'react'
import { Link } from 'react-router-dom'

function Volunteer() {
  // Add your volunteer activities data here
  const volunteerActivities = [
    // {
    //   organization: 'Organization Name',
    //   role: 'Volunteer Role',
    //   duration: 'Jan 2023 - Present',
    //   location: 'City, Country',
    //   description: 'Description of your volunteer work and impact',
    //   achievements: ['Achievement 1', 'Achievement 2'],
    //   image: '/path/to/image.png',
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
          <p className="text-purple-400 font-semibold tracking-wider uppercase mb-4">Giving Back</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-4">Volunteer Activities</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Community service and volunteer work that I'm passionate about.
          </p>
        </div>

        {/* Volunteer Activities */}
        {volunteerActivities.length > 0 ? (
          <div className="space-y-8">
            {volunteerActivities.map((activity, index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden">
                <div className="md:flex">
                  {activity.image && (
                    <div className="md:w-1/3 h-48 md:h-auto">
                      <img 
                        src={activity.image} 
                        alt={activity.organization}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-8 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{activity.organization}</h3>
                        <p className="text-purple-400 font-medium">{activity.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 text-sm">{activity.duration}</p>
                        <p className="text-gray-500 text-sm">{activity.location}</p>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-6">{activity.description}</p>

                    {activity.achievements && activity.achievements.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-purple-400 mb-3">Key Contributions:</h4>
                        <ul className="space-y-2">
                          {activity.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                              <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">No Volunteer Activities Added Yet</h3>
            <p className="text-gray-400">Volunteer activity information will be displayed here once added.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Volunteer
