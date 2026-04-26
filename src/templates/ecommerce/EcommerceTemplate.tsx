import TemplateNav from '../../components/TemplateNav'

export default function EcommerceTemplate(): JSX.Element {
  return (
    <>
      <style>{`
        .template-ecommerce {
          --primary: #1a1a1a;
          --primary-strong: #000;
          --secondary: #f59e0b;
          --bg: #fafafa;
          --bg-alt: #f2f2f2;
          --surface: #ffffff;
          --text: #1a1a1a;
          --muted: #666666;
          --line: #e5e5e5;
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-sans);
        }
        .t-eco-nav-top {
          height: 44px;
          background: var(--primary);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.78rem;
          letter-spacing: 0.08em;
        }
        .t-eco-hero {
          padding: clamp(4rem, 8vw, 7rem) 0;
          text-align: center;
          background: var(--surface);
        }
        .t-eco-hero-inner { max-width: 600px; margin: 0 auto; padding: 0 1.5rem; }
        .t-eco-hero-eyebrow {
          font-size: 0.72rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 600;
          margin-bottom: 1.25rem;
        }
        .t-eco-hero h1 {
          font-family: var(--font-serif);
          font-size: clamp(2.8rem, 7vw, 5rem);
          font-weight: 400;
          line-height: 1.1;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }
        .t-eco-hero p { font-size: 1rem; color: var(--muted); margin-bottom: 2.5rem; line-height: 1.65; }
        .t-eco-category-row { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
        .t-eco-category-btn {
          padding: 0.5em 1.4em;
          border: 1.5px solid var(--text);
          border-radius: 3px;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          background: transparent;
          color: var(--text);
          font-family: var(--font-sans);
          transition: background 0.15s, color 0.15s;
        }
        .t-eco-category-btn:hover, .t-eco-category-btn--active {
          background: var(--text);
          color: #fff;
        }
        .t-eco-section { padding: clamp(3rem, 6vw, 5rem) 0; background: var(--bg); }
        .t-eco-section--alt { background: var(--bg-alt); }
        .t-eco-section--white { background: var(--surface); }
        .t-eco-container { width: var(--container); margin: 0 auto; }
        .t-eco-section-header { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 2rem; flex-wrap: wrap; gap: 0.75rem; }
        .t-eco-section-title { font-family: var(--font-serif); font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 400; }
        .t-eco-section-link { font-size: 0.82rem; font-weight: 600; color: var(--muted); text-decoration: none; border-bottom: 1px solid var(--muted); padding-bottom: 1px; }
        .t-eco-products-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        @media (max-width: 900px) { .t-eco-products-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 500px) { .t-eco-products-grid { grid-template-columns: 1fr; } }
        .t-eco-product-card { cursor: pointer; }
        .t-eco-product-img {
          aspect-ratio: 3 / 4;
          background: var(--bg-alt);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
          margin-bottom: 0.875rem;
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        .t-eco-product-card:hover .t-eco-product-img { transform: scale(1.02); }
        .t-eco-product-name { font-size: 0.9rem; font-weight: 600; margin-bottom: 0.2rem; }
        .t-eco-product-material { font-size: 0.78rem; color: var(--muted); margin-bottom: 0.35rem; }
        .t-eco-product-price-row { display: flex; align-items: center; justify-content: space-between; }
        .t-eco-product-price { font-size: 0.9rem; font-weight: 700; }
        .t-eco-add-btn {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: var(--text);
          color: #fff;
          border: none;
          border-radius: 3px;
          padding: 0.35em 0.85em;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: opacity 0.15s;
        }
        .t-eco-add-btn:hover { opacity: 0.8; }
        .t-eco-categories-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        @media (max-width: 768px) { .t-eco-categories-grid { grid-template-columns: 1fr; } }
        .t-eco-category-banner {
          aspect-ratio: 4 / 3;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .t-eco-category-banner-inner { position: relative; z-index: 1; }
        .t-eco-category-banner-name { font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 0.25rem; }
        .t-eco-category-banner-cta { font-size: 0.78rem; color: rgba(255,255,255,0.75); font-weight: 600; letter-spacing: 0.05em; }
        .t-eco-brand-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
        @media (max-width: 768px) { .t-eco-brand-grid { grid-template-columns: 1fr; } }
        .t-eco-brand-visual {
          min-height: 420px;
          background: var(--bg-alt);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 6rem;
        }
        .t-eco-brand-copy { padding: 3rem 2.5rem; display: flex; flex-direction: column; justify-content: center; background: var(--surface); }
        .t-eco-brand-label { font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); margin-bottom: 1rem; }
        .t-eco-brand-title { font-family: var(--font-serif); font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 400; margin-bottom: 1rem; line-height: 1.25; }
        .t-eco-brand-text { font-size: 0.9rem; color: var(--muted); line-height: 1.75; margin-bottom: 1.5rem; }
        .t-eco-brand-btn {
          align-self: flex-start;
          padding: 0.65em 1.75em;
          background: var(--text);
          color: #fff;
          border: none;
          border-radius: 3px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: opacity 0.15s;
        }
        .t-eco-brand-btn:hover { opacity: 0.8; }
        .t-eco-newsletter-section {
          padding: clamp(3rem, 6vw, 5rem) 0;
          background: var(--text);
          color: #fff;
          text-align: center;
        }
        .t-eco-newsletter-inner { max-width: 520px; margin: 0 auto; padding: 0 1.5rem; }
        .t-eco-newsletter-inner h2 { font-family: var(--font-serif); font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 400; margin-bottom: 0.75rem; }
        .t-eco-newsletter-inner p { color: rgba(255,255,255,0.6); margin-bottom: 1.75rem; font-size: 0.9rem; }
        .t-eco-newsletter-form { display: flex; gap: 0; }
        .t-eco-newsletter-input {
          flex: 1;
          padding: 0.75em 1.1em;
          border: none;
          background: rgba(255,255,255,0.1);
          color: #fff;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          border-radius: 4px 0 0 4px;
          border: 1px solid rgba(255,255,255,0.15);
          border-right: none;
        }
        .t-eco-newsletter-input::placeholder { color: rgba(255,255,255,0.4); }
        .t-eco-newsletter-btn {
          padding: 0.75em 1.5em;
          background: var(--secondary);
          color: #0f172a;
          border: none;
          border-radius: 0 4px 4px 0;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: opacity 0.15s;
          white-space: nowrap;
        }
        .t-eco-newsletter-btn:hover { opacity: 0.88; }
        .t-eco-footer {
          background: #111;
          color: rgba(255,255,255,0.45);
          padding: 2.5rem 0;
          text-align: center;
          font-size: 0.8rem;
        }
        .t-eco-footer strong { color: rgba(255,255,255,0.8); }
      `}</style>

      <div className="template-ecommerce">
        <TemplateNav templateName="E-Commerce" />

        {/* Announcement bar */}
        <div className="t-eco-nav-top">
          Free shipping on orders over $150 · Complimentary returns
        </div>

        {/* Hero */}
        <section className="t-eco-hero">
          <div className="t-eco-hero-inner">
            <p className="t-eco-hero-eyebrow">New Collection · Spring 2024</p>
            <h1>FORMA<br />Studio</h1>
            <p>Essentials, elevated. Timeless wardrobe pieces built to last, designed with intention and made without compromise.</p>
            <div className="t-eco-category-row">
              <button className="t-eco-category-btn t-eco-category-btn--active">New Arrivals</button>
              <button className="t-eco-category-btn">Women</button>
              <button className="t-eco-category-btn">Men</button>
              <button className="t-eco-category-btn">Accessories</button>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="t-eco-section t-eco-section--white">
          <div className="t-eco-container">
            <div className="t-eco-section-header">
              <h2 className="t-eco-section-title">Featured Products</h2>
              <a href="#" className="t-eco-section-link">View all →</a>
            </div>
            <div className="t-eco-products-grid">
              {[
                { emoji: '🧥', name: 'Milano Overshirt', material: 'Japanese Cotton Twill', price: '$218' },
                { emoji: '👕', name: 'Essential Crewneck', material: 'Organic Pima Cotton', price: '$89' },
                { emoji: '👖', name: 'Slim Chino Trousers', material: 'Italian Linen Blend', price: '$165' },
                { emoji: '🧤', name: 'Leather Driving Gloves', material: 'Full-Grain Nappa', price: '$125' },
              ].map((p) => (
                <div key={p.name} className="t-eco-product-card">
                  <div className="t-eco-product-img">{p.emoji}</div>
                  <p className="t-eco-product-name">{p.name}</p>
                  <p className="t-eco-product-material">{p.material}</p>
                  <div className="t-eco-product-price-row">
                    <span className="t-eco-product-price">{p.price}</span>
                    <button className="t-eco-add-btn">Add</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="t-eco-section">
          <div className="t-eco-container">
            <div className="t-eco-section-header">
              <h2 className="t-eco-section-title">Shop by Category</h2>
            </div>
            <div className="t-eco-categories-grid">
              {[
                { bg: 'linear-gradient(160deg, #1a1a1a, #2d2d2d)', name: 'New Arrivals', cta: 'Shop now →' },
                { bg: 'linear-gradient(160deg, #2d3a2d, #3d4a3d)', name: 'Outerwear', cta: 'Shop now →' },
                { bg: 'linear-gradient(160deg, #3a2d1a, #4a3d2a)', name: 'Accessories', cta: 'Shop now →' },
              ].map((cat) => (
                <div
                  key={cat.name}
                  className="t-eco-category-banner"
                  style={{ background: cat.bg }}
                >
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', opacity: 0.15 }}>
                    {cat.name === 'New Arrivals' ? '✦' : cat.name === 'Outerwear' ? '🧥' : '👜'}
                  </div>
                  <div className="t-eco-category-banner-inner">
                    <p className="t-eco-category-banner-name">{cat.name}</p>
                    <p className="t-eco-category-banner-cta">{cat.cta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="t-eco-section t-eco-section--white" style={{ padding: 0 }}>
          <div className="t-eco-brand-grid">
            <div className="t-eco-brand-visual">🌿</div>
            <div className="t-eco-brand-copy">
              <p className="t-eco-brand-label">Our Philosophy</p>
              <h2 className="t-eco-brand-title">Built to last, worn with intention</h2>
              <p className="t-eco-brand-text">FORMA Studio was founded on a single principle: clothing should be made well enough that you never have to replace it. We source only from mills we visit personally — in Portugal, Japan, and Scotland — and we limit each run to what we can make responsibly.</p>
              <p className="t-eco-brand-text">We don't do seasonal drops. We build a permanent collection and refine it year after year. When a piece sells out, we restock it. When it can be better, we improve it. That's it.</p>
              <button className="t-eco-brand-btn">Our Story</button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="t-eco-newsletter-section">
          <div className="t-eco-newsletter-inner">
            <h2>Join the FORMA community</h2>
            <p>Early access to new arrivals, restocks, and the occasional essay on craft and design. Unsubscribe anytime.</p>
            <form className="t-eco-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input className="t-eco-newsletter-input" type="email" placeholder="your@email.com" aria-label="Email address" />
              <button className="t-eco-newsletter-btn" type="submit">Subscribe</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="t-eco-footer">
          <div className="t-eco-container">
            <p><strong>FORMA Studio</strong> · hello@formastudio.com · London, New York, Tokyo</p>
            <p style={{ marginTop: '0.5rem' }}>© 2024 FORMA Studio Ltd. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
