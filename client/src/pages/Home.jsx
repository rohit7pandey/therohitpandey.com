import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { poems } from '../data/poems'
import './Home.css'

const FEATURED_POEM = poems[0]

export default function Home() {
  const heroRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const onMove = (e) => {
      const rect = hero.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
      hero.style.setProperty('--mx', `${x}px`)
      hero.style.setProperty('--my', `${y}px`)
    }
    hero.addEventListener('mousemove', onMove)
    return () => hero.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <main className="home">

      {/* Hero */}
      <section className="hero" ref={heroRef}>
        <div className="hero__bg-orb hero__bg-orb--1" />
        <div className="hero__bg-orb hero__bg-orb--2" />

        <div className={`hero__content ${visible ? 'hero__content--visible' : ''}`}>
          <p className="hero__mono">therohitpandey.com</p>

          <h1 className="hero__name">
            <span className="hero__name-rohit">Rohit</span>
            <span className="hero__name-pandey">Pandey</span>
          </h1>

          <p className="hero__tagline">
            मैं, मेरी आवाज़<br />
            <span className="hero__tagline-rest">और मेरे बिखरे अलफ़ाज़</span>
          </p>

          <div className="hero__divider">
            <span />
            <span className="hero__divider-dot">◆</span>
            <span />
          </div>

          <p className="hero__sub">कवि · लेखक · दिल्ली</p>

          <Link to="/kavitaayein" className="hero__cta">
            कविताएँ पढ़ें
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <div className="hero__scroll-hint">
          <span />
        </div>
      </section>

      {/* Featured Poem */}
      <section className="featured">
        <div className="featured__label">
          <span className="featured__label-line" />
          <span>आज की कविता</span>
          <span className="featured__label-line" />
        </div>

        <div className="featured__card">
          <div className="featured__card-glow" />
          <h2 className="featured__title">{FEATURED_POEM.title}</h2>
          <div className="featured__poem">
            {FEATURED_POEM.lines.slice(0, 6).map((line, i) => (
              line === ''
                ? <br key={i} />
                : <p key={i} className="featured__line">{line}</p>
            ))}
            <p className="featured__ellipsis">…</p>
          </div>
          <Link to={`/kavitaayein/${FEATURED_POEM.id}`} className="featured__read-more">
            पूरी कविता पढ़ें →
          </Link>
        </div>
      </section>

      {/* Stats / Vibe Section */}
      <section className="stats">
        <div className="stats__item">
          <span className="stats__number">{poems.length}+</span>
          <span className="stats__label">कविताएँ</span>
        </div>
        <div className="stats__sep">◆</div>
        <div className="stats__item">
          <span className="stats__number">१</span>
          <span className="stats__label">किताब लिखी जा रही है</span>
        </div>
        <div className="stats__sep">◆</div>
        <div className="stats__item">
          <span className="stats__number">∞</span>
          <span className="stats__label">बिखरे अलफ़ाज़</span>
        </div>
      </section>

    </main>
  )
}
