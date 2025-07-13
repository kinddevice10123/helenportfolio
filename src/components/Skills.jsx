import { useState } from 'react'
import CodeBracketIcon from '@heroicons/react/24/outline/CodeBracketIcon'
import ServerIcon from '@heroicons/react/24/outline/ServerIcon'
import CogIcon from '@heroicons/react/24/outline/CogIcon'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      icon: CodeBracketIcon,
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Vue.js', level: 80 }
      ]
    },
    backend: {
      title: 'Backend',
      icon: ServerIcon,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'SQL/NoSQL', level: 88 },
        { name: 'RESTful APIs', level: 92 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    other: {
      title: 'Other Skills',
      icon: CogIcon,
      skills: [
        { name: 'UI/UX Design', level: 80 },
        { name: 'Project Management', level: 85 },
        { name: 'SEO', level: 75 },
        { name: 'Git & CI/CD', level: 88 },
        { name: 'Testing', level: 82 }
      ]
    }
  }

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          Technologies and tools I use to bring ideas to life
        </p>

        <div className="skills-content">
          <div className="skills-categories">
            {Object.entries(skillCategories).map(([key, category]) => {
              const IconComponent = category.icon
              return (
                <button
                  key={key}
                  className={`category-btn ${activeCategory === key ? 'active' : ''}`}
                  onClick={() => setActiveCategory(key)}
                >
                  <IconComponent className="category-icon" />
                  <span>{category.title}</span>
                </button>
              )
            })}
          </div>

          <div className="skills-display">
            <div className="skills-grid">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-content {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 3rem;
          align-items: start;
        }

        .skills-categories {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          position: sticky;
          top: 100px;
        }

        .category-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          color: var(--text-secondary);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          width: 100%;
        }

        .category-btn:hover {
          background: var(--bg-tertiary);
          border-color: var(--primary);
          color: var(--text-primary);
        }

        .category-btn.active {
          background: var(--primary);
          border-color: var(--primary);
          color: white;
        }

        .category-icon {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
        }

        .skills-display {
          background: var(--bg-secondary);
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid var(--border-color);
          min-height: 400px;
        }

        .skills-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .skill-item {
          background: var(--bg-primary);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow);
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .skill-name {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 1rem;
        }

        .skill-percentage {
          font-weight: 600;
          color: var(--primary);
          font-size: 0.9rem;
        }

        .skill-bar {
          height: 8px;
          background: var(--bg-secondary);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          border-radius: 4px;
          transition: width 0.8s ease;
          position: relative;
        }

        .skill-progress::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @media (max-width: 768px) {
          .skills-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .skills-categories {
            position: static;
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }

          .category-btn {
            min-width: 150px;
            flex-shrink: 0;
          }

          .skills-display {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Skills