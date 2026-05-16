import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__divider" />
      <div className="footer__inner">
        <p className="footer__tagline">
          मैं, मेरी आवाज़ और मेरे बिखरे अलफ़ाज़
        </p>
        <div className="footer__links">
          <Link to="/kavitaayein">कविताएँ</Link>
          <span>·</span>
          <Link to="/parichay">परिचय</Link>
          <span>·</span>
          <Link to="/sampark">संपर्क</Link>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} Rohit Pandey · therohitpandey.com
        </p>
      </div>
    </footer>
  )
}
