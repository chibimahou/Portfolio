import { useEffect } from "react";
import { OrderSection } from "../sections/OrderSection";
import type { Dish } from "../types/models";

interface OrderPageProps {
  onCustomizeAndAdd: (dish: Dish) => void;
  onOpenCart: () => void;
  cartCount: number;
  cartSubtotal: number;
}

export function OrderPage({
  onCustomizeAndAdd,
  onOpenCart,
  cartCount,
  cartSubtotal
}: OrderPageProps): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <OrderSection
      onCustomizeAndAdd={onCustomizeAndAdd}
      onOpenCart={onOpenCart}
      cartCount={cartCount}
      cartSubtotal={cartSubtotal}
    />
  );
}
