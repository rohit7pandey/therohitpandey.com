import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => {
    setForm(v => ({ ...v, [e.target.name]: e.target.value }))
  }

  // Using Formspree — replace YOUR_FORM_ID below
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <main className="contact">
      <div className="contact__header">
        <p className="contact__eyebrow">संपर्क</p>
        <h1 className="contact__title">बात करें</h1>
        <p className="contact__sub">
          कविता पसंद आई? कुछ कहना है? लिखिए।
        </p>
      </div>

      <div className="contact__grid">
        {/* Form */}
        <div className="contact__form-wrap">
          {sent ? (
            <div className="contact__thanks">
              <span className="contact__thanks-icon">◆</span>
              <p>शुक्रिया। आपका संदेश मिल गया।</p>
              <button onClick={() => setSent(false)} className="contact__reset">
                फिर लिखें
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label className="contact__label">नाम</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="contact__input"
                  placeholder="आपका नाम"
                />
              </div>
              <div className="contact__field">
                <label className="contact__label">ईमेल</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="contact__input"
                  placeholder="your@email.com"
                />
              </div>
              <div className="contact__field">
                <label className="contact__label">संदेश</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="contact__input contact__textarea"
                  placeholder="जो मन में है, लिखिए…"
                />
              </div>
              <button type="submit" className="contact__submit">
                भेजें →
              </button>
            </form>
          )}
        </div>

        {/* Aside info */}
        <aside className="contact__aside">
          <div className="contact__aside-block">
            <p className="contact__aside-label">ईमेल</p>
            <a href="mailto:hello@therohitpandey.com" className="contact__aside-val">
              hello@therohitpandey.com
            </a>
          </div>
          <div className="contact__aside-block">
            <p className="contact__aside-label">कहाँ मिलेंगे</p>
            <p className="contact__aside-val">दिल्ली, भारत</p>
          </div>
          <div className="contact__aside-quote">
            "हर लफ़्ज़ एक दरवाज़ा है,<br />
            कुछ खुलते हैं, कुछ बस टकराते हैं।"
          </div>
        </aside>
      </div>
    </main>
  )
}
