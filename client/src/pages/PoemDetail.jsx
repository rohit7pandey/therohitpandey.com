import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { poems } from '../data/poems'
import './PoemDetail.css'

export default function PoemDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const poem = poems.find(p => p.id === parseInt(id))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!poem) {
    return (
      <main className="poem-detail poem-detail--404">
        <p>कविता नहीं मिली।</p>
        <Link to="/kavitaayein">← वापस जाएँ</Link>
      </main>
    )
  }

  const currentIndex = poems.findIndex(p => p.id === poem.id)
  const prev = poems[currentIndex - 1]
  const next = poems[currentIndex + 1]

  return (
    <main className="poem-detail">
      <div className="poem-detail__back">
        <Link to="/kavitaayein">← सभी कविताएँ</Link>
      </div>

      <article className="poem-detail__article">
        <header className="poem-detail__header">
          <div className="poem-detail__meta">
            <span className="poem-detail__num">
              {String(poem.id).padStart(2, '0')}
            </span>
            <span className="poem-detail__year">{poem.date}</span>
          </div>
          <h1 className="poem-detail__title">{poem.title}</h1>
          <div className="poem-detail__tags">
            {poem.tags.map(t => (
              <span key={t} className="poem-detail__tag">{t}</span>
            ))}
          </div>
        </header>

        <div className="poem-detail__divider" />

        <div className="poem-detail__body">
          {poem.lines.map((line, i) =>
            line === ''
              ? <div key={i} className="poem-detail__stanza-break" />
              : <p key={i} className="poem-detail__line">{line}</p>
          )}
        </div>

        <div className="poem-detail__signature">
          <span className="poem-detail__dash">—</span>
          <span>Rohit Pandey</span>
        </div>
      </article>

      {/* Navigation */}
      <nav className="poem-detail__nav">
        {prev ? (
          <Link to={`/kavitaayein/${prev.id}`} className="poem-detail__nav-btn poem-detail__nav-btn--prev">
            <span className="poem-detail__nav-arrow">←</span>
            <span>
              <span className="poem-detail__nav-label">पिछली कविता</span>
              <span className="poem-detail__nav-title">{prev.title}</span>
            </span>
          </Link>
        ) : <div />}

        {next ? (
          <Link to={`/kavitaayein/${next.id}`} className="poem-detail__nav-btn poem-detail__nav-btn--next">
            <span>
              <span className="poem-detail__nav-label">अगली कविता</span>
              <span className="poem-detail__nav-title">{next.title}</span>
            </span>
            <span className="poem-detail__nav-arrow">→</span>
          </Link>
        ) : <div />}
      </nav>
    </main>
  )
}
