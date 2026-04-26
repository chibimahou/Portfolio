import { useEffect, useMemo, useState } from 'react'

type ItemRarity = 'common' | 'uncommon' | 'rare' | 'epic'
type InventorySort = 'name-asc' | 'name-desc' | 'rarity-asc' | 'quantity-desc'

export interface InventoryItem {
  id: string
  name: string
  rarity: ItemRarity
  quantity: number
}

interface InventoryGridWidgetProps {
  title?: string
  capacity?: number
  maxSize?: number
  pageSize?: number
  embedded?: boolean
  items?: InventoryItem[]
}

const DEFAULT_ITEMS: InventoryItem[] = [
  { id: 'iron-dagger', name: 'Iron Dagger', rarity: 'common', quantity: 1 },
  { id: 'healing-tonic', name: 'Healing Tonic', rarity: 'uncommon', quantity: 4 },
  { id: 'moon-shard', name: 'Moon Shard', rarity: 'rare', quantity: 2 },
  { id: 'phoenix-feather', name: 'Phoenix Feather', rarity: 'epic', quantity: 1 },
  { id: 'torch-kit', name: 'Torch Kit', rarity: 'common', quantity: 3 },
  { id: 'lockpick-set', name: 'Lockpick Set', rarity: 'uncommon', quantity: 1 },
]

export default function InventoryGridWidget({
  title = 'Inventory',
  capacity = 10,
  maxSize,
  pageSize = 20,
  embedded = false,
  items = DEFAULT_ITEMS,
}: InventoryGridWidgetProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [sortBy, setSortBy] = useState<InventorySort>('name-asc')
  const [pageIndex, setPageIndex] = useState<number>(0)

  const normalizedMaxSize = Math.max(8, Math.min(5000, maxSize ?? capacity))
  const normalizedPageSize = Math.max(8, Math.min(60, pageSize))

  const boundedItems = useMemo(() => items.slice(0, normalizedMaxSize), [items, normalizedMaxSize])
  const normalizedSearch = searchTerm.trim().toLowerCase()

  const sortedItems = useMemo(() => {
    const rarityRank: Record<ItemRarity, number> = {
      common: 0,
      uncommon: 1,
      rare: 2,
      epic: 3,
    }

    const itemsToSort = [...boundedItems]
    itemsToSort.sort((left, right) => {
      if (sortBy === 'name-asc') {
        return left.name.localeCompare(right.name)
      }
      if (sortBy === 'name-desc') {
        return right.name.localeCompare(left.name)
      }
      if (sortBy === 'rarity-asc') {
        const rarityDiff = rarityRank[left.rarity] - rarityRank[right.rarity]
        return rarityDiff !== 0 ? rarityDiff : left.name.localeCompare(right.name)
      }

      const quantityDiff = right.quantity - left.quantity
      return quantityDiff !== 0 ? quantityDiff : left.name.localeCompare(right.name)
    })

    return itemsToSort
  }, [boundedItems, sortBy])

  const filteredItems = useMemo(() => {
    if (!normalizedSearch) {
      return sortedItems
    }

    return sortedItems.filter((item) => item.name.toLowerCase().includes(normalizedSearch))
  }, [normalizedSearch, sortedItems])

  const isSearchMode = normalizedSearch.length > 0
  const totalPages = Math.max(
    1,
    Math.ceil((isSearchMode ? filteredItems.length : normalizedMaxSize) / normalizedPageSize),
  )

  useEffect(() => {
    setPageIndex(0)
  }, [searchTerm, sortBy])

  useEffect(() => {
    setPageIndex((current) => Math.min(current, totalPages - 1))
  }, [totalPages])

  const startSlot = pageIndex * normalizedPageSize
  const endSlot = startSlot + normalizedPageSize
  const visibleItems = filteredItems.slice(startSlot, endSlot)

  const slotsForCurrentPage = isSearchMode ? visibleItems.length : Math.max(0, Math.min(normalizedPageSize, normalizedMaxSize - startSlot))
  const emptySlots = Math.max(0, slotsForCurrentPage - visibleItems.length)
  const occupiedSlots = boundedItems.length

  const ContainerTag = embedded ? 'div' : 'article'

  return (
    <ContainerTag
      className={`inventory-grid-widget ${embedded ? 'inventory-grid-widget--embedded' : 'widget-shell rp-widget-square'}`}
      aria-label="Inventory grid widget"
    >
      <header className="widget-header">
        <h2>{title}</h2>
        <p>
          {occupiedSlots}/{normalizedMaxSize} slots occupied
        </p>
      </header>

      <div className="inventory-controls" role="group" aria-label="Inventory controls">
        <label className="inventory-control-field">
          <span>Search items</span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search by item name"
            aria-label="Search inventory by item name"
          />
        </label>

        <label className="inventory-control-field">
          <span>Sort by</span>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as InventorySort)}
            aria-label="Sort inventory items"
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="rarity-asc">Rarity (Common-&gt;Epic)</option>
            <option value="quantity-desc">Quantity (High-&gt;Low)</option>
          </select>
        </label>
      </div>

      <div className="slot-grid">
        {visibleItems.map((item) => (
          <div key={item.id} className="slot-item">
            <strong style={{ color: 'var(--text)', fontSize: '0.86rem' }}>{item.name}</strong>
            <span className={`rarity-tag rarity-tag--${item.rarity}`}>{item.rarity}</span>
            <p style={{ marginTop: '0.45rem', color: 'var(--muted)', fontSize: '0.78rem' }}>Qty: {item.quantity}</p>
          </div>
        ))}

        {Array.from({ length: emptySlots }).map((_, index) => (
          <div key={`empty-slot-${index}`} className="slot-item" aria-label="Empty inventory slot">
            <p style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>Empty Slot</p>
          </div>
        ))}
      </div>

      <div className="inventory-pagination" aria-label="Inventory pages">
        <button
          type="button"
          className="btn btn--outline"
          onClick={() => setPageIndex((current) => Math.max(0, current - 1))}
          disabled={pageIndex === 0}
          aria-label="Go to previous inventory page"
        >
          Prev
        </button>
        <p>
          Page {pageIndex + 1}/{totalPages}
        </p>
        <button
          type="button"
          className="btn btn--outline"
          onClick={() => setPageIndex((current) => Math.min(totalPages - 1, current + 1))}
          disabled={pageIndex >= totalPages - 1}
          aria-label="Go to next inventory page"
        >
          Next
        </button>
      </div>
    </ContainerTag>
  )
}
