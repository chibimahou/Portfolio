import TemplateNav from '../../components/TemplateNav'

export default function FitnessTemplate(): JSX.Element {
  return (
    <>
      <style>{`
        .template-fitness {
          --primary: #e63946;
          --primary-strong: #c1121f;
          --secondary: #f0c040;
          --bg: #0d0d0d;
          --bg-alt: #141414;
          --surface: #1a1a1a;
          --text: #f0f0f0;
          --muted: #aaaaaa;
          --line: #2a2a2a;
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-sans);
          min-height: 100vh;
        }
        .t-fit-hero {
          min-height: 90vh;
          background: linear-gradient(160deg, #050505 0%, #1a0005 50%, #2a0508 100%);
          display: flex;
          align-items: center;
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
        }
        .t-fit-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 50%, rgba(230,57,70,0.3) 0%, transparent 60%);
        }
        .t-fit-hero-inner { position: relative; z-index: 1; width: var(--container); margin: 0 auto; }
        .t-fit-hero-label {
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--primary);
          font-weight: 700;
          margin-bottom: 1.25rem;
        }
        .t-fit-hero h1 {
          font-family: var(--font-sans);
          font-size: clamp(3.5rem, 9vw, 7rem);
          font-weight: 700;
          line-height: 0.95;
          letter-spacing: -0.02em;
          margin-bottom: 0.75rem;
          color: #fff;
        }
        .t-fit-hero h1 span { color: var(--primary); }
        .t-fit-hero p { font-size: 1.1rem; color: var(--muted); margin-bottom: 2.5rem; max-width: 480px; line-height: 1.6; }
        .t-fit-btn-row { display: flex; gap: 1rem; flex-wrap: wrap; }
        .t-fit-btn-primary {
          padding: 0.8em 2em;
          background: var(--primary);
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: opacity 0.15s;
          letter-spacing: 0.03em;
        }
        .t-fit-btn-primary:hover { opacity: 0.88; }
        .t-fit-btn-outline {
          padding: 0.8em 2em;
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255,255,255,0.25);
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-sans);
        }
        .t-fit-btn-outline:hover { border-color: rgba(255,255,255,0.6); }
        .t-fit-section { padding: clamp(3rem, 6vw, 5rem) 0; background: var(--bg); }
        .t-fit-section--alt { background: var(--bg-alt); }
        .t-fit-container { width: var(--container); margin: 0 auto; }
        .t-fit-label { font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--primary); font-weight: 700; margin-bottom: 0.5rem; }
        .t-fit-title { font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 700; margin-bottom: 0.75rem; color: var(--text); letter-spacing: -0.02em; }
        .t-fit-sub { color: var(--muted); max-width: 520px; line-height: 1.65; margin-bottom: 2.5rem; }
        .t-fit-classes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }
        @media (max-width: 900px) { .t-fit-classes-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .t-fit-classes-grid { grid-template-columns: 1fr; } }
        .t-fit-class-card {
          background: var(--surface);
          border-radius: var(--radius);
          padding: 1.5rem;
          border: 1px solid var(--line);
          border-left: 3px solid var(--primary);
        }
        .t-fit-class-icon { font-size: 2rem; margin-bottom: 0.75rem; }
        .t-fit-class-name { font-weight: 700; font-size: 1rem; margin-bottom: 0.4rem; color: var(--text); }
        .t-fit-class-time { font-size: 0.8rem; color: var(--secondary); font-weight: 600; margin-bottom: 0.5rem; }
        .t-fit-class-instructor { font-size: 0.8rem; color: var(--muted); }
        .t-fit-trainers-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        @media (max-width: 768px) { .t-fit-trainers-grid { grid-template-columns: 1fr; } }
        .t-fit-trainer-card {
          background: var(--surface);
          border-radius: var(--radius);
          overflow: hidden;
          border: 1px solid var(--line);
        }
        .t-fit-trainer-photo {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          background: linear-gradient(135deg, #e6394611, #f0c04011);
        }
        .t-fit-trainer-body { padding: 1.4rem; }
        .t-fit-trainer-name { font-weight: 700; font-size: 1.05rem; margin-bottom: 0.2rem; color: var(--text); }
        .t-fit-trainer-role { font-size: 0.8rem; color: var(--primary); font-weight: 600; margin-bottom: 0.6rem; text-transform: uppercase; letter-spacing: 0.07em; }
        .t-fit-trainer-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .t-fit-trainer-tag {
          font-size: 0.72rem;
          background: rgba(230,57,70,0.12);
          color: var(--primary);
          border-radius: 6px;
          padding: 0.2em 0.6em;
          font-weight: 600;
        }
        .t-fit-plans-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        @media (max-width: 768px) { .t-fit-plans-grid { grid-template-columns: 1fr; } }
        .t-fit-plan-card {
          background: var(--surface);
          border-radius: var(--radius);
          padding: 2rem 1.75rem;
          border: 1px solid var(--line);
          display: flex;
          flex-direction: column;
        }
        .t-fit-plan-card--featured {
          border-color: var(--primary);
          position: relative;
        }
        .t-fit-plan-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--primary);
          color: #fff;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.25em 1em;
          border-radius: 999px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .t-fit-plan-name { font-weight: 700; font-size: 1rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.75rem; }
        .t-fit-plan-price { font-size: 2.4rem; font-weight: 700; color: var(--text); margin-bottom: 0.25rem; }
        .t-fit-plan-price span { font-size: 1rem; font-weight: 400; color: var(--muted); }
        .t-fit-plan-divider { border: none; border-top: 1px solid var(--line); margin: 1.25rem 0; }
        .t-fit-plan-features { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; flex: 1; margin-bottom: 1.5rem; }
        .t-fit-plan-feature { font-size: 0.875rem; color: var(--muted); display: flex; align-items: center; gap: 0.5rem; }
        .t-fit-plan-feature::before { content: '✓'; color: var(--secondary); font-weight: 700; }
        .t-fit-cta-section {
          padding: clamp(4rem, 8vw, 6rem) 0;
          background: linear-gradient(135deg, #1a0005 0%, #2a0508 100%);
          text-align: center;
        }
        .t-fit-cta-inner { max-width: 600px; margin: 0 auto; padding: 0 1.5rem; }
        .t-fit-cta-inner h2 { font-size: clamp(2rem, 5vw, 3rem); font-weight: 700; color: #fff; margin-bottom: 1rem; letter-spacing: -0.02em; }
        .t-fit-cta-inner p { color: var(--muted); margin-bottom: 2rem; }
        .t-fit-footer {
          background: #050505;
          color: rgba(255,255,255,0.35);
          padding: 2.5rem 0;
          text-align: center;
          font-size: 0.875rem;
          border-top: 1px solid var(--line);
        }
        .t-fit-footer strong { color: rgba(255,255,255,0.7); }
      `}</style>

      <div className="template-fitness">
        <TemplateNav templateName="Fitness" />

        {/* Hero */}
        <section className="t-fit-hero">
          <div className="t-fit-hero-inner">
            <p className="t-fit-hero-label">Portland's Premier Training Facility</p>
            <h1>IRON<br /><span>FORGE</span><br />GYM</h1>
            <p>Build it. Break limits. Transform not just your body, but your entire approach to what's possible.</p>
            <div className="t-fit-btn-row">
              <button className="t-fit-btn-primary">Start Free Trial</button>
              <button className="t-fit-btn-outline">View Memberships</button>
            </div>
          </div>
        </section>

        {/* Classes */}
        <section className="t-fit-section t-fit-section--alt">
          <div className="t-fit-container">
            <p className="t-fit-label">Schedule</p>
            <h2 className="t-fit-title">Classes This Week</h2>
            <p className="t-fit-sub">High-intensity, skill-focused, and results-driven classes led by certified coaches.</p>
            <div className="t-fit-classes-grid">
              {[
                { icon: '⚡', name: 'HIIT Blast', time: 'Mon/Wed/Fri — 6:00 AM', instructor: 'Coach Jordan' },
                { icon: '🏋️', name: 'Power Strength', time: 'Tue/Thu — 7:00 AM', instructor: 'Coach Maya' },
                { icon: '🧘', name: 'Yoga Flow', time: 'Daily — 8:00 AM', instructor: 'Coach Priya' },
                { icon: '🚴', name: 'Cycling Sprint', time: 'Mon/Wed — 5:30 PM', instructor: 'Coach Dario' },
              ].map((c) => (
                <div key={c.name} className="t-fit-class-card">
                  <div className="t-fit-class-icon">{c.icon}</div>
                  <p className="t-fit-class-name">{c.name}</p>
                  <p className="t-fit-class-time">{c.time}</p>
                  <p className="t-fit-class-instructor">{c.instructor}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trainers */}
        <section className="t-fit-section">
          <div className="t-fit-container">
            <p className="t-fit-label">Our Coaches</p>
            <h2 className="t-fit-title">Meet the Team</h2>
            <p className="t-fit-sub">Certified, experienced, and 100% invested in your progress.</p>
            <div className="t-fit-trainers-grid">
              {[
                { emoji: '💪', name: 'Jordan Reyes', role: 'Head Coach · HIIT & Conditioning', tags: ['NASM-CPT', 'CrossFit L2', 'Nutrition Coach'] },
                { emoji: '🏆', name: 'Maya Osei', role: 'Strength & Powerlifting Coach', tags: ['CSCS', 'USA Powerlifting', 'Sports Science BS'] },
                { emoji: '🌿', name: 'Priya Nair', role: 'Yoga & Mobility Specialist', tags: ['RYT-500', 'Corrective Exercise', 'Breathwork'] },
              ].map((t) => (
                <div key={t.name} className="t-fit-trainer-card">
                  <div className="t-fit-trainer-photo">{t.emoji}</div>
                  <div className="t-fit-trainer-body">
                    <p className="t-fit-trainer-name">{t.name}</p>
                    <p className="t-fit-trainer-role">{t.role}</p>
                    <div className="t-fit-trainer-tags">
                      {t.tags.map((tag) => <span key={tag} className="t-fit-trainer-tag">{tag}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="t-fit-section t-fit-section--alt">
          <div className="t-fit-container">
            <p className="t-fit-label">Memberships</p>
            <h2 className="t-fit-title">Choose Your Plan</h2>
            <p className="t-fit-sub">No contracts. Cancel anytime. Every plan includes our 7-day free trial.</p>
            <div className="t-fit-plans-grid">
              {[
                {
                  name: 'Basic',
                  price: '$39',
                  featured: false,
                  features: ['Gym floor access', 'Locker room', '2 group classes/month', 'App access', 'Community forum'],
                },
                {
                  name: 'Pro',
                  price: '$79',
                  featured: true,
                  features: ['Everything in Basic', 'Unlimited group classes', '1 personal training session/mo', 'Nutrition tracking app', 'Priority booking'],
                },
                {
                  name: 'Elite',
                  price: '$149',
                  featured: false,
                  features: ['Everything in Pro', '4 personal sessions/mo', 'Custom meal plan', 'Recovery suite access', 'Dedicated coach check-ins'],
                },
              ].map((plan) => (
                <div key={plan.name} className={`t-fit-plan-card${plan.featured ? ' t-fit-plan-card--featured' : ''}`}>
                  {plan.featured && <div className="t-fit-plan-badge">Most Popular</div>}
                  <p className="t-fit-plan-name">{plan.name}</p>
                  <p className="t-fit-plan-price">{plan.price}<span>/mo</span></p>
                  <hr className="t-fit-plan-divider" />
                  <ul className="t-fit-plan-features">
                    {plan.features.map((f) => <li key={f} className="t-fit-plan-feature">{f}</li>)}
                  </ul>
                  <button className="t-fit-btn-primary" style={{ width: '100%' }}>Get Started</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="t-fit-cta-section">
          <div className="t-fit-cta-inner">
            <h2>Start your 7-day free trial</h2>
            <p>No commitment. No credit card required. Just show up and we'll handle the rest.</p>
            <button className="t-fit-btn-primary" style={{ fontSize: '1.05rem', padding: '0.85em 2.5em' }}>
              Claim Free Trial
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="t-fit-footer">
          <div className="t-fit-container">
            <p><strong>Iron Forge Gym</strong> · 805 SE Burnside St, Portland, OR 97214</p>
            <p style={{ marginTop: '0.5rem' }}>© 2024 Iron Forge Gym. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
