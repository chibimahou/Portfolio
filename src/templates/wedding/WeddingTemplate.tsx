import TemplateNav from '../../components/TemplateNav'

export default function WeddingTemplate(): JSX.Element {
  return (
    <>
      <style>{`
        .template-wedding {
          --primary: #9d7bb0;
          --primary-strong: #7d5b90;
          --secondary: #c8956c;
          --bg: #fdf8f4;
          --bg-alt: #f5ede8;
          --surface: #ffffff;
          --text: #2a1f1f;
          --muted: #7a6060;
          --line: #e8ddd8;
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-sans);
        }
        .t-wed-hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 1.5rem;
          position: relative;
          background: linear-gradient(160deg, #2a1a28 0%, #1a1020 100%);
          color: #fff;
          overflow: hidden;
        }
        .t-wed-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 40%, rgba(157,123,176,0.35) 0%, transparent 65%);
          pointer-events: none;
        }
        .t-wed-hero::after {
          content: '✦';
          position: absolute;
          top: 15%;
          left: 50%;
          transform: translateX(-50%);
          font-size: 1.2rem;
          color: rgba(200,149,108,0.5);
          letter-spacing: 3rem;
        }
        .t-wed-hero-inner { position: relative; z-index: 1; max-width: 680px; }
        .t-wed-hero-eyebrow {
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c8956c;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }
        .t-wed-hero h1 {
          font-family: var(--font-serif);
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 400;
          line-height: 1.1;
          margin-bottom: 1.25rem;
        }
        .t-wed-hero p { font-size: 1.1rem; color: rgba(255,255,255,0.7); margin-bottom: 2.5rem; line-height: 1.65; }
        .t-wed-btn-row { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .t-wed-btn-primary {
          padding: 0.75em 2em;
          background: var(--primary);
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: opacity 0.15s;
        }
        .t-wed-btn-primary:hover { opacity: 0.88; }
        .t-wed-btn-outline {
          padding: 0.75em 2em;
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255,255,255,0.45);
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-sans);
        }
        .t-wed-btn-outline:hover { border-color: #fff; }
        .t-wed-section { padding: clamp(3rem, 6vw, 5rem) 0; background: var(--bg); }
        .t-wed-section--alt { background: var(--bg-alt); }
        .t-wed-container { width: var(--container); margin: 0 auto; }
        .t-wed-section-header { text-align: center; max-width: 560px; margin: 0 auto 3rem; }
        .t-wed-label {
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--secondary);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .t-wed-title {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 400;
          margin-bottom: 0.75rem;
          color: var(--text);
        }
        .t-wed-sub { color: var(--muted); line-height: 1.65; }
        .t-wed-packages-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        @media (max-width: 768px) { .t-wed-packages-grid { grid-template-columns: 1fr; } }
        .t-wed-package-card {
          background: var(--surface);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .t-wed-package-img {
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
        }
        .t-wed-package-body { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; }
        .t-wed-package-name { font-family: var(--font-serif); font-size: 1.15rem; font-weight: 400; margin-bottom: 0.4rem; color: var(--text); }
        .t-wed-package-capacity { font-size: 0.78rem; color: var(--muted); font-weight: 500; margin-bottom: 0.6rem; }
        .t-wed-package-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.6; flex: 1; margin-bottom: 1rem; }
        .t-wed-package-price { font-size: 1.25rem; font-weight: 700; color: var(--primary); }
        .t-wed-gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        @media (max-width: 768px) { .t-wed-gallery-grid { grid-template-columns: 1fr; } }
        .t-wed-gallery-item {
          aspect-ratio: 4 / 3;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
        }
        .t-wed-gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
          display: flex;
          align-items: flex-end;
          padding: 1.25rem;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .t-wed-gallery-item:hover .t-wed-gallery-overlay { opacity: 1; }
        .t-wed-gallery-label { color: #fff; font-size: 0.85rem; font-weight: 600; }
        .t-wed-testimonials-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        @media (max-width: 768px) { .t-wed-testimonials-grid { grid-template-columns: 1fr; } }
        .t-wed-testimonial {
          background: var(--surface);
          border-radius: var(--radius);
          padding: 2rem;
          box-shadow: 0 4px 16px rgba(157,123,176,0.1);
        }
        .t-wed-testimonial-quote { font-size: 2.5rem; color: var(--primary); line-height: 1; margin-bottom: 0.75rem; font-family: var(--font-serif); }
        .t-wed-testimonial-text { font-size: 0.95rem; color: var(--text); line-height: 1.7; margin-bottom: 1.25rem; font-style: italic; }
        .t-wed-testimonial-couple { font-weight: 700; color: var(--primary); margin-bottom: 0.2rem; }
        .t-wed-testimonial-date { font-size: 0.78rem; color: var(--muted); }
        .t-wed-inquiry-section {
          padding: clamp(3rem, 6vw, 5rem) 0;
          background: linear-gradient(160deg, #2a1a28 0%, #1a1020 100%);
          color: #fff;
        }
        .t-wed-inquiry-inner { width: var(--container); margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
        @media (max-width: 768px) { .t-wed-inquiry-inner { grid-template-columns: 1fr; } }
        .t-wed-inquiry-copy h2 { font-family: var(--font-serif); font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 400; margin-bottom: 1rem; }
        .t-wed-inquiry-copy p { color: rgba(255,255,255,0.6); line-height: 1.65; margin-bottom: 0.75rem; font-size: 0.9rem; }
        .t-wed-inquiry-info { display: flex; align-items: center; gap: 0.6rem; color: rgba(255,255,255,0.65); font-size: 0.875rem; margin-bottom: 0.75rem; }
        .t-wed-form { display: flex; flex-direction: column; gap: 1rem; }
        .t-wed-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        @media (max-width: 560px) { .t-wed-form-row { grid-template-columns: 1fr; } }
        .t-wed-input {
          padding: 0.7em 1em;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.08);
          color: #fff;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          width: 100%;
        }
        .t-wed-input::placeholder { color: rgba(255,255,255,0.4); }
        .t-wed-footer {
          background: #140d14;
          color: rgba(255,255,255,0.4);
          padding: 2.5rem 0;
          text-align: center;
          font-size: 0.875rem;
        }
        .t-wed-footer strong { color: rgba(255,255,255,0.8); }
        .t-wed-divider {
          text-align: center;
          color: var(--secondary);
          font-size: 1.2rem;
          letter-spacing: 1.5rem;
          margin: 0;
          padding: 1.5rem 0;
          background: var(--bg-alt);
        }
      `}</style>

      <div className="template-wedding">
        <TemplateNav templateName="Wedding" />

        {/* Hero */}
        <section className="t-wed-hero">
          <div className="t-wed-hero-inner">
            <p className="t-wed-hero-eyebrow">Wedding &amp; Events Venue · Est. 1887</p>
            <h1>Rosewood Estate</h1>
            <p>Your perfect day, perfectly set. A historic estate nestled in the rolling hills of Napa Valley — where love stories unfold in breathtaking surroundings.</p>
            <div className="t-wed-btn-row">
              <button className="t-wed-btn-primary">Inquire About Dates</button>
              <button className="t-wed-btn-outline">Explore Packages</button>
            </div>
          </div>
        </section>

        {/* Decorative divider */}
        <div className="t-wed-divider">✦ ✦ ✦</div>

        {/* Packages */}
        <section className="t-wed-section">
          <div className="t-wed-container">
            <div className="t-wed-section-header">
              <p className="t-wed-label">Venues &amp; Packages</p>
              <h2 className="t-wed-title">Choose Your Setting</h2>
              <p className="t-wed-sub">Three distinct venues, each with its own character — all sharing the same commitment to an extraordinary experience.</p>
            </div>
            <div className="t-wed-packages-grid">
              {[
                { emoji: '🌸', bg: 'linear-gradient(135deg, #f5ede8, #fce4d6)', name: 'Garden Ceremony', capacity: 'Up to 80 guests', desc: 'An open-air ceremony beneath our century-old wisteria pergola, with manicured hedgerows and a natural rose-stone aisle. Perfect for intimate celebrations.', price: 'From $8,500' },
                { emoji: '✨', bg: 'linear-gradient(135deg, #e8e0f5, #d5c8ef)', name: 'Grand Ballroom', capacity: 'Up to 250 guests', desc: 'Our flagship venue — a restored 1887 ballroom with 20-foot ceilings, crystal chandeliers, and original mahogany floors. Seats up to 250 for dinner and dancing.', price: 'From $22,000' },
                { emoji: '🕯️', bg: 'linear-gradient(135deg, #f5ede8, #ead5c5)', name: 'Intimate Villa', capacity: 'Up to 30 guests', desc: 'A private stone villa with a courtyard fountain, vineyard views, and a candlelit stone dining hall. For those who want luxury without the crowd.', price: 'From $6,200' },
              ].map((pkg) => (
                <div key={pkg.name} className="t-wed-package-card">
                  <div className="t-wed-package-img" style={{ background: pkg.bg }}>{pkg.emoji}</div>
                  <div className="t-wed-package-body">
                    <p className="t-wed-package-name">{pkg.name}</p>
                    <p className="t-wed-package-capacity">👥 {pkg.capacity}</p>
                    <p className="t-wed-package-desc">{pkg.desc}</p>
                    <p className="t-wed-package-price">{pkg.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="t-wed-section t-wed-section--alt">
          <div className="t-wed-container">
            <div className="t-wed-section-header">
              <p className="t-wed-label">Gallery</p>
              <h2 className="t-wed-title">Captured Moments</h2>
              <p className="t-wed-sub">A glimpse into the celebrations we've had the privilege of hosting.</p>
            </div>
            <div className="t-wed-gallery-grid">
              {[
                { bg: 'linear-gradient(135deg, #2a1a28, #4a2c46)', emoji: '💐', label: 'Garden Ceremony' },
                { bg: 'linear-gradient(135deg, #1a1a2a, #2c2a4a)', emoji: '🕍', label: 'Grand Ballroom' },
                { bg: 'linear-gradient(135deg, #2a1a12, #4a3020)', emoji: '🍾', label: 'Intimate Villa' },
              ].map((item) => (
                <div key={item.label} className="t-wed-gallery-item" style={{ background: item.bg }}>
                  <span style={{ opacity: 0.4, fontSize: '5rem' }}>{item.emoji}</span>
                  <div className="t-wed-gallery-overlay">
                    <span className="t-wed-gallery-label">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="t-wed-section">
          <div className="t-wed-container">
            <div className="t-wed-section-header">
              <p className="t-wed-label">Our Couples</p>
              <h2 className="t-wed-title">Stories of Forever</h2>
            </div>
            <div className="t-wed-testimonials-grid">
              <div className="t-wed-testimonial">
                <div className="t-wed-testimonial-quote">"</div>
                <p className="t-wed-testimonial-text">Rosewood Estate made every one of our dreams come true. From the first site visit to the last dance, the team thought of every detail before we did. Our guests still talk about the wisteria ceremony. It was absolutely magical.</p>
                <p className="t-wed-testimonial-couple">Sophie &amp; Lucian Marchetti</p>
                <p className="t-wed-testimonial-date">Garden Ceremony · September 2023</p>
              </div>
              <div className="t-wed-testimonial">
                <div className="t-wed-testimonial-quote">"</div>
                <p className="t-wed-testimonial-text">We booked the Grand Ballroom for 210 guests and it still felt intimate. The food was extraordinary, the flowers were exactly what we'd envisioned, and the evening coordinator was calm and perfect through everything. Could not have asked for more.</p>
                <p className="t-wed-testimonial-couple">Daniel &amp; Priya Nair-Sullivan</p>
                <p className="t-wed-testimonial-date">Grand Ballroom · June 2023</p>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry */}
        <section className="t-wed-inquiry-section">
          <div className="t-wed-inquiry-inner">
            <div className="t-wed-inquiry-copy">
              <p className="t-wed-label" style={{ color: '#c8956c' }}>Begin Your Journey</p>
              <h2>Let's Plan Your Day</h2>
              <p>We'd love to hear about your vision. Complete the form and our events team will reach out within two business days to schedule a private tour.</p>
              <div className="t-wed-inquiry-info"><span>📍</span><span>Rosewood Estate, 4800 Dry Creek Rd, Healdsburg, CA 95448</span></div>
              <div className="t-wed-inquiry-info"><span>📞</span><span>(707) 433-8100</span></div>
              <div className="t-wed-inquiry-info"><span>✉️</span><span>events@rosewooodestate.com</span></div>
            </div>
            <form className="t-wed-form" onSubmit={(e) => e.preventDefault()}>
              <div className="t-wed-form-row">
                <input className="t-wed-input" type="text" placeholder="Your name" aria-label="Your name" />
                <input className="t-wed-input" type="email" placeholder="Email address" aria-label="Email address" />
              </div>
              <input className="t-wed-input" type="date" aria-label="Proposed wedding date" />
              <input className="t-wed-input" type="number" placeholder="Estimated guest count" min="1" aria-label="Guest count" />
              <select className="t-wed-input" aria-label="Preferred package">
                <option value="">Preferred package</option>
                <option>Garden Ceremony</option>
                <option>Grand Ballroom</option>
                <option>Intimate Villa</option>
                <option>Not sure yet</option>
              </select>
              <button className="t-wed-btn-primary" type="submit" style={{ width: '100%', padding: '0.85em' }}>
                Submit Inquiry
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="t-wed-footer">
          <div className="t-wed-container">
            <p><strong>Rosewood Estate</strong> · 4800 Dry Creek Rd, Healdsburg, CA 95448</p>
            <p style={{ marginTop: '0.5rem' }}>© 2024 Rosewood Estate. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
