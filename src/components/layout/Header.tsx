import { Link, useLocation } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/download', label: 'Download' },
  { to: '/contact', label: 'Contact' },
] as const

export function Header() {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors shrink-0"
        >
          Portfolio
        </Link>
        <nav
          className="flex items-center gap-1 flex-wrap justify-end min-h-[44px]"
          aria-label="Main navigation"
        >
          {navItems.map(({ to, label }) => {
            const isActive = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                className={`min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 focus-visible:ring-gray-500 ${
                  isActive
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {label}
              </Link>
            )
          })}
          <div className="min-h-[44px] min-w-[44px] flex items-center justify-center">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}
