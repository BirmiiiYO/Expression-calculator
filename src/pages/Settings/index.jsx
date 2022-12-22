import React from 'react'
import { HistoryContext , ThemeContext } from '../../App'

import { switchTheme } from '../../utilities/changeTheme'
import { localStore } from '../../utilities/commands'

import {
  Container,
  Title,
  MySelect,
  ClearButton,
} from './styles'

export function Settings() {
  const { setTheme } = React.useContext(ThemeContext)
  const { setHistory } = React.useContext(HistoryContext)

  const clearHistory = () => {
    localStorage.removeItem('history')
    localStore.length = 0
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
