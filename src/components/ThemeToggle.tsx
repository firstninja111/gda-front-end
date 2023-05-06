import { useContext } from 'react'
import { ThemeContext } from '~/context/ThemeContext'
import { HiMoon, HiSun } from 'react-icons/hi'

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    >
      {theme === 'dark' ? <HiSun size={24} /> : <HiMoon size={24} />}
    </div>
  )
}
