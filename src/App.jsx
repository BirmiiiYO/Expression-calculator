/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import React from 'react'
import { ThemeProvider } from 'styled-components'

import Layout from '@layout'
import GlobalStyle from '@styles/global'

import Header from '@components/Header'
import Routing from '@components/Routing'
import ErrorBoundary from '@components/ErrorBoundary'

import { changeThemeForProvider } from '@utilities/changeTheme'

export const ThemeContext = React.createContext('')
export const HistoryContext = React.createContext('')

function App() {
  const initialTheme = changeThemeForProvider(
    localStorage.getItem('theme'),
  )
  const initialHistory =
    JSON.parse(localStorage.getItem('history')) || []
  const [history, setHistory] =
    React.useState(initialHistory)
  const [theme, setTheme] = React.useState(initialTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <ErrorBoundary>
          <Layout>
            <HistoryContext.Provider
              value={{ history, setHistory }}>
              <Routing />
            </HistoryContext.Provider>
          </Layout>
        </ErrorBoundary>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
