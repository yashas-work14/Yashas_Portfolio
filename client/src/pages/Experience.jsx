import React from 'react'
import { Link } from 'react-router-dom'

function Experience() {
  // Dynamic experience calculation from Sept 2023 (Yokogawa India)
  const expStartDate = new Date('2023-09-01');
  const now = new Date();
  const diffMonths =
    (now.getFullYear() - expStartDate.getFullYear()) * 12 +
    (now.getMonth() - expStartDate.getMonth());
  const expYears = Math.floor(diffMonths / 12);

  const experiences = [
    {
      company: 'Siemens Technologies and Services Pvt Ltd',
      role: 'Graduate Trainee Engineer',
      type: 'Apprenticeship',
      duration: 'Aug 2025 - Present',
      location: 'Electronic City Phase 2, Bangalore',
      description: 'Working on the Industrial Copilot for Engineering (ICFE) project — an AI-powered copilot integrated with TIA Portal. Building scalable multi-agent workflows and LLM-based automation for engineering task execution.',
      achievements: [
        'Engineered AI-driven PLC Code Agent features and project context plugins within TIA Portal, implementing scalable multi-agent workflows and kernel functions',
        'Designed and implemented PLC Code Agent: analyzed project requirements, defined technical specifications, and integrated orchestrator-based workflows routing prompts to specialized agents',
        'Developed new functionalities and refactored code to improve performance, reliability, and maintainability of the PLC Code Agent',
        'Conducted LLM prompt evaluation using Promptfoo and monitored system metrics through Grafana dashboards to ensure stable and reliable LLM responses',
        'Deployed application on Azure for production use and managed CI/CD pipelines via GIT, ensuring scalable and streamlined delivery',
      ],
      technologies: ['C#', 'Microsoft Semantic Kernel', 'LLMs', 'Azure', 'Docker', 'Promptfoo', 'Grafana', 'GIT', 'CI/CD', 'Agile'],
      color: 'from-teal-500 to-teal-600',
      logo: (
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.pPgrFD10eNGxfYAwYETj0wHaFH?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Siemens"
          className="w-full h-full object-cover scale-[1.9]"
          style={{ imageRendering: 'crisp-edges' }}
        />
      ),
    },
    {
      company: 'Yokogawa India Limited',
      role: 'Generative AI Intern',
      type: 'Internship',
      duration: 'Sept 2023 - Aug 2025',
      location: 'Electronic City Phase 1, Bangalore',
      description: 'Contributed to Generative AI and automation projects — building OCR pipelines, FastAPI-based enterprise automation systems, and GPT-powered document analysis tools for real-world organizational challenges.',
      achievements: [
        'Developed OCR pipelines using Tesseract, PyMuPDF, and PyPDF2 to extract data from unstructured PDFs and convert to structured Excel reports using pandas and openpyxl',
        'Built scalable FastAPI-based APIs to automate data extraction, validation, and reconciliation workflows across enterprise systems',
        'Implemented GPT-based document analysis and comparison systems for summarization, translation, and intelligent document insights (Y-GPT)',
        'Designed Enterprise Automation System (EAS) for GSTR-3B reconciliation, invoice validation, and dispatch document processing using Azure Blob Storage and SQL — reduced manual data entry by 60%',
        'Developed document comparison, compression, and version tracking solutions — reduced manual review effort by 80% and improved compliance workflows',
      ],
      technologies: ['Python', 'FastAPI', 'OpenAI GPT', 'Tesseract', 'PyMuPDF', 'PyPDF2', 'pandas', 'openpyxl', 'Azure Blob Storage', 'SQL', 'Docker'],
      color: 'from-blue-600 to-blue-700',
      logo: (
        <img
          src="https://www.mitsubishielectric.co.jp/fa/ssl/sols/psm/image/?dataId=dtkojgwd1g&version=1&fileName=yokogawa_logo_ya1type_clr.png&fileType=3&publicFlg=1"
          alt="Yokogawa"
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      company: 'VaultofCodes',
      role: 'Web Development Intern',
      type: 'Internship',
      duration: 'Oct 2023 - Nov 2023',
      location: 'Remote',
      description: 'Completed an intensive web development internship focused on building practical skills across the full stack. Gained real-world exposure to how modern web applications are built from the ground up.',
      achievements: [
        'Built responsive and user-friendly interfaces using HTML, CSS, and JavaScript',
        'Gained hands-on experience in back-end web development, including server-side logic and database integration',
        'Developed real-world projects that strengthened problem-solving and coding skills',
        'Collaborated in a structured internship environment simulating industry-level development workflows',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Front-End Development', 'Back-End Web Development'],
      color: 'from-orange-500 to-orange-600',
      logo: (
        <div className="w-full h-full flex items-center justify-center bg-orange-50 text-orange-600 font-bold text-lg">
          VC
        </div>
      ),
    },
    {
      company: 'CloudplusAI Technology',
      role: 'Cloud Computing with AWS Intern',
      type: 'Internship',
      duration: 'Sep 2023 - Nov 2023',
      location: 'Remote',
      description: 'Completed an internship focused on Cloud Computing using Amazon Web Services (AWS), gaining practical knowledge of cloud infrastructure and services. Sparked a strong interest in cloud technologies.',
      achievements: [
        'Explored core AWS services including EC2, S3, and IAM, and applied cloud deployment fundamentals',
        'Gained understanding of cloud architecture, scalability, and resource management on the AWS platform',
        'Applied theoretical cloud concepts to practical use cases relevant to modern tech infrastructure',
        'Worked remotely in a professional environment, developing self-management and independent problem-solving skills',
      ],
      technologies: ['AWS', 'EC2', 'S3', 'IAM', 'Cloud Computing', 'Cloud Architecture'],
      color: 'from-yellow-500 to-yellow-600',
      logo: (
        <div className="w-full h-full flex items-center justify-center bg-yellow-50 text-yellow-600 font-bold text-lg">
          CA
        </div>
      ),
    },
  ]

  return (
    <div className="gradient-bg min-h-screen">
      <div className="container mx-auto max-w-6xl px-6 py-24">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 mb-8 transition-colors group text-cyan hover-text-accent">
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 nav-active-bg">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-accent-primary"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-primary"></span>
            </span>
              <span className="font-medium text-sm text-link">Career Journey</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Work</span> Experience
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A timeline of my professional adventures, building products and growing as a developer 🚀
          </p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">2+</p>
              <p className="text-sm text-muted">Companies</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">1.8+</p>
              <p className="text-sm text-muted">Years</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">5+</p>
              <p className="text-sm text-muted">Projects</p>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        {experiences.length > 0 ? (
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2 rounded-full bg-brand" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 mt-8 z-10">
                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-lg shadow-purple-500/20 overflow-hidden">
                      {exp.logo}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-20 md:pl-0`}>
                    <div className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 border-subtle">
                      {/* Company Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold transition-all">
                            {exp.role}
                          </h3>
                          <p className="font-semibold gradient-text">
                            @ {exp.company}
                          </p>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg bg-brand">
                          {exp.type}
                        </span>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                        <span className="flex items-center gap-2 text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                            <svg className="w-4 h-4 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full text-secondary bg-elevated">
                          <svg className="w-4 h-4 text-link" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mb-6 leading-relaxed text-secondary">{exp.description}</p>

                      {/* Key Contributions */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                          <h4 className="text-sm font-bold text-green-400 mb-3 flex items-center gap-2">
                            <span>🏆</span> Key Contributions
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                <span className="text-green-400 mt-0.5">✓</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      {exp.technologies && (
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Tech Stack</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span 
                                key={i} 
                                className="px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-default bg-elevated border border-subtle text-secondary"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Empty space for timeline alignment */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
            
            {/* Timeline End */}
            <div className="flex justify-center mt-12">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg animate-bounce bg-brand">
                🎯
              </div>
            </div>
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">💼</div>
            <h3 className="text-xl font-semibold mb-2">No Experience Added Yet</h3>
            <p className="text-gray-400">Experience information will be displayed here once added.</p>
          </div>
        )}
        
        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="glass-card rounded-2xl p-8 inline-block">
            <p className="mb-4 text-secondary">Interested in working together?</p>
            <Link 
              to="/#contact" 
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>Let's Connect</span>
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

export default Experience