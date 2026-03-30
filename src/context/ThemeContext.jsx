import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext(null)

// Apply theme to <html> immediately (also called before React mounts via inline script)
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  // update theme-color meta for mobile browsers
  document.querySelectorAll('meta[name="theme-color"]').forEach(m => m.remove())
  const meta = document.createElement('meta')
  meta.name = 'theme-color'
  meta.content = theme === 'dark' ? '#091413' : '#f7f5ff'
  document.head.appendChild(meta)
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved) return saved
    // respect OS preference on first visit
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    applyTheme(theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
