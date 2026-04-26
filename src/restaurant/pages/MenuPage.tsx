import { useEffect } from "react";
import { MenuSection } from "../sections/MenuSection";
import type { Dish } from "../types/models";

interface MenuPageProps {
  onAddToCart: (dish: Dish, selectedOptions: string[], quantity: number) => void;
}

export function MenuPage({ onAddToCart }: MenuPageProps): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <MenuSection onAddToCart={onAddToCart} />;
}
