import { useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { ThemeProvider } from './context/ThemeContext'
import { FishProvider } from './context/FishContext'

import LoaderScreen from './components/LoaderScreen'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import InternshipsPage from './pages/InternshipsPage'
import ProjectsPage from './pages/ProjectsPage'
import HackathonsPage from './pages/HackathonsPage'
import LeadershipPage from './pages/LeadershipPage'
import VolunteerPage from './pages/VolunteerPage'

import './styles/globals.css'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"             element={<HomePage />} />
        <Route path="/internships"  element={<InternshipsPage />} />
        <Route path="/projects"     element={<ProjectsPage />} />
        <Route path="/hackathons"   element={<HackathonsPage />} />
        <Route path="/leadership"   element={<LeadershipPage />} />
        <Route path="/volunteer"    element={<VolunteerPage />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [loading, setLoading] = useState(true)
  const handleLoadComplete = useCallback(() => setLoading(false), [])

  return (
    <ThemeProvider>
      <FishProvider>
        <BrowserRouter>
          <AnimatePresence mode="wait">
            {loading ? (
              <LoaderScreen key="loader" onComplete={handleLoadComplete} />
            ) : (
              <>
                <Navbar />
                <AnimatedRoutes />
              </>
            )}
          </AnimatePresence>
        </BrowserRouter>
      </FishProvider>
    </ThemeProvider>
  )
}

export default App
