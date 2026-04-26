import { useCallback, useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BottomActionBar } from "./components/BottomActionBar";
import { CartDrawer } from "./components/CartDrawer";
import { Dialog } from "./components/Dialog";
import { Header } from "./components/Header";
import { restaurant } from "./data/mockData";
import { AboutPage } from "./pages/AboutPage";
import { EventsPage } from "./pages/EventsPage";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { OrderPage } from "./pages/OrderPage";
import { ReservationsPage } from "./pages/ReservationsPage";
import { VisitPage } from "./pages/VisitPage";
import type { CartItem, Dish, ThemeMode } from "./types/models";

function toCartItem(dish: Dish, selectedOptions: string[], quantity: number): CartItem {
  return {
    id: `${dish.id}-${Date.now()}`,
    dishId: dish.id,
    name: dish.name,
    unitPrice: dish.price,
    quantity,
    selectedOptions
  };
}

export function AppShell(): JSX.Element {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderDish, setOrderDish] = useState<Dish | null>(null);
  const [orderOptions, setOrderOptions] = useState<Record<string, string>>({});

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const handleToggleTheme = useCallback((): void => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }, []);

  const handleToggleMobileNav = useCallback((): void => {
    setMobileOpen((current) => !current);
  }, []);

  const handleCloseMobileNav = useCallback((): void => {
    setMobileOpen(false);
  }, []);

  const handleOpenCart = useCallback((): void => {
    setCartOpen(true);
  }, []);

  const handleCloseCart = useCallback((): void => {
    setCartOpen(false);
  }, []);

  const addToCart = (dish: Dish, selectedOptions: string[], quantity: number): void => {
    const cartItem = toCartItem(dish, selectedOptions, quantity);
    setCart((current) => [...current, cartItem]);
    setCartOpen(true);
  };

  const cartCount = useMemo(
    () => cart.reduce((count, item) => count + item.quantity, 0),
    [cart]
  );

  const cartSubtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
    [cart]
  );

  return (
    <>
      <Header
        cartCount={cartCount}
        mobileOpen={mobileOpen}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onToggleMobileNav={handleToggleMobileNav}
        onCloseMobileNav={handleCloseMobileNav}
        onOpenCart={handleOpenCart}
      />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage onAddToCart={addToCart} />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route
            path="/order"
            element={
              <OrderPage
                onCustomizeAndAdd={(dish) => {
                  setOrderDish(dish);
                  setOrderOptions({});
                }}
                onOpenCart={handleOpenCart}
                cartCount={cartCount}
                cartSubtotal={cartSubtotal}
              />
            }
          />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/visit" element={<VisitPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <div>
            <strong>{restaurant.name}</strong>
            <p>{restaurant.tagline}</p>
          </div>
          <div className="social-row">
            {restaurant.socials.map((social) => (
              <a href={social.href} key={social.label}>
                {social.label}
              </a>
            ))}
          </div>
          <p className="demo-mark">Template Demo</p>
        </div>
      </footer>

      <BottomActionBar onOpenCart={handleOpenCart} cartCount={cartCount} />

      <CartDrawer
        isOpen={cartOpen}
        onClose={handleCloseCart}
        items={cart}
        onRemove={(id) => setCart((current) => current.filter((item) => item.id !== id))}
        onUpdateQuantity={(id, delta) =>
          setCart((current) =>
            current
              .map((item) =>
                item.id === id
                  ? {
                      ...item,
                      quantity: item.quantity + delta
                    }
                  : item
              )
              .filter((item) => item.quantity > 0)
          )
        }
        onResetOrder={() => setCart([])}
      />

      <Dialog
        isOpen={Boolean(orderDish)}
        title={orderDish?.name ?? "Customize item"}
        onClose={() => setOrderDish(null)}
      >
        {orderDish && (
          <div className="dialog-content">
            <p>{orderDish.description}</p>
            {orderDish.customizations.map((group) => (
              <fieldset key={group.id}>
                <legend>{group.label}</legend>
                <div className="option-row">
                  {group.options.map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name={group.id}
                        checked={orderOptions[group.id] === option}
                        onChange={() =>
                          setOrderOptions((current) => ({
                            ...current,
                            [group.id]: option
                          }))
                        }
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
            <button
              className="btn btn-primary"
              onClick={() => {
                addToCart(orderDish, Object.values(orderOptions), 1);
                setOrderDish(null);
              }}
            >
              Add to Cart
            </button>
          </div>
        )}
      </Dialog>
    </>
  );
}

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
