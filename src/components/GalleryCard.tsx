import { Link } from 'react-router-dom'

interface GalleryCardProps {
  label: string
  description: string
  path: string
  primaryColor: string
  accentColor: string
  category: string
}

const CATEGORY_ICONS: Record<string, string> = {
  'Food & Dining': '🍽️',
  'Food & Drink': '☕',
  'Hospitality': '🏨',
  'Legal': '⚖️',
  'Healthcare': '🏥',
  'Health & Wellness': '💪',
  'Creative': '🎨',
  'Technology': '🚀',
  'Retail': '🛍️',
  'Events': '💍',
}

export default function GalleryCard({
  label,
  description,
  path,
  primaryColor,
  accentColor,
  category,
}: GalleryCardProps): JSX.Element {
  const icon = CATEGORY_ICONS[category] ?? '🌐'

  return (
    <div
      style={{
        background: 'var(--surface)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = 'translateY(-4px)'
        el.style.boxShadow = '0 16px 36px rgba(0,0,0,0.13)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'var(--shadow)'
      }}
    >
      {/* Color band header */}
      <div
        style={{
          height: '120px',
          background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.8rem',
        }}
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Card body */}
      <div style={{ padding: '1.2rem 1.4rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)' }}>{label}</h3>
          <span
            className="tag"
            style={{
              background: `color-mix(in srgb, ${primaryColor} 12%, transparent)`,
              color: primaryColor,
              flexShrink: 0,
            }}
          >
            {category}
          </span>
        </div>

        <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.55, flex: 1 }}>{description}</p>

        <Link
          to={path}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            marginTop: '0.75rem',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: primaryColor,
            textDecoration: 'none',
          }}
        >
          Preview Template →
        </Link>
      </div>
    </div>
  )
}
