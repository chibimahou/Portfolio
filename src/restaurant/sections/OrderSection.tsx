import { useMemo, useState } from "react";
import { SmartImage } from "../components/SmartImage";
import { dishes, menuCategories } from "../data/mockData";
import type { Dish } from "../types/models";

interface OrderSectionProps {
  onCustomizeAndAdd: (dish: Dish) => void;
  onOpenCart: () => void;
  cartCount: number;
  cartSubtotal: number;
}

export function OrderSection({
  onCustomizeAndAdd,
  onOpenCart,
  cartCount,
  cartSubtotal
}: OrderSectionProps): JSX.Element {
  const [fulfillment, setFulfillment] = useState<"pickup" | "delivery">("pickup");
  const [address, setAddress] = useState("");
  const [time, setTime] = useState("ASAP");
  const [category, setCategory] = useState(menuCategories[0].id);

  const available = useMemo(
    () => dishes.filter((dish) => dish.categoryId === category && !dish.soldOut),
    [category]
  );

  return (
    <section id="order" className="section">
      <div className="container flow-stack">
        <div className="section-head">
          <h2>Order Online</h2>
          <p>Pickup or delivery simulation with customizable items and cart checkout.</p>
        </div>

        <div className="card-shell">
          <div className="chip-row">
            <button
              className={fulfillment === "pickup" ? "chip is-active" : "chip"}
              onClick={() => setFulfillment("pickup")}
            >
              Pickup
            </button>
            <button
              className={fulfillment === "delivery" ? "chip is-active" : "chip"}
              onClick={() => setFulfillment("delivery")}
            >
              Delivery
            </button>
          </div>
          <p>{fulfillment === "pickup" ? "Ready in 25-35 min" : "Delivered in 35-50 min"}</p>
          <div className="order-inputs">
            <label htmlFor="order-time">Requested time</label>
            <input id="order-time" value={time} onChange={(event) => setTime(event.target.value)} />
            {fulfillment === "delivery" && (
              <>
                <label htmlFor="order-address-delivery">Delivery address</label>
                <input
                  id="order-address-delivery"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  placeholder="Street address"
                />
              </>
            )}
          </div>
        </div>

        <div className="tabs" role="tablist" aria-label="Order categories">
          {menuCategories.map((item) => (
            <button
              key={item.id}
              className={item.id === category ? "is-active" : ""}
              onClick={() => setCategory(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {available.length === 0 ? (
          <div className="empty-state">
            <p>This category is currently unavailable for online ordering.</p>
          </div>
        ) : (
          <div className="order-grid">
            {available.map((dish) => (
              <article className="order-card" key={dish.id}>
                <SmartImage src={dish.image} alt={dish.name} className="order-img" />
                <div>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                  <div className="row-between">
                    <strong>${dish.price.toFixed(2)}</strong>
                    <button className="btn btn-primary" onClick={() => onCustomizeAndAdd(dish)}>
                      Customize
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mini-cart" role="complementary">
          <p>
            {cartCount} item(s) · ${cartSubtotal.toFixed(2)}
          </p>
          <button className="btn btn-secondary" onClick={onOpenCart}>
            View Cart
          </button>
        </div>
      </div>
    </section>
  );
}
