import EnvelopeIcon from '@heroicons/react/24/outline/EnvelopeIcon'
import MapPinIcon from '@heroicons/react/24/outline/MapPinIcon'
import ClockIcon from '@heroicons/react/24/outline/ClockIcon'

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Contact Me</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3 className="intro-title">Let's work together</h3>
              <p className="intro-text">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need a full-stack developer or want to discuss a potential 
                collaboration, I'd love to hear from you.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <EnvelopeIcon className="icon" />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:helenbond094@gmail.com">helenbond094@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPinIcon className="icon" />
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <span>Tennessee, United States</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <ClockIcon className="icon" />
                </div>
                <div className="contact-text">
                  <h4>Working Hours</h4>
                  <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project inquiry"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-intro {
          margin-bottom: 2rem;
        }

        .intro-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .intro-text {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 1.1rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background: var(--bg-secondary);
          border-radius: 12px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          background: var(--bg-tertiary);
          border-color: var(--primary);
        }

        .contact-icon {
          background: var(--primary);
          padding: 0.75rem;
          border-radius: 10px;
          flex-shrink: 0;
        }

        .icon {
          width: 1.25rem;
          height: 1.25rem;
          color: white;
        }

        .contact-text h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .contact-text a {
          color: var(--primary);
          text-decoration: none;
          font-weight: 500;
        }

        .contact-text a:hover {
          text-decoration: underline;
        }

        .contact-text span {
          color: var(--text-secondary);
          font-weight: 500;
        }

        .contact-form-section {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid var(--border-color);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group textarea {
          padding: 0.75rem;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          background: var(--bg-primary);
          color: var(--text-primary);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 0.5rem;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-form-section {
            padding: 1.5rem;
          }

          .intro-title {
            font-size: 1.25rem;
          }

          .intro-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact