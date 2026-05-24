import React from 'react'
import { Link } from 'react-router-dom'

function Volunteer() {
  const volunteerActivities = [
    {
      organization: 'Hesaraghatta Amruth Grama Panchayath, Govt. of Karnataka',
      role: 'Environmental Volunteer – Lake Cleaning & Supervision',
      duration: '06 Jul 2024 – 20 Jul 2024',
      location: 'Hesaraghatta, Bengaluru, Karnataka',
      description:
        'Participated in the cleaning and restoration drive of Hesaraghatta Lake under the supervision of Hesaraghatta Amruth Grama Panchayath, Government of Karnataka. Contributed to debris removal, waste segregation, and maintaining the ecological health of the lake.',
      achievements: [
        'Supervised and coordinated lake cleaning activities over a 2-week period',
        'Worked under the authority of the Government of Karnataka to restore the lake ecosystem',
        'Helped raise community awareness on the importance of freshwater lake conservation',
        'Assisted in waste segregation and disposal in compliance with environmental guidelines',
      ],
      image: '/certificates/volunteer_cert_1.png',
      certificateUrl: '/certificates/volunteer_cert_1.png',
    },
    {
      organization: 'Jalaposhan Nurturing',
      role: 'Environmental Volunteer – Lake Cleaning & Nurturing',
      duration: '14 Nov 2023 – 23 Nov 2023',
      location: 'Jakkur Lake, Bengaluru, Karnataka',
      description:
        'Volunteered in the cleaning and nurturing initiative at Jakkur Lake as part of the Jalaposhan Nurturing program. Actively participated in removing pollutants, nurturing the lake environment, and promoting water body preservation.',
      achievements: [
        'Participated in hands-on cleaning drives to remove solid waste and aquatic weeds',
        'Contributed to nurturing efforts to restore natural biodiversity of Jakkur Lake',
        'Collaborated with fellow volunteers to ensure systematic and thorough cleaning coverage',
        'Promoted awareness on the ecological significance of urban lakes',
      ],
      image: '/certificates/volunteer_cert_2.png',
      certificateUrl: '/certificates/volunteer_cert_2.png',
    },
    {
      organization: 'Jalaposhan Nurturing',
      role: 'Environmental Volunteer – Lake Cleaning & Nurturing',
      duration: '25 May 2023 – 06 Jun 2023',
      location: 'Jakkur Lake, Bengaluru, Karnataka',
      description:
        'Took part in an earlier phase of the Jalaposhan Nurturing program focused on cleaning and ecological restoration of Jakkur Lake. Engaged in ground-level conservation work to improve the health and cleanliness of the water body.',
      achievements: [
        'Engaged in debris and waste removal from the lake and its surrounding areas',
        'Supported nurturing activities to encourage natural habitat recovery',
        'Worked as part of a coordinated volunteer team across a 12-day drive',
        'Helped document and report environmental observations during the initiative',
      ],
      image: '/certificates/volunteer_cert_3.png',
      certificateUrl: '/certificates/volunteer_cert_3.png',
    },
    {
      organization: 'Social Welfare Department, Govt. of Karnataka & Green Warriors Club, NHCE',
      role: 'Volunteer – Environmental Awareness Initiative',
      duration: '19 Oct 2024 – 03 Nov 2024',
      location: 'New Horizon College of Engineering, Bengaluru, Karnataka',
      description:
        'Participated in an environmental awareness initiative conducted under the supervision of the Social Welfare Department, Government of Karnataka, and the Green Warriors Club at New Horizon College of Engineering. Focused on creating awareness about environmental conservation and sustainable practices.',
      achievements: [
        'Organized and participated in awareness campaigns on environmental conservation',
        'Collaborated with the Green Warriors Club to reach students and the local community',
        'Worked under the supervision of the Social Welfare Department, Govt. of Karnataka',
        'Contributed to spreading knowledge on sustainable practices and ecological responsibility',
      ],
      image: '/certificates/volunteer_cert_4.jpg',
      certificateUrl: '/certificates/volunteer_cert_4.jpg',
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
          <p className="font-semibold tracking-wider uppercase mb-4 text-link">Giving Back</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-4">Volunteer Activities</h1>
          <p className="max-w-2xl mx-auto text-secondary">
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
                        <p className="font-medium text-cyan">{activity.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-secondary">{activity.duration}</p>
                        <p className="text-sm text-muted">{activity.location}</p>
                      </div>
                    </div>

                    <p className="mb-6 text-secondary">{activity.description}</p>

                    {activity.achievements && activity.achievements.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold mb-3 text-cyan">Key Contributions:</h4>
                        <ul className="space-y-2">
                          {activity.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-secondary">
                              <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {activity.certificateUrl && (
                      <div className="mt-6">
                        <a
                          href={activity.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm flex items-center gap-1 text-cyan"
                        >
                          View Certificate
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
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
            <p className="text-secondary">Volunteer activity information will be displayed here once added.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Volunteer
