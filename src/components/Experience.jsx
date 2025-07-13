import CalendarIcon from '@heroicons/react/24/outline/CalendarIcon'
import MapPinIcon from '@heroicons/react/24/outline/MapPinIcon'
import BuildingOfficeIcon from '@heroicons/react/24/outline/BuildingOfficeIcon'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Blue Ridge Web Creations',
      location: 'Tennessee, United States',
      period: 'April 2013 - December 2020',
      description: 'Developed websites for various businesses, including e-commerce sites, ensuring both design and functionality worked seamlessly. Focused on creating high-quality solutions that were both efficient and user-centric.',
      responsibilities: [
        'Led development of complex web applications from concept to deployment',
        'Mentored junior developers and conducted code reviews',
        'Designed and implemented database schemas and server architecture',
        'Managed project timelines and client relationships'
      ]
    },
    {
      title: 'Web Developer',
      company: 'TechHub Solutions',
      location: 'Tennessee, United States',
      period: 'June 2021 - December 2023',
      description: 'Created responsive and user-friendly websites and applications using modern technologies. Worked across both web and mobile platforms to deliver intuitive, scalable solutions.',
      responsibilities: [
        'Developed and maintained client websites using React, Node.js, and other modern technologies',
        'Collaborated with design team to implement responsive, user-friendly interfaces',
        'Optimized applications for maximum speed and scalability',
        'Implemented SEO best practices to improve site visibility'
      ]
    }
  ]

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My Professional Journey</p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-meta">
                      <div className="meta-item">
                        <BuildingOfficeIcon className="meta-icon" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="meta-item">
                        <CalendarIcon className="meta-icon" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="meta-item">
                        <MapPinIcon className="meta-icon" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="experience-content">
                  <p className="experience-description">{exp.description}</p>
                  
                  <div className="responsibilities">
                    <h4 className="responsibilities-title">Key Responsibilities:</h4>
                    <ul className="responsibilities-list">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline-item {
          display: flex;
          margin-bottom: 3rem;
          position: relative;
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 2rem;
          position: relative;
        }

        .timeline-dot {
          width: 16px;
          height: 16px;
          background: var(--primary);
          border-radius: 50%;
          border: 4px solid var(--bg-primary);
          box-shadow: 0 0 0 3px var(--primary);
          z-index: 2;
        }

        .timeline-line {
          width: 2px;
          height: 100%;
          background: var(--border-color);
          margin-top: 1rem;
          position: absolute;
          top: 20px;
        }

        .experience-card {
          flex: 1;
          background: var(--bg-secondary);
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .experience-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary);
        }

        .experience-header {
          margin-bottom: 1.5rem;
        }

        .experience-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .experience-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .meta-icon {
          width: 1rem;
          height: 1rem;
          color: var(--primary);
        }

        .experience-description {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }

        .responsibilities-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .responsibilities-list {
          list-style: none;
          padding: 0;
        }

        .responsibilities-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .responsibilities-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: bold;
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .timeline-item {
            flex-direction: column;
            margin-bottom: 2rem;
          }

          .timeline-marker {
            flex-direction: row;
            margin-right: 0;
            margin-bottom: 1rem;
            justify-content: flex-start;
          }

          .timeline-line {
            display: none;
          }

          .experience-card {
            padding: 1.5rem;
          }

          .experience-title {
            font-size: 1.25rem;
          }

          .experience-meta {
            flex-direction: column;
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Experience