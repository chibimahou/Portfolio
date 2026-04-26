interface PartyMember {
  id: string
  name: string
  hp: number
  maxHp: number
  energy?: { current: number; max: number }
  stamina?: { current: number; max: number }
}

interface CombatHudWidgetProps {
  party?: PartyMember[]
  turnOrder?: string[]
  actions?: string[]
  showEnergy?: boolean
  showStamina?: boolean
}

type ResourceTierClass = 'status-bar__fill--normal' | 'status-bar__fill--boost2' | 'status-bar__fill--boost3'

interface ResourceBarState {
  fillPercent: number
  tierClass: ResourceTierClass
}

function getResourceBarState(current: number, max: number): ResourceBarState {
  const safeMax = Math.max(1, max)
  const safeCurrent = Math.max(0, current)

  if (safeCurrent <= safeMax) {
    return {
      fillPercent: (safeCurrent / safeMax) * 100,
      tierClass: 'status-bar__fill--normal',
    }
  }

  const cycleValue = safeCurrent % safeMax
  const cycledCurrent = cycleValue === 0 ? safeMax : cycleValue

  return {
    fillPercent: (cycledCurrent / safeMax) * 100,
    tierClass: safeCurrent <= safeMax * 2 ? 'status-bar__fill--boost2' : 'status-bar__fill--boost3',
  }
}

const DEFAULT_PARTY: PartyMember[] = [
  { id: 'aerin', name: 'Aerin', hp: 82, maxHp: 100 },
  { id: 'darius', name: 'Darius', hp: 63, maxHp: 90 },
  { id: 'mira', name: 'Mira', hp: 41, maxHp: 70 },
]

const DEFAULT_TURN_ORDER: string[] = ['Aerin', 'Ghoul Brute', 'Mira', 'Darius', 'Cult Acolyte']

const DEFAULT_ACTIONS: string[] = ['Attack', 'Skill', 'Item', 'Flee']

export default function CombatHudWidget({
  party = DEFAULT_PARTY,
  turnOrder = DEFAULT_TURN_ORDER,
  actions = DEFAULT_ACTIONS,
  showEnergy = true,
  showStamina = true,
}: CombatHudWidgetProps): JSX.Element {
  return (
    <article className="widget-shell rp-widget-wide" aria-label="Combat HUD widget">
      <header className="widget-header">
        <h2>Combat HUD</h2>
        <p>Monitor party health, turn priority, and quick combat actions.</p>
      </header>

      <div className="widget-grid" style={{ marginBottom: '0.8rem', gap: '0.65rem' }}>
        {party.map((member) => {
          const hpBar = getResourceBarState(member.hp, member.maxHp)
          const energyBar = member.energy ? getResourceBarState(member.energy.current, member.energy.max) : null
          const staminaBar = member.stamina ? getResourceBarState(member.stamina.current, member.stamina.max) : null

          return (
            <div key={member.id} className="widget-meta" style={{ background: '#ffffff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                <strong style={{ color: 'var(--text)' }}>{member.name}</strong>
                <span style={{ fontSize: '0.82rem' }}>
                  {member.hp}/{member.maxHp}
                </span>
              </div>
              <div
                className="status-bar"
                role="img"
                aria-label={`${member.name} health ${hpBar.fillPercent.toFixed(0)} percent`}
                style={{ marginBottom: showEnergy || showStamina ? '0.45rem' : 0 }}
              >
                <div className={`status-bar__fill ${hpBar.tierClass}`} style={{ width: `${hpBar.fillPercent}%` }} />
              </div>

              {showEnergy && member.energy && energyBar ? (
                <div style={{ marginBottom: showStamina && member.stamina ? '0.45rem' : 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.24rem' }}>
                    <strong style={{ color: 'var(--text)', fontSize: '0.78rem' }}>Energy</strong>
                    <span style={{ fontSize: '0.76rem' }}>
                      {member.energy.current}/{member.energy.max}
                    </span>
                  </div>
                  <div
                    className="status-bar"
                    role="img"
                    aria-label={`${member.name} energy ${energyBar.fillPercent.toFixed(0)} percent`}
                  >
                    <div className={`status-bar__fill ${energyBar.tierClass}`} style={{ width: `${energyBar.fillPercent}%` }} />
                  </div>
                </div>
              ) : null}

              {showStamina && member.stamina && staminaBar ? (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.24rem' }}>
                    <strong style={{ color: 'var(--text)', fontSize: '0.78rem' }}>Stamina</strong>
                    <span style={{ fontSize: '0.76rem' }}>
                      {member.stamina.current}/{member.stamina.max}
                    </span>
                  </div>
                  <div
                    className="status-bar"
                    role="img"
                    aria-label={`${member.name} stamina ${staminaBar.fillPercent.toFixed(0)} percent`}
                  >
                    <div className={`status-bar__fill ${staminaBar.tierClass}`} style={{ width: `${staminaBar.fillPercent}%` }} />
                  </div>
                </div>
              ) : null}
            </div>
          )
        })}
      </div>

      <div className="widget-card" style={{ marginBottom: '0.8rem' }}>
        <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginBottom: '0.45rem' }}>Turn Order</p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {turnOrder.map((entry) => (
            <span key={entry} className="turn-chip">
              {entry}
            </span>
          ))}
        </div>
      </div>

      <div className="widget-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))' }}>
        {actions.map((action) => (
          <button key={action} type="button" className="btn btn--primary" style={{ width: '100%' }}>
            {action}
          </button>
        ))}
      </div>
    </article>
  )
}
