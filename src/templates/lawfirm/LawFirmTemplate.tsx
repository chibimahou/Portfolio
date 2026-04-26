import TemplateNav from '../../components/TemplateNav'

export default function LawFirmTemplate(): JSX.Element {
  return (
    <>
      <style>{`
        .template-lawfirm {
          --primary: #1e2d40;
          --primary-strong: #111d2a;
          --secondary: #8b6f47;
          --bg: #f4f4f6;
          --bg-alt: #eaeaed;
          --surface: #ffffff;
          --text: #1a1a2a;
          --muted: #5a5a6e;
          --line: #d8d8e0;
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-sans);
        }
        .t-law-hero {
          min-height: 80vh;
          background: linear-gradient(160deg, #0f1a28 0%, #1e2d40 100%);
          display: flex;
          align-items: center;
          color: #fff;
          padding: 4rem 0;
        }
        .t-law-hero-inner { width: var(--container); margin: 0 auto; max-width: 680px; }
        .t-law-hero-label { font-size: 0.75rem; letter-spacing: 0.18em; text-transform: uppercase; color: #8b6f47; font-weight: 700; margin-bottom: 1.25rem; }
        .t-law-hero h1 {
          font-family: var(--font-serif);
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 400;
          line-height: 1.15;
          margin-bottom: 1.25rem;
        }
        .t-law-hero p { font-size: 1.05rem; color: rgba(255,255,255,0.65); line-height: 1.7; margin-bottom: 2.5rem; max-width: 560px; }
        .t-law-btn-row { display: flex; gap: 1rem; flex-wrap: wrap; }
        .t-law-btn-primary {
          padding: 0.75em 2em;
          background: #8b6f47;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: opacity 0.15s;
        }
        .t-law-btn-primary:hover { opacity: 0.88; }
        .t-law-btn-outline {
          padding: 0.75em 2em;
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255,255,255,0.4);
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-sans);
        }
        .t-law-btn-outline:hover { border-color: #fff; }
        .t-law-section { padding: clamp(3rem, 6vw, 5rem) 0; background: var(--bg); }
        .t-law-section--alt { background: var(--bg-alt); }
        .t-law-container { width: var(--container); margin: 0 auto; }
        .t-law-label { font-size: 0.75rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--secondary); font-weight: 700; margin-bottom: 0.5rem; }
        .t-law-title { font-family: var(--font-serif); font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 400; margin-bottom: 0.75rem; color: var(--text); }
        .t-law-sub { color: var(--muted); max-width: 500px; line-height: 1.65; margin-bottom: 2.5rem; }
        .t-law-areas-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }
        @media (max-width: 900px) { .t-law-areas-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .t-law-areas-grid { grid-template-columns: 1fr; } }
        .t-law-area-card {
          background: var(--surface);
          border-radius: var(--radius);
          padding: 1.75rem 1.5rem;
          box-shadow: 0 4px 14px rgba(0,0,0,0.07);
          border-top: 3px solid var(--secondary);
        }
        .t-law-area-icon { font-size: 2.2rem; margin-bottom: 0.75rem; }
        .t-law-area-name { font-size: 1.05rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text); }
        .t-law-area-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.6; }
        .t-law-attorneys-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        @media (max-width: 768px) { .t-law-attorneys-grid { grid-template-columns: 1fr; } }
        .t-law-attorney-card {
          background: var(--surface);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .t-law-attorney-photo {
          height: 200px;
          background: linear-gradient(135deg, #1e2d4022, #8b6f4722);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
        }
        .t-law-attorney-body { padding: 1.4rem; flex: 1; }
        .t-law-attorney-name { font-size: 1.05rem; font-weight: 700; margin-bottom: 0.2rem; color: var(--text); }
        .t-law-attorney-title { font-size: 0.82rem; color: var(--secondary); font-weight: 600; margin-bottom: 0.6rem; text-transform: uppercase; letter-spacing: 0.07em; }
        .t-law-attorney-specialty { font-size: 0.875rem; color: var(--muted); line-height: 1.55; }
        .t-law-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }
        @media (max-width: 768px) { .t-law-stats-grid { grid-template-columns: repeat(2, 1fr); } }
        .t-law-stat-card {
          background: var(--primary);
          border-radius: var(--radius);
          padding: 2rem 1.5rem;
          text-align: center;
          color: #fff;
        }
        .t-law-stat-value { font-family: var(--font-serif); font-size: 2.5rem; font-weight: 400; color: #c9a87a; margin-bottom: 0.4rem; }
        .t-law-stat-label { font-size: 0.85rem; color: rgba(255,255,255,0.65); }
        .t-law-contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
        @media (max-width: 768px) { .t-law-contact-grid { grid-template-columns: 1fr; } }
        .t-law-form { display: flex; flex-direction: column; gap: 1rem; }
        .t-law-input {
          padding: 0.7em 1em;
          border-radius: 8px;
          border: 1px solid var(--line);
          background: var(--surface);
          color: var(--text);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          width: 100%;
        }
        .t-law-input:focus { outline: 2px solid var(--secondary); outline-offset: 1px; }
        .t-law-textarea { min-height: 110px; resize: vertical; }
        .t-law-office-info h3 { font-size: 1rem; font-weight: 700; margin-bottom: 1.25rem; color: var(--text); }
        .t-law-info-row { display: flex; gap: 0.75rem; align-items: flex-start; margin-bottom: 1rem; font-size: 0.9rem; color: var(--muted); }
        .t-law-info-row span:first-child { font-size: 1.1rem; flex-shrink: 0; }
        .t-law-footer {
          background: var(--primary);
          color: rgba(255,255,255,0.5);
          padding: 2.5rem 0;
          text-align: center;
          font-size: 0.875rem;
        }
        .t-law-footer strong { color: rgba(255,255,255,0.85); }
      `}</style>

      <div className="template-lawfirm">
        <TemplateNav templateName="Law Firm" />

        {/* Hero */}
        <section className="t-law-hero">
          <div className="t-law-hero-inner">
            <p className="t-law-hero-label">Attorneys at Law · Since 1984</p>
            <h1>Hargrove &amp; Associates</h1>
            <p>Trusted counsel. Proven results. For forty years, we have defended the interests of individuals, families, and businesses with integrity and precision.</p>
            <div className="t-law-btn-row">
              <button className="t-law-btn-primary">Free Consultation</button>
              <button className="t-law-btn-outline">Our Practice Areas</button>
            </div>
          </div>
        </section>

        {/* Practice Areas */}
        <section className="t-law-section">
          <div className="t-law-container">
            <p className="t-law-label">What We Do</p>
            <h2 className="t-law-title">Practice Areas</h2>
            <p className="t-law-sub">We provide expert legal counsel across a focused range of practice areas, ensuring depth of expertise where it matters most.</p>
            <div className="t-law-areas-grid">
              {[
                { icon: '🏢', name: 'Corporate Law', desc: 'Business formation, mergers, acquisitions, contracts, and ongoing corporate governance for businesses of all sizes.' },
                { icon: '🏠', name: 'Real Estate', desc: 'Commercial and residential transactions, title disputes, zoning compliance, and landlord-tenant litigation.' },
                { icon: '⚖️', name: 'Litigation', desc: 'Aggressive, strategic representation in civil disputes, arbitration, mediation, and trial proceedings.' },
                { icon: '📜', name: 'Estate Planning', desc: 'Wills, trusts, probate administration, and asset protection strategies tailored to your family\'s needs.' },
              ].map((area) => (
                <div key={area.name} className="t-law-area-card">
                  <div className="t-law-area-icon">{area.icon}</div>
                  <p className="t-law-area-name">{area.name}</p>
                  <p className="t-law-area-desc">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Attorneys */}
        <section className="t-law-section t-law-section--alt">
          <div className="t-law-container">
            <p className="t-law-label">Our Team</p>
            <h2 className="t-law-title">Meet Our Attorneys</h2>
            <p className="t-law-sub">Experienced, credentialed, and deeply committed to the clients they serve.</p>
            <div className="t-law-attorneys-grid">
              {[
                { emoji: '👨‍💼', name: 'Richard Hargrove', title: 'Managing Partner', specialty: 'Richard leads our corporate and M&A practice. He has closed over $2 billion in transactions and serves on the boards of three publicly traded companies.' },
                { emoji: '👩‍💼', name: 'Sandra Okafor', title: 'Partner, Litigation', specialty: 'Sandra has a 90% trial win rate across 300+ civil cases. She specializes in complex commercial disputes and class-action defense.' },
                { emoji: '👨‍⚖️', name: 'James Whitfield', title: 'Senior Associate', specialty: 'James focuses on estate planning and trust administration, helping high-net-worth families structure legacies that endure for generations.' },
              ].map((a) => (
                <div key={a.name} className="t-law-attorney-card">
                  <div className="t-law-attorney-photo">{a.emoji}</div>
                  <div className="t-law-attorney-body">
                    <p className="t-law-attorney-name">{a.name}</p>
                    <p className="t-law-attorney-title">{a.title}</p>
                    <p className="t-law-attorney-specialty">{a.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="t-law-section">
          <div className="t-law-container">
            <p className="t-law-label">Why Choose Us</p>
            <h2 className="t-law-title">Trusted by hundreds of clients</h2>
            <p className="t-law-sub" style={{ marginBottom: '2.5rem' }}>Our track record speaks for itself.</p>
            <div className="t-law-stats-grid">
              {[
                { value: '40+', label: 'Years in Practice' },
                { value: '500+', label: 'Cases Won' },
                { value: '98%', label: 'Client Retention Rate' },
                { value: '$2B+', label: 'Transactions Closed' },
              ].map((s) => (
                <div key={s.label} className="t-law-stat-card">
                  <p className="t-law-stat-value">{s.value}</p>
                  <p className="t-law-stat-label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="t-law-section t-law-section--alt">
          <div className="t-law-container">
            <p className="t-law-label">Get in Touch</p>
            <h2 className="t-law-title">Schedule a Consultation</h2>
            <div className="t-law-contact-grid">
              <form className="t-law-form" onSubmit={(e) => e.preventDefault()}>
                <input className="t-law-input" type="text" placeholder="Your full name" aria-label="Full name" />
                <input className="t-law-input" type="email" placeholder="Email address" aria-label="Email address" />
                <select className="t-law-input" aria-label="Legal matter type">
                  <option value="">Type of matter</option>
                  <option>Corporate Law</option>
                  <option>Real Estate</option>
                  <option>Litigation</option>
                  <option>Estate Planning</option>
                  <option>Other</option>
                </select>
                <textarea className="t-law-input t-law-textarea" placeholder="Brief description of your situation..." aria-label="Message"></textarea>
                <button className="t-law-btn-primary" type="submit">Request Consultation</button>
              </form>
              <div className="t-law-office-info">
                <h3>Our Office</h3>
                <div className="t-law-info-row"><span>📍</span><span>1600 Pennsylvania Ave NW, Suite 400<br />Washington, D.C. 20006</span></div>
                <div className="t-law-info-row"><span>📞</span><span>(202) 555-0194</span></div>
                <div className="t-law-info-row"><span>✉️</span><span>contact@hargrovelaw.com</span></div>
                <div className="t-law-info-row"><span>🕗</span><span>Mon–Fri: 8:30 am – 6:00 pm<br />Emergency consultations available</span></div>
                <div className="t-law-info-row"><span>💼</span><span>Initial consultations are free and confidential.</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="t-law-footer">
          <div className="t-law-container">
            <p><strong>Hargrove &amp; Associates</strong> · 1600 Pennsylvania Ave NW, Washington, D.C.</p>
            <p style={{ marginTop: '0.5rem' }}>© 2024 Hargrove &amp; Associates LLP. Attorney advertising. Past results do not guarantee future outcomes.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
