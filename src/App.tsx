import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AppRoutes } from './routes'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <AppRoutes />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
