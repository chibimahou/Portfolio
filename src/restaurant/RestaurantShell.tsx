import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppShell } from './App'
import './styles/embedded.css'

export default function RestaurantShell(): JSX.Element {
  useEffect(() => {
    return () => {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [])

  return (
    <div className="restaurant-app">
      <BrowserRouter basename="/projects/restaurant-template">
        <AppShell />
      </BrowserRouter>
    </div>
  )
}
