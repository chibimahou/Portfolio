interface LocationCardWidgetProps {
  region?: string
  zoneName?: string
  dangerLevel?: string
  weather?: string
  localTime?: string
  objective?: string
  actionLabel?: string
  actionPath?: string
}

export default function LocationCardWidget({
  region = 'Kingdom of Eldor',
  zoneName = 'Whisperfen Marsh',
  dangerLevel = 'High',
  weather = 'Foggy with light rain',
  localTime = 'Nightfall - 19:42',
  objective = 'Investigate the ruined watchtower and recover the sigil shard.',
  actionLabel = 'Set Waypoint',
  actionPath = '#',
}: LocationCardWidgetProps): JSX.Element {
  return (
    <article className="widget-shell rp-widget-wide" aria-label="Location card widget">
      <header className="widget-header">
        <h2>Location Intel</h2>
        <p>Current world snapshot for exploration, narrative beats, and tactical planning.</p>
      </header>

      <div className="widget-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', marginBottom: '0.9rem' }}>
        <div className="widget-card">
          <p style={{ color: 'var(--muted)', marginBottom: '0.22rem', fontSize: '0.8rem' }}>Region</p>
          <strong style={{ color: 'var(--text)' }}>{region}</strong>
        </div>
        <div className="widget-card">
          <p style={{ color: 'var(--muted)', marginBottom: '0.22rem', fontSize: '0.8rem' }}>Zone</p>
          <strong style={{ color: 'var(--text)' }}>{zoneName}</strong>
        </div>
        <div className="widget-card">
          <p style={{ color: 'var(--muted)', marginBottom: '0.22rem', fontSize: '0.8rem' }}>Danger</p>
          <span className="tag" style={{ fontSize: '0.74rem' }}>
            {dangerLevel}
          </span>
        </div>
      </div>

      <div className="widget-grid" style={{ marginBottom: '0.9rem', gap: '0.7rem' }}>
        <p className="widget-meta">Weather: {weather}</p>
        <p className="widget-meta">Time: {localTime}</p>
      </div>

      <div className="widget-card" style={{ marginBottom: '0.9rem' }}>
        <p style={{ color: 'var(--muted)', marginBottom: '0.25rem', fontSize: '0.8rem' }}>Objective</p>
        <p style={{ color: 'var(--text)', lineHeight: 1.5 }}>{objective}</p>
      </div>

      <a href={actionPath} className="btn btn--primary">
        {actionLabel}
      </a>
    </article>
  )
}
