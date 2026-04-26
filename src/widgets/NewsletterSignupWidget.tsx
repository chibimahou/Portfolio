interface NewsletterSignupWidgetProps {
  heading?: string
  description?: string
  placeholder?: string
  buttonLabel?: string
  legalText?: string
  actionUrl?: string
}

export default function NewsletterSignupWidget({
  heading = 'Join the Insider List',
  description = 'Get chef specials, private event updates, and first access to seasonal menus.',
  placeholder = 'Enter your email',
  buttonLabel = 'Subscribe',
  legalText = 'By subscribing, you agree to receive occasional marketing emails.',
  actionUrl = '#',
}: NewsletterSignupWidgetProps): JSX.Element {
  return (
    <article className="widget-shell" aria-label="Newsletter signup widget">
      <header className="widget-header">
        <h2>{heading}</h2>
        <p>{description}</p>
      </header>

      <form action={actionUrl} method="post" className="widget-grid" style={{ gap: '0.7rem' }}>
        <label htmlFor="newsletter-email" style={{ fontSize: '0.86rem', color: 'var(--muted)' }}>
          Email address
        </label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            placeholder={placeholder}
            required
            style={{
              flex: '1 1 220px',
              border: '1px solid var(--line)',
              borderRadius: '10px',
              padding: '0.65rem 0.8rem',
              font: 'inherit',
            }}
          />
          <button type="submit" className="btn btn--primary" style={{ minWidth: '130px' }}>
            {buttonLabel}
          </button>
        </div>
        <p style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{legalText}</p>
      </form>
    </article>
  )
}
