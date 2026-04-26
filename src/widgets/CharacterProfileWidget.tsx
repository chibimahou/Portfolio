import { useEffect, useRef, useState } from 'react'
import InventoryGridWidget, { type InventoryItem } from './InventoryGridWidget'

interface PrimaryStatus {
  label: string
  current: number
  max: number
}

interface CharacterStatChip {
  label: string
  value: number
}

type EquipmentRarity = 'common' | 'uncommon' | 'rare' | 'epic'

interface CharacterSkill {
  id: string
  name: string
  level: number
  cost: string
  cooldown: string
}

interface CharacterEquipmentSlot {
  slot: string
  itemName: string
  rarity: EquipmentRarity
}

type CharacterProfileTab = 'Profile' | 'Inventory' | 'Skills' | 'Equipment'

interface CharacterProfileWidgetProps {
  avatarInitials?: string
  name?: string
  characterClass?: string
  level?: number
  statusBars?: PrimaryStatus[]
  statChips?: CharacterStatChip[]
  inventoryItems?: InventoryItem[]
  inventoryMaxSize?: number
  inventoryPageSize?: number
  skills?: CharacterSkill[]
  equipment?: CharacterEquipmentSlot[]
  theme?: 'rpg-dark' | 'light'
}

const DEFAULT_STATUS_BARS: PrimaryStatus[] = [
  { label: 'HP', current: 76, max: 100 },
  { label: 'MP', current: 44, max: 70 },
  { label: 'STA', current: 58, max: 80 },
]

const DEFAULT_STAT_CHIPS: CharacterStatChip[] = [
  { label: 'STR', value: 16 },
  { label: 'DEX', value: 14 },
  { label: 'INT', value: 12 },
  { label: 'WIS', value: 11 },
]

const DEFAULT_SKILLS: CharacterSkill[] = [
  { id: 'arc-shot', name: 'Arc Shot', level: 3, cost: '14 MP', cooldown: '8s' },
  { id: 'veil-step', name: 'Veil Step', level: 2, cost: '20 STA', cooldown: '12s' },
  { id: 'thorn-net', name: 'Thorn Net', level: 4, cost: '18 MP', cooldown: '16s' },
]

const DEFAULT_EQUIPMENT: CharacterEquipmentSlot[] = [
  { slot: 'Weapon', itemName: 'Moonpiercer Bow', rarity: 'rare' },
  { slot: 'Armor', itemName: 'Sylvan Scout Jacket', rarity: 'uncommon' },
  { slot: 'Accessory', itemName: 'Lantern Band', rarity: 'epic' },
]

const DEFAULT_INVENTORY_ITEMS: InventoryItem[] = [
  { id: 'iron-dagger', name: 'Iron Dagger', rarity: 'common', quantity: 1 },
  { id: 'healing-tonic', name: 'Healing Tonic', rarity: 'uncommon', quantity: 4 },
  { id: 'moon-shard', name: 'Moon Shard', rarity: 'rare', quantity: 2 },
  { id: 'phoenix-feather', name: 'Phoenix Feather', rarity: 'epic', quantity: 1 },
  { id: 'torch-kit', name: 'Torch Kit', rarity: 'common', quantity: 3 },
  { id: 'lockpick-set', name: 'Lockpick Set', rarity: 'uncommon', quantity: 1 },
]

const PROFILE_TABS: CharacterProfileTab[] = ['Profile', 'Inventory', 'Skills', 'Equipment']

/**
 * Maps a stat bar label to its bar fill CSS class.
 * KEYWORDS: bar-color stat-color hp mp sta health mana stamina
 */
function getBarColorClass(label: string): string {
  const key = label.toUpperCase()
  if (key === 'HP' || key.includes('HEALTH')) return 'status-bar__fill--hp'
  if (key === 'MP' || key.includes('MANA')) return 'status-bar__fill--mp'
  if (key === 'STA' || key.includes('STAMINA')) return 'status-bar__fill--sta'
  return 'status-bar__fill--normal'
}

export default function CharacterProfileWidget({
  name = 'Aerin Ravenshade',
  characterClass = 'Arcane Ranger',
  level = 24,
  statusBars = DEFAULT_STATUS_BARS,
  statChips = DEFAULT_STAT_CHIPS,
  inventoryItems = DEFAULT_INVENTORY_ITEMS,
  inventoryMaxSize = 24,
  inventoryPageSize = 12,
  skills = DEFAULT_SKILLS,
  equipment = DEFAULT_EQUIPMENT,
  theme = 'rpg-dark',
}: CharacterProfileWidgetProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<CharacterProfileTab>('Profile')
  const statsCarouselRef = useRef<HTMLDivElement | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false)
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false)

  useEffect(() => {
    const container = statsCarouselRef.current
    if (!container) {
      setCanScrollLeft(false)
      setCanScrollRight(false)
      return
    }

    const updateScrollState = (): void => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth
      setCanScrollLeft(container.scrollLeft > 2)
      setCanScrollRight(container.scrollLeft < maxScrollLeft - 2)
    }

    updateScrollState()
    container.addEventListener('scroll', updateScrollState)
    window.addEventListener('resize', updateScrollState)

    return () => {
      container.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [statChips, activeTab])

  const scrollStats = (direction: 'left' | 'right'): void => {
    const container = statsCarouselRef.current
    if (!container) {
      return
    }

    const amount = Math.max(140, Math.floor(container.clientWidth * 0.68))
    const left = direction === 'left' ? -amount : amount
    container.scrollBy({ left, behavior: 'smooth' })
  }

  return (
    <article
      className={`widget-shell rp-widget-square${theme === 'rpg-dark' ? ' profile-rpg-shell' : ''}`}
      aria-label="Character profile widget"
    >
      <div className="profile-tab-rail" role="tablist" aria-label="Character profile sections">
        {PROFILE_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            className={activeTab === tab ? 'profile-tab-button profile-tab-button--active' : 'profile-tab-button'}
            onClick={() => setActiveTab(tab)}
          >
            <span className="profile-tab-button__label">{tab}</span>
          </button>
        ))}
      </div>

      {activeTab === 'Profile' ? (
        <section className="profile-rpg-content" aria-label="Character profile summary panel">
          <div className="profile-head">
            <div className="profile-head__text">
              <span className="profile-kicker">Profile</span>
              <h2 className="profile-name">{name}</h2>
              <p className="profile-subtitle">{characterClass}</p>
            </div>
            <div className="profile-level-badge">Lv {level}</div>
          </div>

          <div className="profile-stats-section">
            <p className="profile-stats-heading">Character Stats</p>
            {statusBars.map((bar) => {
              const fillPercent = Math.max(0, Math.min(100, (bar.current / bar.max) * 100))
              return (
                <div key={bar.label} className="profile-resource-row">
                  <div className="profile-resource-row__labels">
                    <span>{bar.label}</span>
                    <span>{bar.current}/{bar.max}</span>
                  </div>
                  <div className="status-bar" role="img" aria-label={`${bar.label} ${fillPercent.toFixed(0)} percent`}>
                    <div className={`status-bar__fill ${getBarColorClass(bar.label)}`} style={{ width: `${fillPercent}%` }} />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="profile-stats-carousel" aria-label="Character stats carousel">
            <button
              type="button"
              className="profile-carousel-arrow"
              aria-label="Scroll stats left"
              onClick={() => scrollStats('left')}
              disabled={!canScrollLeft}
            >
              <span aria-hidden="true">&lsaquo;</span>
            </button>

            <div className="profile-stats-carousel__track" ref={statsCarouselRef}>
              {statChips.map((stat) => (
                <div key={stat.label} className="profile-stat-chip">
                  <p style={{ margin: 0, fontSize: '0.74rem' }}>{stat.label}</p>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="profile-carousel-arrow"
              aria-label="Scroll stats right"
              onClick={() => scrollStats('right')}
              disabled={!canScrollRight}
            >
              <span aria-hidden="true">&rsaquo;</span>
            </button>
          </div>
        </section>
      ) : null}

      {activeTab === 'Inventory' ? (
        <section style={{ marginTop: '0.8rem' }} aria-label="Character inventory panel">
          <InventoryGridWidget
            title="Inventory"
            items={inventoryItems}
            maxSize={inventoryMaxSize}
            pageSize={inventoryPageSize}
            embedded
          />
        </section>
      ) : null}

      {activeTab === 'Skills' ? (
        <section className="widget-grid profile-skills-grid" style={{ marginTop: '0.8rem' }} aria-label="Character skills panel">
          {skills.map((skill) => (
            <div key={skill.id} className="widget-meta profile-rpg-meta">
              <strong style={{ display: 'block', marginBottom: '0.35rem' }}>{skill.name}</strong>
              <p style={{ fontSize: '0.84rem' }}>Level {skill.level}</p>
              <p style={{ fontSize: '0.84rem' }}>Cost: {skill.cost}</p>
              <p style={{ fontSize: '0.84rem' }}>Cooldown: {skill.cooldown}</p>
            </div>
          ))}
        </section>
      ) : null}

      {activeTab === 'Equipment' ? (
        <section className="widget-grid profile-equipment-grid" style={{ marginTop: '0.8rem' }} aria-label="Character equipment panel">
          {equipment.map((equipmentSlot) => (
            <div key={equipmentSlot.slot} className="widget-meta profile-rpg-meta">
              <p style={{ fontSize: '0.74rem', marginBottom: '0.3rem' }}>{equipmentSlot.slot}</p>
              <strong style={{ display: 'block', marginBottom: '0.35rem' }}>{equipmentSlot.itemName}</strong>
              <span className={`rarity-tag rarity-tag--${equipmentSlot.rarity}`}>{equipmentSlot.rarity}</span>
            </div>
          ))}
        </section>
      ) : null}
    </article>
  )
}
