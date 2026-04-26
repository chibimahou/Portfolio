interface DialogueChoice {
  id: string
  label: string
}

interface DialogueBoxWidgetProps {
  speaker?: string
  dialogue?: string
  portraitLabel?: string
  choices?: DialogueChoice[]
}

const DEFAULT_CHOICES: DialogueChoice[] = [
  { id: 'ask', label: 'Tell me more about the relic.' },
  { id: 'accept', label: 'I will take this mission.' },
  { id: 'decline', label: 'I need more time to prepare.' },
]

export default function DialogueBoxWidget({
  speaker = 'Captain Elira',
  dialogue = 'The old lighthouse is stirring again. If we do not act before dawn, the entire harbor district will be lost.',
  portraitLabel = 'NPC portrait',
  choices = DEFAULT_CHOICES,
}: DialogueBoxWidgetProps): JSX.Element {
  return (
    <article className="widget-shell rp-widget-wide" aria-label="Dialogue box widget">
      <header className="widget-header" style={{ marginBottom: '0.8rem' }}>
        <h2>Dialogue</h2>
      </header>

      <div className="widget-card" style={{ marginBottom: '0.85rem' }}>
        <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
          <div
            aria-hidden="true"
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '12px',
              border: '1px solid var(--line)',
              background: 'color-mix(in srgb, var(--text) 7%, #ffffff)',
              display: 'grid',
              placeItems: 'center',
              color: 'var(--muted)',
              fontSize: '0.74rem',
              textAlign: 'center',
              padding: '0.35rem',
            }}
          >
            {portraitLabel}
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ marginBottom: '0.3rem' }}>
              <span className="tag">{speaker}</span>
            </p>
            <p style={{ color: 'var(--text)', lineHeight: 1.6 }}>{dialogue}</p>
          </div>
        </div>
      </div>

      <div className="dialogue-choice-row">
        {choices.map((choice) => (
          <button key={choice.id} type="button" className="btn btn--outline">
            {choice.label}
          </button>
        ))}
      </div>
    </article>
  )
}
