import { Link } from 'react-router-dom'

interface WidgetCard {
  label: string
  category: string
  description: string
  path: string
}

const WIDGETS: WidgetCard[] = [
  {
    label: 'Map & Directions',
    category: 'Location',
    description: 'Drop-in location card with map placeholder and direct Google Maps link.',
    path: '/widgets/map-directions',
  },
  {
    label: 'Business Hours',
    category: 'Operations',
    description: 'Clean weekly hours panel with highlighted day and timezone label.',
    path: '/widgets/business-hours',
  },
  {
    label: 'Reservation CTA',
    category: 'Conversion',
    description: 'Focused booking call-to-action with reservation and phone quick actions.',
    path: '/widgets/reservation-cta',
  },
  {
    label: 'Restaurant Menu Card',
    category: 'Restaurant UI',
    description: 'Compact menu card with dietary tags, fixed action placement, and a polished customize modal.',
    path: '/widgets/restaurant-menu-card',
  },
  {
    label: 'Testimonials',
    category: 'Trust',
    description: 'Guest review cards for social proof in marketing and landing sections.',
    path: '/widgets/testimonials',
  },
  {
    label: 'FAQ Accordion',
    category: 'Support',
    description: 'Accessible, expandable FAQ rows for common policies and service questions.',
    path: '/widgets/faq-accordion',
  },
  {
    label: 'Newsletter Signup',
    category: 'Growth',
    description: 'Email capture block with legal text and configurable action target.',
    path: '/widgets/newsletter-signup',
  },
  {
    label: 'Character Profile',
    category: 'RPG UI',
    description: 'Avatar, class, level, status bars, and stat chips for character-centric interfaces.',
    path: '/widgets/character-profile',
  },
  {
    label: 'Location Card',
    category: 'Worldbuilding',
    description: 'Region and zone context with danger level, weather, local time, and mission objective.',
    path: '/widgets/location-card',
  },
  {
    label: 'Inventory Grid',
    category: 'Inventory',
    description: 'Configurable slot grid with rarity labels, quantities, and empty slot placeholders.',
    path: '/widgets/inventory-grid',
  },
  {
    label: 'Quest Log',
    category: 'Narrative',
    description: 'Tabbed active and completed quests with progress lines and reward callouts.',
    path: '/widgets/quest-log',
  },
  {
    label: 'Dialogue Box',
    category: 'Narrative',
    description: 'Speaker-focused dialogue panel with portrait placeholder and choice button rows.',
    path: '/widgets/dialogue-box',
  },
  {
    label: 'Combat HUD',
    category: 'Combat',
    description: 'Battle UI module with party HP bars, turn order chips, and action command buttons.',
    path: '/widgets/combat-hud',
  },
]

export default function WidgetGalleryPage(): JSX.Element {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <header
        style={{
          background: 'linear-gradient(145deg, #17253d 0%, #133a45 60%, #1c5f59 100%)',
          color: '#ffffff',
          padding: 'clamp(3.5rem, 9vw, 6rem) 0 clamp(2.5rem, 6vw, 4rem)',
          textAlign: 'center',
        }}
      >
        <div className="tmpl-container">
          <div
            style={{
              display: 'inline-block',
              padding: '0.3em 1em',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.9)',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1.2rem',
            }}
          >
            13 Plug-and-Play Widgets
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.1rem, 5vw, 3.4rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              marginBottom: '0.9rem',
            }}
          >
            Widget Templates
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.16rem)',
              color: 'rgba(255,255,255,0.78)',
              maxWidth: '640px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Reusable restaurant and game UI widgets you can drop into landing pages, operational flows, and RPG interfaces.
          </p>
        </div>
      </header>

      <main style={{ padding: 'clamp(2.4rem, 5vw, 4rem) 0' }}>
        <div className="tmpl-container">
          <div className="widget-grid">
            {WIDGETS.map((widget) => (
              <article key={widget.path} className="widget-card" style={{ display: 'grid', gap: '0.7rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <h2 style={{ fontSize: '1.02rem', color: 'var(--text)' }}>{widget.label}</h2>
                  <span className="tag">{widget.category}</span>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.55 }}>{widget.description}</p>
                <Link
                  to={widget.path}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: 'var(--primary)',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                  }}
                >
                  Preview Widget {'->'}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
