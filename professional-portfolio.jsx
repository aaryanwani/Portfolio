import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Code2, Network, Database, Brain, Mail, Github, Linkedin, ExternalLink, ArrowRight, FileCode, Briefcase } from 'lucide-react';

const ResearchPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [nodes, setNodes] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef(null);

  // Generate network nodes for background
  useEffect(() => {
    const newNodes = Array.from({ length: 40 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.3 + 0.1,
      id: i
    }));
    setNodes(newNodes);
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'about', label: 'About', icon: Terminal },
    { id: 'research', label: 'Expertise', icon: Brain },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code2 },
    { id: 'skills', label: 'Skills', icon: Network },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const projectData = [
    {
      title: 'Real-Time Air Quality Data Pipeline & Dashboard',
      type: 'Data Engineering',
      tech: ['Python', 'Snowflake', 'Streamlit', 'GitHub Actions', 'SQL'],
      description: 'Developed a real-time AQI pipeline on Snowflake, processing 1M+ records daily from 500+ stations with 99.9% data freshness. Built an interactive Streamlit dashboard with sub-second queries, visualizing operational metrics and geospatial air quality insights.',
      metrics: ['1M+ daily records', '500+ monitoring stations', 'Sub-second query performance'],
      status: 'Production'
    },
    {
      title: 'Medical Notes Summarizer',
      type: 'NLP & Machine Learning',
      tech: ['Python', 'Hugging Face', 'BART/T5', 'Flask', 'NLTK', 'LangChain'],
      description: 'Engineered a BART/T5 NLP pipeline using LangChain to generate structured and unstructured medical summaries in real time. Built a Flask application for local testing and deployed entity extraction and symptom classification workflows.',
      metrics: ['Real-time summarization', 'Multi-format output', 'Clinical entity extraction'],
      status: 'Deployed'
    },
    {
      title: 'Syracuse City Line: ML-Powered Forecasting',
      type: 'Predictive Analytics',
      tech: ['Python', 'Prophet', 'ARIMA', 'Time Series', 'Pandas'],
      description: 'Refined service forecasts using Prophet and ARIMA, reducing waste management costs by 15-20% for Syracuse operations. Modeled 100K+ municipal records with EDA and time series techniques to uncover geographic and temporal patterns.',
      metrics: ['15-20% cost reduction', '100K+ records analyzed', 'Predictive KPIs for planning'],
      status: 'Research'
    },
    {
      title: 'Personalized Learning Recommendation Engine',
      type: 'ML & Product Development',
      tech: ['Python', 'Collaborative Filtering', 'Azure', 'Hugging Face LLMs'],
      description: 'Developed a collaborative filtering recommendation engine serving 10K+ students with personalized learning paths. Built an AI chatbot using Hugging Face LLMs that resolved 80%+ of student queries. Boosted user engagement by 22% through real-time ML predictions.',
      metrics: ['10K+ active users', '22% engagement increase', '80% query automation'],
      status: 'Active'
    }
  ];

  const skillCategories = [
    {
      category: 'Programming & Scripting',
      skills: ['Python', 'R', 'SQL', 'JavaScript']
    },
    {
      category: 'Data Analysis & Visualization',
      skills: ['Excel', 'Power BI', 'Tableau', 'Seaborn', 'Matplotlib', 'Streamlit']
    },
    {
      category: 'Databases & Warehousing',
      skills: ['Snowflake', 'MySQL', 'PostgreSQL', 'Azure', 'AWS']
    },
    {
      category: 'ML & Data Science',
      skills: ['Scikit-learn', 'TensorFlow', 'Hugging Face', 'NLTK', 'NumPy', 'Pandas']
    },
    {
      category: 'Data Engineering',
      skills: ['ETL/ELT', 'dbt', 'Airflow', 'Git', 'CI/CD', 'Flask']
    },
    {
      category: 'Core Competencies',
      skills: ['Statistical Modeling', 'A/B Testing', 'Time Series Forecasting', 'NLP', 'Data Pipelines', 'Dashboard Design']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 font-body relative overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .font-body { font-family: 'Inter', sans-serif; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes drawLine {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
          border-color: rgba(102, 126, 234, 0.4);
        }
      `}</style>

      {/* Animated network background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"></div>
        
        <svg className="w-full h-full opacity-20">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#667eea" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#764ba2" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {nodes.map((node, i) => {
            const nearbyNodes = nodes.filter((n, j) => {
              if (i === j) return false;
              const dist = Math.sqrt(
                Math.pow(node.x - n.x, 2) + Math.pow(node.y - n.y, 2)
              );
              return dist < 20;
            });
            
            return (
              <g key={node.id}>
                <circle
                  cx={`${node.x}%`}
                  cy={`${node.y}%`}
                  r={node.size}
                  fill="#667eea"
                  opacity={node.opacity * 0.6}
                />
                {nearbyNodes.map((nearby, j) => (
                  <line
                    key={`${i}-${j}`}
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${nearby.x}%`}
                    y2={`${nearby.y}%`}
                    stroke="url(#lineGradient)"
                    strokeWidth="0.5"
                    opacity={node.opacity * 0.3}
                  />
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="text-violet-400" size={24} />
              <span className="font-mono font-bold text-lg">aaryan.wani</span>
            </div>
            
            <div className="flex items-center gap-1">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-4 py-2 rounded-lg transition-all font-medium text-sm ${
                    activeSection === section.id
                      ? 'bg-violet-500/30 text-violet-300 border border-violet-500/50'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl w-full">
          <div className="space-y-6 animate-fadeInUp">
            <div className="font-mono text-violet-400 text-sm mb-4">
              $ whoami
            </div>
            <h1 className="text-6xl font-bold leading-tight">
              Aaryan Wani<br />
              <span className="gradient-text">Data Analyst • Engineer • Scientist</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Masters student at Syracuse University (GPA: 3.9/4) specializing in Applied Data Science. 
              2+ years of experience transforming data into actionable insights through ML, ETL pipelines, 
              and interactive dashboards. Building scalable data solutions that drive business decisions.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-500 pt-2">
              <span>📍 Syracuse, NY</span>
              <span>🎓 MS in Applied Data Science (Dec 2025)</span>
              <span>🎯 Open to Full-Time Opportunities</span>
            </div>
            
            <div className="flex gap-4 pt-6">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-lg font-medium transition-all flex items-center gap-2 group shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/Aaryan_Wani_Resume.pdf" 
                download
                className="px-6 py-3 bg-gray-900/80 border border-gray-700 hover:bg-gray-800 hover:border-gray-600 rounded-lg font-medium transition-all flex items-center gap-2"
              >
                <FileCode size={18} />
                Download Resume
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-gray-900/80 border border-gray-700 hover:bg-gray-800 hover:border-gray-600 rounded-lg font-medium transition-all"
              >
                Get in Touch
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12">
              {[
                { label: 'Years Experience', value: '2+' },
                { label: 'Major Projects', value: '10+' },
                { label: 'Records Processed', value: '1M+' }
              ].map((stat, i) => (
                <div key={i} className="glass p-6 rounded-xl card-hover bg-gradient-to-br from-gray-900/50 to-black border border-violet-500/20">
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section id="research" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <div className="mb-16">
            <div className="font-mono text-violet-400 text-sm mb-4">$ cat expertise.txt</div>
            <h2 className="text-4xl font-bold mb-4">Areas of Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Database,
                title: 'Data Engineering & ETL',
                description: 'Building scalable data pipelines with Snowflake, dbt, and Airflow. Real-time data processing and cloud-based warehousing solutions.'
              },
              {
                icon: Brain,
                title: 'Machine Learning & AI',
                description: 'Predictive modeling, NLP, recommendation systems, and sentiment analysis using Python, TensorFlow, and scikit-learn.'
              },
              {
                icon: Network,
                title: 'Business Intelligence',
                description: 'Interactive dashboards with Tableau and Power BI. KPI tracking, trend analysis, and data-driven storytelling for stakeholders.'
              },
              {
                icon: Code2,
                title: 'Full-Stack Analytics',
                description: 'End-to-end data solutions from collection to visualization. Flask APIs, cloud deployment, and automated reporting systems.'
              }
            ].map((area, i) => (
              <div key={i} className="glass p-8 rounded-xl card-hover bg-gradient-to-br from-gray-900/40 to-black border border-violet-500/10">
                <area.icon className="text-violet-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3 text-white">{area.title}</h3>
                <p className="text-gray-400 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <div className="mb-16">
            <div className="font-mono text-violet-400 text-sm mb-4">$ cat experience.log</div>
            <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500"></div>
          </div>

          <div className="space-y-6">
            {[
              {
                company: 'iConsult Collaborative',
                role: 'Data Analyst',
                location: 'Syracuse, NY',
                period: 'May 2025 - Present',
                achievements: [
                  'Processed 100K+ records from 10+ data sources, improving data readiness for predictive modeling',
                  'Increased forecasting accuracy by 20% using regression and XGBoost models',
                  'Optimized ETL pipelines resulting in 30% faster data ingestion',
                  'Built Tableau and Power BI dashboards driving 25% higher stakeholder engagement'
                ]
              },
              {
                company: 'ToyzElectronics',
                role: 'Data Engineer and AI/ML Intern',
                location: 'Syracuse, NY',
                period: 'Jan 2025 - May 2025',
                achievements: [
                  'Developed collaborative filtering recommendation engine serving 10K+ students',
                  'Boosted user engagement by 22% through real-time ML predictions and A/B testing',
                  'Built AI chatbot using Hugging Face LLMs resolving 80%+ of student queries',
                  'Reduced backend API latency by 30% while improving system reliability'
                ]
              },
              {
                company: 'Verzeo',
                role: 'Machine Learning Engineer',
                location: 'India (Remote)',
                period: 'Jan 2022 - Feb 2023',
                achievements: [
                  'Improved financial risk forecasting accuracy by 20% through predictive modeling',
                  'Developed sentiment model using TF-IDF on 50K+ financial news headlines',
                  'Boosted classification model accuracy by 15% for algorithmic trading decisions',
                  'Provided real-time risk analytics supporting daily trading operations'
                ]
              }
            ].map((exp, i) => (
              <div key={i} className="glass p-8 rounded-xl card-hover bg-gradient-to-br from-gray-900/40 to-black border border-violet-500/10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="text-violet-400" size={24} />
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className="font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/20 text-violet-300 border border-violet-500/40 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 text-gray-400">
                  {exp.achievements.map((achievement, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="text-violet-400 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <div className="mb-16">
            <div className="font-mono text-violet-400 text-sm mb-4">$ ls -la ./projects/</div>
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500"></div>
          </div>

          <div className="space-y-6">
            {projectData.map((project, i) => (
              <div key={i} className="glass p-8 rounded-xl card-hover group bg-gradient-to-br from-gray-900/40 to-black border border-violet-500/10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <FileCode className="text-violet-400" size={24} />
                      <h3 className="text-2xl font-bold group-hover:text-violet-300 transition-colors text-white">
                        {project.title}
                      </h3>
                    </div>
                    <div className="text-sm text-gray-500 font-mono">{project.type}</div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/20 text-violet-300 border border-violet-500/40">
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, j) => (
                    <span 
                      key={j}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-gray-800/80 text-gray-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm text-gray-500">
                  {project.metrics.map((metric, j) => (
                    <span key={j}>• {metric}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <div className="mb-16">
            <div className="font-mono text-violet-400 text-sm mb-4">$ cat skills.json</div>
            <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, i) => (
              <div key={i} className="glass p-8 rounded-xl bg-gradient-to-br from-gray-900/40 to-black border border-violet-500/10">
                <h3 className="text-lg font-semibold mb-4 text-violet-300">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-700 text-sm font-mono hover:border-violet-500/40 hover:bg-violet-500/10 transition-all cursor-default text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full text-center">
          <div className="mb-16">
            <div className="font-mono text-violet-400 text-sm mb-4">$ ./contact.sh</div>
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto"></div>
          </div>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Currently pursuing MS in Applied Data Science at Syracuse University. 
            Open to full-time opportunities in Data Analytics, Data Engineering, and Data Science roles.
          </p>

          <div className="flex justify-center gap-4">
            {[
              { icon: Github, label: 'GitHub', url: 'https://github.com/aaryanwani' },
              { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/aaryan-wani/' },
              { icon: Mail, label: 'Email', url: 'mailto:aaryan272001@gmail.com' }
            ].map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="glass p-6 rounded-xl card-hover group flex flex-col items-center gap-3 min-w-[140px] bg-gradient-to-br from-gray-900/40 to-black border border-violet-500/10"
              >
                <link.icon className="text-violet-400 group-hover:scale-110 transition-transform" size={28} />
                <span className="font-medium text-white">{link.label}</span>
                <ExternalLink size={14} className="text-gray-500" />
              </a>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-gray-800">
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              {[
                'AWS Cloud Practitioner',
                'Snowflake: Data Warehousing',
                'MS Applied Data Science',
                'BE Computer Engineering'
              ].map((cert, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-xs font-mono bg-gray-900/80 border border-gray-700 text-gray-400"
                >
                  {cert}
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-sm font-mono">
              © 2024 Aaryan Wani · Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPortfolio;