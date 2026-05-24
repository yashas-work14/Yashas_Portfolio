import React from 'react';

function About() {
  const startDate = new Date('2023-09-01');
  const now = new Date();
  const diffMonths =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());
  const yearsExp = Math.floor(diffMonths / 12);

  const stats = [
    { number: `${yearsExp}+`, label: 'Years Experience' },
    { number: '9', label: 'Publications' },
    { number: '2', label: 'Patents' },
    { number: '5', label: 'Research Domains' },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-semibold tracking-wider uppercase mb-4">Get to know me</p>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - About Content */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                Who I Am
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                AI/ML Engineer & GenAI Developer with a BE (Hons) in{' '}
                <span className="text-purple-400 font-semibold">Artificial Intelligence & Machine Learning</span> (CGPA 9.38). Currently working at{' '}
                <span className="text-purple-400 font-semibold">Siemens</span> as a Graduate Trainee Engineer, building an
                LLM-powered Industrial Copilot integrated with TIA Portal using C#, Qwen, and DeepSeek.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I have published <span className="text-purple-400 font-semibold">9 research papers (8 IEEE + 1 Springer)</span> across healthcare AI, computer vision,
                NLP, smart cities, and precision agriculture — and hold 2 granted patents.
                Previously interned at <span className="text-purple-400 font-semibold">Yokogawa India</span> as a GenAI intern building NLP pipelines on Azure.
              </p>
            </div>

            <a
              href="/Yashas_D_Resume.pdf"
              download
              className="btn-primary inline-flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>

          {/* Right - Education Timeline */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </span>
              Education
            </h3>

            <div className="space-y-8">
              <div className="timeline-item">
                <div className="glass rounded-xl p-4 ml-4 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
                  <span className="text-purple-400 text-sm font-semibold">2021 - 2025</span>
                  <h4 className="text-lg font-bold mt-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 flex items-center gap-2 flex-wrap">
                    Bachelor of Engineering with Honours 🎖️
                  </h4>
                  <p className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                    <span className="text-lg">🤖</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 text-sm font-semibold tracking-wide">Artificial Intelligence & Machine Learning</span>
                  </p>
                  <p className="text-gray-400 text-sm mt-2">New Horizon College of Engineering, Bengaluru</p>
                  <p className="text-green-400 text-sm mt-1 font-medium flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    CGPA: 9.38
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="glass rounded-xl p-4 ml-4">
                  <span className="text-purple-400 text-sm font-semibold">2019 - 2020</span>
                  <h4 className="text-lg font-bold mt-1">Pre-University</h4>
                  <p className="text-gray-400 text-sm mt-1">Presidency Pre-University College </p>
                  <p className="text-green-400 text-sm mt-1 font-medium">Percentage: 92%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <h4 className="text-3xl sm:text-4xl font-bold gradient-text">{stat.number}</h4>
              <p className="text-gray-400 mt-2 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
