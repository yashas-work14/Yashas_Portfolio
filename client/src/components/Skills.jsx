import React from 'react'

function Skills() {
  const technicalSkills = [
    { name: 'Python', level: 95, color: 'from-blue-400 to-blue-600' },
    { name: 'PyTorch / TensorFlow', level: 90, color: 'from-orange-400 to-orange-600' },
    { name: 'LLMs & Prompt Engineering', level: 90, color: 'from-purple-400 to-purple-600' },
    { name: 'RAG Pipelines & AI Agents', level: 88, color: 'from-pink-400 to-pink-600' },
    { name: 'Computer Vision (OpenCV / MediaPipe)', level: 85, color: 'from-cyan-400 to-cyan-600' },
    { name: 'C# & Microsoft Semantic Kernel', level: 80, color: 'from-teal-400 to-teal-600' },
    { name: 'FastAPI / Backend APIs', level: 82, color: 'from-green-400 to-green-600' },
    { name: 'SQL / NoSQL & Azure Blob Storage', level: 78, color: 'from-yellow-400 to-yellow-600' },
  ]

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: '🧠',
      skills: ['Python', 'TensorFlow', 'CNNs', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'LSTM'],
    },
    {
      title: 'Generative AI & LLMs',
      icon: '🤖',
      skills: ['LLMs', 'Prompt Engineering', 'AI Agents', 'RAG Pipelines', 'NLP', 'Microsoft Semantic Kernel', 'OpenAI APIs', 'LLM Evaluation'],
    },
    {
      title: 'Computer Vision & HCI',
      icon: '👁️',
      skills: ['OpenCV', 'MediaPipe', 'Hand Tracking', 'Real-time Detection', 'CNN / InceptionV3', 'Object Detection'],
    },
    {
      title: 'Backend & APIs',
      icon: '⚙️',
      skills: ['FastAPI', 'C#', 'Node.js', 'REST APIs', 'Agentic Workflow Automation', 'OCR (Tesseract / PyMuPDF)'],
    },
    {
      title: 'Data & Databases',
      icon: '🗄️',
      skills: ['MySQL', 'Azure Blob Storage', 'Apache Jena', 'pandas', 'openpyxl', 'Power BI'],
    },
    {
      title: 'MLOps & Cloud',
      icon: '☁️',
      skills: ['Docker', 'Grafana', 'Azure ML', 'Promptfoo', 'CI/CD', 'GitHub', 'LLM Monitoring'],
    },
  ]

  const softSkills = [
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'Team Collaboration', icon: '🤝' },
    { name: 'Communication', icon: '💬' },
    { name: 'Critical Thinking', icon: '💡' },
    { name: 'Time Management', icon: '⏰' },
    { name: 'Adaptability', icon: '🔄' },
  ]

  const certifications = [
    { name: 'Microsoft Azure Machine Learning', provider: 'Microsoft', icon: '☁️' },
    { name: 'Generative AI with LLMs', provider: 'DeepLearning.AI & AWS', icon: '🤖' },
    { name: 'Retrieval Augmented Generation (RAG)', provider: 'DeepLearning.AI', icon: '🔍' },
    { name: 'Machine Learning Specialization', provider: 'Andrew Ng – Coursera', icon: '🎓' },
    { name: 'Deep Learning Specialization', provider: 'deeplearning.ai – Coursera', icon: '🧬' },
  ]

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-semibold tracking-wider uppercase mb-4 text-cyan">What I Know</p>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">My Skills</h2>
          <p className="max-w-2xl mx-auto text-secondary">
            A comprehensive overview of my technical expertise and professional competencies.
          </p>
        </div>

        {/* Technical Proficiency */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg flex items-center justify-center text-lg bg-brand">
              🧠
            </span>
            Technical Proficiency
          </h3>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.map((skill, index) => (
              <span key={index} className="skill-badge-ai text-sm">
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card rounded-2xl p-6">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg flex items-center justify-center text-lg bg-brand">
              🏆
            </span>
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl transition-colors bg-elevated"
              >
                <span className="text-3xl">{cert.icon}</span>
                <div>
                  <h4 className="font-semibold">{cert.name}</h4>
                  <p className="text-sm text-secondary">{cert.provider}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg flex items-center justify-center text-lg bg-brand">
              🎯
            </span>
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-elevated"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills