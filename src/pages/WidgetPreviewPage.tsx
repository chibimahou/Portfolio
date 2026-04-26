import type { ReactNode } from 'react'
import TemplateNav from '../components/TemplateNav'

interface WidgetPreviewPageProps {
  title: string
  description: string
  codeHint: string
  children: ReactNode
}

export default function WidgetPreviewPage({
  title,
  description,
  codeHint,
  children,
}: WidgetPreviewPageProps): JSX.Element {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <TemplateNav
        templateName={title}
        itemLabel="Widget"
        backPath="/widgets"
        backLabel="Widgets"
      />

      <main className="tmpl-container" style={{ padding: 'clamp(2.1rem, 4vw, 3rem) 0 3.5rem' }}>
        <section className="widget-shell" style={{ marginBottom: '1.2rem' }}>
          <header className="widget-header">
            <h1 style={{ fontSize: 'clamp(1.45rem, 2.6vw, 2rem)' }}>{title}</h1>
            <p style={{ maxWidth: '62ch' }}>{description}</p>
          </header>
        </section>

        <section className="widget-preview" style={{ minHeight: '320px', marginBottom: '1.2rem' }}>
          <div style={{ width: 'min(860px, 100%)' }}>{children}</div>
        </section>

        <section className="code-hint" aria-label="Widget usage hint">
          <h2 style={{ fontSize: '1rem', marginBottom: '0.35rem', color: 'var(--text)' }}>Usage</h2>
          <p style={{ margin: 0 }}>{codeHint}</p>
        </section>
      </main>
    </div>
  )
}
