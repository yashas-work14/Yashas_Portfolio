import React from 'react'
import { Link } from 'react-router-dom'

function SkillsPage() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'C#', level: 80 },
        { name: 'JavaScript / TypeScript', level: 72 },
        { name: 'Java', level: 68 },
        { name: 'PHP', level: 60 },
      ],
    },
    {
      category: 'AI & Machine Learning',
      icon: '🧠',
      skills: [
        { name: 'TensorFlow / Keras', level: 90 },
        { name: 'PyTorch', level: 88 },
        { name: 'Scikit-learn / XGBoost', level: 88 },
        { name: 'NumPy / Pandas', level: 92 },
        { name: 'LSTM / Transformers', level: 82 },
        { name: 'CNNs (InceptionV3, ResNet)', level: 85 },
      ],
    },
    {
      category: 'Generative AI & LLMs',
      icon: '🤖',
      skills: [
        { name: 'Prompt Engineering', level: 92 },
        { name: 'RAG Pipelines', level: 88 },
        { name: 'AI Agents & Agentic Workflows', level: 85 },
        { name: 'Microsoft Semantic Kernel', level: 80 },
        { name: 'OpenAI APIs (GPT-4o)', level: 88 },
        { name: 'LLM Evaluation (Promptfoo)', level: 82 },
      ],
    },
    {
      category: 'Computer Vision & HCI',
      icon: '👁️',
      skills: [
        { name: 'OpenCV', level: 88 },
        { name: 'MediaPipe', level: 85 },
        { name: 'Real-time Object Detection', level: 80 },
        { name: 'Hand / Gesture Recognition', level: 85 },
      ],
    },
    {
      category: 'Backend & APIs',
      icon: '⚙️',
      skills: [
        { name: 'FastAPI', level: 85 },
        { name: 'Node.js / Express', level: 75 },
        { name: 'REST API Design', level: 82 },
        { name: 'OCR (Tesseract / PyMuPDF)', level: 78 },
        { name: 'Document Processing Pipelines', level: 80 },
      ],
    },
    {
      category: 'Data & Databases',
      icon: '🗄️',
      skills: [
        { name: 'MySQL / SQL', level: 80 },
        { name: 'Azure Blob Storage', level: 75 },
        { name: 'Apache Jena (Knowledge Graphs)', level: 72 },
        { name: 'Pandas / openpyxl', level: 90 },
        { name: 'Power BI', level: 65 },
      ],
    },
    {
      category: 'MLOps & Cloud',
      icon: '☁️',
      skills: [
        { name: 'Docker', level: 78 },
        { name: 'Azure ML / Azure Cloud', level: 75 },
        { name: 'Grafana (Monitoring)', level: 72 },
        { name: 'CI/CD Pipelines (GIT)', level: 75 },
        { name: 'LLM Monitoring & Observability', level: 78 },
      ],
    },
  ]

  const tools = [
    { name: 'VS Code', icon: '🔧' },
    { name: 'GitHub', icon: '📦' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Azure', icon: '☁️' },
    { name: 'Grafana', icon: '📊' },
    { name: 'Promptfoo', icon: '🔍' },
    { name: 'Power BI', icon: '📈' },
    { name: 'Postman', icon: '📮' },
    { name: 'Jupyter Notebook', icon: '📓' },
    { name: 'Git / CI/CD', icon: '🔀' },
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
        <div className="text-center mb-12">
          <p className="text-purple-400 font-semibold tracking-wider uppercase mb-4">What I Know</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-4">Skills</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies.
          </p>
        </div>

        {/* All Skill Categories — pill tag style */}
        <div className="space-y-6 mb-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills?.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 transition-all duration-200"
                  >
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        {tools.length > 0 && (
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">🛠️</span>
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 transition-all duration-200"
                >
                  <span className="text-xl">{tool.icon}</span>
                  <span className="font-medium text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SkillsPage
