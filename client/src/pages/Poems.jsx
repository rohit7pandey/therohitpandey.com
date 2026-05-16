import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { poems, allTags } from '../data/poems'
import './Poems.css'

export default function Poems() {
  const [activeTag, setActiveTag] = useState(null)

  const filtered = activeTag
    ? poems.filter(p => p.tags.includes(activeTag))
    : poems

  return (
    <main className="poems-page">
      <div className="poems-page__header">
        <p className="poems-page__eyebrow">संग्रह</p>
        <h1 className="poems-page__title">कविताएँ</h1>
        <p className="poems-page__sub">
          जो दिल में था, वो काग़ज़ पर उतार दिया
        </p>
      </div>

      {/* Tag Filter */}
      <div className="poems-page__tags">
        <button
          className={`tag-btn ${!activeTag ? 'tag-btn--active' : ''}`}
          onClick={() => setActiveTag(null)}
        >
          सभी
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            className={`tag-btn ${activeTag === tag ? 'tag-btn--active' : ''}`}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Poems Grid */}
      <div className="poems-grid">
        {filtered.map((poem, i) => (
          <Link
            key={poem.id}
            to={`/kavitaayein/${poem.id}`}
            className="poem-card"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="poem-card__number">
              {String(poem.id).padStart(2, '0')}
            </div>
            <div className="poem-card__content">
              <h2 className="poem-card__title">{poem.title}</h2>
              <p className="poem-card__preview">
                {poem.lines.find(l => l !== '') }
              </p>
              <div className="poem-card__footer">
                <div className="poem-card__tags">
                  {poem.tags.map(t => (
                    <span key={t} className="poem-card__tag">{t}</span>
                  ))}
                </div>
                <span className="poem-card__year">{poem.date}</span>
              </div>
            </div>
            <div className="poem-card__arrow">→</div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="poems-page__empty">इस विषय पर अभी और लिखा जाएगा…</p>
      )}
    </main>
  )
}
