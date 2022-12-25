import { ErrorBoundary } from '@components/ErrorBoundary'
import { Header } from '@components/Header'
import { Routing } from '@components/Routing'
import { Layout } from '@layout'
import GlobalStyle from '@styles/global'
import { changeThemeForProvider } from '@utilities/changeTheme'
import React from 'react'
import { ThemeProvider } from 'styled-components'

export const ThemeContext = React.createContext('')
export const HistoryContext = React.createContext('')

export function App() {
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
