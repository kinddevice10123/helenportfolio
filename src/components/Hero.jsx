import ArrowDownIcon from '@heroicons/react/24/outline/ArrowDownIcon'
import ClockIcon from '@heroicons/react/24/outline/ClockIcon'
import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon'
import MapPinIcon from '@heroicons/react/24/outline/MapPinIcon'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Helen Bond</span>
            </h1>
            <p className="hero-subtitle">
              A passionate and results-driven full-stack developer with extensive experience 
              in web and mobile application development. Let's build something amazing together.
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <MapPinIcon className="stat-icon" />
                <span>United States</span>
              </div>
              <div className="stat">
                <ClockIcon className="stat-icon" />
                <span>7+ Years</span>
              </div>
              <div className="stat">
                <CurrencyDollarIcon className="stat-icon" />
                <span>$60 USD/Hour</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-secondary">
                View My Work
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-image">
                <img 
                  src="/images/profile.jpg" 
                  alt="Helen Bond" 
                />
              </div>
              <div className="floating-elements">
                <div className="floating-badge badge-1">React</div>
                <div className="floating-badge badge-2">Node.js</div>
                <div className="floating-badge badge-3">Python</div>
                <div className="floating-badge badge-4">Vue.js</div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <ArrowDownIcon className="scroll-arrow" />
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .hero-badge::before {
          content: '';
          width: 8px;
          height: 8px;
          background: var(--success);
          border-radius: 50%;
          margin-right: 0.5rem;
          animation: pulse 2s infinite;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .stat-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: var(--primary);
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-card {
          position: relative;
          width: 300px;
          height: 300px;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          background: var(--bg-secondary);
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .floating-badge {
          position: absolute;
          padding: 0.5rem 1rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-primary);
          box-shadow: var(--shadow);
          animation: float 3s ease-in-out infinite;
        }

        .badge-1 {
          top: -10px;
          right: -20px;
          animation-delay: 0s;
        }

        .badge-2 {
          bottom: 20px;
          left: -30px;
          animation-delay: 1s;
        }

        .badge-3 {
          top: 50px;
          left: -40px;
          animation-delay: 2s;
        }

        .badge-4 {
          bottom: -10px;
          right: -30px;
          animation-delay: 1.5s;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
        }

        .scroll-arrow {
          width: 1.5rem;
          height: 1.5rem;
          color: var(--text-secondary);
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40%, 43% { transform: translateX(-50%) translateY(-10px); }
          70% { transform: translateX(-50%) translateY(-5px); }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.125rem;
          }

          .hero-stats {
            justify-content: center;
          }

          .profile-card {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero