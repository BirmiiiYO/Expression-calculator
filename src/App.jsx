import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import color from './styles/themes/color'

import { ErrorBoundary } from './components/ErrorBoundary'
import { Header, Routing } from './components'

const App = () => {
  const theme = dark
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ErrorBoundary>
        <Header />
        {/* <Routing /> */}
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
