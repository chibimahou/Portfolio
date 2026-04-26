import { FormEvent, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useFocusTrap } from "../hooks/useFocusTrap";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import type { CartItem } from "../types/models";

type PaymentMethod = "pickup" | "card" | "apple" | "google";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onResetOrder: () => void;
}

type TipValue = 0 | 0.15 | 0.2 | 0.25;

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
  onResetOrder
}: CartDrawerProps): JSX.Element {
  const [tip, setTip] = useState<TipValue>(0.15);
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [successId, setSuccessId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("pickup");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCvv] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useLockBodyScroll(isOpen);
  useFocusTrap(ref, isOpen, onClose);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
    [items]
  );
  const tax = subtotal * 0.085;
  const tipAmount = subtotal * tip;
  const total = subtotal + tax + tipAmount;

  const formatCardNumber = (value: string): string => {
    const digits = value.replace(/\D/g, "");
    return digits.replace(/(.{4})/g, "$1 ").trimEnd().slice(0, 19);
  };

  const formatExpiry = (value: string): string => {
    const digits = value.replace(/\D/g, "");
    if (digits.length >= 3) {
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
    }
    return digits.slice(0, 2);
  };

  const placeOrder = (event: FormEvent): void => {
    event.preventDefault();
    if (!name || !phone || !email) {
      return;
    }
    if (paymentMethod === "card") {
      if (!cardName || cardNumber.length !== 19 || cardExpiry.length !== 5 || cardCvv.length < 3) {
        return;
      }
    }
    setSuccessId(`ORD-${Math.floor(100000 + Math.random() * 900000)}`);
    setStep(4);
  };

  const startNewOrder = (): void => {
    setStep(1);
    setSuccessId("");
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setTip(0.15);
    setPaymentMethod("pickup");
    setCardName("");
    setCardNumber("");
    setCardExpiry("");
    setCvv("");
    onResetOrder();
  };

  return (
    <aside
      className={`cart-drawer ${isOpen ? "is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Cart drawer"
      ref={ref}
    >
      <div className="drawer-head">
        <h3>Your Order</h3>
        <button className="icon-btn" onClick={onClose} aria-label="Close cart drawer">
          ×
        </button>
      </div>

      {items.length === 0 && step < 4 ? (
        <div className="empty-state">
          <p>Your cart is empty.</p>
          <Link to="/menu" className="btn btn-ghost" onClick={onClose}>
            Browse Menu
          </Link>
        </div>
      ) : null}

      {items.length > 0 && step === 1 && (
        <>
          <ul className="cart-list">
            {items.map((item) => (
              <li key={item.id}>
                <div>
                  <strong>{item.name}</strong>
                  {item.selectedOptions.length > 0 && <p>{item.selectedOptions.join(" · ")}</p>}
                </div>
                <div className="qty-row">
                  <button onClick={() => onUpdateQuantity(item.id, -1)} aria-label={`Decrease ${item.name}`}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, 1)} aria-label={`Increase ${item.name}`}>
                    +
                  </button>
                  <button onClick={() => onRemove(item.id)} aria-label={`Remove ${item.name}`}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="summary-box">
            <div className="row-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="row-between">
              <span>Tax (8.5%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="chip-row">
              {[0, 0.15, 0.2, 0.25].map((value) => (
                <button
                  key={value}
                  className={tip === value ? "chip is-active" : "chip"}
                  onClick={() => setTip(value as TipValue)}
                >
                  {value === 0 ? "No tip" : `${Math.round(value * 100)}%`}
                </button>
              ))}
            </div>
            <div className="row-between">
              <strong>Total</strong>
              <strong>${total.toFixed(2)}</strong>
            </div>
          </div>
          <button className="btn btn-primary" onClick={() => setStep(2)}>
            Proceed to Checkout
          </button>
        </>
      )}

      {step === 2 && (
        <form onSubmit={(event) => { event.preventDefault(); setStep(3); }}>
          <h4>Checkout Details</h4>
          <label htmlFor="order-name">Name</label>
          <input id="order-name" value={name} onChange={(event) => setName(event.target.value)} required />
          <label htmlFor="order-phone">Phone</label>
          <input id="order-phone" value={phone} onChange={(event) => setPhone(event.target.value)} required />
          <label htmlFor="order-email">Email</label>
          <input
            id="order-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor="order-address">Delivery address (optional)</label>
          <input
            id="order-address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            placeholder="123 Main Street"
          />
          <div className="row-inline">
            <button className="btn btn-ghost" type="button" onClick={() => setStep(1)}>
              Back
            </button>
            <button className="btn btn-primary" type="submit">
              Continue
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={placeOrder}>
          <h4>Payment</h4>
          <p className="payment-section-label">How would you like to pay?</p>
          <div className="payment-options">
            {(
              [
                { value: "pickup", icon: "🏪", label: "Pay at Pickup" },
                { value: "card", icon: "💳", label: "Credit / Debit Card" },
                { value: "apple", icon: "🍎", label: "Apple Pay" },
                { value: "google", icon: null, label: "Google Pay" },
              ] as { value: PaymentMethod; icon: string | null; label: string }[]
            ).map(({ value, icon, label }) => (
              <button
                key={value}
                type="button"
                className={`payment-option${paymentMethod === value ? " is-selected" : ""}`}
                onClick={() => setPaymentMethod(value)}
              >
                <span className="payment-option-icon">
                  {value === "google" ? (
                    <span className="google-g">G</span>
                  ) : (
                    icon
                  )}
                </span>
                <span className="payment-option-label">{label}</span>
                {paymentMethod === value && <span className="payment-option-check">✓</span>}
              </button>
            ))}
          </div>

          {paymentMethod === "card" && (
            <div className="card-fields">
              <label htmlFor="card-name">Cardholder name</label>
              <input
                id="card-name"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                required
                autoComplete="cc-name"
              />
              <label htmlFor="card-number">Card number</label>
              <input
                id="card-number"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                required
                autoComplete="cc-number"
                inputMode="numeric"
                maxLength={19}
                placeholder="1234 5678 9012 3456"
              />
              <div className="card-row">
                <div>
                  <label htmlFor="card-expiry">Expiry</label>
                  <input
                    id="card-expiry"
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(formatExpiry(e.target.value))}
                    required
                    autoComplete="cc-exp"
                    inputMode="numeric"
                    maxLength={5}
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label htmlFor="card-cvv">CVV</label>
                  <input
                    id="card-cvv"
                    value={cardCvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                    required
                    autoComplete="cc-csc"
                    inputMode="numeric"
                    maxLength={4}
                    placeholder="•••"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="summary-box">
            <p>{name}</p>
            <p>{phone}</p>
            <p>{email}</p>
            {address && <p>{address}</p>}
            <p>Total: ${total.toFixed(2)}</p>
          </div>
          <div className="row-inline">
            <button className="btn btn-ghost" type="button" onClick={() => setStep(2)}>
              Back
            </button>
            <button className="btn btn-primary" type="submit">
              Place Order
            </button>
          </div>
        </form>
      )}

      {step === 4 && (
        <div className="success-panel" role="status">
          <h4>Order Confirmed</h4>
          <p>{successId}</p>
          <p>Estimated ready time: 25 to 35 minutes.</p>
          {paymentMethod === "pickup" && <p>Your order will be ready for pickup — pay at the counter.</p>}
          {paymentMethod === "card" && <p>Paid by card ending in {cardNumber.slice(-4)}.</p>}
          {paymentMethod === "apple" && <p>Paid via Apple Pay.</p>}
          {paymentMethod === "google" && <p>Paid via Google Pay.</p>}
          <button className="btn btn-primary" onClick={startNewOrder}>
            Start New Order
          </button>
        </div>
      )}
    </aside>
  );
}
