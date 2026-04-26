import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems, restaurant } from "../data/mockData";
import { useFocusTrap } from "../hooks/useFocusTrap";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import type { ThemeMode } from "../types/models";

interface HeaderProps {
  cartCount: number;
  theme: ThemeMode;
  mobileOpen: boolean;
  onToggleTheme: () => void;
  onToggleMobileNav: () => void;
  onCloseMobileNav: () => void;
  onOpenCart: () => void;
}

export function Header({
  cartCount,
  theme,
  mobileOpen,
  onToggleTheme,
  onToggleMobileNav,
  onCloseMobileNav,
  onOpenCart
}: HeaderProps): JSX.Element {
  const drawerRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();
  const previousPathname = useRef(pathname);

  useLockBodyScroll(mobileOpen);
  useFocusTrap(drawerRef, mobileOpen, onCloseMobileNav);

  useEffect(() => {
    if (previousPathname.current !== pathname && mobileOpen) {
      onCloseMobileNav();
    }
    previousPathname.current = pathname;
  }, [pathname, mobileOpen, onCloseMobileNav]);

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link to="/" className="brand-mark" aria-label="Ember and Ash home">
          {restaurant.name}
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className={pathname === item.href ? "is-active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === "light" ? "☾" : "☀"}
          </button>
          <Link className="btn btn-secondary desktop-only" to="/reservations">
            Reserve
          </Link>
          <Link className="btn btn-primary desktop-only" to="/order">
            Order
          </Link>
          <button className="icon-btn" onClick={onOpenCart} aria-label="Open cart">
            🛒
            {cartCount > 0 && <span className="badge-dot">{cartCount}</span>}
          </button>
          <button
            className="icon-btn mobile-only"
            aria-label="Open mobile menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            onClick={onToggleMobileNav}
          >
            <span className="menu-glyph" aria-hidden="true">☰</span>
          </button>
        </div>
      </div>

      <button
        type="button"
        className={`mobile-drawer-backdrop ${mobileOpen ? "is-open" : ""}`}
        aria-label="Close mobile menu"
        onClick={onCloseMobileNav}
        tabIndex={mobileOpen ? 0 : -1}
        aria-hidden={!mobileOpen}
      />

      <aside
        id="mobile-navigation-drawer"
        className={`mobile-drawer ${mobileOpen ? "is-open" : ""}`}
        ref={drawerRef}
      >
        <div className="drawer-head">
          <strong>{restaurant.name}</strong>
          <button className="icon-btn" onClick={onCloseMobileNav} aria-label="Close mobile menu">
            ×
          </button>
        </div>
        <nav aria-label="Mobile navigation" className="drawer-links">
          {navItems.map((item) => (
            <Link key={item.id} to={item.href} onClick={onCloseMobileNav}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="drawer-meta">
          <p>Today: 11:30 AM to 10:00 PM</p>
          <a href="tel:+15035550162">{restaurant.phone}</a>
        </div>
        <div className="drawer-cta">
          <Link className="btn btn-secondary" to="/reservations" onClick={onCloseMobileNav}>
            Reserve
          </Link>
          <Link className="btn btn-primary" to="/order" onClick={onCloseMobileNav}>
            Order
          </Link>
        </div>
      </aside>
    </header>
  );
}
