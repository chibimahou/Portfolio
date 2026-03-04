import { AnimatePresence, motion } from 'framer-motion'
import { useLocation, useRoutes } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { DownloadPage } from './pages/DownloadPage'
import { ContactPage } from './pages/ContactPage'

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/download', element: <DownloadPage /> },
  { path: '/contact', element: <ContactPage /> },
]

export function AppRoutes() {
  const location = useLocation()
  const element = useRoutes(routes)

  return (
    <>
      <Header />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8 min-h-[calc(100vh-8rem)] flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex-1"
          >
            {element}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
