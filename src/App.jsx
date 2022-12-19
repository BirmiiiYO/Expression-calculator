import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'

import { ErrorBoundary } from './components/ErrorBoundary'
import { Header, Routing } from './components'
import Layout from './Layout'
import { ThemeContext } from './ThemeContext'

const App = () => {
  const { theme } = React.useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Layout>
          <Routing />
        </Layout>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
