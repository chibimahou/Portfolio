interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionWidgetProps {
  heading?: string
  items?: FaqItem[]
}

const DEFAULT_FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Do you offer gluten-free options?',
    answer: 'Yes. We provide gluten-free alternatives for most starters and select entrees.',
  },
  {
    question: 'Can I reserve for large groups?',
    answer: 'Absolutely. Group reservations for parties up to 24 can be requested through our booking form.',
  },
  {
    question: 'Is outdoor seating available?',
    answer: 'Outdoor seating is available seasonally and can be requested during reservation.',
  },
]

export default function FaqAccordionWidget({
  heading = 'Frequently Asked Questions',
  items = DEFAULT_FAQ_ITEMS,
}: FaqAccordionWidgetProps): JSX.Element {
  return (
    <article className="widget-shell" aria-label="FAQ accordion widget">
      <header className="widget-header">
        <h2>{heading}</h2>
      </header>

      <div className="widget-grid" style={{ gap: '0.7rem' }}>
        {items.map((item) => (
          <details key={item.question} className="widget-card" style={{ padding: '0.9rem 1rem' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--text)' }}>{item.question}</summary>
            <p style={{ marginTop: '0.7rem', color: 'var(--muted)', lineHeight: 1.6 }}>{item.answer}</p>
          </details>
        ))}
      </div>
    </article>
  )
}
