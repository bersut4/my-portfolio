import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutMePage from './pages/AboutMePage'
import ProjectsPage from './pages/ProjectsPage'
import ErrorBoundary from './components/ErrorBoundary'
import FeedbackSnackbar from './components/FeedbackSnackbar'
import { PortfolioProvider } from './context/PortfolioContext'
import { AdminProvider } from './context/AdminContext'

function App() {
  return (
    <ErrorBoundary>
      <AdminProvider>
        <PortfolioProvider>
          <HashRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutMePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
            <FeedbackSnackbar />
          </HashRouter>
        </PortfolioProvider>
      </AdminProvider>
    </ErrorBoundary>
  )
}

export default App
