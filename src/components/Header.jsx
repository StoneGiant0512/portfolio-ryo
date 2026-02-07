import { useState } from 'react'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Me' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Header({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className="header">
      <nav className="nav">
        <a href="#home" className="nav-logo" onClick={handleLinkClick}>
          Japan
        </a>
        <ul className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={handleLinkClick}
                aria-current={activeSection === href.slice(1) ? 'true' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}
