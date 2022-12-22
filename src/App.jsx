/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import React from 'react'
import { ThemeProvider } from 'styled-components'

import Header from './components/Header'
import Routing from './components/Routing'
import ErrorBoundary from './components/ErrorBoundary'
import Layout from './Layout'
import GlobalStyle from './styles/global'

import { changeThemeForProvider } from './utilities/changeTheme'

export const ThemeContext = React.createContext('')

function App() {
  const initialTheme = changeThemeForProvider(
    localStorage.getItem('theme'),
  )
  const [theme, setTheme] = React.useState(initialTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <ErrorBoundary>
          <Layout>
            <Routing />
          </Layout>
        </ErrorBoundary>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
