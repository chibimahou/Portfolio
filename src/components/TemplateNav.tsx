import { Link } from 'react-router-dom'

interface TemplateNavProps {
  templateName: string
  backPath?: string
  backLabel?: string
  itemLabel?: string
}

export default function TemplateNav({
  templateName,
  backPath = '/',
  backLabel = 'Gallery',
  itemLabel = 'Template',
}: TemplateNavProps): JSX.Element {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        height: '52px',
        background: 'var(--surface)',
        borderBottom: '1px solid var(--line)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 1.5rem',
        gap: '1rem',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      }}
    >
      <Link
        to={backPath}
        style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: 'var(--primary)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
          opacity: 0.85,
          transition: 'opacity 0.15s',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.85')}
      >
        ← {backLabel}
      </Link>

      <span
        style={{
          fontSize: '0.875rem',
          fontWeight: 500,
          color: 'var(--muted)',
        }}
      >
        {templateName} {itemLabel}
      </span>
    </nav>
  )
}
