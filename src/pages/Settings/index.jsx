import React from 'react'

import { HistoryContext, ThemeContext } from '@src/App'

import { switchTheme } from '@utilities/changeTheme'

import {
  ClearButton,
  Container,
  MySelect,
  Title,
} from './styles'

export const Settings = () => {
  const { setTheme } = React.useContext(ThemeContext)
  const { setHistory } = React.useContext(HistoryContext)
  const clearHistory = () => {
    setHistory([])
    localStorage.removeItem('history')
  }
  return (
    <Container>
      <Title>Settings:</Title>
      <p>Choose theme:</p>
      <MySelect
        onChange={(e) =>
          setTheme(switchTheme(e.target.value))
        }
        defaultValue={localStorage.getItem('theme')}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="color">Color</option>
      </MySelect>
      <ClearButton onClick={clearHistory}>
        Clear history
      </ClearButton>
    </Container>
  )
}
