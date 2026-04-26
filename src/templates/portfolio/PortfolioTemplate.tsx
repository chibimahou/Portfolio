import TemplateNav from '../../components/TemplateNav'

export default function PortfolioTemplate(): JSX.Element {
  return (
    <>
      <style>{`
        .template-portfolio {
          --primary: #6c63ff;
          --primary-strong: #574fd6;
          --secondary: #ff6584;
          --bg: #09090b;
          --bg-alt: #111113;
          --surface: #18181b;
          --text: #fafafa;
          --muted: #a1a1aa;
          --line: #27272a;
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-sans);
          min-height: 100vh;
        }
        .t-port-hero {
          min-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 1.5rem;
          position: relative;
        }
        .t-port-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(ellipse at center, rgba(108,99,255,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .t-port-hero-inner { position: relative; z-index: 1; max-width: 640px; }
        .t-port-availability {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.3em 1em;
          background: rgba(108,99,255,0.12);
          border: 1px solid rgba(108,99,255,0.3);
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
          color: #a89cff;
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
        }
        .t-port-availability::before { content: '●'; color: #4cff9a; font-size: 0.5rem; }
        .t-port-hero h1 { font-size: clamp(2.4rem, 6vw, 4rem); font-weight: 700; margin-bottom: 0.25rem; letter-spacing: -0.03em; }
        .t-port-hero h1 span { color: var(--primary); }
        .t-port-hero-sub { font-size: 1.15rem; color: var(--muted); margin-bottom: 1.75rem; }
        .t-port-hero p { font-size: 0.95rem; color: var(--muted); line-height: 1.7; margin-bottom: 2rem; max-width: 500px; }
        .t-port-social-row { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .t-port-social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.45em 1em;
          border: 1px solid var(--line);
          border-radius: 8px;
          color: var(--muted);
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 500;
          transition: border-color 0.15s, color 0.15s;
        }
        .t-port-social-link:hover { border-color: var(--primary); color: var(--primary); }
        .t-port-section { padding: clamp(3rem, 6vw, 5rem) 0; background: var(--bg); }
        .t-port-section--alt { background: var(--bg-alt); }
        .t-port-container { width: var(--container); margin: 0 auto; }
        .t-port-label { font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--primary); font-weight: 700; margin-bottom: 0.5rem; }
        .t-port-title { font-size: clamp(1.7rem, 3vw, 2.4rem); font-weight: 700; margin-bottom: 0.75rem; letter-spacing: -0.02em; }
        .t-port-sub { color: var(--muted); max-width: 500px; line-height: 1.65; margin-bottom: 2.5rem; }
        .t-port-about-grid { display: grid; grid-template-columns: 1fr 1.6fr; gap: 4rem; align-items: start; }
        @media (max-width: 768px) { .t-port-about-grid { grid-template-columns: 1fr; gap: 2rem; } }
        .t-port-about-avatar {
          width: 100%;
          aspect-ratio: 1;
          max-width: 280px;
          border-radius: var(--radius);
          background: linear-gradient(135deg, rgba(108,99,255,0.2), rgba(255,101,132,0.15));
          border: 1px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
        }
        .t-port-about-bio { color: var(--muted); line-height: 1.75; font-size: 0.95rem; margin-bottom: 1.5rem; }
        .t-port-skills { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .t-port-skill {
          padding: 0.3em 0.8em;
          border-radius: 6px;
          font-size: 0.78rem;
          font-weight: 600;
          background: rgba(108,99,255,0.12);
          color: #a89cff;
          border: 1px solid rgba(108,99,255,0.2);
        }
        .t-port-projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        @media (max-width: 768px) { .t-port-projects-grid { grid-template-columns: 1fr; } }
        .t-port-project-card {
          background: var(--surface);
          border-radius: var(--radius);
          padding: 1.75rem;
          border: 1px solid var(--line);
          transition: border-color 0.2s;
          display: flex;
          flex-direction: column;
        }
        .t-port-project-card:hover { border-color: var(--primary); }
        .t-port-project-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 0.75rem; }
        .t-port-project-icon { font-size: 2rem; }
        .t-port-project-links { display: flex; gap: 0.5rem; }
        .t-port-project-link {
          font-size: 0.75rem;
          padding: 0.25em 0.65em;
          border: 1px solid var(--line);
          border-radius: 6px;
          color: var(--muted);
          text-decoration: none;
          transition: border-color 0.15s, color 0.15s;
        }
        .t-port-project-link:hover { border-color: var(--primary); color: var(--primary); }
        .t-port-project-name { font-weight: 700; font-size: 1.05rem; margin-bottom: 0.5rem; }
        .t-port-project-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.6; flex: 1; margin-bottom: 1rem; }
        .t-port-tech-stack { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .t-port-tech { font-size: 0.72rem; background: rgba(255,255,255,0.05); color: var(--muted); border-radius: 4px; padding: 0.2em 0.55em; border: 1px solid var(--line); }
        .t-port-timeline { display: flex; flex-direction: column; gap: 0; }
        .t-port-timeline-item {
          display: grid;
          grid-template-columns: 140px 1px 1fr;
          gap: 0 1.5rem;
          padding-bottom: 2rem;
        }
        .t-port-timeline-item:last-child { padding-bottom: 0; }
        .t-port-timeline-date { font-size: 0.8rem; color: var(--muted); font-weight: 500; padding-top: 0.15rem; text-align: right; }
        .t-port-timeline-line { background: var(--line); position: relative; }
        .t-port-timeline-line::before {
          content: '';
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--primary);
          border: 2px solid var(--bg);
        }
        .t-port-timeline-content { padding-bottom: 0.5rem; }
        .t-port-timeline-role { font-weight: 700; font-size: 1rem; margin-bottom: 0.2rem; }
        .t-port-timeline-company { font-size: 0.82rem; color: var(--primary); font-weight: 600; margin-bottom: 0.5rem; }
        .t-port-timeline-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.6; }
        .t-port-contact-form { max-width: 560px; display: flex; flex-direction: column; gap: 1rem; }
        .t-port-input {
          padding: 0.75em 1em;
          border-radius: 8px;
          border: 1px solid var(--line);
          background: var(--surface);
          color: var(--text);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          width: 100%;
          transition: border-color 0.15s;
        }
        .t-port-input:focus { outline: none; border-color: var(--primary); }
        .t-port-input::placeholder { color: var(--muted); }
        .t-port-textarea { min-height: 120px; resize: vertical; }
        .t-port-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.7em 2em;
          background: var(--primary);
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: opacity 0.15s;
        }
        .t-port-btn-primary:hover { opacity: 0.88; }
        .t-port-email-link { color: var(--primary); text-decoration: none; font-weight: 600; }
        .t-port-footer {
          background: var(--bg-alt);
          color: var(--muted);
          padding: 2rem 0;
          text-align: center;
          font-size: 0.8rem;
          border-top: 1px solid var(--line);
        }
      `}</style>

      <div className="template-portfolio">
        <TemplateNav templateName="Portfolio" />

        {/* Hero */}
        <section className="t-port-hero">
          <div className="t-port-hero-inner">
            <div className="t-port-availability">Available for projects · Q2 2024</div>
            <h1>Alex <span>Chen</span></h1>
            <p className="t-port-hero-sub">Designer &amp; Developer</p>
            <p>I build thoughtful digital products — from design systems and interactive interfaces to full-stack web applications. I care deeply about the details that make software feel alive.</p>
            <div className="t-port-social-row">
              <a href="#" className="t-port-social-link">🐙 GitHub</a>
              <a href="#" className="t-port-social-link">💼 LinkedIn</a>
              <a href="#" className="t-port-social-link">🐦 Twitter</a>
              <a href="#" className="t-port-social-link">📄 Resume</a>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="t-port-section t-port-section--alt">
          <div className="t-port-container">
            <div className="t-port-about-grid">
              <div className="t-port-about-avatar">👨‍💻</div>
              <div>
                <p className="t-port-label">About Me</p>
                <h2 className="t-port-title">A little about me</h2>
                <p className="t-port-about-bio">I'm a full-stack designer and engineer with 7 years of experience building products that sit at the intersection of beautiful and functional. I got my start in graphic design, transitioned into UX, and eventually learned to code because I wanted to ship my own ideas.</p>
                <p className="t-port-about-bio">I've worked with early-stage startups, design agencies, and in-house engineering teams. My sweet spot is the early phase of a product — where decisions matter most and there's room to think clearly.</p>
                <p className="t-port-label" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>Skills</p>
                <div className="t-port-skills">
                  {['React', 'TypeScript', 'Node.js', 'Figma', 'Next.js', 'GraphQL', 'PostgreSQL', 'CSS', 'Framer Motion', 'Design Systems', 'UX Research', 'Accessibility'].map((s) => (
                    <span key={s} className="t-port-skill">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="t-port-section">
          <div className="t-port-container">
            <p className="t-port-label">Selected Work</p>
            <h2 className="t-port-title">Projects</h2>
            <p className="t-port-sub">A selection of things I've built — for clients, for fun, and for learning.</p>
            <div className="t-port-projects-grid">
              {[
                { icon: '🧩', name: 'Meridian Design System', desc: 'A comprehensive React component library with 60+ components, Figma integration, and full accessibility compliance. Used by 3 product teams.', tech: ['React', 'TypeScript', 'Storybook', 'CSS-in-JS'] },
                { icon: '🗺️', name: 'Trailhead App', desc: 'Hiking route discovery app with offline maps, elevation profiles, and community trail reports. 12k active users on iOS and Android.', tech: ['React Native', 'MapboxGL', 'Node.js', 'PostgreSQL'] },
                { icon: '💰', name: 'Cashflow Dashboard', desc: 'Financial analytics dashboard for freelancers. Invoice tracking, expense categorization, and tax projection with bank sync via Plaid.', tech: ['Next.js', 'Prisma', 'Recharts', 'Stripe'] },
                { icon: '🤖', name: 'Prompt Canvas', desc: 'Visual AI prompt builder with branching logic, parameter controls, and output comparison. Open source project with 800+ GitHub stars.', tech: ['React', 'Zustand', 'OpenAI API', 'Vite'] },
              ].map((p) => (
                <div key={p.name} className="t-port-project-card">
                  <div className="t-port-project-top">
                    <div className="t-port-project-icon">{p.icon}</div>
                    <div className="t-port-project-links">
                      <a href="#" className="t-port-project-link">↗ Live</a>
                      <a href="#" className="t-port-project-link">⌥ Code</a>
                    </div>
                  </div>
                  <p className="t-port-project-name">{p.name}</p>
                  <p className="t-port-project-desc">{p.desc}</p>
                  <div className="t-port-tech-stack">
                    {p.tech.map((t) => <span key={t} className="t-port-tech">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="t-port-section t-port-section--alt">
          <div className="t-port-container">
            <p className="t-port-label">Work History</p>
            <h2 className="t-port-title">Experience</h2>
            <div className="t-port-timeline">
              {[
                { date: '2022 – Present', role: 'Senior Product Designer', company: 'Verge Labs · San Francisco', desc: 'Leading design and frontend for a Series A B2B analytics platform. Built the design system from scratch, reduced onboarding time by 40%, and shipped 3 major product launches.' },
                { date: '2020 – 2022', role: 'UI Engineer', company: 'Patchwork Studio · Remote', desc: 'Freelance agency work building custom interfaces for startups across fintech, health, and consumer apps. Worked with 12 clients across 2 years.' },
                { date: '2018 – 2020', role: 'UX/UI Designer', company: 'Mosaic Digital · Austin, TX', desc: 'Designed end-to-end product flows for 4 SaaS products. Ran usability testing, built Figma prototypes, and collaborated daily with engineering leads.' },
              ].map((item) => (
                <div key={item.role} className="t-port-timeline-item">
                  <div className="t-port-timeline-date">{item.date}</div>
                  <div className="t-port-timeline-line"></div>
                  <div className="t-port-timeline-content">
                    <p className="t-port-timeline-role">{item.role}</p>
                    <p className="t-port-timeline-company">{item.company}</p>
                    <p className="t-port-timeline-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="t-port-section">
          <div className="t-port-container">
            <p className="t-port-label">Get in Touch</p>
            <h2 className="t-port-title">Let's work together</h2>
            <p className="t-port-sub">Have a project in mind or just want to say hello? I'd love to hear from you. You can also reach me directly at <a href="mailto:alex@alexchen.dev" className="t-port-email-link">alex@alexchen.dev</a>.</p>
            <form className="t-port-contact-form" onSubmit={(e) => e.preventDefault()}>
              <input className="t-port-input" type="text" placeholder="Your name" aria-label="Your name" />
              <input className="t-port-input" type="email" placeholder="Email address" aria-label="Email address" />
              <textarea className="t-port-input t-port-textarea" placeholder="Tell me about your project..." aria-label="Message"></textarea>
              <button className="t-port-btn-primary" type="submit">Send Message →</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="t-port-footer">
          <div className="t-port-container">
            Alex Chen · Designed &amp; built with care · © 2024
          </div>
        </footer>
      </div>
    </>
  )
}
