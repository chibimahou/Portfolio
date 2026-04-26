import TemplateNav from '../../components/TemplateNav'

export default function CafeTemplate(): JSX.Element {
  return (
    <>
      <style>{`
        .template-cafe {
          --primary: #7c5c3e;
          --primary-strong: #5e4229;
          --secondary: #4a7c5c;
          --bg: #faf6f1;
          --bg-alt: #f0e8dc;
          --surface: #fffdf9;
          --text: #2c1d0e;
          --muted: #7a6251;
          --line: #e0d5c6;
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-sans);
        }
        .t-cafe-hero {
          min-height: 80vh;
          background: linear-gradient(160deg, #2c1d0e 0%, #3d2a18 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
          padding: 4rem 1.5rem;
          position: relative;
        }
        .t-cafe-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 60%, rgba(124,92,62,0.4) 0%, transparent 65%);
          pointer-events: none;
        }
        .t-cafe-hero-inner { position: relative; z-index: 1; max-width: 600px; }
        .t-cafe-hero-icon { font-size: 3rem; margin-bottom: 1.25rem; }
        .t-cafe-hero h1 {
          font-family: var(--font-serif);
          font-size: clamp(2.4rem, 6vw, 4rem);
          font-weight: 400;
          margin-bottom: 1rem;
        }
        .t-cafe-hero p { font-size: 1.1rem; color: rgba(255,255,255,0.7); margin-bottom: 2rem; }
        .t-cafe-hero-badge {
          display: inline-block;
          padding: 0.4em 1.2em;
          border-radius: 999px;
          background: rgba(124,92,62,0.35);
          border: 1px solid rgba(124,92,62,0.6);
          color: #e8c9a8;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }
        .t-cafe-section { padding: clamp(3rem, 6vw, 5rem) 0; background: var(--bg); }
        .t-cafe-section--alt { background: var(--bg-alt); }
        .t-cafe-container { width: var(--container); margin: 0 auto; }
        .t-cafe-label { font-size: 0.75rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--primary); font-weight: 700; margin-bottom: 0.5rem; }
        .t-cafe-title { font-family: var(--font-serif); font-size: clamp(1.7rem, 3.5vw, 2.5rem); font-weight: 400; margin-bottom: 0.75rem; }
        .t-cafe-sub { color: var(--muted); max-width: 500px; line-height: 1.65; margin-bottom: 2.5rem; }
        .t-cafe-menu-category { margin-bottom: 3rem; }
        .t-cafe-menu-category h3 { font-size: 1rem; font-weight: 700; color: var(--primary); margin-bottom: 1.25rem; padding-bottom: 0.5rem; border-bottom: 2px solid var(--line); }
        .t-cafe-menu-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        @media (max-width: 768px) { .t-cafe-menu-grid { grid-template-columns: 1fr; } }
        .t-cafe-menu-card {
          background: var(--surface);
          border-radius: 10px;
          padding: 1.1rem 1.25rem;
          border: 1px solid var(--line);
        }
        .t-cafe-menu-card-name { font-weight: 600; margin-bottom: 0.3rem; color: var(--text); }
        .t-cafe-menu-card-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.5; margin-bottom: 0.6rem; }
        .t-cafe-menu-card-price { font-size: 0.9rem; font-weight: 700; color: var(--primary); }
        .t-cafe-story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
        @media (max-width: 768px) { .t-cafe-story-grid { grid-template-columns: 1fr; } }
        .t-cafe-story-visual {
          border-radius: var(--radius);
          background: linear-gradient(135deg, #7c5c3e22, #4a7c5c22);
          border: 2px solid var(--line);
          height: 360px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
        }
        .t-cafe-story-text p { color: var(--muted); line-height: 1.75; margin-bottom: 1rem; font-size: 0.95rem; }
        .t-cafe-specials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        @media (max-width: 768px) { .t-cafe-specials-grid { grid-template-columns: 1fr; } }
        .t-cafe-special-card {
          background: var(--surface);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: 1.5rem;
          border-top: 3px solid var(--primary);
        }
        .t-cafe-special-day { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--primary); margin-bottom: 0.5rem; }
        .t-cafe-special-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text); }
        .t-cafe-special-desc { font-size: 0.85rem; color: var(--muted); line-height: 1.55; margin-bottom: 0.75rem; }
        .t-cafe-special-price { font-weight: 700; color: var(--primary); }
        .t-cafe-visit-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; align-items: start; }
        @media (max-width: 768px) { .t-cafe-visit-grid { grid-template-columns: 1fr; } }
        .t-cafe-map-placeholder {
          height: 280px;
          background: linear-gradient(135deg, #7c5c3e18, #4a7c5c18);
          border-radius: var(--radius);
          border: 2px dashed var(--line);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          color: var(--muted);
          gap: 0.5rem;
        }
        .t-cafe-info-row { display: flex; gap: 0.75rem; align-items: flex-start; margin-bottom: 1rem; color: var(--muted); font-size: 0.9rem; }
        .t-cafe-info-row span:first-child { flex-shrink: 0; font-size: 1.1rem; margin-top: 0.05rem; }
        .t-cafe-footer {
          background: #2c1d0e;
          color: rgba(255,255,255,0.55);
          padding: 2.5rem 0;
          text-align: center;
          font-size: 0.875rem;
        }
        .t-cafe-footer strong { color: rgba(255,255,255,0.85); }
      `}</style>

      <div className="template-cafe">
        <TemplateNav templateName="Café" />

        {/* Hero */}
        <section className="t-cafe-hero">
          <div className="t-cafe-hero-inner">
            <div className="t-cafe-hero-icon">☕</div>
            <div className="t-cafe-hero-badge">Specialty Coffee · Portland, OR</div>
            <h1>Morning Press Coffee</h1>
            <p>Slow down. Sip something good.</p>
          </div>
        </section>

        {/* Menu */}
        <section className="t-cafe-section">
          <div className="t-cafe-container">
            <p className="t-cafe-label">What We Brew</p>
            <h2 className="t-cafe-title">Our Menu</h2>
            <p className="t-cafe-sub">Every cup is crafted with single-origin beans, precision brewing, and a lot of love.</p>

            <div className="t-cafe-menu-category">
              <h3>Espresso Drinks</h3>
              <div className="t-cafe-menu-grid">
                {[
                  { name: 'Cortado', desc: 'Equal parts espresso and steamed milk, silky and balanced.', price: '$4.50' },
                  { name: 'Oat Flat White', desc: 'Double ristretto with velvety house oat milk. Our bestseller.', price: '$5.75' },
                  { name: 'Honey Lavender Latte', desc: 'Espresso with local wildflower honey and house-made lavender syrup.', price: '$6.25' },
                ].map((item) => (
                  <div key={item.name} className="t-cafe-menu-card">
                    <p className="t-cafe-menu-card-name">{item.name}</p>
                    <p className="t-cafe-menu-card-desc">{item.desc}</p>
                    <p className="t-cafe-menu-card-price">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="t-cafe-menu-category">
              <h3>Seasonal Drinks</h3>
              <div className="t-cafe-menu-grid">
                {[
                  { name: 'Pumpkin Spice Cold Brew', desc: 'Cold brew concentrate with pumpkin cream cold foam. Fall favorite.', price: '$6.75' },
                  { name: 'Matcha Mango Fizz', desc: 'Ceremonial matcha with mango purée and sparkling water.', price: '$6.50' },
                  { name: 'Brown Sugar Iced Latte', desc: 'Espresso over ice with brown sugar simple syrup and cinnamon.', price: '$5.75' },
                ].map((item) => (
                  <div key={item.name} className="t-cafe-menu-card">
                    <p className="t-cafe-menu-card-name">{item.name}</p>
                    <p className="t-cafe-menu-card-desc">{item.desc}</p>
                    <p className="t-cafe-menu-card-price">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="t-cafe-menu-category">
              <h3>Pastries</h3>
              <div className="t-cafe-menu-grid">
                {[
                  { name: 'Cardamom Morning Bun', desc: 'Flaky laminated dough, cardamom sugar, orange zest. Baked fresh daily.', price: '$4.25' },
                  { name: 'Almond Croissant', desc: 'Twice-baked with almond frangipane and toasted almond slivers.', price: '$4.75' },
                  { name: 'Blueberry Scone', desc: 'Buttermilk scone with wild blueberries and lemon glaze.', price: '$3.75' },
                ].map((item) => (
                  <div key={item.name} className="t-cafe-menu-card">
                    <p className="t-cafe-menu-card-name">{item.name}</p>
                    <p className="t-cafe-menu-card-desc">{item.desc}</p>
                    <p className="t-cafe-menu-card-price">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="t-cafe-section t-cafe-section--alt">
          <div className="t-cafe-container">
            <div className="t-cafe-story-grid">
              <div className="t-cafe-story-visual">🌱</div>
              <div className="t-cafe-story-text">
                <p className="t-cafe-label">Our Story</p>
                <h2 className="t-cafe-title">Coffee worth caring about</h2>
                <p>Morning Press started in 2018 with a simple belief: coffee should taste exactly like the place it came from. We travel to source our beans directly from farms in Ethiopia, Colombia, and Guatemala — paying above Fair Trade rates and building long-term relationships.</p>
                <p>Our head roaster, Diane, trained in Copenhagen and spent three years in the Yirgacheffe region learning how altitude and fermentation affect every cup. We roast in small batches twice a week in our back room — you can often smell it from the street.</p>
                <p>This is not a chain. Every person who works here loves coffee the way you love good music: deeply, personally, sometimes obsessively.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Specials */}
        <section className="t-cafe-section">
          <div className="t-cafe-container">
            <p className="t-cafe-label">This Week</p>
            <h2 className="t-cafe-title">Daily Specials</h2>
            <p className="t-cafe-sub">Rotating specials crafted around what's fresh and seasonal. Ask your barista for details.</p>
            <div className="t-cafe-specials-grid">
              {[
                { day: 'Monday & Wednesday', name: 'Tahini Latte', desc: 'Espresso blended with tahini paste, date syrup, and steamed oat milk. Nutty, rich, surprisingly comforting.', price: '$6.00' },
                { day: 'Tuesday & Thursday', name: 'Rose Cold Brew', desc: 'Our signature 18-hour cold brew infused with dried rose petals and a touch of cardamom.', price: '$6.50' },
                { day: 'Friday – Sunday', name: 'Weekend Brunch Latte', desc: 'Maple syrup, vanilla, espresso, and oat milk topped with cinnamon sugar and a house shortbread cookie.', price: '$7.25' },
              ].map((s) => (
                <div key={s.day} className="t-cafe-special-card">
                  <p className="t-cafe-special-day">{s.day}</p>
                  <p className="t-cafe-special-name">{s.name}</p>
                  <p className="t-cafe-special-desc">{s.desc}</p>
                  <p className="t-cafe-special-price">{s.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visit Us */}
        <section className="t-cafe-section t-cafe-section--alt">
          <div className="t-cafe-container">
            <p className="t-cafe-label">Find Us</p>
            <h2 className="t-cafe-title">Visit Us</h2>
            <div className="t-cafe-visit-grid">
              <div className="t-cafe-map-placeholder">📍 Map placeholder</div>
              <div>
                <div className="t-cafe-info-row"><span>📍</span><span>814 NW 23rd Ave, Portland, OR 97210</span></div>
                <div className="t-cafe-info-row"><span>🕗</span><span>Mon–Fri: 6:30 am – 6:00 pm<br />Sat–Sun: 7:00 am – 5:00 pm</span></div>
                <div className="t-cafe-info-row"><span>📞</span><span>(503) 448-7190</span></div>
                <div className="t-cafe-info-row"><span>✉️</span><span>hello@morningpress.coffee</span></div>
                <div className="t-cafe-info-row"><span>♿</span><span>Fully accessible. Dog-friendly patio.</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="t-cafe-footer">
          <div className="t-cafe-container">
            <p><strong>Morning Press Coffee</strong> · 814 NW 23rd Ave, Portland, OR</p>
            <p style={{ marginTop: '0.5rem' }}>© 2024 Morning Press Coffee. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
