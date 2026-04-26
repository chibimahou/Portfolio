interface Testimonial {
  quote: string
  name: string
  role: string
}

interface TestimonialsWidgetProps {
  heading?: string
  testimonials?: Testimonial[]
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote: 'The tasting menu was polished and full of surprises. Every course felt intentional.',
    name: 'Amelia Torres',
    role: 'Local Food Writer',
  },
  {
    quote: 'Service was attentive without being intrusive. We booked our anniversary dinner again.',
    name: 'Chris Reynolds',
    role: 'Returning Guest',
  },
  {
    quote: 'Perfect neighborhood spot for business dinners and family celebrations alike.',
    name: 'Nina Patel',
    role: 'Community Member',
  },
]

export default function TestimonialsWidget({
  heading = 'What Guests Are Saying',
  testimonials = DEFAULT_TESTIMONIALS,
}: TestimonialsWidgetProps): JSX.Element {
  return (
    <article className="widget-shell" aria-label="Testimonials widget">
      <header className="widget-header">
        <h2>{heading}</h2>
      </header>

      <div className="widget-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
        {testimonials.map((item) => (
          <blockquote key={`${item.name}-${item.role}`} className="widget-card" style={{ margin: 0 }}>
            <p style={{ color: 'var(--text)', lineHeight: 1.6, fontSize: '0.95rem' }}>&ldquo;{item.quote}&rdquo;</p>
            <footer style={{ marginTop: '0.9rem' }}>
              <strong style={{ color: 'var(--text)' }}>{item.name}</strong>
              <p style={{ color: 'var(--muted)', fontSize: '0.84rem' }}>{item.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </article>
  )
}
