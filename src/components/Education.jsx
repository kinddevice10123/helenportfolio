import AcademicCapIcon from '@heroicons/react/24/outline/AcademicCapIcon'
import CalendarIcon from '@heroicons/react/24/outline/CalendarIcon'

const Education = () => {
  const subjects = [
    'Software Development',
    'Data Structures & Algorithms',
    'Database Management',
    'Computer Networks',
    'Operating Systems',
    'Software Engineering'
  ]

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic Background</p>

        <div className="education-content">
          <div className="education-card">
            <div className="education-header">
              <div className="education-icon">
                <AcademicCapIcon className="cap-icon" />
              </div>
              <div className="education-info">
                <h3 className="education-degree">Bachelor of Science in Computer Science</h3>
                <div className="education-school">Tennessee Technological University</div>
                <div className="education-period">
                  <CalendarIcon className="calendar-icon" />
                  <span>2001 - 2005 (4 years)</span>
                </div>
              </div>
            </div>

            <div className="education-details">
              <h4 className="areas-title">Areas of Study:</h4>
              <div className="subjects-grid">
                {subjects.map((subject, index) => (
                  <div key={index} className="subject-item">
                    <div className="subject-dot"></div>
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .education-content {
          max-width: 700px;
          margin: 0 auto;
        }

        .education-card {
          background: var(--bg-secondary);
          border-radius: 20px;
          padding: 3rem;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .education-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
        }

        .education-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }

        .education-header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .education-icon {
          background: var(--primary);
          padding: 1rem;
          border-radius: 16px;
          flex-shrink: 0;
        }

        .cap-icon {
          width: 2rem;
          height: 2rem;
          color: white;
        }

        .education-info {
          flex: 1;
        }

        .education-degree {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .education-school {
          font-size: 1.125rem;
          color: var(--primary);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .education-period {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .calendar-icon {
          width: 1rem;
          height: 1rem;
        }

        .education-details {
          background: var(--bg-primary);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid var(--border-color);
        }

        .areas-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .subjects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0.75rem;
        }

        .subject-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-weight: 500;
          padding: 0.5rem 0;
        }

        .subject-dot {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .education-card {
            padding: 2rem;
          }

          .education-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .education-degree {
            font-size: 1.25rem;
          }

          .subjects-grid {
            grid-template-columns: 1fr;
          }

          .education-details {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Education