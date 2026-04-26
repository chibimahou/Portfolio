interface MapDirectionsWidgetProps {
  businessName?: string
  address?: string
  mapUrl?: string
  note?: string
}

export default function MapDirectionsWidget({
  businessName = 'Orchard & Oak Bistro',
  address = '128 Harbor Avenue, San Diego, CA 92101',
  mapUrl = 'https://maps.google.com/?q=128+Harbor+Avenue+San+Diego+CA+92101',
  note = 'Parking is available in the lot behind the building.',
}: MapDirectionsWidgetProps): JSX.Element {
  return (
    <article className="widget-shell" aria-label="Map and directions widget">
      <header className="widget-header">
        <h2>Find Us</h2>
        <p>{businessName}</p>
      </header>

      <div
        className="widget-preview"
        style={{
          minHeight: '220px',
          background:
            'linear-gradient(150deg, color-mix(in srgb, var(--primary) 14%, #ffffff) 0%, #ffffff 55%, color-mix(in srgb, var(--text) 6%, #ffffff) 100%)',
          border: '1px solid var(--line)',
        }}
        role="img"
        aria-label="Map placeholder"
      >
        <div style={{ textAlign: 'center', color: 'var(--muted)' }}>
          <p style={{ fontWeight: 600, color: 'var(--text)' }}>Map Preview</p>
          <p>{address}</p>
        </div>
      </div>

      <p className="widget-meta">{note}</p>

      <a href={mapUrl} target="_blank" rel="noreferrer" className="btn btn--primary">
        Open in Google Maps
      </a>
    </article>
  )
}
