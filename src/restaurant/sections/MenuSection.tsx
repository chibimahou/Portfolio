import { useEffect, useMemo, useState } from "react";
import { Dialog } from "../components/Dialog";
import { SmartImage } from "../components/SmartImage";
import { dishes, menuCategories } from "../data/mockData";
import type { DietaryTag, Dish } from "../types/models";

interface MenuSectionProps {
  onAddToCart: (dish: Dish, selectedOptions: string[], quantity: number) => void;
}

type FilterTag = DietaryTag | "popular";

export function MenuSection({ onAddToCart }: MenuSectionProps): JSX.Element {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState<FilterTag[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 700);
    return () => window.clearTimeout(timer);
  }, [activeCategory, search, activeFilters]);

  const filteredDishes = useMemo(() => {
    const byCategory = dishes.filter((dish) => dish.categoryId === activeCategory);

    return byCategory.filter((dish) => {
      const query = search.trim().toLowerCase();
      const searchMatch = !query || `${dish.name} ${dish.description}`.toLowerCase().includes(query);
      const filterMatch = activeFilters.every((filter) => {
        if (filter === "popular") {
          return Boolean(dish.popular);
        }
        return dish.dietary.includes(filter);
      });

      return searchMatch && filterMatch;
    });
  }, [activeCategory, search, activeFilters]);

  const openDish = (dish: Dish): void => {
    setSelectedDish(dish);
    setQuantity(1);
    setSelectedOptions({});
  };

  const toggleFilter = (filter: FilterTag): void => {
    setActiveFilters((current) =>
      current.includes(filter) ? current.filter((item) => item !== filter) : [...current, filter]
    );
  };

  const handleAdd = (): void => {
    if (!selectedDish) {
      return;
    }
    onAddToCart(selectedDish, Object.values(selectedOptions), quantity);
    setSelectedDish(null);
  };

  return (
    <section id="menu" className="section">
      <div className="container flow-stack">
        <div className="section-head">
          <h2>Our Menu</h2>
          <p>Search, filter, and open any dish for full details and customization.</p>
        </div>

        <div className="menu-controls">
          <div className="tabs" role="tablist" aria-label="Menu categories">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={activeCategory === category.id}
                className={activeCategory === category.id ? "is-active" : ""}
                onClick={() => {
                  setIsLoading(true);
                  setActiveCategory(category.id);
                }}
              >
                {category.label}
              </button>
            ))}
          </div>

          <input
            aria-label="Search dishes"
            type="search"
            value={search}
            onChange={(event) => {
              setIsLoading(true);
              setSearch(event.target.value);
            }}
            placeholder="Search dish name or description"
          />

          <div className="chip-row">
            {(["vegetarian", "vegan", "gluten-free", "popular"] as FilterTag[]).map((filter) => (
              <button
                key={filter}
                className={activeFilters.includes(filter) ? "chip is-active" : "chip"}
                onClick={() => {
                  setIsLoading(true);
                  toggleFilter(filter);
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="skeleton-grid" aria-busy="true">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div className="skeleton-card" key={idx} />
            ))}
          </div>
        ) : filteredDishes.length === 0 ? (
          <div className="empty-state" role="status">
            <p>No dishes match your current filters.</p>
            <button className="btn btn-ghost" onClick={() => setActiveFilters([])}>
              Clear filters
            </button>
          </div>
        ) : (
          <div className="card-grid">
            {filteredDishes.map((dish) => (
              <article className="dish-card" key={dish.id}>
                <div className="dish-image-wrap">
                  <SmartImage className="dish-card-img" src={dish.image} alt={dish.name} />
                  {dish.soldOut && <span className="sold-out-pill">Sold Out</span>}
                </div>
                <div className="dish-card-body">
                  <div className="row-between">
                    <h3>{dish.name}</h3>
                    <strong>${dish.price.toFixed(2)}</strong>
                  </div>
                  <p>{dish.description}</p>
                  <div className="tag-row">
                    {dish.dietary.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                    {dish.popular && <span className="tag">popular</span>}
                  </div>
                  <button
                    className="btn btn-primary"
                    disabled={dish.soldOut}
                    onClick={() => openDish(dish)}
                    aria-label={`Open details for ${dish.name}`}
                  >
                    {dish.soldOut ? "Unavailable" : "Customize"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <Dialog
        isOpen={Boolean(selectedDish)}
        title={selectedDish?.name ?? "Dish"}
        onClose={() => setSelectedDish(null)}
      >
        {selectedDish && (
          <div className="dialog-content">
            <SmartImage className="dialog-image" src={selectedDish.image} alt={selectedDish.name} />
            <p>{selectedDish.description}</p>

            <div className="dialog-meta">
              <p className="dialog-price">
                <strong>${selectedDish.price.toFixed(2)}</strong>
              </p>
              <p className="dialog-allergens">
                Allergens: {selectedDish.allergens.length ? selectedDish.allergens.join(", ") : "None"}
              </p>
            </div>

            {selectedDish.customizations.map((group) => (
              <fieldset key={group.id}>
                <legend>
                  {group.label}
                  {group.required ? <span className="option-required">Required</span> : null}
                </legend>
                <div className="option-row">
                  {group.options.map((option) => {
                    const checked = selectedOptions[group.id] === option;
                    return (
                      <label
                        key={option}
                        className={checked ? "option-pill is-selected" : "option-pill"}
                      >
                        <input
                          className="option-control"
                          type="radio"
                          checked={checked}
                          name={group.id}
                          onChange={() =>
                            setSelectedOptions((current) => ({
                              ...current,
                              [group.id]: option
                            }))
                          }
                        />
                        <span>{option}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            ))}

            <div className="dialog-footer">
              <div className="quantity-control">
                <label htmlFor="quantity">Qty</label>
                <input
                  id="quantity"
                  className="quantity-input"
                  type="number"
                  min={1}
                  max={9}
                  value={quantity}
                  onChange={(event) => setQuantity(Number(event.target.value) || 1)}
                />
              </div>
              <button className="btn btn-primary" onClick={handleAdd}>
                Add to Order
              </button>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
}
