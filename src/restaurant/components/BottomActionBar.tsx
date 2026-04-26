import { Link } from "react-router-dom";

interface BottomActionBarProps {
  onOpenCart: () => void;
  cartCount: number;
}

export function BottomActionBar({ onOpenCart, cartCount }: BottomActionBarProps): JSX.Element {
  return (
    <div className="bottom-actions" aria-label="Quick actions">
      <Link to="/reservations">Reserve</Link>
      <Link to="/order">Order</Link>
      <Link to="/menu">Menu</Link>
      <button className="bottom-cart-btn" onClick={onOpenCart} aria-label="Open cart drawer">
        Cart
        {cartCount > 0 && (
          <span className="bottom-cart-badge" aria-live="polite">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
}
