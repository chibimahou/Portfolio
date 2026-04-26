interface BusinessHourEntry {
  day: string
  hours: string
  isToday?: boolean
}

interface BusinessHoursWidgetProps {
  title?: string
  timezone?: string
  hours?: BusinessHourEntry[]
}

const DEFAULT_HOURS: BusinessHourEntry[] = [
  { day: 'Monday', hours: '11:00 AM - 9:00 PM' },
  { day: 'Tuesday', hours: '11:00 AM - 9:00 PM' },
  { day: 'Wednesday', hours: '11:00 AM - 9:00 PM' },
  { day: 'Thursday', hours: '11:00 AM - 10:00 PM' },
  { day: 'Friday', hours: '11:00 AM - 11:00 PM', isToday: true },
  { day: 'Saturday', hours: '10:00 AM - 11:00 PM' },
  { day: 'Sunday', hours: '10:00 AM - 8:00 PM' },
]

export default function BusinessHoursWidget({
  title = 'Business Hours',
  timezone = 'Pacific Time (PT)',
  hours = DEFAULT_HOURS,
}: BusinessHoursWidgetProps): JSX.Element {
  return (
    <article className="widget-shell" aria-label="Business hours widget">
      <header className="widget-header">
        <h2>{title}</h2>
        <p>{timezone}</p>
      </header>

      <div className="widget-grid" style={{ gap: '0.65rem' }}>
        {hours.map((entry) => (
          <div
            key={entry.day}
            className="widget-meta"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: entry.isToday ? 600 : 500,
              borderColor: entry.isToday ? 'color-mix(in srgb, var(--primary) 25%, var(--line))' : 'var(--line)',
              background: entry.isToday ? 'color-mix(in srgb, var(--primary) 9%, #ffffff)' : '#ffffff',
            }}
          >
            <span>{entry.day}</span>
            <span>{entry.hours}</span>
          </div>
        ))}
      </div>
    </article>
  )
}
