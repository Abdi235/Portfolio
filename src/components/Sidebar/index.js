import './index.scss'
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHome, faUser, faEnvelope, faSuitcase, faFolderOpen, faBars, faClose 
} from '@fortawesome/free-solid-svg-icons'
import LogoM from '../../assets/images/Mlogo.png'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className='nav-bar'>
      {/* Logo linking to home */}
      <Link className="logo" to="/" aria-label="Home">
        <img src={LogoM} alt="M Logo" />
      </Link>

      {/* Navigation menu, toggled for mobile */}
      <nav className={showNav ? 'mobile-show' : ''} aria-label="Primary navigation">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? 'active' : '')} 
          onClick={() => setShowNav(false)}
          aria-label="Home"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink 
          to="/about" 
          className={({ isActive }) => (isActive ? 'active about-link' : 'about-link')} 
          onClick={() => setShowNav(false)}
          aria-label="About"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink 
          to="/work" 
          className={({ isActive }) => (isActive ? 'active work-link' : 'work-link')} 
          onClick={() => setShowNav(false)}
          aria-label="Work"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>

        <NavLink 
          to="/portfolio" 
          className={({ isActive }) => (isActive ? 'active portfolio-link' : 'portfolio-link')} 
          onClick={() => setShowNav(false)}
          aria-label="Portfolio"
        >
          <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e" />
        </NavLink>

        <NavLink 
          to="/contact" 
          className={({ isActive }) => (isActive ? 'active contact-link' : 'contact-link')} 
          onClick={() => setShowNav(false)}
          aria-label="Contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

        {/* Close button for mobile nav */}
        <FontAwesomeIcon 
          icon={faClose} 
          color="#ffd700" 
          size="3x" 
          className="close-icon" 
          onClick={() => setShowNav(false)} 
          aria-label="Close menu"
          role="button"
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter') setShowNav(false) }}
        />
      </nav>

      {/* Social media links */}
      <ul>
        <li>
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://www.linkedin.com/in/mohamed-abdi-84b18518a/" 
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://github.com/Abdi235" 
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>

      {/* Hamburger menu icon for mobile */}
      <FontAwesomeIcon 
        onClick={() => setShowNav(true)} 
        icon={faBars} 
        color="#ffd700" 
        size="3x" 
        className="hamburger-icon" 
        aria-label="Open menu"
        role="button"
        tabIndex={0}
        onKeyDown={e => { if (e.key === 'Enter') setShowNav(true) }}
      />
    </div>
  )
}

export default Sidebar
