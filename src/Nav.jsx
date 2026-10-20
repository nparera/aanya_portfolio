import { useState } from 'react'
import './Nav.css'

export default function Nav({ isHeroVisible }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ]

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    setMenuOpen(false)
  }

  return (
    <nav className="nav">
      <span className="nav-logo">
        {isHeroVisible ? '' : 'Aanya Mittra'}
      </span>

      <ul className="nav-links">
        {links.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className="nav-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="nav-burger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`burger-line ${menuOpen ? 'top-open' : ''}`}
        />

        <span
          className="burger-line"
          style={{ opacity: menuOpen ? 0 : 1 }}
        />

        <span
          className={`burger-line ${menuOpen ? 'bottom-open' : ''}`}
        />
      </button>

      {menuOpen && (
        <ul className="mobile-menu">
          {links.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="mobile-link"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}