import TemplateNav from '../../components/TemplateNav'

export default function SaaSTemplate(): JSX.Element {
  return (
    <>
      <style>{`
        .template-saas {
          --primary: #0ea5e9;
          --primary-strong: #0284c7;
          --secondary: #7c3aed;
          --bg: #f8fafc;
          --bg-alt: #f0f7ff;
          --surface: #ffffff;
          --text: #0f172a;
          --muted: #64748b;
          --line: #e2e8f0;
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-sans);
        }
        .t-saas-hero {
          padding: clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 6rem);
          background: linear-gradient(160deg, #f0f9ff 0%, #f8fafc 100%);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .t-saas-hero::before {
          content: '';
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 500px;
          background: radial-gradient(ellipse at center, rgba(14,165,233,0.12) 0%, transparent 65%);
          pointer-events: none;
        }
        .t-saas-hero-inner { position: relative; z-index: 1; max-width: 720px; margin: 0 auto; padding: 0 1.5rem; }
        .t-saas-beta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35em 1em;
          background: linear-gradient(90deg, rgba(14,165,233,0.1), rgba(124,58,237,0.1));
          border: 1px solid rgba(14,165,233,0.3);
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--primary-strong);
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
        }
        .t-saas-beta-badge span { background: linear-gradient(90deg, var(--primary), var(--secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .t-saas-hero h1 {
          font-size: clamp(2.6rem, 6.5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 1.25rem;
          background: linear-gradient(135deg, #0f172a 30%, #1e40af 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .t-saas-hero p { font-size: 1.15rem; color: var(--muted); margin-bottom: 2.5rem; line-height: 1.65; max-width: 560px; margin-left: auto; margin-right: auto; }
        .t-saas-hero-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 1.5rem; }
        .t-saas-btn-primary {
          padding: 0.75em 2em;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: opacity 0.15s;
          box-shadow: 0 4px 14px rgba(14,165,233,0.35);
        }
        .t-saas-btn-primary:hover { opacity: 0.9; }
        .t-saas-btn-outline {
          padding: 0.75em 2em;
          background: #fff;
          color: var(--text);
          border: 1.5px solid var(--line);
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: border-color 0.15s;
        }
        .t-saas-btn-outline:hover { border-color: var(--primary); }
        .t-saas-hero-sub { font-size: 0.82rem; color: var(--muted); }
        .t-saas-section { padding: clamp(3rem, 6vw, 5rem) 0; background: var(--bg); }
        .t-saas-section--alt { background: var(--bg-alt); }
        .t-saas-container { width: var(--container); margin: 0 auto; }
        .t-saas-section-header { text-align: center; max-width: 560px; margin: 0 auto 3rem; }
        .t-saas-label { font-size: 0.75rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--primary); font-weight: 700; margin-bottom: 0.5rem; }
        .t-saas-title { font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800; letter-spacing: -0.02em; margin-bottom: 0.75rem; color: var(--text); }
        .t-saas-sub { color: var(--muted); line-height: 1.65; }
        .t-saas-features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        @media (max-width: 768px) { .t-saas-features-grid { grid-template-columns: 1fr; } }
        .t-saas-feature-card {
          background: var(--surface);
          border-radius: var(--radius);
          padding: 2rem 1.75rem;
          box-shadow: 0 4px 16px rgba(14,165,233,0.07);
          border: 1px solid var(--line);
        }
        .t-saas-feature-icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .t-saas-feature-name { font-size: 1.05rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text); }
        .t-saas-feature-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.65; }
        .t-saas-steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; position: relative; }
        @media (max-width: 768px) { .t-saas-steps-grid { grid-template-columns: 1fr; } }
        .t-saas-step {
          text-align: center;
          padding: 0 1rem;
        }
        .t-saas-step-num {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: #fff;
          font-weight: 800;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }
        .t-saas-step-title { font-weight: 700; font-size: 1rem; margin-bottom: 0.5rem; }
        .t-saas-step-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.6; }
        .t-saas-pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; align-items: start; }
        @media (max-width: 768px) { .t-saas-pricing-grid { grid-template-columns: 1fr; } }
        .t-saas-plan-card {
          background: var(--surface);
          border-radius: var(--radius);
          padding: 2rem;
          border: 1.5px solid var(--line);
          position: relative;
        }
        .t-saas-plan-card--featured {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(14,165,233,0.12);
        }
        .t-saas-plan-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          color: #fff;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.3em 1.1em;
          border-radius: 999px;
          white-space: nowrap;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .t-saas-plan-name { font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 0.75rem; }
        .t-saas-plan-price { font-size: 2.6rem; font-weight: 800; color: var(--text); letter-spacing: -0.03em; margin-bottom: 0.25rem; }
        .t-saas-plan-price span { font-size: 1rem; font-weight: 400; color: var(--muted); }
        .t-saas-plan-desc { font-size: 0.82rem; color: var(--muted); margin-bottom: 1.5rem; }
        .t-saas-plan-divider { border: none; border-top: 1px solid var(--line); margin-bottom: 1.25rem; }
        .t-saas-plan-features { list-style: none; display: flex; flex-direction: column; gap: 0.65rem; margin-bottom: 1.75rem; }
        .t-saas-plan-feature { font-size: 0.875rem; color: var(--muted); display: flex; align-items: center; gap: 0.5rem; }
        .t-saas-plan-feature::before { content: '✓'; color: var(--primary); font-weight: 700; flex-shrink: 0; }
        .t-saas-social-proof {
          padding: clamp(3rem, 6vw, 5rem) 0;
          background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%);
          color: #fff;
        }
        .t-saas-social-inner { width: var(--container); margin: 0 auto; }
        .t-saas-stats-row { display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap; margin-bottom: 3rem; }
        .t-saas-stat { text-align: center; padding: 0 1.5rem; }
        .t-saas-stat-value { font-size: 2.4rem; font-weight: 800; color: var(--primary); letter-spacing: -0.03em; }
        .t-saas-stat-label { font-size: 0.85rem; color: rgba(255,255,255,0.55); }
        .t-saas-quotes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        @media (max-width: 768px) { .t-saas-quotes-grid { grid-template-columns: 1fr; } }
        .t-saas-quote {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius);
          padding: 1.75rem;
        }
        .t-saas-quote-text { font-size: 0.95rem; color: rgba(255,255,255,0.8); line-height: 1.7; margin-bottom: 1.25rem; font-style: italic; }
        .t-saas-quote-author { font-size: 0.875rem; font-weight: 700; color: #fff; }
        .t-saas-quote-role { font-size: 0.78rem; color: rgba(255,255,255,0.45); }
        .t-saas-footer {
          background: #0a0f1a;
          color: rgba(255,255,255,0.4);
          padding: 2.5rem 0;
          text-align: center;
          font-size: 0.875rem;
        }
        .t-saas-footer strong { color: rgba(255,255,255,0.8); }
      `}</style>

      <div className="template-saas">
        <TemplateNav templateName="SaaS" />

        {/* Hero */}
        <section className="t-saas-hero">
          <div className="t-saas-hero-inner">
            <div className="t-saas-beta-badge">✨ <span>Now in Beta</span> — Invite-only access open</div>
            <h1>Automate your workflow in minutes</h1>
            <p>Flowly connects your tools, automates repetitive tasks, and surfaces insights — so your team can focus on the work that actually matters.</p>
            <div className="t-saas-hero-actions">
              <button className="t-saas-btn-primary">Start for Free →</button>
              <button className="t-saas-btn-outline">Watch Demo</button>
            </div>
            <p className="t-saas-hero-sub">No credit card required · Free forever plan available · Setup in under 5 minutes</p>
          </div>
        </section>

        {/* Features */}
        <section className="t-saas-section t-saas-section--alt">
          <div className="t-saas-container">
            <div className="t-saas-section-header">
              <p className="t-saas-label">Why Flowly</p>
              <h2 className="t-saas-title">Everything your team needs</h2>
              <p className="t-saas-sub">A focused set of powerful features, designed to reduce friction without adding complexity.</p>
            </div>
            <div className="t-saas-features-grid">
              {[
                { icon: '⚡', name: 'Visual Workflow Builder', desc: 'Drag-and-drop automation builder with 200+ integrations. Build in minutes, not days. No engineering required.' },
                { icon: '📊', name: 'Real-Time Analytics', desc: 'Live dashboards and reports built on your connected data. See bottlenecks before they become problems.' },
                { icon: '🔔', name: 'Smart Notifications', desc: 'AI-powered alerting that learns your team\'s patterns and surfaces only what genuinely needs your attention.' },
              ].map((f) => (
                <div key={f.name} className="t-saas-feature-card">
                  <div className="t-saas-feature-icon">{f.icon}</div>
                  <p className="t-saas-feature-name">{f.name}</p>
                  <p className="t-saas-feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="t-saas-section">
          <div className="t-saas-container">
            <div className="t-saas-section-header">
              <p className="t-saas-label">How It Works</p>
              <h2 className="t-saas-title">Up and running in 3 steps</h2>
              <p className="t-saas-sub">Most teams are fully set up within an afternoon.</p>
            </div>
            <div className="t-saas-steps-grid">
              {[
                { n: '1', title: 'Connect your tools', desc: 'Link your existing stack in seconds. Flowly supports Slack, Notion, GitHub, Salesforce, Jira, and 200+ others via OAuth.' },
                { n: '2', title: 'Build your workflows', desc: 'Use our visual builder to define trigger events, actions, and conditions. Templates available for the most common use cases.' },
                { n: '3', title: 'Let Flowly work', desc: 'Watch automation handle the repetitive parts. Your team gets time back. You get full visibility into every flow.' },
              ].map((s) => (
                <div key={s.n} className="t-saas-step">
                  <div className="t-saas-step-num">{s.n}</div>
                  <p className="t-saas-step-title">{s.title}</p>
                  <p className="t-saas-step-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="t-saas-section t-saas-section--alt">
          <div className="t-saas-container">
            <div className="t-saas-section-header">
              <p className="t-saas-label">Pricing</p>
              <h2 className="t-saas-title">Simple, honest pricing</h2>
              <p className="t-saas-sub">Start free. Upgrade only when you need more. No surprise charges.</p>
            </div>
            <div className="t-saas-pricing-grid">
              {[
                {
                  name: 'Free',
                  price: '$0',
                  priceLabel: '/mo',
                  desc: 'For individuals and small experiments.',
                  featured: false,
                  features: ['3 workflows', '500 runs/month', '5 integrations', 'Community support', '7-day run history'],
                },
                {
                  name: 'Pro',
                  price: '$29',
                  priceLabel: '/mo',
                  desc: 'For growing teams who need more power.',
                  featured: true,
                  features: ['Unlimited workflows', '50k runs/month', 'All integrations', 'Priority support', '90-day run history', 'Custom webhooks', 'Team workspace'],
                },
                {
                  name: 'Enterprise',
                  price: 'Custom',
                  priceLabel: '',
                  desc: 'For large teams with advanced needs.',
                  featured: false,
                  features: ['Unlimited everything', 'SSO / SAML', 'Dedicated CSM', 'SLA guarantee', 'Audit logs', 'Custom data retention', 'On-prem option'],
                },
              ].map((plan) => (
                <div key={plan.name} className={`t-saas-plan-card${plan.featured ? ' t-saas-plan-card--featured' : ''}`}>
                  {plan.featured && <div className="t-saas-plan-badge">Most Popular</div>}
                  <p className="t-saas-plan-name">{plan.name}</p>
                  <p className="t-saas-plan-price">{plan.price}<span>{plan.priceLabel}</span></p>
                  <p className="t-saas-plan-desc">{plan.desc}</p>
                  <hr className="t-saas-plan-divider" />
                  <ul className="t-saas-plan-features">
                    {plan.features.map((f) => <li key={f} className="t-saas-plan-feature">{f}</li>)}
                  </ul>
                  <button
                    className="t-saas-btn-primary"
                    style={{ width: '100%', background: plan.featured ? undefined : 'var(--text)', boxShadow: plan.featured ? undefined : 'none' }}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="t-saas-social-proof">
          <div className="t-saas-social-inner">
            <div className="t-saas-stats-row">
              {[
                { value: '10k+', label: 'Teams using Flowly' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '4.9★', label: 'Average rating' },
              ].map((s) => (
                <div key={s.label} className="t-saas-stat">
                  <p className="t-saas-stat-value">{s.value}</p>
                  <p className="t-saas-stat-label">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="t-saas-quotes-grid">
              <div className="t-saas-quote">
                <p className="t-saas-quote-text">"Flowly replaced three separate tools we were paying for and running manually. Setup was maybe two hours. Now I don't think about it — it just works, every day."</p>
                <p className="t-saas-quote-author">Mei-Lin T.</p>
                <p className="t-saas-quote-role">Head of Operations, Northgate Labs</p>
              </div>
              <div className="t-saas-quote">
                <p className="t-saas-quote-text">"The visual builder is genuinely good. No other automation platform feels this intuitive to build in. My PM built her first workflow in under 20 minutes with zero help."</p>
                <p className="t-saas-quote-author">Carlos R.</p>
                <p className="t-saas-quote-role">Engineering Lead, Strata Health</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="t-saas-footer">
          <div className="t-saas-container">
            <p><strong>Flowly</strong> · Automate with confidence · hello@flowly.io</p>
            <p style={{ marginTop: '0.5rem' }}>© 2024 Flowly, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
