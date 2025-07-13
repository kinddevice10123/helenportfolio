import CheckIcon from '@heroicons/react/24/outline/CheckIcon'

const About = () => {
  const highlights = [
    'Full Stack Development',
    'High Performance',
    'Clean Code',
    'User-Friendly Design',
    'Business Strategy',
    'Team Collaboration'
  ]

  const descriptions = {
    'Full Stack Development': 'Proficient in both frontend and backend technologies, creating seamless web experiences.',
    'High Performance': 'Focus on building scalable, efficient solutions that perform well under pressure.',
    'Clean Code': 'Writing maintainable, well-documented code that follows best practices.',
    'User-Friendly Design': 'Creating intuitive interfaces with a focus on exceptional user experience.',
    'Business Strategy': 'Integrating business goals into technical solutions for maximum impact.',
    'Team Collaboration': 'Strong communication skills and ability to work effectively in teams.'
  }

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know more about my background, skills, and what drives me as a developer
        </p>

        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              <p>
                As a developer, I take pride in delivering high-quality code while ensuring that 
                every product is easy to use and meets the needs of my clients. My background goes 
                beyond development, extending into business strategy, SEO, and project management, 
                allowing me to deliver value across every stage of a project.
              </p>
              <p>
                I thrive in collaborative environments, bringing responsibility, clear communication, 
                and a strong sense of teamwork to every client relationship. With over 7 years of 
                experience, I've worked on projects ranging from small business websites to complex 
                enterprise applications.
              </p>
            </div>
          </div>

          <div className="about-highlights">
            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-header">
                    <CheckIcon className="check-icon" />
                    <h3 className="highlight-title">{highlight}</h3>
                  </div>
                  <p className="highlight-description">
                    {descriptions[highlight]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          align-items: start;
        }

        .about-description {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
        }

        .about-description p {
          font-size: 1.125rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .about-description p:last-child {
          margin-bottom: 0;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .highlight-card {
          background: var(--bg-secondary);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .highlight-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary);
        }

        .highlight-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .check-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: var(--success);
          background: rgba(16, 185, 129, 0.1);
          padding: 0.25rem;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .highlight-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .highlight-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .highlights-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .about-description {
            padding: 1.5rem;
          }

          .about-description p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default About