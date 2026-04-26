import TemplateNav from '../../components/TemplateNav'

export default function HotelTemplate(): JSX.Element {
  return (
    <>
      <style>{`
        .template-hotel {
          --primary: #1a3a5c;
          --primary-strong: #122a45;
          --secondary: #c9a84c;
          --bg: #f5f7fa;
          --bg-alt: #e8edf3;
          --surface: #ffffff;
          --text: #1a2233;
          --muted: #5a6a7a;
          --line: #d4dbe4;
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-sans);
        }
        .t-hotel-hero {
          min-height: 90vh;
          background: linear-gradient(160deg, #0d1f33 0%, #1a3a5c 60%, #0f2a45 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
          padding: 4rem 1.5rem;
          position: relative;
        }
        .t-hotel-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 70%, rgba(201,168,76,0.2) 0%, transparent 60%);
          pointer-events: none;
        }
        .t-hotel-hero-inner { position: relative; z-index: 1; max-width: 680px; }
        .t-hotel-star-row { color: #c9a84c; font-size: 1.1rem; letter-spacing: 0.15em; margin-bottom: 1.25rem; }
        .t-hotel-hero h1 {
          font-family: var(--font-serif);
          font-size: clamp(2.6rem, 6vw, 4.5rem);
          font-weight: 400;
          margin-bottom: 1rem;
        }
        .t-hotel-hero p { font-size: 1.1rem; color: rgba(255,255,255,0.7); margin-bottom: 2.5rem; }
        .t-hotel-btn-row { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .t-hotel-btn-gold {
          padding: 0.75em 2em;
          background: #c9a84c;
          color: #0d1f33;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: opacity 0.15s;
        }
        .t-hotel-btn-gold:hover { opacity: 0.88; }
        .t-hotel-btn-outline {
          padding: 0.75em 2em;
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255,255,255,0.5);
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-sans);
        }
        .t-hotel-btn-outline:hover { border-color: #fff; }
        .t-hotel-section { padding: clamp(3rem, 6vw, 5rem) 0; background: var(--bg); }
        .t-hotel-section--alt { background: var(--bg-alt); }
        .t-hotel-container { width: var(--container); margin: 0 auto; }
        .t-hotel-label { font-size: 0.75rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--secondary); font-weight: 700; margin-bottom: 0.5rem; }
        .t-hotel-title { font-family: var(--font-serif); font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 400; margin-bottom: 0.75rem; color: var(--text); }
        .t-hotel-sub { color: var(--muted); max-width: 520px; line-height: 1.65; margin-bottom: 2.5rem; }
        .t-hotel-rooms-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        @media (max-width: 900px) { .t-hotel-rooms-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .t-hotel-rooms-grid { grid-template-columns: 1fr; } }
        .t-hotel-room-card {
          background: var(--surface);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          overflow: hidden;
        }
        .t-hotel-room-img {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
        }
        .t-hotel-room-body { padding: 1.4rem; }
        .t-hotel-room-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text); }
        .t-hotel-room-price { font-size: 0.95rem; color: var(--secondary); font-weight: 700; margin-bottom: 1rem; }
        .t-hotel-room-amenities { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .t-hotel-room-amenity {
          font-size: 0.75rem;
          background: var(--bg-alt);
          color: var(--muted);
          border-radius: 6px;
          padding: 0.25em 0.6em;
          font-weight: 500;
        }
        .t-hotel-amenities-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 1.25rem; }
        @media (max-width: 768px) { .t-hotel-amenities-grid { grid-template-columns: repeat(3, 1fr); } }
        .t-hotel-amenity-item {
          background: var(--surface);
          border-radius: var(--radius);
          padding: 1.5rem 1rem;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        }
        .t-hotel-amenity-icon { font-size: 2rem; margin-bottom: 0.6rem; }
        .t-hotel-amenity-name { font-size: 0.82rem; font-weight: 600; color: var(--text); }
        .t-hotel-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
        @media (max-width: 768px) { .t-hotel-about-grid { grid-template-columns: 1fr; } }
        .t-hotel-about-img {
          height: 400px;
          background: linear-gradient(135deg, #1a3a5c22, #c9a84c22);
          border-radius: var(--radius);
          border: 2px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
        }
        .t-hotel-about-text p { color: var(--muted); line-height: 1.75; margin-bottom: 1rem; font-size: 0.95rem; }
        .t-hotel-book-section {
          padding: clamp(3rem, 6vw, 5rem) 0;
          background: var(--primary);
          color: #fff;
        }
        .t-hotel-book-inner { width: var(--container); margin: 0 auto; }
        .t-hotel-book-inner h2 { font-family: var(--font-serif); font-size: clamp(1.8rem, 3vw, 2.4rem); font-weight: 400; margin-bottom: 0.5rem; }
        .t-hotel-book-inner p { color: rgba(255,255,255,0.65); margin-bottom: 2rem; }
        .t-hotel-book-form {
          display: grid;
          grid-template-columns: repeat(4, 1fr) auto;
          gap: 1rem;
          align-items: end;
        }
        @media (max-width: 900px) { .t-hotel-book-form { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .t-hotel-book-form { grid-template-columns: 1fr; } }
        .t-hotel-book-field { display: flex; flex-direction: column; gap: 0.4rem; }
        .t-hotel-book-field label { font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 0.08em; }
        .t-hotel-book-input {
          padding: 0.7em 1em;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.1);
          color: #fff;
          font-family: var(--font-sans);
          font-size: 0.9rem;
        }
        .t-hotel-book-input::placeholder { color: rgba(255,255,255,0.4); }
        .t-hotel-footer {
          background: #0d1f33;
          color: rgba(255,255,255,0.5);
          padding: 2.5rem 0;
          text-align: center;
          font-size: 0.875rem;
        }
        .t-hotel-footer strong { color: rgba(255,255,255,0.85); }
      `}</style>

      <div className="template-hotel">
        <TemplateNav templateName="Hotel" />

        {/* Hero */}
        <section className="t-hotel-hero">
          <div className="t-hotel-hero-inner">
            <div className="t-hotel-star-row">★ ★ ★ ★ ★</div>
            <h1>The Harrington Hotel</h1>
            <p>Where luxury meets comfort. A storied retreat in the heart of the city, designed for those who appreciate the finest things.</p>
            <div className="t-hotel-btn-row">
              <button className="t-hotel-btn-gold">Check Availability</button>
              <button className="t-hotel-btn-outline">Explore Rooms</button>
            </div>
          </div>
        </section>

        {/* Rooms */}
        <section className="t-hotel-section">
          <div className="t-hotel-container">
            <p className="t-hotel-label">Accommodations</p>
            <h2 className="t-hotel-title">Our Rooms &amp; Suites</h2>
            <p className="t-hotel-sub">Every room is designed as a sanctuary — with handcrafted furnishings, premium linens, and views worth waking up for.</p>
            <div className="t-hotel-rooms-grid">
              {[
                { emoji: '🛏️', name: 'Classic Room', price: 'From $289 / night', amenities: ['King or Twin beds', 'City view', '420 sq ft', 'Free Wi-Fi', 'Rain shower', 'Mini bar'] },
                { emoji: '🌟', name: 'Deluxe Room', price: 'From $429 / night', amenities: ['King bed', 'Park view', '560 sq ft', 'Sitting area', 'Soaking tub', 'Nespresso'] },
                { emoji: '👑', name: 'Signature Suite', price: 'From $849 / night', amenities: ['King bed', 'Panoramic view', '920 sq ft', 'Butler service', 'Private terrace', 'Dining area'] },
              ].map((room) => (
                <div key={room.name} className="t-hotel-room-card">
                  <div className="t-hotel-room-img" style={{ background: 'var(--bg-alt)' }}>{room.emoji}</div>
                  <div className="t-hotel-room-body">
                    <p className="t-hotel-room-name">{room.name}</p>
                    <p className="t-hotel-room-price">{room.price}</p>
                    <div className="t-hotel-room-amenities">
                      {room.amenities.map((a) => <span key={a} className="t-hotel-room-amenity">{a}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="t-hotel-section t-hotel-section--alt">
          <div className="t-hotel-container">
            <p className="t-hotel-label">Facilities</p>
            <h2 className="t-hotel-title">World-Class Amenities</h2>
            <p className="t-hotel-sub" style={{ marginBottom: '2.5rem' }}>Everything you need for an exceptional stay, all under one roof.</p>
            <div className="t-hotel-amenities-grid">
              {[
                { icon: '🏊', name: 'Rooftop Pool' },
                { icon: '💆', name: 'Spa & Wellness' },
                { icon: '🍽️', name: 'Fine Dining' },
                { icon: '🏋️', name: 'Fitness Center' },
                { icon: '🛎️', name: '24h Concierge' },
                { icon: '🚗', name: 'Valet Parking' },
              ].map((a) => (
                <div key={a.name} className="t-hotel-amenity-item">
                  <div className="t-hotel-amenity-icon">{a.icon}</div>
                  <p className="t-hotel-amenity-name">{a.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="t-hotel-section">
          <div className="t-hotel-container">
            <div className="t-hotel-about-grid">
              <div className="t-hotel-about-img">🏛️</div>
              <div className="t-hotel-about-text">
                <p className="t-hotel-label">Our Heritage</p>
                <h2 className="t-hotel-title">A Legacy of Excellence</h2>
                <p>The Harrington opened its doors in 1924, welcoming presidents, artists, and royalty through its marble lobby. For a century, we have set the standard for gracious hospitality in this city.</p>
                <p>In 2019, the hotel completed a $40 million restoration — preserving every original architectural detail while introducing the most modern comforts. The result is a seamless harmony of past and present.</p>
                <p>Our team of 240 dedicated staff members share a single mission: to make every guest feel like the most important person in the room. It's not a policy. It's who we are.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Book Now */}
        <section className="t-hotel-book-section">
          <div className="t-hotel-book-inner">
            <h2>Reserve Your Stay</h2>
            <p>Book directly for the best rates and exclusive member benefits.</p>
            <form className="t-hotel-book-form" onSubmit={(e) => e.preventDefault()}>
              <div className="t-hotel-book-field">
                <label htmlFor="checkin">Check-in</label>
                <input id="checkin" className="t-hotel-book-input" type="date" aria-label="Check-in date" />
              </div>
              <div className="t-hotel-book-field">
                <label htmlFor="checkout">Check-out</label>
                <input id="checkout" className="t-hotel-book-input" type="date" aria-label="Check-out date" />
              </div>
              <div className="t-hotel-book-field">
                <label htmlFor="guests">Guests</label>
                <select id="guests" className="t-hotel-book-input" aria-label="Number of guests">
                  {[1, 2, 3, 4].map((n) => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                </select>
              </div>
              <div className="t-hotel-book-field">
                <label htmlFor="room-type">Room Type</label>
                <select id="room-type" className="t-hotel-book-input" aria-label="Room type">
                  <option>Any</option>
                  <option>Classic Room</option>
                  <option>Deluxe Room</option>
                  <option>Signature Suite</option>
                </select>
              </div>
              <button className="t-hotel-btn-gold" type="submit" style={{ whiteSpace: 'nowrap', alignSelf: 'flex-end' }}>
                Check Availability
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="t-hotel-footer">
          <div className="t-hotel-container">
            <p><strong>The Harrington Hotel</strong> · 1 Harrington Plaza, New York, NY 10019</p>
            <p style={{ marginTop: '0.5rem' }}>© 2024 The Harrington Hotel. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
