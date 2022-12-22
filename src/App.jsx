import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'

import { ErrorBoundary } from './components/ErrorBoundary'
import { Header, Routing } from './components'
import Layout from './Layout'
import { changeThemeForProvider } from './utilities/changeTheme'

export const ThemeContext = React.createContext('')
export const HistoryContext = React.createContext([])
function App() {
  const initialTheme = changeThemeForProvider(
    localStorage.getItem('theme'),
  )
  const [theme, setTheme] = React.useState(initialTheme)
  const [history, setHistory] = React.useState(
    JSON.parse(localStorage.getItem('history')) || [],
  )
  const updateHistory = () => {
    setHistory(JSON.parse(localStorage.getItem('history')))
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <ErrorBoundary>
          <Layout>
            <HistoryContext.Provider
              value={{ history, updateHistory }}>
              <Routing />
            </HistoryContext.Provider>
          </Layout>
        </ErrorBoundary>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
