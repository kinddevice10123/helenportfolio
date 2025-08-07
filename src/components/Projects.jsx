import { useState, useEffect } from 'react'
// import ArrowTopRightOnSquareIcon from '@heroicons/react/24/outline/ArrowTopRightOnSquareIcon'
// import CodeBracketIcon from '@heroicons/react/24/outline/CodeBracketIcon'
import ChevronLeftIcon from '@heroicons/react/24/outline/ChevronLeftIcon'
import ChevronRightIcon from '@heroicons/react/24/outline/ChevronRightIcon'

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const projects = [
    {
      title: 'Modern Payment Integration System',
      description: 'Developed a secure and scalable payment system that integrates Stripe API to handle transactions. Includes features like recurring billing, webhook processing, and user-friendly dashboard. Deployed using Docker and CI/CD via GitHub Actions.',
      image: '/images/portfolio1.png',
      skills: ['React', 'Node.js','Stripe API', 'MongoDB', 'Docker'],
      // liveUrl: 'https://example.com',
      // codeUrl: 'https://github.com'
    },
    {
      title: 'A Modern Car Dealership Platform',
      description: 'This dynamic site allows users to easily search for vehicles, view detailed information, and compare models.',
      image: '/images/portfolio2.png',
      skills: ['Vue.js', 'Python', 'Flask', 'PostgreSQL'],
      // liveUrl: 'https://example.com',
      // codeUrl: 'https://github.com'
    },
    {
      title: 'Explore the World of Smartwatches',
      description: 'WristWise is a modern web platform dedicated to smartwatches, offering users an engaging space to browse, compare, and discover the latest in wearable tech.',
      image: '/images/portfolio3.png',
      skills: ['React', 'WordPress', 'REST API', 'CSS3'],
      // liveUrl: 'https://example.com',
      // codeUrl: 'https://github.com'
    },
    {
      title: 'GlimmerGem – Sparkle Starts Here',
      description: 'GlimmerGem is a beautifully crafted eCommerce website that offers a luxurious and user-friendly platform to browse and purchase exquisite jewelry pieces.',
      image: '/images/portfolio4.jpg',
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
      // liveUrl: 'https://example.com',
      // codeUrl: 'https://github.com'
    },
    {
      title: 'Blog Shop – eCommerce Shopify Theme',
      description: 'Blog Shop is a modern and responsive Shopify theme designed for lifestyle bloggers and content creators who want to seamlessly integrate blogging with eCommerce.',
      image: '/images/portfolio5.png',
      skills: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
      // liveUrl: 'https://example.com',
      // codeUrl: 'https://github.com'
    },
    {
      title: 'GlowUp – Beauty & Wellness eCommerce Platform',
      description: 'GlowUp is a comprehensive eCommerce platform designed for the health care, beauty, and wellness industry.',
      image: '/images/portfolio6.png',
      skills: ['React', 'Python', 'Django', 'PostgreSQL'],
      // liveUrl: 'https://example.com',
      // codeUrl: 'https://github.com'
    }
  ]

  const projectsPerSlide = 3
  const totalSlides = Math.ceil(projects.length / projectsPerSlide)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('projects')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  // const getCurrentProjects = () => {
  //   const start = currentSlide * projectsPerSlide
  //   const end = start + projectsPerSlide
  //   return projects.slice(start, end)
  // }

  return (
    <section id="projects" className={`section ${isVisible ? 'animate-in' : ''}`}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of my recent work and the technologies I've used
        </p>

        <div className="carousel-container">
          <div className="carousel-wrapper">
            <button 
              className="carousel-btn prev-btn" 
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <ChevronLeftIcon className="carousel-icon" />
            </button>

            <div className="projects-carousel">
              <div 
                className="projects-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="projects-slide">
                    {projects
                      .slice(slideIndex * projectsPerSlide, (slideIndex + 1) * projectsPerSlide)
                      .map((project, index) => (
                        <div 
                          key={index} 
                          className="project-card"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                              {/* <div className="project-links">
                                <a 
                                  href={project.liveUrl} 
                                  className="project-link"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="View live project"
                                >
                                  <ArrowTopRightOnSquareIcon className="link-icon" />
                                </a>
                                <a 
                                  href={project.codeUrl} 
                                  className="project-link"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="View source code"
                                >
                                  <CodeBracketIcon className="link-icon" />
                                </a>
                              </div> */}
                            </div>
                          </div>
                          
                          <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            
                            <div className="project-skills">
                              {project.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="skill-badge">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>

            <button 
              className="carousel-btn next-btn" 
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
            >
              <ChevronRightIcon className="carousel-icon" />
            </button>
          </div>

          <div className="carousel-indicators">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`indicator ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }

        .section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .carousel-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        .carousel-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .carousel-btn {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 2;
          flex-shrink: 0;
        }

        .carousel-btn:hover:not(:disabled) {
          background: var(--primary);
          border-color: var(--primary);
          transform: scale(1.1);
        }

        .carousel-btn:hover:not(:disabled) .carousel-icon {
          color: white;
        }

        .carousel-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .carousel-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: var(--text-primary);
          transition: color 0.3s ease;
        }

        .projects-carousel {
          flex: 1;
          overflow: hidden;
          border-radius: 16px;
        }

        .projects-track {
          display: flex;
          transition: transform 0.5s ease;
        }

        .projects-slide {
          min-width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          padding: 0 1rem;
        }

        .project-card {
          background: var(--bg-secondary);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          animation: slideInUp 0.6s ease forwards;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: white;
          border-radius: 50%;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background: var(--primary);
          transform: scale(1.1);
        }

        .project-link:hover .link-icon {
          color: white;
        }

        .link-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: var(--text-primary);
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .project-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-badge {
          padding: 0.25rem 0.75rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .skill-badge:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: var(--border-color);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: var(--primary);
          transform: scale(1.2);
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
          .projects-slide {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .carousel-wrapper {
            flex-direction: column;
            gap: 1rem;
          }

          .carousel-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 3;
          }

          .prev-btn {
            left: 10px;
          }

          .next-btn {
            right: 10px;
          }

          .projects-slide {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 0 3rem;
          }

          .project-image {
            height: 180px;
          }

          .project-content {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects