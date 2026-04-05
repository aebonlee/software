import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem('theme-mode')
    if (saved === 'light' || saved === 'dark') return saved
    return 'light'
  })
  const [colorTheme, setColorTheme] = useState(() => localStorage.getItem('color-theme') || 'blue')

  const activeTheme = mode

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme)
    document.documentElement.setAttribute('data-color', colorTheme)
    localStorage.setItem('theme-mode', mode)
    localStorage.setItem('color-theme', colorTheme)
  }, [activeTheme, colorTheme, mode])

  const cycleMode = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ mode, activeTheme, colorTheme, cycleMode, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
