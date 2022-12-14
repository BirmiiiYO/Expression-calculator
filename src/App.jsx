import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import color from './styles/themes/color'

import { Header, Routing } from './components'

import { useState } from 'react'
import { ErrorBoundary } from './components/ErrorBoundary'
import Layout from './Layout'

const App = () => {
  const [theme, setTheme] = useState(dark)
  const [history, setHistory] = useState([])

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  const addToHistory = (value) => {
    setHistory(history.concat(value))
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ErrorBoundary>
        <Header />
        <Layout>
          <Routing />
        </Layout>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
