import { useMemo, useState } from 'react'

type QuestStatus = 'active' | 'completed'

interface Quest {
  id: string
  title: string
  status: QuestStatus
  progress: string
  reward: string
}

interface QuestLogWidgetProps {
  heading?: string
  quests?: Quest[]
}

const DEFAULT_QUESTS: Quest[] = [
  {
    id: 'quest-1',
    title: 'Shadows Over Emberford',
    status: 'active',
    progress: '2/4 clues recovered',
    reward: '450 XP + Silver Compass',
  },
  {
    id: 'quest-2',
    title: 'Supply Run to Ironpass',
    status: 'active',
    progress: 'Escort caravan to gatehouse',
    reward: '320 XP + 180 Gold',
  },
  {
    id: 'quest-3',
    title: 'The Fallen Sentinel',
    status: 'completed',
    progress: 'Quest complete',
    reward: '600 XP + Sentinel Crest',
  },
]

export default function QuestLogWidget({
  heading = 'Quest Log',
  quests = DEFAULT_QUESTS,
}: QuestLogWidgetProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<QuestStatus>('active')

  const visibleQuests = useMemo(() => quests.filter((quest) => quest.status === activeTab), [quests, activeTab])

  return (
    <article className="widget-shell rp-widget-wide" aria-label="Quest log widget">
      <header className="widget-header">
        <h2>{heading}</h2>
        <p>Track objectives, rewards, and completion state in one compact panel.</p>
      </header>

      <div style={{ display: 'flex', gap: '0.55rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
        <button
          type="button"
          className={activeTab === 'active' ? 'btn btn--primary' : 'btn btn--outline'}
          onClick={() => setActiveTab('active')}
        >
          Active
        </button>
        <button
          type="button"
          className={activeTab === 'completed' ? 'btn btn--primary' : 'btn btn--outline'}
          onClick={() => setActiveTab('completed')}
        >
          Completed
        </button>
      </div>

      <div className="widget-grid" style={{ gap: '0.7rem' }}>
        {visibleQuests.length > 0 ? (
          visibleQuests.map((quest) => (
            <div key={quest.id} className="widget-card">
              <h3 style={{ fontSize: '0.96rem', marginBottom: '0.3rem', color: 'var(--text)' }}>{quest.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.86rem', marginBottom: '0.35rem' }}>{quest.progress}</p>
              <p style={{ color: 'var(--text)', fontSize: '0.84rem' }}>Reward: {quest.reward}</p>
            </div>
          ))
        ) : (
          <p className="widget-meta">No quests in this tab yet.</p>
        )}
      </div>
    </article>
  )
}
