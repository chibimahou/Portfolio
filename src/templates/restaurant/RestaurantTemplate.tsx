import TemplateNav from '../../components/TemplateNav'

export default function RestaurantTemplate(): JSX.Element {
  return (
    <>
      <style>{`
        .template-restaurant {
          --primary: #a13b2f;
          --primary-strong: #7d2d24;
          --secondary: #134e4a;
          --bg: #f8f5ef;
          --bg-alt: #f0e8d9;
          --surface: #fffaf3;
          --text: #2a231f;
          --muted: #6d625c;
          --line: #e0d8ce;
        }
        .template-restaurant body,
        .template-restaurant {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-sans);
        }
        .t-rest-hero {
          min-height: 90vh;
          background: linear-gradient(160deg, #2a1a14 0%, #1a0e0a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
          padding: 4rem 1.5rem;
          position: relative;
          overflow: hidden;
        }
        .t-rest-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(161,59,47,0.35) 0%, transparent 70%);
        }
        .t-rest-hero-inner { position: relative; z-index: 1; max-width: 700px; margin: 0 auto; }
        .t-rest-eyebrow {
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #d4957a;
          font-weight: 600;
          margin-bottom: 1.25rem;
        }
        .t-rest-hero h1 {
          font-family: var(--font-serif);
          font-size: clamp(2.8rem, 7vw, 5rem);
          font-weight: 400;
          line-height: 1.1;
          margin-bottom: 1.25rem;
        }
        .t-rest-hero p {
          font-size: 1.15rem;
          color: rgba(255,255,255,0.72);
          margin-bottom: 2.5rem;
          line-height: 1.65;
        }
        .t-rest-btn-row { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .t-rest-btn-primary {
          padding: 0.75em 1.8em;
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
        .t-rest-btn-primary:hover { opacity: 0.88; }
        .t-rest-btn-outline {
          padding: 0.75em 1.8em;
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255,255,255,0.6);
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: border-color 0.15s;
        }
        .t-rest-btn-outline:hover { border-color: #fff; }
        .t-rest-strip {
          background: var(--secondary);
          color: #fff;
          padding: 1.25rem 0;
        }
        .t-rest-strip-inner {
          width: var(--container);
          margin: 0 auto;
          display: flex;
          gap: 2.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .t-rest-strip-item { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; }
        .t-rest-strip-item span:first-child { font-size: 1.1rem; }
        .t-rest-section { padding: clamp(3rem, 6vw, 5rem) 0; background: var(--bg); }
        .t-rest-section--alt { background: var(--bg-alt); }
        .t-rest-container { width: var(--container); margin: 0 auto; }
        .t-rest-section-label {
          font-size: 0.75rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--primary);
          font-weight: 700;
          margin-bottom: 0.6rem;
        }
        .t-rest-section-title {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 400;
          color: var(--text);
          margin-bottom: 0.75rem;
        }
        .t-rest-section-sub { color: var(--muted); max-width: 520px; line-height: 1.65; margin-bottom: 2.5rem; }
        .t-rest-menu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 768px) { .t-rest-menu-grid { grid-template-columns: 1fr; } }
        .t-rest-dish-card {
          background: var(--surface);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          overflow: hidden;
        }
        .t-rest-dish-img {
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
        }
        .t-rest-dish-body { padding: 1.25rem; }
        .t-rest-dish-name { font-weight: 700; font-size: 1.05rem; margin-bottom: 0.4rem; color: var(--text); }
        .t-rest-dish-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.55; margin-bottom: 0.75rem; }
        .t-rest-dish-price { font-size: 1rem; font-weight: 700; color: var(--primary); }
        .t-rest-story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (max-width: 768px) { .t-rest-story-grid { grid-template-columns: 1fr; } }
        .t-rest-story-img {
          border-radius: var(--radius);
          height: 380px;
          background: linear-gradient(135deg, #a13b2f22, #134e4a44);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          border: 2px solid var(--line);
        }
        .t-rest-story-text p { color: var(--muted); line-height: 1.75; margin-bottom: 1rem; }
        .t-rest-reserve-section {
          padding: clamp(3rem, 6vw, 5rem) 0;
          background: var(--text);
          color: #fff;
        }
        .t-rest-reserve-inner {
          width: var(--container);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (max-width: 768px) { .t-rest-reserve-inner { grid-template-columns: 1fr; } }
        .t-rest-reserve-copy h2 {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 400;
          margin-bottom: 1rem;
        }
        .t-rest-reserve-copy p { color: rgba(255,255,255,0.65); line-height: 1.65; }
        .t-rest-form { display: flex; flex-direction: column; gap: 1rem; }
        .t-rest-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        @media (max-width: 560px) { .t-rest-form-row { grid-template-columns: 1fr; } }
        .t-rest-input {
          padding: 0.7em 1em;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.08);
          color: #fff;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          width: 100%;
        }
        .t-rest-input::placeholder { color: rgba(255,255,255,0.4); }
        .t-rest-footer {
          background: #1a0e0a;
          color: rgba(255,255,255,0.55);
          padding: 2.5rem 0;
          text-align: center;
          font-size: 0.875rem;
        }
        .t-rest-footer strong { color: rgba(255,255,255,0.8); }
      `}</style>

      <div className="template-restaurant">
        <TemplateNav templateName="Restaurant" />

        {/* Hero */}
        <section className="t-rest-hero">
          <div className="t-rest-hero-inner">
            <p className="t-rest-eyebrow">Est. 2009 · Portland, Oregon</p>
            <h1>Ember &amp; Oak</h1>
            <p>Wood-fired cuisine, heartfelt hospitality. Every dish crafted with care, every evening one to remember.</p>
            <div className="t-rest-btn-row">
              <button className="t-rest-btn-primary">Reserve a Table</button>
              <button className="t-rest-btn-outline">View Menu</button>
            </div>
          </div>
        </section>

        {/* Quick Info Strip */}
        <div className="t-rest-strip">
          <div className="t-rest-strip-inner">
            <div className="t-rest-strip-item"><span>🕔</span><span>Tue–Sun, 5:00 pm – 10:00 pm</span></div>
            <div className="t-rest-strip-item"><span>📍</span><span>42 Maple Street, Portland, OR</span></div>
            <div className="t-rest-strip-item"><span>📞</span><span>(503) 847-2291</span></div>
            <div className="t-rest-strip-item"><span>✉️</span><span>hello@emberandoak.com</span></div>
          </div>
        </div>

        {/* Menu Highlights */}
        <section className="t-rest-section">
          <div className="t-rest-container">
            <p className="t-rest-section-label">From the Kitchen</p>
            <h2 className="t-rest-section-title">Menu Highlights</h2>
            <p className="t-rest-section-sub">Seasonal ingredients, wood-fired technique, and recipes shaped by decades of passion.</p>
            <div className="t-rest-menu-grid">
              {[
                { emoji: '🥩', name: 'Oak-Smoked Brisket', desc: 'Slow-cooked 14 hours over red oak with house-pickled slaw and ember butter. Our most beloved dish since day one.', price: '$38' },
                { emoji: '🐟', name: 'Cedar Plank Salmon', desc: 'Wild Pacific salmon, house-brined and planked over cedar, served with roasted fennel and lemon crème fraîche.', price: '$34' },
                { emoji: '🍄', name: 'Wild Mushroom Risotto', desc: 'Porcini, chanterelle, and cremini with aged Parmigiano-Reggiano, fresh thyme, and a drizzle of truffle oil.', price: '$26' },
              ].map((dish) => (
                <div key={dish.name} className="t-rest-dish-card">
                  <div className="t-rest-dish-img" style={{ background: 'var(--bg-alt)' }}>{dish.emoji}</div>
                  <div className="t-rest-dish-body">
                    <p className="t-rest-dish-name">{dish.name}</p>
                    <p className="t-rest-dish-desc">{dish.desc}</p>
                    <p className="t-rest-dish-price">{dish.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="t-rest-section t-rest-section--alt">
          <div className="t-rest-container">
            <div className="t-rest-story-grid">
              <div className="t-rest-story-img">🔥</div>
              <div className="t-rest-story-text">
                <p className="t-rest-section-label">Our Story</p>
                <h2 className="t-rest-section-title">Born from fire, built on family</h2>
                <p>Ember &amp; Oak started as a dream between two siblings — a chef trained in Lyon and a farmer from the Willamette Valley. What began as Sunday dinners for friends has grown into one of Portland's most beloved dining destinations.</p>
                <p>Everything we serve starts with a relationship. Our vegetables come from Cedar Ridge Farm, twenty minutes from our front door. Our beef is sourced from a single family ranch in Eastern Oregon. We believe great food is honest food.</p>
                <p>The wood-fired oven at the heart of our kitchen has been burning since we opened. It gives every dish its soul.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reservation CTA */}
        <section className="t-rest-reserve-section">
          <div className="t-rest-reserve-inner">
            <div className="t-rest-reserve-copy">
              <h2>Book your table tonight</h2>
              <p>We hold a small number of walk-in seats each evening, but reservations ensure the best experience. Let us know you're coming and we'll take care of the rest.</p>
            </div>
            <form className="t-rest-form" onSubmit={(e) => e.preventDefault()}>
              <input className="t-rest-input" type="text" placeholder="Your name" aria-label="Your name" />
              <div className="t-rest-form-row">
                <input className="t-rest-input" type="date" aria-label="Reservation date" />
                <select className="t-rest-input" aria-label="Party size" style={{ cursor: 'pointer' }}>
                  <option value="">Party size</option>
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>)}
                </select>
              </div>
              <button className="t-rest-btn-primary" type="submit" style={{ width: '100%', padding: '0.8em' }}>
                Book Table
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="t-rest-footer">
          <div className="t-rest-container">
            <p><strong>Ember &amp; Oak</strong> · 42 Maple Street, Portland, OR · (503) 847-2291</p>
            <p style={{ marginTop: '0.5rem' }}>© 2024 Ember &amp; Oak Restaurant. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
