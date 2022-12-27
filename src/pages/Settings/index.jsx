import React, { useContext } from 'react'

import { HistoryContext } from '@context'

import { ClearButton, Container, Title } from './styles'
import { ThemeSelect } from '@components/ThemeSelect'

export const Settings = () => {
  const { setHistory } = useContext(HistoryContext)
  const clearHistory = () => {
    setHistory([])
    localStorage.removeItem('history')
  }
  return (
    <Container>
      <Title>Settings:</Title>
      <p>Choose theme:</p>
      <ThemeSelect />
      <ClearButton onClick={clearHistory}>
        Clear history
      </ClearButton>
    </Container>
  )
}
