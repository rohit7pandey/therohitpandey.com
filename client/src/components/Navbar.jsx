import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/kavitaayein', label: 'कविताएँ' },
  { to: '/parichay',    label: 'परिचय' },
  { to: '/sampark',     label: 'संपर्क' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <Link to="/" className="navbar__brand">
        <span className="navbar__brand-hi">र</span>
        <span className="navbar__brand-name">ohit Pandey</span>
      </Link>

      <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {links.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={`navbar__link ${location.pathname.startsWith(l.to) ? 'navbar__link--active' : ''}`}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <button
        className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
