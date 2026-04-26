import { useId, useMemo, useState } from 'react'

type OptionGroup = {
  id: string
  label: string
  required?: boolean
  options: string[]
}

interface RestaurantMenuCardWidgetProps {
  title?: string
  description?: string
  price?: number
  dietaryTags?: string[]
  soldOut?: boolean
}

const DEFAULT_GROUPS: OptionGroup[] = [
  {
    id: 'spice',
    label: 'Extra Chili Oil',
    options: ['Yes', 'No'],
  },
  {
    id: 'portion',
    label: 'Half or Full',
    required: true,
    options: ['Half Dozen', 'Full Dozen'],
  },
]

export default function RestaurantMenuCardWidget({
  title = 'Coal-Roasted Oysters',
  description = 'Garlic brown butter, lemon crumb, parsley, and a polished customize flow for premium menu items.',
  price = 19,
  dietaryTags = ['popular', 'shellfish'],
  soldOut = false,
}: RestaurantMenuCardWidgetProps): JSX.Element {
  const dialogTitleId = useId()
  const [isOpen, setIsOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => ({
    portion: 'Half Dozen',
  }))

  const canSubmit = useMemo(
    () => DEFAULT_GROUPS.every((group) => !group.required || Boolean(selectedOptions[group.id])),
    [selectedOptions],
  )

  return (
    <>
      <article
        className="widget-shell"
        aria-label="Restaurant menu card widget"
        style={{
          width: 'min(360px, 100%)',
          padding: 0,
          overflow: 'hidden',
          background: '#fffaf3',
          borderColor: '#e6d8c5',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            aspectRatio: '4 / 3',
            background:
              'linear-gradient(135deg, rgba(161,59,47,0.18) 0%, rgba(19,78,74,0.22) 100%), url(https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=900&q=80) center / cover',
          }}
        />

        <div
          style={{
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0.7rem',
            minHeight: '280px',
          }}
        >
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: '0.75rem', alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ fontSize: '1.05rem', color: '#2a231f', marginBottom: '0.2rem' }}>{title}</h2>
              <p style={{ margin: 0, color: '#6d625c', fontSize: '0.95rem', lineHeight: 1.55 }}>{description}</p>
            </div>
            <strong style={{ color: '#2a231f', whiteSpace: 'nowrap' }}>${price.toFixed(2)}</strong>
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {dietaryTags.map((tag) => (
              <span
                key={tag}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  minHeight: '32px',
                  padding: '0.22rem 0.65rem',
                  borderRadius: '999px',
                  border: '1px solid #dccfb8',
                  background: '#fff',
                  color: '#6d625c',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textTransform: 'capitalize',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            type="button"
            className="btn btn--primary"
            disabled={soldOut}
            onClick={() => setIsOpen(true)}
            style={{ marginTop: 0 }}
          >
            {soldOut ? 'Unavailable' : 'Customize'}
          </button>
        </div>
      </article>

      {isOpen ? (
        <div
          role="presentation"
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 120,
            display: 'grid',
            placeItems: 'center',
            padding: '1rem',
            background: 'rgba(19, 14, 11, 0.62)',
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            onClick={(event) => event.stopPropagation()}
            style={{
              width: 'min(560px, 100%)',
              borderRadius: '18px',
              border: '1px solid #e6d8c5',
              background: '#fffaf3',
              boxShadow: '0 22px 54px rgba(31, 20, 15, 0.22)',
              padding: '1rem',
              display: 'grid',
              gap: '0.9rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', alignItems: 'start' }}>
              <div>
                <h3 id={dialogTitleId} style={{ fontSize: '1.1rem', color: '#2a231f', marginBottom: '0.2rem' }}>
                  Customize {title}
                </h3>
                <p style={{ margin: 0, color: '#6d625c', lineHeight: 1.55 }}>{description}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close customize dialog"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '999px',
                  border: '1px solid #dccfb8',
                  background: '#fff',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                }}
              >
                ×
              </button>
            </div>

            <div
              style={{
                display: 'grid',
                gap: '0.35rem',
                padding: '0.85rem 1rem',
                border: '1px solid #e6d8c5',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.72)',
              }}
            >
              <p style={{ margin: 0, color: '#2a231f', fontWeight: 700 }}>${price.toFixed(2)}</p>
              <p style={{ margin: 0, color: '#6d625c', fontSize: '0.92rem' }}>Allergens: shellfish, dairy</p>
            </div>

            {DEFAULT_GROUPS.map((group) => (
              <fieldset
                key={group.id}
                style={{
                  border: '1px solid #e6d8c5',
                  borderRadius: '12px',
                  margin: 0,
                  padding: '0.9rem',
                  display: 'grid',
                  gap: '0.75rem',
                }}
              >
                <legend style={{ padding: '0 0.35rem', fontWeight: 600, color: '#2a231f' }}>
                  {group.label}
                  {group.required ? (
                    <span
                      style={{
                        marginLeft: '0.5rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.12rem 0.45rem',
                        borderRadius: '999px',
                        background: 'rgba(161,59,47,0.1)',
                        color: '#a13b2f',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      Required
                    </span>
                  ) : null}
                </legend>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {group.options.map((option) => {
                    const checked = selectedOptions[group.id] === option
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          setSelectedOptions((current) => ({
                            ...current,
                            [group.id]: option,
                          }))
                        }
                        style={{
                          minHeight: '36px',
                          padding: '0.45rem 0.75rem',
                          borderRadius: '999px',
                          border: `1px solid ${checked ? '#a13b2f' : '#dccfb8'}`,
                          background: checked ? 'rgba(161,59,47,0.08)' : '#fff',
                          color: checked ? '#7d2d24' : '#463932',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                        }}
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>
              </fieldset>
            ))}

            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'end', gap: '0.85rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'grid', gap: '0.35rem' }}>
                <label htmlFor={`${dialogTitleId}-quantity`} style={{ fontSize: '0.82rem', fontWeight: 600, color: '#6d625c', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Qty
                </label>
                <input
                  id={`${dialogTitleId}-quantity`}
                  type="number"
                  min={1}
                  max={9}
                  value={quantity}
                  onChange={(event) => setQuantity(Number(event.target.value) || 1)}
                  style={{
                    width: '64px',
                    minHeight: '40px',
                    border: '1px solid #dccfb8',
                    borderRadius: '10px',
                    padding: '0.4rem 0.55rem',
                    background: '#fff',
                  }}
                />
              </div>

              <button type="button" className="btn btn--primary" disabled={!canSubmit}>
                Add to Order
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}