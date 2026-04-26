import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { PortfolioLayout } from './routes'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { DownloadPage } from './pages/DownloadPage'
import { ContactPage } from './pages/ContactPage'
import RestaurantShell from './restaurant/RestaurantShell'

function App() {
  if (
    typeof window !== 'undefined' &&
    window.location.pathname.startsWith('/projects/restaurant-template')
  ) {
    return (
      <ThemeProvider>
        <RestaurantShell />
      </ThemeProvider>
    )
  }

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          {/* Portfolio pages — wrapped with Header + animated main + Footer */}
          <Route element={<PortfolioLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
