import React from 'react'
import './About.css'

export default function About() {
  return (
    <main className="about">
      <div className="about__header">
        <p className="about__eyebrow">परिचय</p>
        <h1 className="about__title">मैं कौन हूँ</h1>
      </div>

      <div className="about__grid">
        {/* Left: Visual */}
        <div className="about__visual">
          <div className="about__avatar">
            <div className="about__avatar-inner">
              <span className="about__avatar-letter">र</span>
            </div>
            <div className="about__avatar-ring" />
          </div>
          <div className="about__visual-quote">
            "जो लिखा वो मैं हूँ,<br />जो नहीं लिखा वो भी।"
          </div>
        </div>

        {/* Right: Text */}
        <div className="about__text">
          <p className="about__para">
            मेरा नाम Rohit Pandey है। मैं एक कवि हूँ — या कम से कम ऐसा सोचना अच्छा लगता है।
            शब्दों से पुरानी दोस्ती है। जब बात करना मुश्किल होता है, तो लिखना आसान हो जाता है।
          </p>

          <p className="about__para">
            मेरी कविताएँ ज़िन्दगी के उन कोनों से आती हैं जहाँ अक्सर कोई नहीं जाता —
            रात की खामोशी में, माँ की चाय में, शहर की भीड़ में अकेले होने का अहसास।
          </p>

          <p className="about__para">
            अभी एक किताब लिख रहा हूँ। अभी अधूरी है — जैसे हम सब होते हैं।
            जब पूरी होगी, तुम्हें पता चल जाएगा।
          </p>

          <div className="about__tags-section">
            <span className="about__tag">दिल्ली</span>
            <span className="about__tag">हिंदी कविता</span>
            <span className="about__tag">किताब लिख रहे हैं</span>
            <span className="about__tag">बिखरे अलफ़ाज़</span>
          </div>
        </div>
      </div>

      {/* Book Section */}
      <div className="about__book">
        <div className="about__book-inner">
          <div className="about__book-badge">जल्द आएगा</div>
          <p className="about__book-label">लिखी जा रही किताब</p>
          <h2 className="about__book-title">अभी शीर्षक सोच रहे हैं…</h2>
          <p className="about__book-desc">
            कुछ कहानियाँ, कुछ कविताएँ, कुछ वो जो दोनों के बीच की जगह में रहता है।
            जब तक किताब आए, यहाँ कविताएँ पढ़ते रहिए।
          </p>
          <div className="about__book-progress">
            <span className="about__book-progress-label">progress</span>
            <div className="about__book-bar">
              <div className="about__book-fill" style={{ width: '38%' }} />
            </div>
            <span className="about__book-pct">38%</span>
          </div>
        </div>
      </div>
    </main>
  )
}
