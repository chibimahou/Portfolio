import TemplateNav from '../../components/TemplateNav'

export default function MedicalTemplate(): JSX.Element {
  return (
    <>
      <style>{`
        .template-medical {
          --primary: #1b6b8a;
          --primary-strong: #135070;
          --secondary: #4caf8a;
          --bg: #f0f9fc;
          --bg-alt: #e0f2f7;
          --surface: #ffffff;
          --text: #1a2d35;
          --muted: #4a6570;
          --line: #cce6ef;
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-sans);
        }
        .t-med-hero {
          background: linear-gradient(135deg, #0d3d52 0%, #1b6b8a 100%);
          color: #fff;
          padding: clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 6rem);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .t-med-hero::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 60px;
          background: var(--bg);
          clip-path: ellipse(55% 100% at 50% 100%);
        }
        .t-med-hero-inner { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; padding: 0 1.5rem; }
        .t-med-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3em 1em;
          background: rgba(76,175,138,0.2);
          border: 1px solid rgba(76,175,138,0.4);
          border-radius: 999px;
          color: #9ee8ca;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          margin-bottom: 1.25rem;
        }
        .t-med-hero h1 {
          font-family: var(--font-serif);
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 400;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .t-med-hero p { font-size: 1.1rem; color: rgba(255,255,255,0.72); margin-bottom: 2.5rem; line-height: 1.65; }
        .t-med-btn-primary {
          padding: 0.75em 2em;
          background: var(--secondary);
          color: #0d3d52;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: opacity 0.15s;
        }
        .t-med-btn-primary:hover { opacity: 0.88; }
        .t-med-section { padding: clamp(3rem, 6vw, 5rem) 0; background: var(--bg); }
        .t-med-section--alt { background: var(--bg-alt); }
        .t-med-container { width: var(--container); margin: 0 auto; }
        .t-med-label { font-size: 0.75rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--primary); font-weight: 700; margin-bottom: 0.5rem; }
        .t-med-title { font-family: var(--font-serif); font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 400; margin-bottom: 0.75rem; color: var(--text); }
        .t-med-sub { color: var(--muted); max-width: 520px; line-height: 1.65; margin-bottom: 2.5rem; }
        .t-med-services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }
        @media (max-width: 900px) { .t-med-services-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .t-med-services-grid { grid-template-columns: 1fr; } }
        .t-med-service-card {
          background: var(--surface);
          border-radius: var(--radius);
          padding: 1.75rem 1.5rem;
          box-shadow: 0 4px 16px rgba(27,107,138,0.1);
          border-top: 3px solid var(--secondary);
          text-align: center;
        }
        .t-med-service-icon { font-size: 2.4rem; margin-bottom: 0.75rem; }
        .t-med-service-name { font-weight: 700; font-size: 1rem; margin-bottom: 0.5rem; color: var(--text); }
        .t-med-service-desc { font-size: 0.85rem; color: var(--muted); line-height: 1.6; }
        .t-med-team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        @media (max-width: 768px) { .t-med-team-grid { grid-template-columns: 1fr; } }
        .t-med-doctor-card {
          background: var(--surface);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .t-med-doctor-photo {
          height: 200px;
          background: linear-gradient(135deg, #1b6b8a22, #4caf8a22);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
        }
        .t-med-doctor-body { padding: 1.4rem; }
        .t-med-doctor-name { font-size: 1.05rem; font-weight: 700; margin-bottom: 0.2rem; color: var(--text); }
        .t-med-doctor-specialty { font-size: 0.82rem; color: var(--primary); font-weight: 600; margin-bottom: 0.6rem; }
        .t-med-doctor-bio { font-size: 0.875rem; color: var(--muted); line-height: 1.55; }
        .t-med-testimonials-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        @media (max-width: 768px) { .t-med-testimonials-grid { grid-template-columns: 1fr; } }
        .t-med-testimonial {
          background: var(--surface);
          border-radius: var(--radius);
          padding: 1.75rem 2rem;
          box-shadow: 0 4px 16px rgba(27,107,138,0.08);
          border-left: 4px solid var(--secondary);
        }
        .t-med-testimonial-text { font-size: 0.95rem; color: var(--text); line-height: 1.7; margin-bottom: 1.25rem; font-style: italic; }
        .t-med-testimonial-name { font-weight: 700; font-size: 0.875rem; color: var(--primary); }
        .t-med-testimonial-detail { font-size: 0.8rem; color: var(--muted); }
        .t-med-appt-section {
          padding: clamp(3rem, 6vw, 5rem) 0;
          background: var(--primary);
          color: #fff;
        }
        .t-med-appt-inner {
          width: var(--container);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (max-width: 768px) { .t-med-appt-inner { grid-template-columns: 1fr; } }
        .t-med-appt-copy h2 { font-family: var(--font-serif); font-size: clamp(1.8rem, 3vw, 2.4rem); font-weight: 400; margin-bottom: 1rem; }
        .t-med-appt-copy p { color: rgba(255,255,255,0.65); line-height: 1.65; margin-bottom: 0.75rem; }
        .t-med-form { display: flex; flex-direction: column; gap: 1rem; }
        .t-med-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        @media (max-width: 560px) { .t-med-form-row { grid-template-columns: 1fr; } }
        .t-med-input {
          padding: 0.7em 1em;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.1);
          color: #fff;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          width: 100%;
        }
        .t-med-input::placeholder { color: rgba(255,255,255,0.45); }
        .t-med-footer {
          background: #0d3d52;
          color: rgba(255,255,255,0.5);
          padding: 2.5rem 0;
          text-align: center;
          font-size: 0.875rem;
        }
        .t-med-footer strong { color: rgba(255,255,255,0.85); }
      `}</style>

      <div className="template-medical">
        <TemplateNav templateName="Medical" />

        {/* Hero */}
        <section className="t-med-hero">
          <div className="t-med-hero-inner">
            <div className="t-med-hero-badge">🏥 Accepting New Patients</div>
            <h1>Clear Path Medical</h1>
            <p>Compassionate care for your whole family. From preventive wellness to specialized treatment, we're here when it matters most.</p>
            <button className="t-med-btn-primary">Book an Appointment</button>
          </div>
        </section>

        {/* Services */}
        <section className="t-med-section">
          <div className="t-med-container">
            <p className="t-med-label">What We Offer</p>
            <h2 className="t-med-title">Our Services</h2>
            <p className="t-med-sub">Comprehensive care across the full spectrum of family health needs, all in one welcoming practice.</p>
            <div className="t-med-services-grid">
              {[
                { icon: '🩺', name: 'Primary Care', desc: 'Annual physicals, preventive screenings, chronic disease management, and same-day sick visits.' },
                { icon: '👶', name: 'Pediatrics', desc: 'Well-child visits, vaccinations, developmental assessments, and urgent care for children of all ages.' },
                { icon: '💜', name: "Women's Health", desc: 'Prenatal care, GYN services, menopause management, and comprehensive reproductive wellness.' },
                { icon: '🧠', name: 'Mental Health', desc: 'Counseling, therapy referrals, medication management, and integrated behavioral health support.' },
              ].map((s) => (
                <div key={s.name} className="t-med-service-card">
                  <div className="t-med-service-icon">{s.icon}</div>
                  <p className="t-med-service-name">{s.name}</p>
                  <p className="t-med-service-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="t-med-section t-med-section--alt">
          <div className="t-med-container">
            <p className="t-med-label">Our Physicians</p>
            <h2 className="t-med-title">Meet the Team</h2>
            <p className="t-med-sub">Board-certified physicians who treat you like a person, not a chart number.</p>
            <div className="t-med-team-grid">
              {[
                { emoji: '👩‍⚕️', name: 'Dr. Naomi Chen, MD', specialty: 'Family Medicine & Primary Care', bio: 'Dr. Chen earned her MD from UCSF and completed her residency at Stanford. She has a particular interest in preventive care and chronic disease management across all ages.' },
                { emoji: '👨‍⚕️', name: 'Dr. Marcus Webb, DO', specialty: 'Pediatrics', bio: 'Dr. Webb trained at Boston Children\'s Hospital and has 18 years of experience. Patients and parents alike appreciate his calm demeanor and thorough approach.' },
                { emoji: '👩‍⚕️', name: 'Dr. Aisha Patel, MD', specialty: "Women's Health", bio: 'Dr. Patel specializes in obstetrics and gynecology with board certification in reproductive endocrinology. She is an advocate for patient-centered, evidence-based care.' },
              ].map((d) => (
                <div key={d.name} className="t-med-doctor-card">
                  <div className="t-med-doctor-photo">{d.emoji}</div>
                  <div className="t-med-doctor-body">
                    <p className="t-med-doctor-name">{d.name}</p>
                    <p className="t-med-doctor-specialty">{d.specialty}</p>
                    <p className="t-med-doctor-bio">{d.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="t-med-section">
          <div className="t-med-container">
            <p className="t-med-label">Patient Stories</p>
            <h2 className="t-med-title">What Patients Say</h2>
            <div className="t-med-testimonials-grid">
              <div className="t-med-testimonial">
                <p className="t-med-testimonial-text">"Dr. Chen has been our family doctor for six years. She remembers details from previous visits, she listens carefully, and she never makes you feel rushed. I drive 40 minutes to keep seeing her. Totally worth it."</p>
                <p className="t-med-testimonial-name">Laura M.</p>
                <p className="t-med-testimonial-detail">Patient since 2018</p>
              </div>
              <div className="t-med-testimonial">
                <p className="t-med-testimonial-text">"Bringing my toddler to Dr. Webb is a completely different experience than other pediatricians we've tried. He's patient, explains everything clearly, and my son actually doesn't cry when we leave. I can't recommend him enough."</p>
                <p className="t-med-testimonial-name">Jordan T.</p>
                <p className="t-med-testimonial-detail">Patient since 2021</p>
              </div>
            </div>
          </div>
        </section>

        {/* Book Appointment */}
        <section className="t-med-appt-section">
          <div className="t-med-appt-inner">
            <div className="t-med-appt-copy">
              <h2>Book an Appointment</h2>
              <p>New and returning patients can request appointments online. We'll confirm within one business day.</p>
              <p>Same-day appointments available for urgent needs. Call us at (415) 552-8800.</p>
            </div>
            <form className="t-med-form" onSubmit={(e) => e.preventDefault()}>
              <div className="t-med-form-row">
                <input className="t-med-input" type="text" placeholder="Full name" aria-label="Full name" />
                <input className="t-med-input" type="tel" placeholder="Phone number" aria-label="Phone number" />
              </div>
              <input className="t-med-input" type="date" aria-label="Preferred date" />
              <select className="t-med-input" aria-label="Service type">
                <option value="">Select a service</option>
                <option>Primary Care</option>
                <option>Pediatrics</option>
                <option>Women's Health</option>
                <option>Mental Health</option>
              </select>
              <button className="t-med-btn-primary" type="submit" style={{ background: 'var(--secondary)', color: '#0d3d52', width: '100%', padding: '0.8em' }}>
                Submit Request
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="t-med-footer">
          <div className="t-med-container">
            <p><strong>Clear Path Medical</strong> · 2201 Market St, Suite 300, San Francisco, CA 94114</p>
            <p style={{ marginTop: '0.5rem' }}>© 2024 Clear Path Medical Group. All rights reserved. Not a substitute for emergency care — call 911 in an emergency.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
