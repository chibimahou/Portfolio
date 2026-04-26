interface ReservationCtaWidgetProps {
  heading?: string
  description?: string
  ctaLabel?: string
  bookingPath?: string
  phone?: string
}

export default function ReservationCtaWidget({
  heading = 'Reserve Your Table',
  description = 'Book ahead for date nights, private dining, and weekend brunch.',
  ctaLabel = 'Start Reservation',
  bookingPath = '/reservations',
  phone = '(555) 014-9821',
}: ReservationCtaWidgetProps): JSX.Element {
  return (
    <article
      className="widget-shell"
      style={{
        background: 'linear-gradient(165deg, color-mix(in srgb, var(--primary) 8%, #ffffff) 0%, #ffffff 70%)',
      }}
      aria-label="Reservation call-to-action widget"
    >
      <header className="widget-header">
        <h2>{heading}</h2>
        <p>{description}</p>
      </header>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', alignItems: 'center' }}>
        <a href={bookingPath} className="btn btn--primary">
          {ctaLabel}
        </a>
        <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="btn btn--outline">
          Call {phone}
        </a>
      </div>
    </article>
  )
}
