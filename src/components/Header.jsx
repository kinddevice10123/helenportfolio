import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import SunIcon from '@heroicons/react/24/outline/SunIcon'
import MoonIcon from '@heroicons/react/24/outline/MoonIcon'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    // { href: '#contact', label: 'Contact' }
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">Helen Bond</span>
          </div>
          
          <nav className="nav desktop-nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {theme === 'light' ? (
                <MoonIcon className="icon" />
              ) : (
                <SunIcon className="icon" />
              )}
            </button>
            
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="icon" />
              ) : (
                <Bars3Icon className="icon" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="mobile-nav">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: var(--bg-primary);
          transition: all 0.3s ease;
          border-bottom: 1px solid transparent;
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: var(--shadow);
        }

        [data-theme="dark"] .header.scrolled {
          background: rgba(15, 23, 42, 0.95);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .desktop-nav {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .theme-toggle {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .theme-toggle:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
          transform: scale(1.05);
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.5rem;
        }

        .icon {
          width: 1.5rem;
          height: 1.5rem;
        }

        .mobile-nav {
          display: none;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem 0;
          border-top: 1px solid var(--border-color);
        }

        .mobile-nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
        }

        .mobile-nav-link:hover {
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .mobile-nav {
            display: flex;
          }
        }
      `}</style>
    </header>
  )
}

export default Header