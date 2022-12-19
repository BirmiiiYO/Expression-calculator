import React, { useState } from 'react'
import { changeThemeForProvider } from '../utilities/changeTheme'
export const ThemeContext = React.createContext('')
// eslint-disable-next-line react/prop-types
const Context = ({ subPages }) => {
  const initialTheme = changeThemeForProvider(
    localStorage.getItem('theme'),
  )
  const [theme, setTheme] = useState(initialTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {subPages}
    </ThemeContext.Provider>
  )
}
export default Context
