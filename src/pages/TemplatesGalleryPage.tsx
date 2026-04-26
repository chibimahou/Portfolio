import GalleryCard from '../components/GalleryCard'
import { Link } from 'react-router-dom'

const TEMPLATES = [
  {
    label: 'Restaurant',
    category: 'Food & Dining',
    description: 'Full multi-page restaurant site with menu, reservations, cart, and events.',
    primaryColor: '#a13b2f',
    accentColor: '#134e4a',
    path: '/templates/restaurant',
  },
  {
    label: 'Café',
    category: 'Food & Drink',
    description: 'Cozy coffee shop site with menu, story, and daily specials.',
    primaryColor: '#7c5c3e',
    accentColor: '#4a7c5c',
    path: '/templates/cafe',
  },
  {
    label: 'Hotel',
    category: 'Hospitality',
    description: 'Luxury hotel landing page with rooms, amenities, and booking.',
    primaryColor: '#1a3a5c',
    accentColor: '#c9a84c',
    path: '/templates/hotel',
  },
  {
    label: 'Law Firm',
    category: 'Legal',
    description: 'Professional legal services site with practice areas and attorneys.',
    primaryColor: '#1e2d40',
    accentColor: '#8b6f47',
    path: '/templates/lawfirm',
  },
  {
    label: 'Medical',
    category: 'Healthcare',
    description: 'Clean medical practice site with services, team, and appointments.',
    primaryColor: '#1b6b8a',
    accentColor: '#4caf8a',
    path: '/templates/medical',
  },
  {
    label: 'Fitness',
    category: 'Health & Wellness',
    description: 'High-energy gym site with classes, trainers, and membership plans.',
    primaryColor: '#e63946',
    accentColor: '#2b2d42',
    path: '/templates/fitness',
  },
  {
    label: 'Portfolio',
    category: 'Creative',
    description: 'Minimal freelancer/designer portfolio with projects and contact.',
    primaryColor: '#6c63ff',
    accentColor: '#ff6584',
    path: '/templates/portfolio',
  },
  {
    label: 'SaaS',
    category: 'Technology',
    description: 'Modern SaaS landing page with features, pricing, and CTA.',
    primaryColor: '#0ea5e9',
    accentColor: '#7c3aed',
    path: '/templates/saas',
  },
  {
    label: 'E-Commerce',
    category: 'Retail',
    description: 'Product showcase storefront with categories and featured items.',
    primaryColor: '#f59e0b',
    accentColor: '#1d4ed8',
    path: '/templates/ecommerce',
  },
  {
    label: 'Wedding',
    category: 'Events',
    description: 'Elegant wedding venue site with packages, gallery, and inquiry.',
    primaryColor: '#9d7bb0',
    accentColor: '#c8956c',
    path: '/templates/wedding',
  },
]

export default function TemplatesGalleryPage(): JSX.Element {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Hero */}
      <header
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)',
          color: '#fff',
          padding: 'clamp(4rem, 10vw, 7rem) 0 clamp(3rem, 7vw, 5rem)',
          textAlign: 'center',
        }}
      >
        <div className="tmpl-container">
          <div
            style={{
              display: 'inline-block',
              padding: '0.3em 1em',
              borderRadius: '999px',
              background: 'rgba(108, 99, 255, 0.25)',
              color: '#a89cff',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            10 Professional Templates
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            Frontend Templates
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '540px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Professional, labeled, ready-to-use website templates for every industry.
          </p>
        </div>
      </header>

      {/* Gallery grid */}
      <main style={{ padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="tmpl-container">
          <section
            className="widget-shell"
            style={{
              marginBottom: '1.8rem',
              background: 'linear-gradient(135deg, color-mix(in srgb, var(--primary) 10%, #ffffff) 0%, #ffffff 60%)',
            }}
          >
            <div className="widget-header" style={{ marginBottom: 0 }}>
              <h2 style={{ fontSize: 'clamp(1.2rem, 2.4vw, 1.55rem)' }}>Need reusable components instead?</h2>
              <p>
                Explore ready-made restaurant widgets designed to drop into your existing pages with minimal setup.
              </p>
            </div>
            <Link to="/widgets" className="btn btn--primary">
              Browse Widget Templates
            </Link>
          </section>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {TEMPLATES.map((t) => (
              <GalleryCard key={t.path} {...t} />
            ))}
          </div>
        </div>
      </main>

      <footer
        style={{
          borderTop: '1px solid var(--line)',
          padding: '2rem 0',
          textAlign: 'center',
          color: 'var(--muted)',
          fontSize: '0.85rem',
        }}
      >
        <div className="tmpl-container">
          Frontend Templates — open source, use freely.
        </div>
      </footer>
    </div>
  )
}
